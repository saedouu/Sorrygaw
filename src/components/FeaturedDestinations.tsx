import React, { useState } from 'react';
import { Check, Eye, MapPin, Plus } from 'lucide-react';
import { DESTINATIONS, Destination } from '../data/surigaoData';
import { SafeImage } from './SafeImage';

interface FeaturedDestinationsProps {
  selectedIds: string[];
  onToggleSelect: (id: string) => void;
  onOpenModal: (destination: Destination) => void;
}

type CategoryFilter = 'all' | 'river-spring' | 'waterfall' | 'island-coastal';

export const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({
  selectedIds,
  onToggleSelect,
  onOpenModal
}) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredDestinations =
    activeFilter === 'all'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === activeFilter);

  return (
    <section id="destinations" className="py-16 lg:py-24 border-b border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold text-teal-800 mb-2">
              01 · Featured Destinations · Surigao del Sur
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Five Crown Jewels of Surigao del Sur
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-3 max-w-2xl leading-relaxed">
              Every featured destination includes its exact municipality and barangay location, geographical description, major attractions, recommended activities, best season and time of day to visit, and verified photography.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter destinations by natural feature"
            className="flex flex-wrap items-center gap-1 p-1.5 bg-stone-200/70 rounded-xl self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              All 5 Destinations
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'river-spring'}
              onClick={() => setActiveFilter('river-spring')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'river-spring'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Rivers &amp; Cold Springs (2)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'waterfall'}
              onClick={() => setActiveFilter('waterfall')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'waterfall'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Waterfalls (1)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'island-coastal'}
              onClick={() => setActiveFilter('island-coastal')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'island-coastal'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Islands &amp; Lagoons (2)
            </button>
          </div>
        </div>

        <div className="space-y-12">
          {filteredDestinations.map((dest, idx) => {
            const isSelected = selectedIds.includes(dest.id);
            const isEven = idx % 2 === 1;

            return (
              <article
                key={dest.id}
                id={`dest-${dest.id}`}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div
                    className={`lg:col-span-5 relative flex flex-col justify-between min-h-[320px] sm:min-h-[380px] ${
                      isEven ? 'lg:order-2' : ''
                    }`}
                  >
                    <SafeImage
                      src={dest.imageUrl}
                      alt={`${dest.name} in ${dest.fullLocation}`}
                      fallbackTitle={dest.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 mt-auto bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 pt-16 text-white">
                      <p className="text-xs text-stone-200 leading-snug mb-1">
                        {dest.imageCaption}
                      </p>
                      <div className="flex items-center justify-between gap-2 text-[11px] text-stone-300 pt-2 border-t border-white/15">
                        <span>Credit: {dest.imageCredit}</span>
                        <span className="font-mono-tabular shrink-0">{dest.coordinates}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isEven ? 'lg:order-1' : ''
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-2">
                        <span className="font-mono-tabular font-semibold text-teal-800">
                          Destination {dest.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{dest.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1 text-stone-700 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-teal-800" />
                          {dest.fullLocation}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight mb-2">
                        {dest.name}
                      </h3>
                      <p className="text-sm font-medium text-teal-900 mb-4">
                        {dest.tagline}
                      </p>

                      <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                        {dest.briefDescription}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-stone-200/80">
                        <div>
                          <h4 className="text-xs font-semibold text-stone-900 mb-3">
                            Major Attractions
                          </h4>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                            {dest.majorAttractions.map((attr) => (
                              <li key={attr.title} className="leading-relaxed">
                                <strong className="font-semibold text-stone-900">
                                  {attr.title}:
                                </strong>{' '}
                                {attr.detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold text-stone-900 mb-3">
                            Recommended Activities
                          </h4>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                            {dest.recommendedActivities.map((act) => (
                              <li key={act.activity} className="leading-relaxed">
                                <strong className="font-semibold text-stone-900">
                                  {act.activity}
                                </strong>{' '}
                                <span className="text-stone-500 font-mono-tabular">
                                  ({act.duration})
                                </span>
                                {' — '}
                                {act.note}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-xs text-stone-600 space-y-1">
                        <div>
                          <strong className="font-semibold text-stone-900">
                            Best Time to Visit:
                          </strong>{' '}
                          <span>{dest.bestTimeToVisit.months}</span>
                        </div>
                        <div className="text-stone-500">
                          <span>Ideal Window: {dest.bestTimeToVisit.timeOfDay}</span>
                          <span className="mx-1.5" aria-hidden="true">·</span>
                          <span className="font-mono-tabular text-stone-700">
                            Entry: PHP {dest.practicalInfo.entranceFeePhp + dest.practicalInfo.environmentalFeePhp}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <button
                          type="button"
                          onClick={() => onOpenModal(dest)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                        >
                          <Eye className="w-3.5 h-3.5 text-teal-800" />
                          <span>Full Details &amp; Photo</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onToggleSelect(dest.id)}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                            isSelected
                              ? 'bg-teal-900 text-white hover:bg-teal-800'
                              : 'border border-teal-900 text-teal-900 hover:bg-teal-50'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>In Your Trip Plan</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Trip Plan</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
