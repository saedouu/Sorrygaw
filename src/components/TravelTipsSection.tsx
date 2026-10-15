import React, { useState } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { TRAVEL_TIPS } from '../data/surigaoData';

export const TravelTipsSection: React.FC = () => {
  const allReminderIds = TRAVEL_TIPS.flatMap((cat) =>
    cat.reminders.map((r) => r.id)
  );
  const [checkedPledges, setCheckedPledges] = useState<string[]>([
    'safety-vest',
    'env-sunscreen',
    'cult-local'
  ]);

  const togglePledge = (id: string) => {
    setCheckedPledges((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const checkAllPledges = () => {
    setCheckedPledges(allReminderIds);
  };

  const progressCount = checkedPledges.length;
  const totalCount = allReminderIds.length;

  return (
    <section id="travel-tips" className="py-16 lg:py-24 bg-[#F3EFEA] border-b border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold text-teal-800 mb-2">
              04 · Essential Travel Tips · Eco-Stewardship &amp; Visitor Etiquette
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Safety, Responsible Tourism, Environment &amp; Cultural Respect
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-3 max-w-2xl leading-relaxed">
              Surigao del Sur’s natural wonders remain crystal-clear because local communities enforce strict ecological and safety standards. Review the four core pillars below and complete your pre-trip readiness checklist.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-stone-200/90 p-4 sm:p-5 flex items-center justify-between gap-6 shrink-0">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800">
                <ShieldCheck className="w-4 h-4" />
                <span>Traveler Readiness Checklist</span>
              </div>
              <p className="font-mono-tabular text-sm font-bold text-stone-950 mt-0.5">
                {progressCount} of {totalCount} Commitments Checked
              </p>
            </div>

            {progressCount < totalCount ? (
              <button
                type="button"
                onClick={checkAllPledges}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-teal-900 rounded-lg hover:bg-teal-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Pledge All {totalCount}
              </button>
            ) : (
              <span className="text-xs font-semibold text-teal-800 whitespace-nowrap shrink-0">
                Ready for Surigao ✓
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {TRAVEL_TIPS.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="pb-5 mb-5 border-b border-stone-200/80">
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                    <span className="font-mono-tabular font-bold text-teal-800">
                      Pillar {category.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Mandatory Visitor Reminder</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-stone-950">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    {category.subtitle}
                  </p>
                </div>

                <div className="space-y-5">
                  {category.reminders.map((rem) => {
                    const isChecked = checkedPledges.includes(rem.id);
                    return (
                      <div
                        key={rem.id}
                        className="p-4 rounded-xl bg-stone-50 border border-stone-200/80"
                      >
                        <h4 className="text-sm font-semibold text-stone-950 mb-1.5">
                          {rem.heading}
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                          {rem.explanation}
                        </p>

                        <button
                          type="button"
                          onClick={() => togglePledge(rem.id)}
                          className="w-full text-left pt-2.5 border-t border-stone-200/70 flex items-start gap-2.5 group cursor-pointer"
                        >
                          <span
                            className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border transition-colors shrink-0 ${
                              isChecked
                                ? 'bg-teal-900 border-teal-900 text-white'
                                : 'bg-white border-stone-400 group-hover:border-teal-800'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </span>
                          <span
                            className={`text-xs font-medium leading-snug ${
                              isChecked ? 'text-teal-950' : 'text-stone-700'
                            }`}
                          >
                            {rem.actionablePledge}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
                Core Principle: <strong className="font-medium text-stone-800">{category.keyPrinciple}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h3 className="font-display text-lg font-bold text-stone-950 mb-2">
                Helpful Surigaonon &amp; Kamayo Phrases for Respectful Travel
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Speaking a few words of the local language opens doors and shows genuine appreciation for Surigao del Sur’s host communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <strong className="font-semibold text-teal-900">"Marajaw na buntag!"</strong>
                  <p className="text-stone-600 mt-0.5">Good morning! (Surigaonon greeting)</p>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <strong className="font-semibold text-teal-900">"Salamat karajaw"</strong>
                  <p className="text-stone-600 mt-0.5">Thank you very much</p>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <strong className="font-semibold text-teal-900">"Tagpila ini?"</strong>
                  <p className="text-stone-600 mt-0.5">How much is this? (For markets/crafts)</p>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <strong className="font-semibold text-teal-900">"Karajaw gajud!"</strong>
                  <p className="text-stone-600 mt-0.5">Truly beautiful / wonderful!</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-stone-200/80 lg:pl-8">
              <h3 className="font-display text-lg font-bold text-stone-950 mb-2">
                Provincial Tourism &amp; Safety Hotlines
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Keep these emergency and visitor assistance contacts saved offline before traveling into rural forest or island zones:
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-600">National Emergency Hotline</span>
                  <span className="font-mono-tabular font-semibold text-stone-900">911</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-600">Surigao del Sur Provincial Tourism (Tandag)</span>
                  <span className="font-mono-tabular font-semibold text-stone-900">(086) 211-3942</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-600">DOT Caraga Region XIII Assistance</span>
                  <span className="font-mono-tabular font-semibold text-stone-900">(085) 342-1947</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-stone-600">Philippine Coast Guard — Bislig / Lianga Bay</span>
                  <span className="font-mono-tabular font-semibold text-stone-900">0917-842-8015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
