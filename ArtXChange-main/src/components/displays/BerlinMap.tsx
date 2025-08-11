import React, { useState } from 'react';
import { MapPin, Monitor, Eye, Navigation, Clock, Zap, Plus, Minus } from 'lucide-react';
import { LEDDisplay } from '../../types';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface BerlinMapProps {
  displays: LEDDisplay[];
}

export const BerlinMap: React.FC<BerlinMapProps> = ({ displays }) => {
  const [selectedDisplay, setSelectedDisplay] = useState<LEDDisplay | null>(null);
  const [mapZoom, setMapZoom] = useState(1);
  const activeDisplays = displays.filter(display => display.isActive);
  const guerrillaLocations = displays.filter(display => display.isGuerrillaLocation);

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.2, 0.8));
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Map Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Monitor className="w-6 h-6 md:w-8 md:h-8 text-white" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-serif">Berlin Art Network</h2>
        </div>
        <p className="text-base md:text-lg text-white max-w-2xl mx-auto px-4">
          {activeDisplays.length} active displays • {guerrillaLocations.length} guerrilla locations
        </p>
      </div>

      {/* Interactive Berlin Map */}
      <Card className="relative h-[400px] md:h-[500px] bg-gray-100 overflow-hidden touch-pan-x touch-pan-y" elevated>
        {/* Map Background - Simplified Berlin Layout */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-300 origin-center"
          style={{ transform: `scale(${mapZoom})` }}
        >
          {/* Spree River representation */}
          <div className="absolute top-1/2 left-1/4 w-1/2 h-2 bg-gray-400 rounded-full transform -rotate-12 opacity-60"></div>
          
          {/* Major districts indicators */}
          <div className="absolute top-4 left-4 text-xs text-gray-500 font-medium">Mitte</div>
          <div className="absolute top-4 right-4 text-xs text-gray-500 font-medium">Friedrichshain</div>
          <div className="absolute bottom-4 left-4 text-xs text-gray-500 font-medium">Kreuzberg</div>
          <div className="absolute bottom-4 right-4 text-xs text-gray-500 font-medium">Prenzlauer Berg</div>

          {/* Display Pins */}
          {displays.map((display, index) => {
            const positions = [
              { left: '45%', top: '35%' }, // Alexanderplatz
              { left: '35%', top: '55%' }, // Potsdamer Platz
              { left: '55%', top: '40%' }, // Hackescher Markt
              { left: '40%', top: '45%' }, // Brandenburg Gate
              { left: '25%', top: '65%' }, // Kreuzberg
              { left: '70%', top: '30%' }  // Friedrichshain
            ];

            const position = positions[index] || { left: '50%', top: '50%' };

            return (
              <button
                key={display.id}
                onClick={() => setSelectedDisplay(display)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation ${
                  selectedDisplay?.id === display.id ? 'z-20' : 'z-10'
                }`}
                style={position}
              >
                <div className={`relative ${
                  selectedDisplay?.id === display.id 
                    ? 'scale-125' 
                    : ''
                }`}>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-elegant ${
                    display.isActive
                      ? display.isGuerrillaLocation
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-700 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {display.isGuerrillaLocation ? <Zap className="w-3 h-3 md:w-5 md:h-5" /> : <Monitor className="w-3 h-3 md:w-5 md:h-5" />}
                  </div>
                  
                  {display.isActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button
            onClick={handleZoomIn}
            className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-elegant flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Zoom in"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
          <button
            onClick={handleZoomOut}
            className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-elegant flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Zoom out"
          >
            <Minus className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-elegant">
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                <Zap className="w-2 h-2 text-white" />
              </div>
              <span>Guerrilla Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
                <Monitor className="w-2 h-2 text-white" />
              </div>
              <span>Institutional Display</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span>Inactive</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Display Details */}
      {selectedDisplay && (
        <Card className="animate-scale-in" elevated>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-serif">
                    {selectedDisplay.name}
                  </h3>
                  {selectedDisplay.isGuerrillaLocation && (
                    <span className="inline-flex items-center px-2 py-1 bg-gray-900 text-white text-xs rounded-full mt-2 sm:mt-0 w-fit">
                      <Zap className="w-3 h-3 mr-1" />
                      <span>Guerrilla</span>
                    </span>
                  )}
                </div>
                <div className="flex items-start text-gray-600 space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{selectedDisplay.address}</span>
                </div>
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                    selectedDisplay.accessibility === 'public' 
                      ? 'bg-gray-100 text-gray-700'
                      : selectedDisplay.accessibility === 'semi-public'
                      ? 'bg-gray-200 text-gray-800'
                      : 'bg-gray-300 text-gray-900'
                  }`}>
                    {selectedDisplay.accessibility.replace('-', ' ')} access
                  </span>
                </div>
              </div>

              {selectedDisplay.currentArtwork && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 font-serif">Currently Displaying</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <h5 className="font-semibold text-gray-900">{selectedDisplay.currentArtwork.title}</h5>
                    <p className="text-sm text-gray-600">by {selectedDisplay.currentArtwork.artistName}</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedDisplay.currentArtwork.hashtags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{selectedDisplay.currentArtwork.votes} votes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Updated 2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Button size="sm" variant="outline" className="w-full sm:w-auto">
                  Get Directions
                </Button>
                <Button size="sm" variant="ghost" className="w-full sm:w-auto">
                  View Details
                </Button>
              </div>
            </div>

            {selectedDisplay.currentArtwork && (
              <div className="space-y-4">
                <img
                  src={selectedDisplay.currentArtwork.imageUrl}
                  alt={selectedDisplay.currentArtwork.title}
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedDisplay.currentArtwork.description}
                </p>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};