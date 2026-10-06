import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { savePilotSubmission } from '../services/storage';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement: HTMLElement | null;
}

interface FormState {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  organisationName?: string;
  general?: string;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose, triggerElement }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Clear messages on modal open
  useEffect(() => {
    if (isOpen) {
      setSuccessMessage(null);
      setErrors({});
    }
  }, [isOpen]);

  // Handle focus trap, Escape key, and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus initial input
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!dialogRef.current) return;
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElem = focusableElements[0];
        const lastElem = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElem) {
            e.preventDefault();
            lastElem.focus();
          }
        } else {
          if (document.activeElement === lastElem) {
            e.preventDefault();
            firstElem.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    // Restore focus to triggering button
    if (triggerElement) {
      setTimeout(() => {
        triggerElement.focus();
      }, 50);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Flexible international telephone validation
  const isValidPhoneNumber = (phone: string): boolean => {
    const trimmed = phone.trim();
    const digitsOnly = trimmed.replace(/\D/g, '');
    if (digitsOnly.length < 7 || digitsOnly.length > 16) {
      return false;
    }
    const validCharsRegex = /^[+]?[\d\s().-]{7,}$/;
    return validCharsRegex.test(trimmed);
  };

  const isValidEmail = (email: string): boolean => {
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(trimmed);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.organisationName.trim()) {
      newErrors.organisationName = 'Organisation Name is required.';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!isValidEmail(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address (e.g. name@organisation.ac.uk).';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid telephone number (at least 7 digits, e.g. +44 20 7946 0912).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const result = savePilotSubmission({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      emailAddress: formData.emailAddress,
      organisationName: formData.organisationName,
    });

    setIsSubmitting(false);

    if (result.success) {
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: '',
      });
      setSuccessMessage(result.message || 'Your pilot enquiry has been saved in this browser.');
      setErrors({});
    } else {
      setErrors({
        general: result.error || 'An error occurred while attempting to save your pilot request.',
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pilot-dialog-title"
        aria-describedby="pilot-dialog-desc"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-modal border border-slate-200 overflow-hidden my-8 animate-in zoom-in-95 duration-200"
      >
        {/* Modal Top Banner */}
        <div className="bg-navy-900 px-6 sm:px-7 py-5 text-white flex items-start justify-between">
          <div>
            <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block mb-1">
              Pilot Engagement
            </span>
            <h2 id="pilot-dialog-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Explore a MentorScope pilot
            </h2>
            <p id="pilot-dialog-desc" className="text-xs sm:text-sm text-slate-300 mt-1">
              Tell us about your organisation and interest in a pilot.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {/* General Error Alert */}
          {errors.general && (
            <div
              role="alert"
              className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5"
            >
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-semibold block">Storage Notice</span>
                {errors.general}
              </div>
            </div>
          )}

          {/* Success Alert */}
          {successMessage && (
            <div
              role="alert"
              className="mb-5 p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in"
            >
              <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-bold block mb-0.5">Enquiry Recorded</span>
                {successMessage}
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="pilot-full-name"
                className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5"
              >
                Full Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                ref={firstInputRef}
                id="pilot-full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Dr. Eleanor Vance"
                className={`w-full h-11 sm:h-12 px-4 text-sm rounded-xl border bg-white text-navy-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                  errors.fullName
                    ? 'border-red-400 ring-1 ring-red-400'
                    : 'border-slate-300 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20'
                }`}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                required
              />
              {errors.fullName && (
                <p id="error-fullName" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Organisation Name */}
            <div>
              <label
                htmlFor="pilot-org-name"
                className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5"
              >
                Organisation Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="pilot-org-name"
                name="organisationName"
                type="text"
                autoComplete="organization"
                value={formData.organisationName}
                onChange={handleChange}
                placeholder="e.g. University Mentoring Directorate or Global L&D Ltd"
                className={`w-full h-11 sm:h-12 px-4 text-sm rounded-xl border bg-white text-navy-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                  errors.organisationName
                    ? 'border-red-400 ring-1 ring-red-400'
                    : 'border-slate-300 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20'
                }`}
                aria-invalid={!!errors.organisationName}
                aria-describedby={errors.organisationName ? 'error-organisationName' : undefined}
                required
              />
              {errors.organisationName && (
                <p id="error-organisationName" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.organisationName}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="pilot-email"
                className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5"
              >
                Email Address <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="pilot-email"
                name="emailAddress"
                type="email"
                autoComplete="email"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="e.g. e.vance@university.ac.uk"
                className={`w-full h-11 sm:h-12 px-4 text-sm rounded-xl border bg-white text-navy-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                  errors.emailAddress
                    ? 'border-red-400 ring-1 ring-red-400'
                    : 'border-slate-300 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20'
                }`}
                aria-invalid={!!errors.emailAddress}
                aria-describedby={errors.emailAddress ? 'error-emailAddress' : undefined}
                required
              />
              {errors.emailAddress && (
                <p id="error-emailAddress" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.emailAddress}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="pilot-phone"
                className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5"
              >
                Phone Number <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="pilot-phone"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. +44 20 7946 0192 or 07700 900123"
                className={`w-full h-11 sm:h-12 px-4 text-sm rounded-xl border bg-white text-navy-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                  errors.phoneNumber
                    ? 'border-red-400 ring-1 ring-red-400'
                    : 'border-slate-300 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20'
                }`}
                aria-invalid={!!errors.phoneNumber}
                aria-describedby={errors.phoneNumber ? 'error-phoneNumber' : undefined}
                required
              />
              {errors.phoneNumber && (
                <p id="error-phoneNumber" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.phoneNumber}</span>
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="h-11 sm:h-12 px-5 text-sm font-medium text-slate-600 hover:text-navy-900 hover:bg-slate-100 rounded-xl transition-colors order-2 sm:order-1"
              >
                Close
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 sm:h-12 px-6 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 order-1 sm:order-2 hover:-translate-y-0.5"
              >
                {isSubmitting ? 'Saving to Browser...' : 'Save Pilot Enquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
