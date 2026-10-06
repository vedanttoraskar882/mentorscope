import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

export const App: React.FC = () => {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState<HTMLElement | null>(null);

  const handleOpenPilotModal = (e?: React.MouseEvent) => {
    if (e) {
      setModalTrigger(e.currentTarget as HTMLElement);
    } else {
      setModalTrigger(document.activeElement as HTMLElement);
    }
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-warm-100 text-slate-body">
      {/* Skip to Main Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-navy-900 text-white rounded-md font-medium shadow-modal"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header onRequestPilot={handleOpenPilotModal} />

      {/* Main Content Sections (1 to 6) */}
      <main id="main-content" className="flex-1">
        {/* 1. Home */}
        <Hero onRequestPilot={handleOpenPilotModal} />

        {/* 2. About */}
        <About />

        {/* 3. Platform */}
        <Platform />

        {/* 4. How it works */}
        <HowItWorks />

        {/* 5. Market pricing */}
        <Pricing onRequestPilot={handleOpenPilotModal} />

        {/* 6. FAQ */}
        <FAQ />
      </main>

      {/* 7. Footer */}
      <Footer onRequestPilot={handleOpenPilotModal} />

      {/* Request a Pilot Accessible Modal */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={handleClosePilotModal}
        triggerElement={modalTrigger}
      />
    </div>
  );
};

export default App;
