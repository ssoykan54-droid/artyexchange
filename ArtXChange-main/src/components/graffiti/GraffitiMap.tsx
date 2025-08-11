import React, { useState } from 'react';
import { MapPin, Palette, Plus, Minus, Navigation, Search, Filter, Eye, Zap, Paintbrush, Users } from 'lucide-react';
import { GraffitiMural } from '../../data/graffitiMurals';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface GraffitiMapProps {
  murals: GraffitiMural[];
}

export const GraffitiMap: React.FC<GraffitiMapProps> = ({ murals }) => {
  const [selectedMural, setSelectedMural] = useState<GraffitiMural | null>(null);
  const [mapZoom, setMapZoom] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Locations', icon: MapPin },
    { id: 'iconic', label: 'Iconic Murals', icon: Palette },
    { id: 'historical', label: 'Historical', icon: MapPin },
    { id: 'skatepark', label: 'Skateparks', icon: Zap },
    { id: 'legal-wall', label: 'Legal Walls', icon: Paintbrush },
    { id: 'hotspot', label: 'Hotspots', icon: Users }
  ];

  const filteredMurals = murals.filter(mural => {
    const matchesSearch = mural.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mural.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || mural.type === selectedFilter ||
                         (selectedFilter === 'iconic' && mural.isIconic);
    return matchesSearch && matchesFilter;
  });

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.2, 0.8));
  };

  return (
    <div className="space-y-8">
      {/* Map Header */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center space-x-3">
          <Palette className="w-8 h-8 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">Interactive Graffiti Map</h2>
        </div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {filteredMurals.length} locations • {murals.filter(m => m.isIconic).length} iconic pieces • {murals.filter(m => m.type === 'legal-wall').length} legal walls
        </p>
      </div>

      {/* Map Filters */}
      <Card className="mb-6 bg-gray-800 border-gray-700" elevated>
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-300" />
            <h3 className="text-lg font-semibold text-white font-serif">Filter Locations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Search locations or artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="w-5 h-5" />}
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 font-serif">Category</label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
              >
                {filterOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Interactive Berlin Map */}
      <Card className="relative h-[500px] bg-gray-100 overflow-hidden" elevated>
        {/* Map Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-300 origin-center"
          style={{ transform: `scale(${mapZoom})` }}
        >
          {/* Spree River representation */}
          <div className="absolute top-1/2 left-1/4 w-1/2 h-2 bg-blue-300 rounded-full transform -rotate-12 opacity-60"></div>
          
          {/* Major districts indicators */}
          <div className="absolute top-4 left-4 text-xs text-gray-600 font-medium">Mitte</div>
          <div className="absolute top-4 right-4 text-xs text-gray-600 font-medium">Friedrichshain</div>
          <div className="absolute bottom-4 left-4 text-xs text-gray-600 font-medium">Kreuzberg</div>
          <div className="absolute bottom-4 right-4 text-xs text-gray-600 font-medium">Köpenick</div>

          {/* Mural Pins */}
          {filteredMurals.map((mural, index) => {
            const positions = [
              { left: '65%', top: '45%' }, // East Side Gallery area
              { left: '67%', top: '47%' },
              { left: '63%', top: '43%' },
              { left: '69%', top: '49%' },
              { left: '61%', top: '41%' },
              { left: '25%', top: '65%' }, // Kreuzberg
              { left: '70%', top: '35%' }, // Friedrichshain
              { left: '30%', top: '70%' }, // Kreuzberg
              { left: '35%', top: '55%' }, // Schöneberg
              { left: '55%', top: '25%' }, // Moabit
              { left: '85%', top: '65%' }, // Köpenick (Mellowpark)
              { left: '45%', top: '25%' }, // Wedding
              { left: '52%', top: '15%' }, // Prenzlauer Berg
              { left: '15%', top: '45%' }, // Grunewald
              { left: '72%', top: '38%' }, // RAW Gelände
              { left: '68%', top: '42%' }, // Holzmarkt
              { left: '71%', top: '45%' }  // Boxhagener Platz
            ];

            const position = positions[index] || { left: '50%', top: '50%' };

            const getMarkerColor = (type: string, isIconic?: boolean) => {
              if (isIconic) return 'bg-yellow-500 text-white';
              switch (type) {
                case 'skatepark': return 'bg-green-500 text-white';
                case 'legal-wall': return 'bg-purple-500 text-white';
                case 'hotspot': return 'bg-red-500 text-white';
                case 'historical': return 'bg-blue-500 text-white';
                default: return 'bg-gray-600 text-white';
              }
            };

            const getMarkerIcon = (type: string) => {
              switch (type) {
                case 'skatepark': return Zap;
                case 'legal-wall': return Paintbrush;
                case 'hotspot': return Users;
                default: return Palette;
              }
            };

            const MarkerIcon = getMarkerIcon(mural.type);

            return (
              <button
                key={mural.id}
                onClick={() => setSelectedMural(mural)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 active:scale-95 ${
                  selectedMural?.id === mural.id ? 'z-20' : 'z-10'
                }`}
                style={position}
                title={mural.title}
              >
                <div className={`relative ${
                  selectedMural?.id === mural.id 
                    ? 'scale-125' 
                    : ''
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                    getMarkerColor(mural.type, mural.isIconic)
                  }`}>
                    <MarkerIcon className="w-5 h-5" />
                  </div>
                  
                  {mural.isIconic && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
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
            className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Zoom in"
          >
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={handleZoomOut}
            className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Zoom out"
          >
            <Minus className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <Palette className="w-2 h-2 text-white" />
              </div>
              <span>Iconic Murals</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <Palette className="w-2 h-2 text-white" />
              </div>
              <span>Historical</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <Zap className="w-2 h-2 text-white" />
              </div>
              <span>Skateparks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                <Paintbrush className="w-2 h-2 text-white" />
              </div>
              <span>Legal Walls</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <Users className="w-2 h-2 text-white" />
              </div>
              <span>Hotspots</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Results Summary */}
      <div className="mb-6">
        <p className="text-gray-300">
          Showing <span className="font-semibold">{filteredMurals.length}</span> of <span className="font-semibold">{murals.length}</span> murals
        </p>
      </div>

      {/* Mural Details */}
      {selectedMural && (
        <Card className="animate-scale-in bg-gray-800 border-gray-700" elevated>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-2xl font-bold text-white font-serif">
                    {selectedMural.title}
                  </h3>
                  {selectedMural.isIconic && (
                    <span className="inline-flex items-center px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">
                      Iconic
                    </span>
                  )}
                  <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${
                    selectedMural.type === 'skatepark' ? 'bg-green-500 text-white' :
                    selectedMural.type === 'legal-wall' ? 'bg-purple-500 text-white' :
                    selectedMural.type === 'hotspot' ? 'bg-red-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {selectedMural.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                <div className="flex items-start text-gray-300 space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{selectedMural.address}</span>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedMural.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Palette className="w-4 h-4" />
                    <span>{selectedMural.medium}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white font-serif">Artist & Cultural Background</h4>
                <div className="bg-gray-700 rounded-lg p-4 space-y-3">
                  <h5 className="font-semibold text-gray-200">Artist: {selectedMural.artist}</h5>
                  <p className="text-gray-300 leading-relaxed">{selectedMural.culturalBackground}</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Get Directions
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <img
                src={selectedMural.imageUrl}
                alt={selectedMural.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-300"><strong>Location:</strong> {selectedMural.location}</p>
                <p className="text-sm text-gray-300"><strong>Year Created:</strong> {selectedMural.year}</p>
                <p className="text-sm text-gray-300"><strong>Medium:</strong> {selectedMural.medium}</p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};