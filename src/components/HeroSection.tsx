import React from 'react';
import { ArrowRight, Compass, MapPin } from 'lucide-react';
import { HERO_IMAGE, DESTINATIONS } from '../data/surigaoData';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onExploreDestinations: () => void;
  onSelectDestinationModal: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDestinations,
  onSelectDestinationModal
}) => {
  return (
    <section id="home" className="border-b border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6 pt-8 pb-12 lg:py-14">
        {/* Organization Identity & Official Emblem Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-stone-200/80">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl bg-teal-950 text-amber-300 flex items-center justify-center shrink-0 shadow-sm"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="17" r="6" className="fill-amber-400" />
                <path
                  d="M24 6V9M13 17H10M38 17H35M16.2 9.2L18.3 11.3M31.8 9.2L29.7 11.3"
                  stroke="#FBBF24"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 29C13 24 19 24 24 29C29 24 35 24 40 29"
                  stroke="#5EEAD4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 35C12 31 18 31 24 35C30 31 36 31 42 35"
                  stroke="#99F6E4"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M11 40C16 37 20 37 24 40C28 37 32 37 37 40"
                  stroke="#CCFBF1"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-stone-500">
                Karajaw Surigao Tourism Council · Caraga Region XIII, Philippines
              </p>
              <p className="font-display text-lg font-semibold text-stone-900">
                Discover the Philippines Through Digital Travel
              </p>
            </div>
          </div>

          <div className="text-xs text-stone-600 sm:text-right">
            <span>Official Provincial Showcase</span>
            <span className="mx-2 text-stone-300" aria-hidden="true">·</span>
            <span>Surigao del Sur, Eastern Mindanao</span>
          </div>
        </div>

        {/* 2-Column Editorial Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-semibold tracking-wide text-teal-800 mb-3">
                Explore Our Home · Share Its Beauty · Surigao del Sur
              </p>

              <h1
                className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-bold text-stone-950 leading-[1.08] tracking-tight mb-6"
                style={{ textWrap: 'balance' }}
              >
                Where the Pacific Ocean Meets Enchanted Rainforest Waters.
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-6 max-w-[65ch]">
                Welcome to <strong className="font-semibold text-stone-900">Karajaw Surigao</strong>, your dedicated digital travel guide to Surigao del Sur along the eastern coast of Mindanao. Sheltered by lush dipterocarp mountains on the west and the dramatic Philippine Trench on the east, our province is home to five extraordinary aquatic wonders of the Philippines.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed mb-8 max-w-[65ch]">
                Journey from the fathomless sapphire spring of <span className="text-stone-900 font-medium">Hinatuan Enchanted River</span> and the three-tiered curtain of <span className="text-stone-900 font-medium">Tinuy-an Falls</span> to the 24 coral sandbars of <span className="text-stone-900 font-medium">Britania Islands</span>, the roaring rock splash lagoon of <span className="text-stone-900 font-medium">Laswitan</span>, and the glassy mountain sanctuary of <span className="text-stone-900 font-medium">Libuacan Cold Spring</span>.
              </p>
            </div>

            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExploreDestinations}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-teal-900 rounded-lg hover:bg-teal-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Explore the 5 Destinations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#travel-guide"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-800 border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap shrink-0"
                >
                  <Compass className="w-4 h-4 text-teal-800" />
                  <span>View Routes &amp; Budget Guide</span>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
                <span>5 Featured Destinations</span>
                <span aria-hidden="true">·</span>
                <span>3 Airport Gateways (BXU / DVO / TDG)</span>
                <span aria-hidden="true">·</span>
                <span>Community-Managed Eco-Tourism</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm flex flex-col justify-end min-h-[380px] lg:h-full">
              <SafeImage
                src={HERO_IMAGE}
                alt="Hinatuan Enchanted River in Surigao del Sur showing deep sapphire blue lagoon surrounded by lush rainforest"
                fallbackTitle="Hinatuan Enchanted River — Surigao del Sur"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 sm:p-8 pt-24 text-white">
                <p className="text-xs font-medium text-teal-200 mb-1">
                  Featured Landmark 01 · Barangay Talisay, Hinatuan
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
                  Hinatuan Enchanted River
                </h2>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed mb-4 max-w-xl">
                  An 80-meter subterranean karst spring where royal-blue waters meet the Pacific tide and schools of reef fish gather at the sound of the noon bell.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/20 text-xs text-stone-200">
                  <span>Best Window: March – October · 8:30 AM – 12:30 PM</span>
                  <button
                    type="button"
                    onClick={() => onSelectDestinationModal('hinatuan-enchanted-river')}
                    className="font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Read Full Field Guide →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Destination Quick Directory */}
        <div className="mt-12 pt-8 border-t border-stone-200/80">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold text-stone-500">
              Quick Jump: Surigao del Sur’s 5 Featured Tourist Destinations
            </p>
            <p className="text-xs text-stone-500 hidden sm:block">
              Click any destination to open its complete visitor guide
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DESTINATIONS.map((dest) => (
              <button
                key={dest.id}
                type="button"
                onClick={() => onSelectDestinationModal(dest.id)}
                className="group text-left p-4 rounded-xl bg-white border border-stone-200/90 hover:border-teal-800/60 transition-colors cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                    <span className="font-mono-tabular font-medium text-teal-800">
                      {dest.index}
                    </span>
                    <span>{dest.municipality}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-stone-900 group-hover:text-teal-900 transition-colors leading-snug">
                    {dest.name}
                  </h3>
                </div>
                <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="inline-flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-teal-800 shrink-0" />
                    <span className="truncate">{dest.barangay}</span>
                  </span>
                  <span className="text-teal-800 font-medium group-hover:translate-x-0.5 transition-transform shrink-0">
                    Guide →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
