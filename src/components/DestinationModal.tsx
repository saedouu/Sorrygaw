import React, { useEffect } from 'react';
import { Check, MapPin, Plus, X } from 'lucide-react';
import { Destination } from '../data/surigaoData';
import { SafeImage } from './SafeImage';

interface DestinationModalProps {
  destination: Destination | null;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
  onClose: () => void;
  onPlanTripWithDestination: (id: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  isSelected,
  onToggleSelect,
  onClose,
  onPlanTripWithDestination
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (destination) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [destination, onClose]);

  if (!destination) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dest-title"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] rounded-2xl border border-stone-300 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80 w-full">
          <SafeImage
            src={destination.imageUrl}
            alt={destination.name}
            fallbackTitle={destination.name}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close destination guide"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/65 text-white flex items-center justify-center hover:bg-black/85 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 pt-16 text-white">
            <div className="flex flex-wrap items-center gap-2 text-xs text-teal-200 mb-1">
              <span className="font-mono-tabular">Destination {destination.index}</span>
              <span aria-hidden="true">·</span>
              <span>{destination.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {destination.fullLocation}
              </span>
            </div>
            <h2
              id="modal-dest-title"
              className="font-display text-2xl sm:text-3xl font-bold text-white"
            >
              {destination.name}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-sm font-semibold text-teal-900 mb-2">
              {destination.tagline}
            </p>
            <p className="text-sm text-stone-700 leading-relaxed mb-3">
              {destination.briefDescription}
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              {destination.extendedStory}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white border border-stone-200/90 text-xs">
            <div>
              <span className="text-stone-500 block mb-0.5">Standard LGU Fees</span>
              <strong className="font-mono-tabular text-sm font-bold text-stone-950">
                PHP {destination.practicalInfo.entranceFeePhp} Entry + PHP{' '}
                {destination.practicalInfo.environmentalFeePhp} Eco Fee
              </strong>
              <span className="text-stone-500 block mt-1">
                {destination.practicalInfo.optionalAddOnLabel}: PHP{' '}
                {destination.practicalInfo.optionalAddOnPhp}
              </span>
            </div>
            <div>
              <span className="text-stone-500 block mb-0.5">Operating Hours</span>
              <strong className="text-stone-900 font-semibold block">
                {destination.practicalInfo.openingHours}
              </strong>
              <span className="text-stone-500 block mt-1 font-mono-tabular">
                GPS: {destination.coordinates}
              </span>
            </div>
            <div>
              <span className="text-stone-500 block mb-0.5">Highway Travel Time</span>
              <strong className="text-stone-900 font-semibold block">
                {destination.practicalInfo.travelTimeFromButuan} (from BXU)
              </strong>
              <span className="text-stone-500 block mt-1">
                {destination.practicalInfo.travelTimeFromDavao} (from DVO)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border border-stone-200/90">
              <h3 className="font-display text-base font-bold text-stone-950 mb-3">
                Major Attractions
              </h3>
              <ul className="space-y-3 text-xs text-stone-600">
                {destination.majorAttractions.map((attr) => (
                  <li key={attr.title} className="leading-relaxed">
                    <strong className="text-stone-900 font-semibold block">
                      {attr.title}
                    </strong>
                    {attr.detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-stone-200/90">
              <h3 className="font-display text-base font-bold text-stone-950 mb-3">
                Recommended Activities
              </h3>
              <ul className="space-y-3 text-xs text-stone-600">
                {destination.recommendedActivities.map((act) => (
                  <li key={act.activity} className="leading-relaxed">
                    <strong className="text-stone-900 font-semibold">
                      {act.activity}
                    </strong>{' '}
                    <span className="font-mono-tabular text-teal-800">
                      ({act.duration})
                    </span>
                    <p className="mt-0.5">{act.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-stone-100 p-4 rounded-xl text-xs text-stone-700 space-y-1.5">
            <div>
              <strong className="font-semibold text-stone-950">Best Time to Visit:</strong>{' '}
              {destination.bestTimeToVisit.months} · {destination.bestTimeToVisit.timeOfDay}
            </div>
            <div>
              <strong className="font-semibold text-stone-950">Seasonal Note:</strong>{' '}
              {destination.bestTimeToVisit.weatherAdvisory}
            </div>
            <div className="pt-2 border-t border-stone-200/80 text-stone-500">
              Photo Caption &amp; Reference: {destination.imageCaption} ({destination.imageCredit})
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-stone-700 bg-stone-200/80 hover:bg-stone-300/80 rounded-lg transition-colors cursor-pointer"
            >
              Close Field Guide
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onToggleSelect(destination.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white'
                    : 'border border-teal-900 text-teal-900 hover:bg-teal-50'
                }`}
              >
                {isSelected ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added to Trip Plan</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Trip Plan</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onPlanTripWithDestination(destination.id)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer"
              >
                Inquire About {destination.name} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
