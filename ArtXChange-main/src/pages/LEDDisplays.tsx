import React, { useState } from 'react';
import { Monitor, MapPin, Activity, Zap, Building, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockLEDDisplays } from '../data/mockData';
import { BerlinMap } from '../components/displays/BerlinMap';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { HowItWorksModal } from '../components/ui/HowItWorksModal';

export const LEDDisplays: React.FC = () => {
  const [mapFilter, setMapFilter] = useState<string>('all');
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const activeDisplays = mockLEDDisplays.filter(display => display.isActive);
  const guerrillaLocations = mockLEDDisplays.filter(display => display.isGuerrillaLocation);
  const totalDisplays = mockLEDDisplays.length;

  const filterOptions = [
    { id: 'all', label: 'All Displays', icon: Monitor, count: totalDisplays },
    { id: 'active', label: 'Active', icon: Activity, count: activeDisplays.length },
    { id: 'guerrilla', label: 'Guerrilla Locations', icon: Zap, count: guerrillaLocations.length },
    { id: 'institutional', label: 'Institutional', icon: Building, count: mockLEDDisplays.filter(d => !d.isGuerrillaLocation).length }
  ];

  const filteredDisplays = mockLEDDisplays.filter(display => {
    switch (mapFilter) {
      case 'active':
        return display.isActive;
      case 'guerrilla':
        return display.isGuerrillaLocation;
      case 'institutional':
        return !display.isGuerrillaLocation;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="flex items-center justify-center space-x-3">
            <Monitor className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">LED Display Network</h1>
          </div>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Berlin Art Network • 5 active displays • 4 guerrilla locations
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              icon={HelpCircle}
              onClick={() => setShowHowItWorks(true)}
              className="border-gray-500 text-gray-300 hover:bg-gray-700"
            >
              How It Works?
            </Button>
          </div>
        </div>

        {/* Interactive Filter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {filterOptions.map((option) => (
            <Card 
              key={option.id}
              className={`text-center cursor-pointer transition-all duration-200 bg-gray-800 border-gray-700 ${
                mapFilter === option.id ? 'ring-2 ring-white' : 'hover:bg-gray-750'
              }`}
              onClick={() => setMapFilter(option.id)}
              elevated
            >
              <div className="space-y-3">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${
                  mapFilter === option.id ? 'bg-white' : 'bg-gray-700'
                }`}>
                  <option.icon className={`w-8 h-8 ${
                    mapFilter === option.id ? 'text-gray-900' : 'text-white'
                  }`} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white font-serif">{option.count}</div>
                  <div className="text-gray-300">{option.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Berlin Map */}
        <BerlinMap displays={filteredDisplays} />

        {/* Enhanced About the Network Section */}
        <div className="mt-16 space-y-8">
          <Card className="bg-gray-800 border-gray-700" elevated>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white font-serif">About the Network</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 font-serif mb-2">How It Works</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Our LED display network showcases community-voted artworks across Berlin's most vibrant locations. 
                      Each display rotates featured artworks based on voting results, ensuring democratic representation 
                      of the community's artistic preferences.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 font-serif mb-2">Guerrilla Locations</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Special guerrilla locations focus on street-level accessibility and community engagement, 
                      transforming public spaces into dynamic art galleries that reach diverse audiences throughout Berlin.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white font-serif mb-4">Network Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">50K+</div>
                      <div className="text-sm text-gray-300">Daily Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-sm text-gray-300">Operation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">5</div>
                      <div className="text-sm text-gray-300">Districts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-sm text-gray-300">Community Driven</div>
                    </div>
                  </div>
                </div>
                
                {/* Explore Guerrilla Partnership Button */}
                <div className="text-center">
                  <Link to="/advertisement">
                    <Button size="lg" variant="primary" icon={ArrowRight} iconPosition="right">
                      Explore Guerrilla Partnership
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Specifications */}
          <Card className="bg-gray-800 border-gray-700" elevated>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-serif">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Display Technology</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• High-resolution LED panels</li>
                    <li>• Weather-resistant design</li>
                    <li>• Energy-efficient operation</li>
                    <li>• Remote content management</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Content Management</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Real-time voting integration</li>
                    <li>• Automated content rotation</li>
                    <li>• Quality assurance filters</li>
                    <li>• Emergency override capability</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Community Features</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Democratic artwork selection</li>
                    <li>• Artist attribution display</li>
                    <li>• QR code integration</li>
                    <li>• Performance analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* How It Works Modal */}
      <HowItWorksModal
        isOpen={showHowItWorks}
        onClose={() => setShowHowItWorks(false)}
        section="led-displays"
      />
    </div>
  );
};