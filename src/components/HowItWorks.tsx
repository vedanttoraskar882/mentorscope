import React from 'react';
import { 
  ClipboardList, 
  UserCheck, 
  Edit3, 
  MessageCircle, 
  Activity, 
  FileCheck2, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake 
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Define the programme',
      copy: 'The commissioning organisation selects relevant goals, outcomes and satisfaction measures.',
      icon: <ClipboardList className="w-5 h-5 text-teal-700" />,
    },
    {
      num: '02',
      title: 'Onboard the panel',
      copy: 'Coaches and mentors receive lightweight guidance for consistent session recording.',
      icon: <UserCheck className="w-5 h-5 text-teal-700" />,
    },
    {
      num: '03',
      title: 'Record each session',
      copy: 'Practitioners complete a short record covering goals discussed, progress and relevant ratings.',
      icon: <Edit3 className="w-5 h-5 text-teal-700" />,
    },
    {
      num: '04',
      title: 'Collect participant feedback',
      copy: 'Where enabled, mentees or coachees provide short direct satisfaction and outcome-confidence feedback.',
      icon: <MessageCircle className="w-5 h-5 text-teal-700" />,
    },
    {
      num: '05',
      title: 'Review trends and check-in flags',
      copy: 'Coordinators review panel-wide patterns and arrange supportive check-ins where appropriate.',
      icon: <Activity className="w-5 h-5 text-teal-700" />,
    },
    {
      num: '06',
      title: 'Prepare impact evidence',
      copy: 'Programme or cohort summaries support leadership and funder reporting.',
      icon: <FileCheck2 className="w-5 h-5 text-teal-700" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            Workflow &amp; Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-navy-900 tracking-tight leading-tight mb-4">
            From each session to a clearer programme picture.
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-2xl mx-auto">
            A frictionless six-step framework designed to maintain alignment from first induction through board-level impact reporting.
          </p>

          {/* Prominent Callout Badge */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl bg-warm-100 border border-slate-200 text-navy-900 text-sm font-semibold shadow-subtle">
            <Clock className="w-4 h-4 text-teal-700" aria-hidden="true" />
            <span>Designed around a two-to-three-minute post-session record.</span>
          </div>
        </div>

        {/* Six Steps Grid with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-warm-100 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-subtle">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    Step {step.num}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {step.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Illustrative Use-Case Area */}
        <div className="bg-warm-100 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest block mb-1">
                Illustrative use cases
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                How MentorScope is designed to apply across sectors
              </h3>
            </div>
            <span className="text-xs text-slate-500 italic">
              *Conceptual scenarios, not existing customers or proven results
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Use case 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-warm-100 text-teal-700 flex items-center justify-center mb-3.5 border border-slate-200/80">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="text-base font-bold text-navy-900 mb-2">
                University alumni mentoring scheme
              </h4>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                Coordinators match 45 alumni mentors with final-year students. Structured check-ins monitor session rhythm, identify quiet pairings before exams, and synthesise employability outcome shifts for academic committees.
              </p>
            </div>

            {/* Use case 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-warm-100 text-teal-700 flex items-center justify-center mb-3.5 border border-slate-200/80">
                <Briefcase className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="text-base font-bold text-navy-900 mb-2">
                Corporate executive-coaching panel
              </h4>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                An L&amp;D team engages 12 independent external coaches across leadership talent. The organisation defines leadership competency goals while coaches log brief session milestones, maintaining confidentiality without losing programme visibility.
              </p>
            </div>

            {/* Use case 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-warm-100 text-teal-700 flex items-center justify-center mb-3.5 border border-slate-200/80">
                <HeartHandshake className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="text-base font-bold text-navy-900 mb-2">
                Charity-funded employability mentoring programme
              </h4>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                A non-profit runs grant-backed vocational mentoring. Coordinators track relationship engagement and generate standardised progress evidence for funding bodies without burdensome paperwork for volunteer coaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
