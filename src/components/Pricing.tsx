import React from 'react';
import { ArrowRight, Calendar, Users, Sliders } from 'lucide-react';

interface PricingProps {
  onRequestPilot: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRequestPilot }) => {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-warm-100 border-t border-slate-200">
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            Commercial Model
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-navy-900 tracking-tight leading-tight mb-4">
            Pricing shaped around your programme.
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-2xl mx-auto">
            Commercial options structured around commissioning organisations, practitioner panel scale and institutional reporting requirements.
          </p>
        </div>

        {/* The Three Commercial Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Annual Platform Subscription */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center text-navy-900 mb-5 border border-slate-200">
                <Users className="w-5 h-5 text-teal-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                Annual Platform Subscription
              </h3>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-5">
                Annual subscription
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-navy-900 mb-5 pb-5 border-b border-slate-100">
                Request pricing
              </div>
              <p className="text-sm text-slate-muted leading-relaxed mb-6">
                Subscription bands based on the number of active coaches or mentors on your panel.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestPilot}
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 transition-all duration-200 rounded-xl shadow-sm hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <span>Discuss Your Panel</span>
                <ArrowRight className="w-4 h-4 text-teal-100" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Card 2: Per-Cohort Reporting */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center text-navy-900 mb-5 border border-slate-200">
                <Calendar className="w-5 h-5 text-teal-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                Per-Cohort Reporting
              </h3>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-5">
                Per defined cohort or funding cycle
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-navy-900 mb-5 pb-5 border-b border-slate-100">
                Request pricing
              </div>
              <p className="text-sm text-slate-muted leading-relaxed mb-6">
                Reporting fees aligned to programme cohorts or funding cycles requiring board-ready impact reports.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestPilot}
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 transition-all duration-200 rounded-xl shadow-sm hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <span>Discuss Reporting</span>
                <ArrowRight className="w-4 h-4 text-teal-100" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Card 3: Custom Outcome Framework Setup */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center text-navy-900 mb-5 border border-slate-200">
                <Sliders className="w-5 h-5 text-teal-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                Custom Outcome Framework Setup
              </h3>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-5">
                One-off setup fee
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-navy-900 mb-5 pb-5 border-b border-slate-100">
                Request pricing
              </div>
              <p className="text-sm text-slate-muted leading-relaxed mb-6">
                Configuration of a bespoke outcome framework for a new commissioning organisation.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestPilot}
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 transition-all duration-200 rounded-xl shadow-sm hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <span>Discuss Setup</span>
                <ArrowRight className="w-4 h-4 text-teal-100" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
