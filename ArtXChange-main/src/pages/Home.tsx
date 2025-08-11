import React, { useState } from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedArtworks } from '../components/home/FeaturedArtworks';
import { HowItWorks } from '../components/home/HowItWorks';
import { GuerrillaMarketingModal } from '../components/modals/GuerrillaMarketingModal';

export const Home: React.FC = () => {
  const [showGuerrillaMarketingModal, setShowGuerrillaMarketingModal] = useState(false);
  
  const toggleGuerrillaMarketingModal = () => {
    setShowGuerrillaMarketingModal(!showGuerrillaMarketingModal);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <Hero onOpenGuerrillaModal={toggleGuerrillaMarketingModal} />
      <HowItWorks />
      <FeaturedArtworks />
      <GuerrillaMarketingModal 
        isOpen={showGuerrillaMarketingModal} 
        onClose={toggleGuerrillaMarketingModal} 
      />
    </div>
  );
};