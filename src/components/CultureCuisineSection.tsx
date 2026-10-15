import React, { useState } from 'react';
import { CUISINE_IMAGE, CULTURE_AND_CUISINE, CulturalItem } from '../data/surigaoData';
import { SafeImage } from './SafeImage';

type CultureFilter = 'all' | 'traditions' | 'products' | 'festivals' | 'dishes';

export const CultureCuisineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CultureFilter>('all');

  const visibleItems: CulturalItem[] =
    activeTab === 'all'
      ? CULTURE_AND_CUISINE
      : CULTURE_AND_CUISINE.filter((item) => item.category === activeTab);

  return (
    <section id="culture-cuisine" className="py-16 lg:py-24 border-b border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold text-teal-800 mb-2">
              03 · Philippine Culture &amp; Cuisine · Surigaonon &amp; Kamayo Heritage
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Living Traditions, Crafts, Festivals &amp; Coastal Gastronomy
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-3 max-w-2xl leading-relaxed">
              Surigao del Sur’s identity is shaped by the meeting of indigenous Manobo and Kamayo forest stewardship with vibrant Surigaonon maritime culture along the Pacific rim.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter Philippine culture and cuisine categories"
            className="flex flex-wrap items-center gap-1 p-1.5 bg-stone-200/70 rounded-xl self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              All Highlights (8)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'traditions'}
              onClick={() => setActiveTab('traditions')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'traditions'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Filipino Traditions
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'products'}
              onClick={() => setActiveTab('products')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'products'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Local Products
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'festivals'}
              onClick={() => setActiveTab('festivals')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'festivals'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Festivals
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'dishes'}
              onClick={() => setActiveTab('dishes')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'dishes'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Famous Dishes
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[340px]">
              <SafeImage
                src={CUISINE_IMAGE}
                alt="Surigao del Sur coastal feast featuring Kinilaw na Tanigue, grilled reef fish, steamed mud crabs, and Sayongsong rice delicacies on a woven pandan mat"
                fallbackTitle="Surigaonon Coastal Gastronomy & Woven Pandan Craft"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-14 text-white">
                <p className="text-xs text-stone-200">
                  A traditional Surigao del Sur seaside table: Kinilaw na Tanigue cured with coconut vinegar and calamansi, charcoal-grilled reef fish, Hinatuan mud crab, and banana-leaf Sayongsong served on a handwoven pandan mat.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-xs font-semibold text-teal-800 mb-2">
                Culinary &amp; Artisan Spotlight · Pacific Mindanao Table
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-950 mb-4">
                The Flavor of the Philippine Trench &amp; Rainforest Foothills
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                Because Surigao del Sur borders the nutrient-rich waters of the Philippine Sea and fertile mangrove estuaries in Hinatuan and Lianga Bay, coastal dining revolves around ultra-fresh catch prepared with minimal heat and bright native aromatics.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                Every dish and woven craft tells a story of resourcefulness—from using endemic <em className="italic">tabon-tabon</em> wild fruit in ancient <em className="italic">kinilaw</em> recipes to steaming roasted-peanut <em className="italic">sayongsong</em> in hand-folded banana leaf cones and weaving durable <em className="italic">tikog</em> reed mats in Barobo and Hinatuan.
              </p>
              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
                <span>4 Cultural Pillars</span>
                <span aria-hidden="true">·</span>
                <span>Surigaonon, Kamayo &amp; Manobo Heritage</span>
                <span aria-hidden="true">·</span>
                <span>Credit: Karajaw Surigao Culinary Archive</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-teal-800">
                    {item.categoryTitle}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{item.origin}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-stone-950 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs font-medium text-teal-900 mb-3">
                  {item.localTerm} · {item.seasonOrContext}
                </p>

                <p className="text-sm text-stone-700 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80 text-xs text-stone-600">
                <strong className="font-semibold text-stone-900">
                  Where &amp; How to Experience:
                </strong>{' '}
                {item.visitorExperience}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
