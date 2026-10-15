import React, { useState } from 'react';
import { Calculator, Compass, MapPin, Navigation } from 'lucide-react';
import {
  ACCOMMODATION_OPTIONS,
  DESTINATIONS,
  GATEWAY_ROUTES,
  SUGGESTED_ITINERARIES,
  TRANSPORT_MODES
} from '../data/surigaoData';

interface TravelGuideSectionProps {
  selectedDestinationIds: string[];
  onToggleDestination: (id: string) => void;
}

export const TravelGuideSection: React.FC<TravelGuideSectionProps> = ({
  selectedDestinationIds,
  onToggleDestination
}) => {
  const [selectedGatewayId, setSelectedGatewayId] = useState<string>(GATEWAY_ROUTES[0].id);
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>(SUGGESTED_ITINERARIES[0].id);

  const [travelers, setTravelers] = useState<number>(4);
  const [days, setDays] = useState<number>(3);
  const [stayTier, setStayTier] = useState<'Budget' | 'Mid-Range' | 'Eco-Resort'>('Mid-Range');

  const activeGateway =
    GATEWAY_ROUTES.find((g) => g.id === selectedGatewayId) || GATEWAY_ROUTES[0];
  const activeItinerary =
    SUGGESTED_ITINERARIES.find((it) => it.id === selectedItineraryId) ||
    SUGGESTED_ITINERARIES[0];

  const effectiveDestinationIds =
    selectedDestinationIds.length > 0
      ? selectedDestinationIds
      : DESTINATIONS.map((d) => d.id);

  const chosenDestinations = DESTINATIONS.filter((d) =>
    effectiveDestinationIds.includes(d.id)
  );

  const roomNightlyRate =
    stayTier === 'Budget' ? 1000 : stayTier === 'Mid-Range' ? 1950 : 3200;
  const roomsNeeded = Math.ceil(travelers / 2);
  const nights = Math.max(1, days - 1);
  const totalAccommodationPhp = roomsNeeded * roomNightlyRate * nights;

  const perPersonEntrancePhp = chosenDestinations.reduce(
    (sum, d) => sum + d.practicalInfo.entranceFeePhp + d.practicalInfo.environmentalFeePhp,
    0
  );
  const totalEntrancePhp = perPersonEntrancePhp * travelers;

  const sharedCharterPhp = chosenDestinations.reduce(
    (sum, d) => sum + d.practicalInfo.optionalAddOnPhp,
    0
  );
  const boatsNeeded = Math.ceil(travelers / 6);
  const totalChartersPhp = sharedCharterPhp * boatsNeeded;

  const dailyMealPerPersonPhp = stayTier === 'Budget' ? 450 : stayTier === 'Mid-Range' ? 680 : 950;
  const totalMealsPhp = dailyMealPerPersonPhp * travelers * days;

  const interTownTransportPerPersonPhp = 380 * days;
  const totalTransportPhp = interTownTransportPerPersonPhp * travelers;

  const grandTotalGroupPhp =
    totalAccommodationPhp +
    totalEntrancePhp +
    totalChartersPhp +
    totalMealsPhp +
    totalTransportPhp;

  const estimatedPerPersonPhp = Math.round(grandTotalGroupPhp / travelers);

  return (
    <section id="travel-guide" className="py-16 lg:py-24 bg-[#F3EFEA] border-b border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-teal-800 mb-2">
            02 · Comprehensive Travel Guide · Logistics &amp; Planning
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            How to Get There, Local Transport, Stays &amp; Budget Planner
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Surigao del Sur stretches along a well-paved coastal highway in Eastern Mindanao. Use this practical planner to compare airport entry gateways, local transit fares, curated multi-day itineraries, accommodation tiers, and your estimated PHP trip budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* How to Get There */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200/80">
                <div>
                  <h3 className="font-display text-xl font-bold text-stone-950">
                    How to Get There (Airport &amp; Land Gateways)
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Select your preferred arrival airport in Mindanao to view step-by-step transfer legs
                  </p>
                </div>

                <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg self-start">
                  {GATEWAY_ROUTES.map((gw) => (
                    <button
                      key={gw.id}
                      type="button"
                      onClick={() => setSelectedGatewayId(gw.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        selectedGatewayId === gw.id
                          ? 'bg-teal-900 text-white'
                          : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      {gw.airportCode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="py-5 border-b border-stone-200/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-display text-lg font-semibold text-stone-900">
                    {activeGateway.gatewayName}
                  </h4>
                  <span className="font-mono-tabular text-xs font-semibold text-teal-800">
                    Land Time: {activeGateway.totalTravelTime} · {activeGateway.estimatedOneWayPhp}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600">
                  {activeGateway.recommendedFor}
                </p>
              </div>

              <div className="divide-y divide-stone-200/70">
                {activeGateway.steps.map((step) => (
                  <div key={step.stepNumber} className="py-4 flex gap-4">
                    <span className="font-mono-tabular text-sm font-bold text-teal-800 pt-0.5 shrink-0">
                      {step.stepNumber}.
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <strong className="text-sm font-semibold text-stone-900">
                          {step.mode}
                        </strong>
                        <span className="font-mono-tabular text-xs text-stone-600">
                          {step.duration} · {step.fareRange}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-teal-900 mb-1">
                        Route: {step.route}
                      </p>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500 flex items-center gap-2">
              <Navigation className="w-3.5 h-3.5 text-teal-800 shrink-0" />
              <span>
                Tip: Book a morning flight landing before 9:00 AM to catch same-day coastal buses with daylight views.
              </span>
            </div>
          </div>

          {/* Local Transportation Modes */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="pb-6 border-b border-stone-200/80">
                <h3 className="font-display text-xl font-bold text-stone-950">
                  Local Transportation Around the Province
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Getting between municipalities and inland eco-parks
                </p>
              </div>

              <div className="divide-y divide-stone-200/70">
                {TRANSPORT_MODES.map((item) => (
                  <div key={item.mode} className="py-4">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-stone-900">
                        {item.mode}
                      </h4>
                      <span className="font-mono-tabular text-xs font-medium text-teal-800 shrink-0">
                        {item.fareEstimate}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mb-1.5 leading-relaxed">
                      {item.coverage}
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Hours: {item.operatingWindow} · {item.travelerNote}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500">
              Official municipal fare matrices are posted at Hinatuan, Bislig, San Agustin, Tagbina, and Cortes terminals.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Suggested Activities & Itineraries */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200/80 mb-6">
              <div>
                <h3 className="font-display text-xl font-bold text-stone-950">
                  Suggested Activities &amp; Sample Itineraries
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Recommended daily pacing to catch high tides, morning rainbows, and noon feedings
                </p>
              </div>

              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg self-start">
                {SUGGESTED_ITINERARIES.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => setSelectedItineraryId(it.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedItineraryId === it.id
                        ? 'bg-teal-900 text-white'
                        : 'text-stone-600 hover:text-stone-950'
                    }`}
                  >
                    {it.durationLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h4 className="font-display text-lg font-semibold text-stone-900">
                {activeItinerary.title}
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                {activeItinerary.focus} ·{' '}
                <span className="font-mono-tabular font-medium text-teal-800">
                  Est. {activeItinerary.estimatedTotalPhp}
                </span>
              </p>
            </div>

            <div className="space-y-5">
              {activeItinerary.days.map((d) => (
                <div key={d.day} className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 mb-1">
                    <span className="font-mono-tabular">{d.day}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-900">{d.headline}</span>
                  </div>
                  <ul className="space-y-1.5 mt-2.5 text-xs text-stone-600">
                    {d.schedule.map((line) => (
                      <li key={line} className="leading-relaxed">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Accommodation Options */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="pb-6 border-b border-stone-200/80 mb-6">
                <h3 className="font-display text-xl font-bold text-stone-950">
                  Where to Stay (Accommodation Options)
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  DOT-accredited beachfront resorts, town lodges, and budget inns across Surigao del Sur
                </p>
              </div>

              <div className="space-y-4">
                {ACCOMMODATION_OPTIONS.map((acc) => (
                  <div
                    key={acc.name}
                    className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="font-display text-base font-semibold text-stone-900">
                        {acc.name}
                      </h4>
                      <span className="font-mono-tabular text-xs font-semibold text-teal-800">
                        {acc.rateRangeLabel}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="inline-flex items-center gap-1 text-stone-700 font-medium">
                        <MapPin className="w-3 h-3 text-teal-800" />
                        {acc.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Tier: {acc.tier}</span>
                      <span aria-hidden="true">·</span>
                      <span>Base for: {acc.nearestDestination}</span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {acc.highlights}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-teal-800 shrink-0" />
              <span>
                Booking Advice: Reserve beachfront rooms in Britania and Hinatuan at least 2 weeks ahead during March–May summer peak.
              </span>
            </div>
          </div>
        </div>

        {/* Budget Calculator */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 mb-2">
                <Calculator className="w-4 h-4" />
                <span>Interactive Trip Budget Estimator (PHP)</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-950 mb-2">
                Calculate Your Surigao del Sur Travel Budget
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                Customize your group size, trip length, accommodation comfort level, and destinations below. Boat charters (up to 6 pax) and twin rooms are automatically shared across your group.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <label
                    htmlFor="calc-travelers"
                    className="block text-xs font-semibold text-stone-700 mb-2"
                  >
                    Group Size (Travelers)
                  </label>
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setTravelers((prev) => Math.max(1, prev - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-800 font-bold hover:bg-stone-100 cursor-pointer"
                      aria-label="Decrease travelers"
                    >
                      -
                    </button>
                    <span
                      id="calc-travelers"
                      className="font-mono-tabular text-lg font-bold text-stone-950"
                    >
                      {travelers} {travelers === 1 ? 'pax' : 'pax'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravelers((prev) => Math.min(16, prev + 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-800 font-bold hover:bg-stone-100 cursor-pointer"
                      aria-label="Increase travelers"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <label
                    htmlFor="calc-days"
                    className="block text-xs font-semibold text-stone-700 mb-2"
                  >
                    Trip Duration (Days)
                  </label>
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setDays((prev) => Math.max(1, prev - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-800 font-bold hover:bg-stone-100 cursor-pointer"
                      aria-label="Decrease days"
                    >
                      -
                    </button>
                    <span
                      id="calc-days"
                      className="font-mono-tabular text-lg font-bold text-stone-950"
                    >
                      {days} {days === 1 ? 'Day' : 'Days'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setDays((prev) => Math.min(7, prev + 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-800 font-bold hover:bg-stone-100 cursor-pointer"
                      aria-label="Increase days"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <label className="block text-xs font-semibold text-stone-700 mb-2">
                    Accommodation Tier
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {(['Budget', 'Mid-Range', 'Eco-Resort'] as const).map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setStayTier(tier)}
                        className={`py-1.5 px-1 text-[11px] font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap truncate ${
                          stayTier === tier
                            ? 'bg-teal-900 text-white'
                            : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-stone-800 mb-2.5">
                  Destinations Included in Estimate (Click to toggle):
                </p>
                <div className="flex flex-wrap gap-2">
                  {DESTINATIONS.map((dest) => {
                    const active = effectiveDestinationIds.includes(dest.id);
                    return (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => onToggleDestination(dest.id)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                          active
                            ? 'bg-teal-950 text-white border-teal-950'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {dest.index}. {dest.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-950 text-stone-100 rounded-xl p-6 sm:p-7">
              <div className="pb-4 mb-4 border-b border-stone-800 flex items-baseline justify-between">
                <div>
                  <p className="text-xs text-teal-300 font-medium">
                    Estimated Cost Per Person
                  </p>
                  <p className="font-mono-tabular text-3xl font-bold text-white mt-1">
                    PHP {estimatedPerPersonPhp.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-400">Total Group ({travelers} pax)</p>
                  <p className="font-mono-tabular text-sm font-semibold text-stone-200 mt-1">
                    PHP {grandTotalGroupPhp.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-stone-800/80">
                  <span className="text-stone-300">
                    Lodging ({roomsNeeded} rm × {nights} nt · {stayTier})
                  </span>
                  <span className="font-mono-tabular font-medium text-white">
                    PHP {totalAccommodationPhp.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-stone-800/80">
                  <span className="text-stone-300">
                    Boat, Bamboo Raft &amp; Cottage Charters ({chosenDestinations.length} sites)
                  </span>
                  <span className="font-mono-tabular font-medium text-white">
                    PHP {totalChartersPhp.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-stone-800/80">
                  <span className="text-stone-300">
                    LGU Entrance &amp; Environmental Fees ({travelers} pax)
                  </span>
                  <span className="font-mono-tabular font-medium text-white">
                    PHP {totalEntrancePhp.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-stone-800/80">
                  <span className="text-stone-300">
                    Coastal Bus &amp; Tricycle Transfers ({days} days)
                  </span>
                  <span className="font-mono-tabular font-medium text-white">
                    PHP {totalTransportPhp.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-stone-300">
                    Local Seafood Meals &amp; Delicacies ({days} days)
                  </span>
                  <span className="font-mono-tabular font-medium text-white">
                    PHP {totalMealsPhp.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="mt-5 pt-4 border-t border-stone-800 text-[11px] text-stone-400 leading-relaxed">
                Note: Estimates cover land/island expenses in Surigao del Sur based on verified municipal tariffs; airfare to Butuan/Davao is excluded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
