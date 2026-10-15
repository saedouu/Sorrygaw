/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedDestinations } from './components/FeaturedDestinations';
import { TravelGuideSection } from './components/TravelGuideSection';
import { CultureCuisineSection } from './components/CultureCuisineSection';
import { TravelTipsSection } from './components/TravelTipsSection';
import { ContactInquirySection } from './components/ContactInquirySection';
import { DestinationModal } from './components/DestinationModal';
import { Footer } from './components/Footer';
import { DESTINATIONS, Destination } from './data/surigaoData';

export default function App() {
  const [selectedDestinationIds, setSelectedDestinationIds] = useState<string[]>([
    'hinatuan-enchanted-river',
    'tinuy-an-falls',
    'britania-group-of-islands'
  ]);
  const [modalDestination, setModalDestination] = useState<Destination | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleDestination = (id: string) => {
    setSelectedDestinationIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectDestinationModalById = (id: string) => {
    const found = DESTINATIONS.find((d) => d.id === id);
    if (found) {
      setModalDestination(found);
    }
  };

  const handlePlanTripWithDestination = (id: string) => {
    if (!selectedDestinationIds.includes(id)) {
      setSelectedDestinationIds((prev) => [...prev, id]);
    }
    setModalDestination(null);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900">
      <Navbar
        selectedCount={selectedDestinationIds.length}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        <HeroSection
          onExploreDestinations={() => handleNavigate('destinations')}
          onSelectDestinationModal={handleSelectDestinationModalById}
        />

        <FeaturedDestinations
          selectedIds={selectedDestinationIds}
          onToggleSelect={handleToggleDestination}
          onOpenModal={(dest) => setModalDestination(dest)}
        />

        <TravelGuideSection
          selectedDestinationIds={selectedDestinationIds}
          onToggleDestination={handleToggleDestination}
        />

        <CultureCuisineSection />

        <TravelTipsSection />

        <ContactInquirySection
          selectedDestinationIds={selectedDestinationIds}
          onToggleDestination={handleToggleDestination}
        />
      </main>

      <Footer
        onNavigate={handleNavigate}
        onSelectDestinationModal={handleSelectDestinationModalById}
      />

      <DestinationModal
        destination={modalDestination}
        isSelected={
          modalDestination
            ? selectedDestinationIds.includes(modalDestination.id)
            : false
        }
        onToggleSelect={handleToggleDestination}
        onClose={() => setModalDestination(null)}
        onPlanTripWithDestination={handlePlanTripWithDestination}
      />
    </div>
  );
}
