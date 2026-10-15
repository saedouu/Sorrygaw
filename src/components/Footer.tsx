import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { DESTINATIONS, PRESENTATION_NOTES } from '../data/surigaoData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectDestinationModal: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectDestinationModal
}) => {
  const [showPresentationGuide, setShowPresentationGuide] = useState(false);

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-bold text-white tracking-tight mb-2">
              Karajaw Surigao
            </p>
            <p className="text-xs font-medium text-teal-300 mb-4">
              Discover the Philippines Through Digital Travel · Explore Our Home, Share Its Beauty
            </p>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md mb-6">
              An original Philippine digital tourism guide promoting the five signature natural wonders of Surigao del Sur (Caraga Region XIII), empowering responsible community-based travel across Eastern Mindanao.
            </p>

            <button
              type="button"
              onClick={() => setShowPresentationGuide((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-100 bg-stone-900 border border-stone-700 rounded-lg hover:border-teal-500 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-teal-400" />
              <span>
                {showPresentationGuide
                  ? 'Hide Project Presentation & Citations Guide'
                  : 'View Project Presentation & Citations Guide'}
              </span>
              {showPresentationGuide ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold text-white mb-3">
              Surigao del Sur’s 5 Featured Destinations
            </h3>
            <ul className="space-y-2 text-xs text-stone-400">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <button
                    type="button"
                    onClick={() => onSelectDestinationModal(dest.id)}
                    className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                  >
                    <span className="font-mono-tabular text-teal-400 mr-1.5">
                      {dest.index}.
                    </span>
                    <span className="text-stone-200 font-medium">{dest.name}</span>
                    <span className="text-stone-500"> · {dest.municipality}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-white mb-3">
              Website Sections
            </h3>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  1. Home &amp; Tourism Banner
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  2. Featured Destinations (5 Sites)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('travel-guide')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  3. Travel Guide &amp; Budget Planner
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('culture-cuisine')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  4. Philippine Culture &amp; Cuisine
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('travel-tips')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  5. Travel Tips &amp; Eco-Safety
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  6. Visitor Contact &amp; Inquiry Form
                </button>
              </li>
            </ul>
          </div>
        </div>

        {showPresentationGuide && (
          <div className="py-8 border-b border-stone-800 space-y-8">
            <div>
              <p className="text-xs font-semibold text-teal-400 mb-1">
                {PRESENTATION_NOTES.courseTitle} · {PRESENTATION_NOTES.institution}
              </p>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                {PRESENTATION_NOTES.projectTitle} — 6-Point Presentation Overview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PRESENTATION_NOTES.points.map((pt) => (
                  <div
                    key={pt.number}
                    className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 text-xs"
                  >
                    <div className="font-mono-tabular font-bold text-teal-400 mb-1">
                      Point {pt.number} · {pt.title}
                    </div>
                    <p className="text-stone-300 leading-relaxed">{pt.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800">
              <h4 className="text-xs font-semibold text-white mb-2.5">
                Official Information &amp; Visual Credits / References
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-400">
                {PRESENTATION_NOTES.references.map((ref) => (
                  <li key={ref} className="leading-relaxed">
                    • {ref}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Karajaw Surigao Digital Tourism Portal · Surigao del Sur, Philippines. All information and visual assets properly credited.
          </p>
          <p>
            Living in the IT Era · Philippine Tourism Website Project
          </p>
        </div>
      </div>
    </footer>
  );
};
