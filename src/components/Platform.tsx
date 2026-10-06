import React, { useState } from 'react';
import { 
  FileText, 
  Settings2, 
  BarChart3, 
  MessageSquare, 
  LayoutDashboard, 
  AlertTriangle, 
  FolderTree, 
  LineChart, 
  Compass, 
  FileCheck, 
  FileSpreadsheet, 
  Award, 
  Compass as GuideIcon, 
  Lock, 
  ShieldCheck, 
  Sparkles, 
  Workflow, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

interface Capability {
  id: number;
  title: string;
  description: string;
  detail: string;
  isPlanned?: boolean;
  group: 'A' | 'B' | 'C' | 'D';
}

export const Platform: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<'all' | 'A' | 'B' | 'C' | 'D'>('all');
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const capabilities: Record<'A' | 'B' | 'C' | 'D', { title: string; subtitle: string; items: Capability[] }> = {
    A: {
      title: 'GROUP A — Session Records and Feedback',
      subtitle: 'Structured capture without practitioner overhead',
      items: [
        {
          id: 1,
          group: 'A',
          title: '1. Coach-agnostic session logging',
          description: 'Short structured records covering goals discussed and progress notes, designed for practitioners regardless of their existing software.',
          detail: 'Practitioners enter concise session dates, duration, key focus themes, and progress milestones in two to three minutes. Designed to operate smoothly alongside whatever diary or note-taking systems individual coaches already use.'
        },
        {
          id: 2,
          group: 'A',
          title: '2. Configurable outcome framework',
          description: 'Programme goals and outcome measures defined by the commissioning organisation.',
          detail: 'The commissioning team defines the specific competencies, employability measures, or wellbeing indicators relevant to their cohort, ensuring consistent metrics across all participating mentors.'
        },
        {
          id: 3,
          group: 'A',
          title: '3. Standardised satisfaction instrument',
          description: 'Repeatable satisfaction and outcome-confidence ratings informed by the founder’s MBA research.',
          detail: 'Translates empirical servant-leadership and mentoring research into a streamlined, consistent 5-point rating scale evaluating perceived value, relationship trust, and goal confidence.'
        },
        {
          id: 4,
          group: 'A',
          title: '4. Client-direct feedback option',
          description: 'Optional short follow-up feedback from mentees or coachees, keeping their responses independent of coach-authored notes.',
          detail: 'Mentees can provide independent ratings on session value and next-step clarity, giving coordinators balanced dual-perspective insight without compromising coach rapport.'
        }
      ]
    },
    B: {
      title: 'GROUP B — Programme Visibility',
      subtitle: 'Cross-panel oversight and early supportive intervention',
      items: [
        {
          id: 5,
          group: 'B',
          title: '5. Panel-wide dashboard',
          description: 'A consolidated view of session frequency, satisfaction and progress across the panel.',
          detail: 'Coordinators see cohort-level pacing, total logged hours, active versus inactive pairs, and aggregate progress trends across all external practitioners in one central interface.'
        },
        {
          id: 6,
          group: 'B',
          title: '6. Early-warning flags',
          description: 'Signals for declining satisfaction, stalled progress or reduced session frequency, supporting coordinator review.',
          detail: 'Supports coordinator light-touch check-ins when a mentoring relationship goes quiet or ratings dip. Please note: these warning flags are purely informational cues to support human coordinator reviews, never automatic disciplinary decisions or automatic safeguarding interventions.'
        },
        {
          id: 7,
          group: 'B',
          title: '7. Multi-programme support',
          description: 'Separate mentoring and coaching programmes managed by one commissioning organisation.',
          detail: 'Run multiple cohorts—such as undergraduate widening-participation mentoring and senior leadership executive coaching—under separate frameworks within the same commissioning organisation account.'
        },
        {
          id: 8,
          group: 'B',
          title: '8. Historical trend comparison',
          description: 'Comparison of programme outcomes over time across cohorts.',
          detail: 'Planned capability designed to compare cohort benchmarks across academic years or funding cycles to demonstrate longitudinal programme development.',
          isPlanned: true
        },
        {
          id: 9,
          group: 'B',
          title: '9. Servant-leadership style tagging',
          description: 'Optional approach tags to explore relationships between delivery styles and satisfaction trends.',
          detail: 'Planned capability allowing practitioners to optionally tag their primary delivery style (e.g., reflective questioning, instructional guidance) to study correlations with mentee confidence.',
          isPlanned: true
        }
      ]
    },
    C: {
      title: 'GROUP C — Reporting and Practitioner Support',
      subtitle: 'Board-level evidence and continuous professional development',
      items: [
        {
          id: 10,
          group: 'C',
          title: '10. Board-ready impact reports',
          description: 'Consolidated reports, appropriately anonymised for leadership, governors and funders.',
          detail: 'Export polished executive summaries demonstrating aggregate progress, attendance integrity, and participant outcome shifts without disclosing confidential personal notes.'
        },
        {
          id: 11,
          group: 'C',
          title: '11. Funder-ready export templates',
          description: 'Planned templates supporting common UK funder and institutional evidence needs. Do not promise regulatory approval or guaranteed compliance.',
          detail: 'Designed to align with common reporting structures used by UK funding bodies and academic review committees. Note: these templates are planned structured formats and do not guarantee regulatory approval or audit compliance.'
        },
        {
          id: 12,
          group: 'C',
          title: '12. Coach performance summaries',
          description: 'Private summaries intended to support a practitioner’s professional development or accreditation portfolio.',
          detail: 'Planned capability providing individual practitioners with private, aggregated logs of hours and client feedback to assist with coaching body credentialing (e.g., EMCC/ICF).',
          isPlanned: true
        },
        {
          id: 13,
          group: 'C',
          title: '13. Coach onboarding kit',
          description: 'Simple guidance supporting adoption by busy independent practitioners.',
          detail: 'Bite-sized orientation materials and clear prompts to ensure independent coaches can complete their records in under three minutes without feeling surveilled.'
        }
      ]
    },
    D: {
      title: 'GROUP D — Confidentiality and Data Controls',
      subtitle: 'Proposed privacy principles and access segmentation',
      items: [
        {
          id: 14,
          group: 'D',
          title: '14. Confidential record-keeping',
          description: 'The proposed product design includes controlled access to sensitive session records.',
          detail: 'Proposed architecture separates sensitive reflective coaching notes from aggregate programme metrics, ensuring coordinators only see governance-level progress indicators. (Proposed product design, not functionality implemented by this landing page).'
        },
        {
          id: 15,
          group: 'D',
          title: '15. Data retention and deletion controls',
          description: 'Configurable policies intended to reflect each commissioning organisation’s requirements.',
          detail: 'Proposed product design planned to allow university and corporate data controllers to set automated data retention schedules and participant deletion rules in line with institutional governance.'
        }
      ]
    }
  };

  const getIconForCapability = (id: number) => {
    switch (id) {
      case 1: return <FileText className="w-5 h-5 text-teal-700" />;
      case 2: return <Settings2 className="w-5 h-5 text-teal-700" />;
      case 3: return <BarChart3 className="w-5 h-5 text-teal-700" />;
      case 4: return <MessageSquare className="w-5 h-5 text-teal-700" />;
      case 5: return <LayoutDashboard className="w-5 h-5 text-navy-900" />;
      case 6: return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case 7: return <FolderTree className="w-5 h-5 text-navy-900" />;
      case 8: return <LineChart className="w-5 h-5 text-navy-900" />;
      case 9: return <Compass className="w-5 h-5 text-navy-900" />;
      case 10: return <FileCheck className="w-5 h-5 text-teal-700" />;
      case 11: return <FileSpreadsheet className="w-5 h-5 text-teal-700" />;
      case 12: return <Award className="w-5 h-5 text-navy-900" />;
      case 13: return <GuideIcon className="w-5 h-5 text-navy-900" />;
      case 14: return <Lock className="w-5 h-5 text-navy-900" />;
      case 15: return <ShieldCheck className="w-5 h-5 text-navy-900" />;
      default: return <Sparkles className="w-5 h-5 text-teal-700" />;
    }
  };

  const groupsToDisplay = activeGroup === 'all' 
    ? (['A', 'B', 'C', 'D'] as const) 
    : [activeGroup];

  return (
    <section id="platform" className="py-16 sm:py-20 lg:py-24 bg-warm-100">
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-navy-900 tracking-tight leading-tight mb-4">
            One consistent view across your mentoring panel.
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-2xl mx-auto">
            Explore the capabilities proposed in the MentorScope concept.
          </p>

          {/* Group Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveGroup('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeGroup === 'all'
                  ? 'bg-navy-900 text-white shadow-subtle'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:-translate-y-0.5'
              }`}
            >
              All 15 Capabilities
            </button>
            <button
              type="button"
              onClick={() => setActiveGroup('A')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeGroup === 'A'
                  ? 'bg-navy-900 text-white shadow-subtle'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:-translate-y-0.5'
              }`}
            >
              Group A: Session Records
            </button>
            <button
              type="button"
              onClick={() => setActiveGroup('B')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeGroup === 'B'
                  ? 'bg-navy-900 text-white shadow-subtle'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:-translate-y-0.5'
              }`}
            >
              Group B: Visibility
            </button>
            <button
              type="button"
              onClick={() => setActiveGroup('C')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeGroup === 'C'
                  ? 'bg-navy-900 text-white shadow-subtle'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:-translate-y-0.5'
              }`}
            >
              Group C: Reporting
            </button>
            <button
              type="button"
              onClick={() => setActiveGroup('D')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeGroup === 'D'
                  ? 'bg-navy-900 text-white shadow-subtle'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:-translate-y-0.5'
              }`}
            >
              Group D: Data Controls
            </button>
          </div>
        </div>

        {/* 15 Documented Capabilities in Organised Groups */}
        <div className="space-y-12">
          {groupsToDisplay.map((grpKey) => {
            const grp = capabilities[grpKey];
            return (
              <div key={grpKey} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900">{grp.title}</h3>
                  <span className="text-xs text-slate-muted">{grp.subtitle}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {grp.items.map((item) => {
                    const isExpanded = !!expandedCards[item.id];
                    return (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-3.5">
                            <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center border border-slate-200/80 shrink-0">
                              {getIconForCapability(item.id)}
                            </div>
                            {item.isPlanned && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-50 text-teal-800 border border-teal-200">
                                Planned capability
                              </span>
                            )}
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-muted leading-relaxed">
                            {item.description}
                          </p>

                          {/* Expandable Details */}
                          {isExpanded && (
                            <div className="mt-3.5 pt-3.5 border-t border-slate-100 text-xs text-slate-600 leading-relaxed bg-warm-100/70 p-3 rounded-xl animate-in fade-in duration-150">
                              {item.detail}
                            </div>
                          )}
                        </div>

                        <div className="mt-4 pt-2">
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded py-0.5 transition-colors"
                            aria-expanded={isExpanded}
                          >
                            <span>{isExpanded ? 'Show less' : 'View full details'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Roadmap Section */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-subtle">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-navy-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />
              <span>Future Roadmap</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">
              Planned developments beyond initial pilot scope
            </h3>
            <p className="text-sm text-slate-muted leading-relaxed">
              The following initiatives represent conceptual directions being evaluated for future platform versions. These are explicitly roadmap concepts and are not available in current pilot trials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-warm-100 border border-slate-200 hover:-translate-y-0.5 transition-all duration-200">
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded inline-block mb-2">
                Roadmap Item
              </span>
              <h4 className="text-sm font-bold text-navy-900 mb-1">Human-reviewed sentiment analysis</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Machine-assisted detection of qualitative sentiment shifts in mentee feedback, requiring human coordinator sign-off.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-warm-100 border border-slate-200 hover:-translate-y-0.5 transition-all duration-200">
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded inline-block mb-2">
                Roadmap Item
              </span>
              <h4 className="text-sm font-bold text-navy-900 mb-1">Deeper practice integrations</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Read-only calendar and coaching practice tool connections to confirm completed sessions without re-typing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-warm-100 border border-slate-200 hover:-translate-y-0.5 transition-all duration-200">
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded inline-block mb-2">
                Roadmap Item
              </span>
              <h4 className="text-sm font-bold text-navy-900 mb-1">Anonymised benchmarking</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Opt-in, cross-organisation sector benchmarking for widening-participation higher education schemes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-warm-100 border border-slate-200 hover:-translate-y-0.5 transition-all duration-200">
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded inline-block mb-2">
                Roadmap Item
              </span>
              <h4 className="text-sm font-bold text-navy-900 mb-1">Expanded CPD portfolio exports</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Formatted evidence packs aligned to coaching body accreditation standards (e.g. EMCC or ICF credentialing).
              </p>
            </div>
          </div>
        </div>

        {/* Proposed Integration Directions */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-5 text-xs text-slate-muted shadow-subtle">
          <div className="flex items-start gap-3">
            <Workflow className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <span className="font-bold text-navy-900 block mb-0.5">Proposed Integration Directions</span>
              <p className="leading-relaxed">
                The MentorScope concept envisages optional email/SMS session completion prompts, calendar reminders, CSV/API exports, read-only coaching-tool integrations and organisational single sign-on (SSO). These represent planned architectural integration directions and are not active live integrations on this landing page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
