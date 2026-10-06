import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]); // First FAQ open by default

  const toggleFAQ = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqList: FAQItem[] = [
    {
      id: 1,
      question: 'What is MentorScope?',
      answer: 'A proposed lightweight evidence and reporting platform for organisations commissioning coaching or mentoring panels.',
    },
    {
      id: 2,
      question: 'Who is it designed for?',
      answer: 'University mentoring teams, corporate L&D departments, charities and funded programme managers.',
    },
    {
      id: 3,
      question: 'Who would own the platform account?',
      answer: 'The commissioning organisation, which defines its programme outcomes and receives consolidated reporting.',
    },
    {
      id: 4,
      question: 'Can coaches continue using their existing tools?',
      answer: 'Yes. The concept is designed as a coach-agnostic reporting layer alongside existing practitioner workflows.',
    },
    {
      id: 5,
      question: 'What would coaches record?',
      answer: 'Goals discussed, brief progress notes and relevant structured ratings after each session.',
    },
    {
      id: 6,
      question: 'How much time is session logging intended to take?',
      answer: 'Approximately two to three minutes per session.',
    },
    {
      id: 7,
      question: 'Can participants provide feedback directly?',
      answer: 'The proposed client-direct feedback option allows mentees or coachees to provide short satisfaction and outcome-confidence ratings.',
    },
    {
      id: 8,
      question: 'What would coordinators be able to review?',
      answer: 'Panel-wide session activity, progress and satisfaction trends, with signals identifying relationships that may benefit from a check-in.',
    },
    {
      id: 9,
      question: 'Do warning flags make automatic decisions?',
      answer: 'No. The proposed flags support human coordinator review and light-touch check-ins.',
    },
    {
      id: 10,
      question: 'What reports are proposed?',
      answer: 'Consolidated, appropriately anonymised programme or cohort reports for leadership, governors and funders.',
    },
    {
      id: 11,
      question: 'How is pricing structured?',
      answer: 'Annual subscriptions by active panel size, per-cohort reporting fees and one-off custom framework setup. Exact amounts are not supplied in the concept document.',
    },
    {
      id: 12,
      question: 'Is this website a working mentoring portal?',
      answer: 'No. It introduces the proposed MentorScope platform and provides a browser-local pilot enquiry form.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-navy-900 tracking-tight leading-tight mb-4">
            Clear answers about the MentorScope concept.
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-xl mx-auto">
            Frequently asked questions regarding platform architecture, practitioner workflows and programme reporting.
          </p>
        </div>

        {/* Accessible Accordion List with subtle borders */}
        <div className="space-y-3">
          {faqList.map((item) => {
            const isOpen = openIds.includes(item.id);
            const buttonId = `faq-trigger-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-warm-100 overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-semibold text-navy-900 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 transition-colors"
                  >
                    <span className="text-base sm:text-lg pr-2 leading-snug">
                      {item.id}. {item.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-teal-50 border-teal-300 text-teal-700' : 'text-slate-400'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-muted leading-relaxed border-t border-slate-200/60 bg-white"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
