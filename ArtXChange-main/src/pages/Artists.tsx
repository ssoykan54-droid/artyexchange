import React, { useState } from 'react';
import { User, Trophy, Heart, Calendar, Search, Filter, TrendingUp } from 'lucide-react';
import { mockArtists, mockArtworks } from '../data/mockData';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const Artists: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('votes');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const sortOptions = [
    { value: 'votes', label: 'Highest Votes' },
    { value: 'recent', label: 'Most Recent' },
    { value: 'artworks', label: 'Most Artworks' },
    { value: 'name', label: 'Artist Name' }
  ];

  const categories = ['all', 'Urban', 'Nature', 'Abstract', 'Portrait', 'Digital', 'Traditional'];

  const filteredArtists = mockArtists
    .filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || artist.categories.includes(categoryFilter);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'votes':
          return b.totalVotes - a.totalVotes;
        case 'recent':
          return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
        case 'artworks':
          return b.artworks.length - a.artworks.length;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Featured Artists</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the talented creators who shape Berlin's digital art landscape through their innovative contributions to our community platform.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-300" />
              <h3 className="text-lg font-semibold text-white font-serif">Filter Artists</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Search artists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search className="w-5 h-5" />}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 font-serif">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 font-serif">Category</label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-gray-300">
            Showing <span className="font-semibold">{filteredArtists.length}</span> of <span className="font-semibold">{mockArtists.length}</span> artists
          </p>
        </div>

        {/* Artist Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredArtists.map((artist, index) => (
            <Card key={artist.id} padding="lg" className="animate-slide-up bg-gray-800 border-gray-700 hover:shadow-elegant-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }} elevated>
              <div className="space-y-6">
                {/* Artist Info */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-gray-900" />
                    </div>
                    <h2 className="text-xl font-bold text-white font-serif">{artist.name}</h2>
                    <p className="text-gray-300 mt-2 leading-relaxed text-sm">{artist.bio}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-gray-700 rounded-xl p-3">
                      <div className="text-xl font-bold text-white">{artist.artworks.length}</div>
                      <div className="text-xs text-gray-300">Artworks</div>
                    </div>
                    <div className="text-center bg-gray-700 rounded-xl p-3">
                      <div className="text-xl font-bold text-white">{artist.totalVotes}</div>
                      <div className="text-xs text-gray-300">Total Votes</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-400 justify-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Joined {new Date(artist.joinDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {artist.categories.map(category => (
                        <span key={category} className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  
                  <div className="flex space-x-3 justify-center">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      View Profile
                    </Button>
                    <Button size="sm" variant="primary">
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <Card className="mt-16 bg-gray-800 border-gray-700" elevated>
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-white font-serif">Community Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white font-serif">{mockArtworks.length}</div>
                <div className="text-gray-300">Total Artworks</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white font-serif">{mockArtists.length}</div>
                <div className="text-gray-300">Active Artists</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white font-serif">
                  {mockArtworks.reduce((sum, artwork) => sum + artwork.votes, 0)}
                </div>
                <div className="text-gray-300">Community Votes</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white font-serif">12</div>
                <div className="text-gray-300">LED Displays</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};