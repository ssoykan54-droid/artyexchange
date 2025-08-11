import React, { useState } from 'react';
import { MapPin, Monitor, Eye, Navigation, Clock } from 'lucide-react';
import { LEDDisplay } from '../../types';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface LEDDisplayMapProps {
  displays: LEDDisplay[];
}

export const LEDDisplayMap: React.FC<LEDDisplayMapProps> = ({ displays }) => {
  const [selectedDisplay, setSelectedDisplay] = useState<LEDDisplay | null>(null);
  const activeDisplays = displays.filter(display => display.isActive);

  return (
    <div className="space-y-8">
      {/* Map Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Monitor className="w-8 h-8 text-gray-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Active LED Displays</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {activeDisplays.length} displays currently showcasing community-selected artworks across Berlin
        </p>
      </div>

      {/* Interactive Map Placeholder */}
      <Card className="relative h-96 bg-gray-100 overflow-hidden" elevated>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Navigation className="w-16 h-16 text-gray-400 mx-auto" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-700 font-serif">Interactive Map</h3>
              <p className="text-gray-500">Click on display locations to view current artwork</p>
            </div>
          </div>
        </div>

        {/* Map Pins */}
        {activeDisplays.map((display, index) => (
          <button
            key={display.id}
            onClick={() => setSelectedDisplay(display)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
              selectedDisplay?.id === display.id ? 'z-20' : 'z-10'
            }`}
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${30 + (index * 10)}%`
            }}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
              selectedDisplay?.id === display.id 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}>
              <MapPin className="w-5 h-5" />
            </div>
          </button>
        ))}
      </Card>

      {/* Display Details */}
      {selectedDisplay && (
        <Card className="animate-scale-in" elevated>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                  {selectedDisplay.name}
                </h3>
                <div className="flex items-center text-gray-600 space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedDisplay.address}</span>
                </div>
              </div>

              {selectedDisplay.currentArtwork && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 font-serif">Currently Displaying</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <h5 className="font-semibold text-gray-900">{selectedDisplay.currentArtwork.title}</h5>
                    <p className="text-sm text-gray-600">by {selectedDisplay.currentArtwork.artistName}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
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

              <div className="flex space-x-3">
                <Button size="sm" variant="outline">
                  Get Directions
                </Button>
                <Button size="sm" variant="ghost">
                  View Details
                </Button>
              </div>
            </div>

            {selectedDisplay.currentArtwork && (
              <div className="space-y-4">
                <img
                  src={selectedDisplay.currentArtwork.imageUrl}
                  alt={selectedDisplay.currentArtwork.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedDisplay.currentArtwork.description}
                </p>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Display List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeDisplays.map((display) => (
          <Card 
            key={display.id} 
            hover 
            className={`cursor-pointer transition-all duration-200 ${
              selectedDisplay?.id === display.id ? 'ring-2 ring-gray-300' : ''
            }`}
            onClick={() => setSelectedDisplay(display)}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 font-serif">{display.name}</h3>
                  <p className="text-sm text-gray-600">{display.location}</p>
                </div>
                <div className="flex items-center space-x-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Active</span>
                </div>
              </div>

              {display.currentArtwork && (
                <div className="space-y-2">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={display.currentArtwork.imageUrl}
                      alt={display.currentArtwork.title}
                      className="w-full h-32 object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{display.currentArtwork.title}</p>
                    <p className="text-xs text-gray-600">by {display.currentArtwork.artistName}</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};