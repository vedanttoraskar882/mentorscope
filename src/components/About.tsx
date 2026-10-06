import React from 'react';
import { 
  FileSpreadsheet, 
  EyeOff, 
  Clock4, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Layers, 
  BookOpenCheck
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-b border-slate-200">
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            About the Concept
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-navy-900 tracking-tight leading-tight mb-5">
            Clearer evidence for the programmes you commission.
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-2xl mx-auto">
            Organisations commissioning mentoring or coaching programmes often engage independent practitioners who each use different systems and notes. MentorScope is conceived as a lightweight evidence and reporting layer that works alongside existing coaching workflows to provide consistency for the commissioning organisation.
          </p>
        </div>

        {/* The Problem: 3 Concise Problem Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">The Core Challenge</span>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mt-1">Why traditional panel coordination falls short</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Problem Card 1 */}
            <div className="bg-warm-100 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-navy-900 mb-4 shadow-subtle">
                  <FileSpreadsheet className="w-5 h-5 text-teal-700" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">1. Fragmented session records</h4>
                <p className="text-sm text-slate-muted leading-relaxed">
                  When independent coaches record notes in disparate spreadsheets, private notebooks or separate portals, commissioning coordinators have no unified view of frequency, themes or milestones.
                </p>
              </div>
            </div>

            {/* Problem Card 2 */}
            <div className="bg-warm-100 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-navy-900 mb-4 shadow-subtle">
                  <EyeOff className="w-5 h-5 text-amber-600" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">2. Limited visibility between programme reviews</h4>
                <p className="text-sm text-slate-muted leading-relaxed">
                  Without real-time indicators, disengaged relationships or declining participant satisfaction can go unnoticed until end-of-year surveys, missing opportunities for early supportive intervention.
                </p>
              </div>
            </div>

            {/* Problem Card 3 */}
            <div className="bg-warm-100 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-navy-900 mb-4 shadow-subtle">
                  <Clock4 className="w-5 h-5 text-teal-700" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">3. Time-consuming impact reporting</h4>
                <p className="text-sm text-slate-muted leading-relaxed">
                  Coordinators spend days chasing practitioners and manually assembling anecdotal updates whenever university boards, corporate sponsors or charitable funders request impact proof.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lightweight Reporting Layer Explanation */}
        <div className="bg-navy-900 rounded-2xl p-6 sm:p-8 lg:p-10 text-white mb-16 shadow-card">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span>A Lightweight Reporting Layer</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-white">
              Designed to work alongside the tools individual coaches already use.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              MentorScope is not designed to replace the specialised practice management tools or personal workflows that individual coaches and mentors trust. Instead, it provides the commissioning organisation with a lightweight, uniform framework to capture consistent session evidence, outcome ratings and participant feedback across an entire panel in two to three minutes per session.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              The commissioning organisation defines the programme outcomes, while independent practitioners log short, structured updates without administrative friction.
            </p>
          </div>
        </div>

        {/* Intended Customers / Audience Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Intended Customers</span>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mt-1">Built for organisations commissioning panels</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Audience 1: Universities */}
            <div className="p-6 sm:p-7 rounded-2xl bg-warm-100 border border-slate-200 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 mb-4 shadow-subtle">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-navy-900 mb-2">Universities</h4>
              <p className="text-sm text-slate-muted leading-relaxed">
                Evidence for student and alumni mentoring programmes, including widening-participation schemes needing auditable progress for institutional governors and funding audits.
              </p>
            </div>

            {/* Audience 2: Corporate L&D */}
            <div className="p-6 sm:p-7 rounded-2xl bg-warm-100 border border-slate-200 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-navy-900 mb-4 shadow-subtle">
                <Briefcase className="w-5 h-5 text-teal-700" aria-hidden="true" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-navy-900 mb-2">Corporate L&amp;D</h4>
              <p className="text-sm text-slate-muted leading-relaxed">
                Consolidated visibility across external coaching panels, executive development programmes and internal talent mentoring cohorts without intruding on coach confidentiality.
              </p>
            </div>

            {/* Audience 3: Charities & Funded Programmes */}
            <div className="p-6 sm:p-7 rounded-2xl bg-warm-100 border border-slate-200 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 mb-4 shadow-subtle">
                <HeartHandshake className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-navy-900 mb-2">Charities &amp; Funded Programmes</h4>
              <p className="text-sm text-slate-muted leading-relaxed">
                Consistent evidence for programme and funding reviews, grant monitoring, and social impact evaluations across publicly funded mentoring initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Refined Founder Panel: Editorial Layout WITHOUT any photo box or avatar box */}
        <div className="bg-warm-100 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-subtle">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full mb-4">
              <BookOpenCheck className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />
              <span>Founder Background &amp; Research</span>
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-navy-900 tracking-tight mb-3">
              Grounded in mentoring experience and research
            </h3>

            {/* Professional byline: Clean typographic credit, no photo box */}
            <div className="text-xs sm:text-sm font-semibold text-teal-800 mb-4 flex items-center gap-2">
              <span>Sukhveer Singh</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-normal">Proposed Founder, MBA Researcher &amp; Practitioner</span>
            </div>

            {/* Copy */}
            <p className="text-sm sm:text-base text-slate-muted leading-relaxed mb-6">
              Proposed founder Sukhveer Singh brings hands-on coaching and mentoring experience supporting more than 200 individuals. His MBA dissertation explored the relationship between servant-leadership coaching styles and client satisfaction across two coaching companies. MentorScope proposes translating that research into a repeatable session-level satisfaction and outcome-confidence framework.
            </p>

            {/* Clarification Callout */}
            <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5">
              <span className="font-semibold text-navy-900 shrink-0">Clarification:</span>
              <span>The 200+ figure reflects Sukhveer's personal coaching and mentoring background, not MentorScope's customer traction. MentorScope is currently in the proposed pilot development stage.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
