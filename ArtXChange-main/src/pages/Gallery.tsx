import React, { useState } from 'react';
import { Search, Filter, SortAsc, Heart, Calendar, TrendingUp, User, Hash, CreditCard, X, CheckCircle, HelpCircle, Smartphone, Wallet } from 'lucide-react';
import { mockArtworks, popularHashtags } from '../data/mockData';
import { ArtworkCard } from '../components/artwork/ArtworkCard';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { HowItWorksModal } from '../components/ui/HowItWorksModal';

export const Gallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('votes');
  const [dateFilter, setDateFilter] = useState('all');
  const [votedArtworks, setVotedArtworks] = useState<Set<string>>(new Set());
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [pendingVoteId, setPendingVoteId] = useState<string | null>(null);
  const [showVoteConfirmation, setShowVoteConfirmation] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [userDailyVotes, setUserDailyVotes] = useState(3); // Mock data

  const categories = ['all', 'Urban', 'Nature', 'Abstract', 'Portrait', 'Digital', 'Traditional', 'Mixed Media', 'Photography'];
  const sortOptions = [
    { value: 'votes', label: 'Most Voted' },
    { value: 'recent', label: 'Most Recent' },
    { value: 'title', label: 'Alphabetical' },
    { value: 'artist', label: 'Artist Name' }
  ];
  const dateOptions = [
    { value: 'all', label: 'All Time' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'year', label: 'This Year' }
  ];

  const paymentMethods = [
    { id: 'apple-pay', label: 'Apple Pay', icon: '🍎' },
    { id: 'google-pay', label: 'Google Pay', icon: '🔍' },
    { id: 'paypal', label: 'PayPal', icon: '💰' }
  ];

  const handleVoteClick = (artworkId: string) => {
    // Check if already voted
    if (votedArtworks.has(artworkId)) {
      return;
    }
    
    // Check daily vote limit
    if (userDailyVotes >= 10) {
      return;
    }
    
    // Show payment modal for €0.10 micro-transaction
    setPendingVoteId(artworkId);
    setShowPaymentModal(true);
  };

  const handlePaymentComplete = () => {
    if (pendingVoteId) {
      setVotedArtworks(prev => new Set([...prev, pendingVoteId]));
      setUserDailyVotes(prev => prev + 1);
      setShowPaymentModal(false);
      setShowVoteConfirmation(true);
      setPendingVoteId(null);
      
      // Hide confirmation after 3 seconds
      setTimeout(() => setShowVoteConfirmation(false), 3000);
    }
  };

  const resetPaymentModal = () => {
    setPaymentMethod('');
    setAcceptedTerms(false);
  };

  const handleHashtagToggle = (hashtag: string) => {
    setSelectedHashtags(prev => 
      prev.includes(hashtag)
        ? prev.filter(h => h !== hashtag)
        : [...prev, hashtag]
    );
  };

  const filteredArtworks = mockArtworks
    .filter(artwork => {
      const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          artwork.artistName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          artwork.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
      const matchesHashtags = selectedHashtags.length === 0 || 
                             selectedHashtags.some(tag => artwork.hashtags.includes(tag));
      return matchesSearch && matchesCategory && matchesHashtags;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'votes':
          return b.votes - a.votes;
        case 'recent':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'artist':
          return a.artistName.localeCompare(b.artistName);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Community Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover exceptional artworks from Berlin's creative community and participate in the democratic curation process.
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

        {/* Vote Confirmation */}
        {showVoteConfirmation && (
          <div className="fixed top-4 right-4 z-50 animate-slide-in">
            <Card className="bg-gray-800 border-gray-700 p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Vote recorded successfully!</span>
              </div>
            </Card>
          </div>
        )}

        {/* Advanced Filters */}
        <Card className="mb-8 bg-gray-800 border-gray-700 modal-content" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-300" />
              <h3 className="text-lg font-semibold text-white font-serif">Filter & Sort</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <Input
                placeholder="Search artworks or artists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search className="w-5 h-5" />}
              />

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 font-serif">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
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

              {/* Date Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 font-serif">Date Range</label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
                >
                  {dateOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Hashtag Filters */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Hash className="w-4 h-4 text-gray-300" />
                <span className="text-sm font-medium text-gray-300 font-serif">Popular Hashtags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularHashtags.slice(0, 10).map(hashtag => (
                  <button
                    key={hashtag}
                    onClick={() => handleHashtagToggle(hashtag)}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                      selectedHashtags.includes(hashtag)
                        ? 'bg-white text-gray-900'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    #{hashtag}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="ghost" className="text-xs text-gray-300 hover:text-white">
                <TrendingUp className="w-4 h-4 mr-1" />
                Trending
              </Button>
              <Button size="sm" variant="ghost" className="text-xs text-gray-300 hover:text-white">
                <Calendar className="w-4 h-4 mr-1" />
                New Today
              </Button>
              <Button size="sm" variant="ghost" className="text-xs text-gray-300 hover:text-white">
                <Heart className="w-4 h-4 mr-1" />
                Most Loved
              </Button>
            </div>
          </div>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <p className="text-gray-300">
              Showing <span className="font-semibold">{filteredArtworks.length}</span> of <span className="font-semibold">{mockArtworks.length}</span> artworks
            </p>
            {(searchTerm || selectedHashtags.length > 0) && (
              <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                {searchTerm && (
                  <span>Search: "<span className="font-medium">{searchTerm}</span>"</span>
                )}
                {selectedHashtags.map(tag => (
                  <span key={tag} className="bg-gray-700 px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {votedArtworks.size > 0 && (
            <div className="flex items-center space-x-2 text-white bg-gray-700 px-3 py-2 rounded-lg">
              <Heart className="w-5 h-5" />
              <span className="font-medium">
                {votedArtworks.size} vote{votedArtworks.size !== 1 ? 's' : ''} cast
              </span>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        {filteredArtworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork, index) => (
              <div key={artwork.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ArtworkCard
                  artwork={artwork}
                  onVote={() => handleVoteClick(artwork.id)}
                  showVoteButton={!votedArtworks.has(artwork.id)}
                  showLocation={true}
                />
                {votedArtworks.has(artwork.id) && (
                  <div className="mt-3 text-center">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
                      <Heart className="w-4 h-4 mr-1" />
                      Vote Recorded
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Card className="text-center py-16 bg-gray-800 border-gray-700" elevated>
            <div className="space-y-4">
              <Search className="w-16 h-16 text-gray-400 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-white font-serif">No artworks found</h3>
                <p className="text-gray-300">Try adjusting your search criteria or explore different categories</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedHashtags([]);
                  setSortBy('votes');
                  setDateFilter('all');
                }}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Clear All Filters
              </Button>
            </div>
          </Card>
        )}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 smooth-scroll-enhanced">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPaymentModal(false)} />
          <Card className="relative w-full max-w-md bg-gray-800 border-gray-700 modal-content" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">Voting Fee</h3>
                <button onClick={() => { setShowPaymentModal(false); resetPaymentModal(); }} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-center space-y-4">
                <CreditCard className="w-16 h-16 text-gray-300 mx-auto" />
                <div>
                  <div className="text-3xl font-bold text-white">€0.10</div>
                  <p className="text-gray-300">Voting participation fee</p>
                </div>
                <p className="text-sm text-gray-400">
                  This fee is paid directly to the government and helps prevent spam voting.
                </p>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 font-serif">
                  Payment Method <span className="text-red-400">*</span>
                </label>
                <div className="space-y-2">
                  {paymentMethods.map(method => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full p-3 rounded-lg border-2 text-left transition-all duration-200 flex items-center space-x-3 ${
                        paymentMethod === method.id
                          ? 'border-white bg-gray-700'
                          : 'border-gray-600 hover:border-gray-500 bg-gray-800'
                      }`}
                    >
                      <span className="text-lg">{method.icon}</span>
                      <span className="text-gray-300">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptedVoteTerms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400"
                />
                <label htmlFor="acceptedVoteTerms" className="text-sm text-gray-300">
                  I understand that violations may result in account restrictions and serious legal actions.
                  <span className="text-red-400 ml-1">*</span>
                </label>
              </div>

              <div className="p-3 bg-gray-700 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong>Daily votes:</strong> {userDailyVotes}/10
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handlePaymentComplete} 
                  disabled={!paymentMethod || !acceptedTerms}
                  fullWidth
                >
                  Pay €0.10 & Vote
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => { setShowPaymentModal(false); resetPaymentModal(); }} 
                  fullWidth
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* How It Works Modal */}
      <HowItWorksModal
        isOpen={showHowItWorks}
        onClose={() => setShowHowItWorks(false)}
        section="vote-discover"
      />
    </div>
  );
};