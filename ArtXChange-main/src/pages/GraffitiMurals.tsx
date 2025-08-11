import React from 'react';
import { Palette, MapPin, Calendar, Eye, Zap, Paintbrush, Users } from 'lucide-react';
import { berlinGraffitiMurals } from '../data/graffitiMurals';
import { GraffitiMap as GraffitiMapComponent } from '../components/graffiti/GraffitiMap';
import { Card } from '../components/ui/Card';

export const GraffitiMap: React.FC = () => {
  const iconicMurals = berlinGraffitiMurals.filter(mural => mural.isIconic);
  const skateparks = berlinGraffitiMurals.filter(mural => mural.type === 'skatepark');
  const legalWalls = berlinGraffitiMurals.filter(mural => mural.type === 'legal-wall');
  const hotspots = berlinGraffitiMurals.filter(mural => mural.type === 'hotspot');
  const totalMurals = berlinGraffitiMurals.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-4">
            <Palette className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Berlin Graffiti Map</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover Berlin's vibrant street art scene, from iconic murals and legal painting spots to underground hotspots and skate culture hubs across the city.
          </p>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <Card className="text-center bg-gray-800 border-gray-700" elevated>
            <div className="space-y-3">
              <Palette className="w-8 h-8 text-yellow-400 mx-auto" />
              <div>
                <div className="text-2xl font-bold text-white">{iconicMurals.length}</div>
                <div className="text-gray-300 text-sm">Iconic Murals</div>
              </div>
            </div>
          </Card>
          <Card className="text-center bg-gray-800 border-gray-700" elevated>
            <div className="space-y-3">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto" />
              <div>
                <div className="text-2xl font-bold text-white">{berlinGraffitiMurals.filter(m => m.type === 'historical').length}</div>
                <div className="text-gray-300 text-sm">Historical</div>
              </div>
            </div>
          </Card>
          <Card className="text-center bg-gray-800 border-gray-700" elevated>
            <div className="space-y-3">
              <Zap className="w-8 h-8 text-green-400 mx-auto" />
              <div>
                <div className="text-2xl font-bold text-white">{skateparks.length}</div>
                <div className="text-gray-300 text-sm">Skateparks</div>
              </div>
            </div>
          </Card>
          <Card className="text-center bg-gray-800 border-gray-700" elevated>
            <div className="space-y-3">
              <Paintbrush className="w-8 h-8 text-purple-400 mx-auto" />
              <div>
                <div className="text-2xl font-bold text-white">{legalWalls.length}</div>
                <div className="text-gray-300 text-sm">Legal Walls</div>
              </div>
            </div>
          </Card>
          <Card className="text-center bg-gray-800 border-gray-700" elevated>
            <div className="space-y-3">
              <Users className="w-8 h-8 text-red-400 mx-auto" />
              <div>
                <div className="text-2xl font-bold text-white">{hotspots.length}</div>
                <div className="text-gray-300 text-sm">Hotspots</div>
              </div>
            </div>
          </Card>
        </div>
        {/* Interactive Graffiti Map */}
        <div className="mb-16">
          <GraffitiMapComponent murals={berlinGraffitiMurals} />
        </div>

        {/* Featured Categories */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center font-serif">Featured Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iconicMurals.map((mural, index) => (
              <Card key={mural.id} className="bg-gray-800 border-gray-700 hover:shadow-elegant-lg transition-all duration-300" hover>
                <div className="space-y-4">
                  <img
                    src={mural.imageUrl}
                    alt={mural.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white font-serif">{mural.title}</h3>
                      <p className="text-gray-300">by {mural.artist}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{mural.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{mural.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">{mural.culturalBackground}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <Card className="mt-16 text-center bg-gray-800 border-gray-700" elevated>
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white font-serif">Berlin Street Art Heritage</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white font-serif">{totalMurals}</div>
                <div className="text-gray-300">Total Locations</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white font-serif">{iconicMurals.length}</div>
                <div className="text-gray-300">Iconic Pieces</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white font-serif">30+</div>
                <div className="text-gray-300">Years of History</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white font-serif">8</div>
                <div className="text-gray-300">Districts</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};