import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';

interface HeroProps {
  onRequestPilot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot }) => {
  const scrollToPlatform = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#platform');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#platform');
    }
  };

  return (
    <section id="home" className="py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column: Copy & Actions (5 or 6 cols) */}
          <div className="lg:col-span-6 xl:col-span-5 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide mb-5">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" aria-hidden="true"></span>
              <span>For organisations commissioning coaching and mentoring</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold text-navy-900 tracking-tight leading-[1.14] mb-5">
              See the impact of every mentoring relationship.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-muted leading-relaxed mb-7 max-w-xl">
              MentorScope is designed to bring session records, participant feedback and programme outcomes into one clear view—helping coordinators understand progress across independent coaches and mentors.
            </p>

            {/* Buttons: 48px height, Primary Teal & Secondary Neutral */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <button
                type="button"
                onClick={onRequestPilot}
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 text-sm sm:text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 transition-all duration-200 rounded-xl shadow-sm hover:shadow-card hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-teal-100" aria-hidden="true" />
              </button>
              <a
                href="#platform"
                onClick={scrollToPlatform}
                className="inline-flex items-center justify-center gap-2 h-12 px-5 text-sm sm:text-base font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all duration-200 rounded-xl shadow-subtle hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <span>Explore the Platform</span>
                <ChevronRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
              </a>
            </div>

            {/* Three Supporting Points */}
            <div className="pt-6 border-t border-slate-200/80 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-muted">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                <span>Lightweight session logging</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-muted">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                <span>Consistent participant feedback</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-muted">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                <span>Programme-wide impact reporting</span>
              </div>
            </div>
          </div>

          {/* Right Column: Believable Product Interface (6 or 7 cols) */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative">
              {/* Subtle background blur accent */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-teal-500/10 via-navy-800/5 to-teal-600/10 rounded-2xl filter blur-xl opacity-70 -z-10" aria-hidden="true"></div>

              {/* Product Dashboard Card Container */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
                {/* Slim Toolbar */}
                <div className="bg-navy-900 px-4 sm:px-5 py-2.5 flex items-center justify-between text-white border-b border-navy-800">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block"></span>
                    </div>
                    <div className="h-3.5 w-px bg-navy-700" aria-hidden="true"></div>
                    <span className="text-xs font-medium text-slate-300">
                      Cohort Console
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-teal-900/90 text-teal-200 border border-teal-700/60">
                    Illustrative platform preview
                  </span>
                </div>

                {/* Sub-header Filter / Context Bar */}
                <div className="bg-slate-50/80 px-4 sm:px-5 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Cohort:</span>
                    <span className="font-semibold text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                      2026 Widening Participation Panel
                    </span>
                  </div>
                  <span className="text-slate-400 hidden sm:inline text-[11px] italic">
                    Sample preview data
                  </span>
                </div>

                {/* Dashboard Body Content */}
                <div className="p-4 sm:p-5 space-y-4 bg-white">
                  {/* Compact Metric Cards (3 items) */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    <div className="p-3 rounded-xl bg-warm-100 border border-slate-200/80">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-0.5">
                        <span className="truncate">Sessions</span>
                        <Activity className="w-3.5 h-3.5 text-teal-700 shrink-0" aria-hidden="true" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-navy-900">142</div>
                      <div className="text-[10px] text-teal-800 font-medium truncate">94% on time</div>
                    </div>

                    <div className="p-3 rounded-xl bg-warm-100 border border-slate-200/80">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-0.5">
                        <span className="truncate">Satisfaction</span>
                        <TrendingUp className="w-3.5 h-3.5 text-teal-700 shrink-0" aria-hidden="true" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-navy-900">4.7 / 5</div>
                      <div className="text-[10px] text-slate-500 truncate">Standardised index</div>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/40 border border-amber-200/80">
                      <div className="flex items-center justify-between text-[11px] text-amber-800 mb-0.5">
                        <span className="truncate">Check-in Flags</span>
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-amber-900">2 Pairs</div>
                      <div className="text-[10px] text-amber-700 font-medium truncate">Coordinator review</div>
                    </div>
                  </div>

                  {/* Simple Satisfaction Trend Chart */}
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-semibold text-navy-900">
                        Monthly Session Cadence &amp; Satisfaction Trend
                      </div>
                      <span className="text-[10px] text-slate-400">Past 6 Months</span>
                    </div>

                    <div className="h-28 w-full">
                      <svg viewBox="0 0 360 90" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                        <line x1="0" y1="20" x2="360" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="0" y1="50" x2="360" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="0" y1="80" x2="360" y2="80" stroke="#f1f5f9" strokeWidth="1" />

                        {/* Trend Area */}
                        <path
                          d="M 15 65 Q 60 55 100 45 T 180 35 T 260 25 T 345 20 L 345 80 L 15 80 Z"
                          fill="rgba(8, 127, 140, 0.08)"
                        />
                        {/* Trend Line */}
                        <path
                          d="M 15 65 Q 60 55 100 45 T 180 35 T 260 25 T 345 20"
                          fill="none"
                          stroke="#087F8C"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        {/* Bars for session volume */}
                        <rect x="40" y="45" width="12" height="35" rx="2" fill="#14243A" opacity="0.85" />
                        <rect x="100" y="38" width="12" height="42" rx="2" fill="#14243A" opacity="0.85" />
                        <rect x="160" y="30" width="12" height="50" rx="2" fill="#14243A" opacity="0.85" />
                        <rect x="220" y="25" width="12" height="55" rx="2" fill="#14243A" opacity="0.85" />
                        <rect x="280" y="20" width="12" height="60" rx="2" fill="#14243A" opacity="0.85" />

                        {/* Line points */}
                        <circle cx="160" cy="37" r="3" fill="#087F8C" />
                        <circle cx="280" cy="24" r="3" fill="#087F8C" />
                        <circle cx="345" cy="20" r="3" fill="#087F8C" />
                      </svg>
                    </div>
                  </div>

                  {/* Goal Progress Indicators + Coordinator Check-in List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Goal Progress Indicator */}
                    <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/50">
                      <div className="flex items-center justify-between text-xs font-semibold text-navy-900 mb-2">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />
                          Cohort Goal Progress
                        </span>
                        <span className="text-teal-800 font-bold">88%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-teal-700 h-full rounded-full" style={{ width: '88%' }}></div>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Milestones tracked across 18 panel pairs
                      </div>
                    </div>

                    {/* Coordinator Check-in List */}
                    <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/20">
                      <div className="flex items-center justify-between text-xs font-semibold text-navy-900 mb-2">
                        <span className="flex items-center gap-1.5 text-amber-800">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                          Check-in List
                        </span>
                        <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-semibold">
                          Review
                        </span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="p-1.5 rounded bg-white border border-slate-200/80 flex items-center justify-between">
                          <span className="font-medium text-navy-900">Pair #14</span>
                          <span className="text-amber-700">28d inactivity</span>
                        </div>
                        <div className="p-1.5 rounded bg-white border border-slate-200/80 flex items-center justify-between">
                          <span className="font-medium text-navy-900">Pair #07</span>
                          <span className="text-amber-700">Goal dip signal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Notice */}
                <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 text-center text-[11px] text-slate-400">
                  Marketing illustration of planned platform console • Fictional data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
