import React, { useState, useEffect } from 'react';
import { Heart, User, Calendar, MapPin, Check, Download, ShoppingCart, X, CreditCard } from 'lucide-react';
import { Artwork } from '../../types';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { DonateButton } from '../ui/DonateButton';

interface ArtworkCardProps {
  artwork: Artwork;
  onVote?: (id: string) => void;
  showVoteButton?: boolean;
  showArtist?: boolean;
  showLocation?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  onVote,
  showVoteButton = true,
  showArtist = true,
  showLocation = false,
  size = 'md'
}) => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [isVoting, setIsVoting] = useState(false);
  const [showVoteConfirmation, setShowVoteConfirmation] = useState(false);
  const [donationAmount, setDonationAmount] = useState(5);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  // Mock user data
  const userDailyDonations = 3;

  useEffect(() => {
    // Check if user has already voted for this artwork (using localStorage as IP simulation)
    const votedArtworks = JSON.parse(localStorage.getItem('votedArtworks') || '[]');
    setHasVoted(votedArtworks.includes(artwork.id));
  }, [artwork.id]);

  const handleVote = async () => {
    if (hasVoted || isVoting) return;

    setIsVoting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Store vote in localStorage (simulating IP-based voting)
    const votedArtworks = JSON.parse(localStorage.getItem('votedArtworks') || '[]');
    votedArtworks.push(artwork.id);
    localStorage.setItem('votedArtworks', JSON.stringify(votedArtworks));
    
    setHasVoted(true);
    setIsVoting(false);
    setShowVoteConfirmation(true);
    onVote?.(artwork.id);

    // Hide confirmation after 3 seconds
    setTimeout(() => setShowVoteConfirmation(false), 3000);
  };

  const handleDonate = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setShowDonateModal(false);
    setMessage('');
  };

  const resetModal = () => {
    setPaymentMethod('');
    setAcceptedTerms(false);
  };

  const imageHeights = {
    sm: 'h-40 sm:h-48',
    md: 'h-48 sm:h-64',
    lg: 'h-64 sm:h-80'
  };

  return (
    <>
      <Card hover className="overflow-hidden group">
        <div className="relative mb-4">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className={`w-full ${imageHeights[size]} object-cover rounded-lg group-hover:scale-105 transition-transform duration-500`}
          />
          {artwork.featured && (
            <div className="absolute top-3 right-3 bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
          {showVoteConfirmation && (
            <div className="absolute inset-0 bg-gray-900/80 rounded-lg flex items-center justify-center animate-fade-in">
              <div className="bg-white rounded-lg p-4 flex items-center space-x-2 shadow-elegant">
                <Check className="w-5 h-5 text-gray-700" />
                <span className="text-gray-900 font-medium">Vote Recorded!</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 font-serif group-hover:text-gray-700 transition-colors">
              {artwork.title}
            </h3>
            {showArtist && (
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <User className="w-4 h-4 mr-1 flex-shrink-0" />
                <span className="font-medium truncate">{artwork.artistName}</span>
              </div>
            )}
            {showLocation && artwork.displayLocation && (
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                <span className="truncate">Currently at {artwork.displayLocation}</span>
              </div>
            )}
          </div>

          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {artwork.description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-3 sm:space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                <span className="font-medium">{artwork.votes}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">{new Date(artwork.createdAt).toLocaleDateString()}</span>
                <span className="sm:hidden">{new Date(artwork.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
            </div>

            {showVoteButton && (
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant={hasVoted ? "ghost" : "outline"}
                  icon={hasVoted ? Check : Heart}
                  onClick={handleVote}
                  disabled={hasVoted || isVoting}
                  className={`transition-all duration-200 ${
                    hasVoted 
                      ? 'text-gray-600 cursor-default' 
                      : 'hover:bg-gray-900 hover:text-white hover:border-gray-900'
                  }`}
                >
                  {isVoting ? 'Voting...' : hasVoted ? 'Voted' : 'Vote'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  icon={Heart}
                  onClick={() => setShowDonateModal(true)}
                  className="hover:bg-gray-900 hover:text-white hover:border-gray-900"
                >
                  Donate
                </Button>
              </div>
            )}
            
            {!showVoteButton && (
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  icon={Heart}
                  onClick={() => setShowDonateModal(true)}
                  className="hover:bg-gray-900 hover:text-white hover:border-gray-900"
                >
                  Donate
                </Button>
                <DonateButton
                  artistId={artwork.artistEmail}
                  artistName={artwork.artistName}
                  artworkId={artwork.id}
                  artworkTitle={artwork.title}
                />
              </div>
            )}
          </div>

          {hasVoted && !showVoteConfirmation && (
            <div className="text-center">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                <Check className="w-3 h-3 mr-1" />
                Already voted
              </span>
            </div>
          )}
        </div>
      </Card>

      {/* Donate Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowDonateModal(false)} />
          <Card className="relative w-full max-w-md bg-gray-800 border-gray-700" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">Support Artist</h3>
                <button onClick={() => setShowDonateModal(false)} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-center space-y-4">
                <CreditCard className="w-16 h-16 text-gray-300 mx-auto" />
                <div>
                  <h4 className="text-lg font-semibold text-white">{artwork.title}</h4>
                  <p className="text-gray-400 text-sm">by {artwork.artistName}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-serif">
                    Donation Amount
                  </label>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-300">€</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-white font-bold">€{donationAmount}</span>
                  </div>
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>Maximum €10 per donation</p>
                    <p>Artist receives: €{(donationAmount * 0.86).toFixed(2)}</p>
                    <p>State tax (14%): €{(donationAmount * 0.14).toFixed(2)}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-serif">
                    Message (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Leave a message for the artist..."
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white resize-vertical"
                    rows={3}
                    maxLength={200}
                  />
                  <p className="text-xs text-gray-400">{message.length}/200 characters</p>
                </div>

                {/* Payment Methods */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-serif">
                    Payment Method <span className="text-red-400">*</span>
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'apple-pay', label: 'Apple Pay', icon: '🍎' },
                      { id: 'google-pay', label: 'Google Pay', icon: '🔍' },
                      { id: 'paypal', label: 'PayPal', icon: '💰' }
                    ].map((method) => (
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
                    id="acceptedTerms"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400"
                  />
                  <label htmlFor="acceptedTerms" className="text-sm text-gray-300">
                    I understand that violations may result in account restrictions and serious legal actions.
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                </div>

                <div className="p-3 bg-gray-700 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    <strong>Daily donations:</strong> {userDailyDonations}/10
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <Button 
                  fullWidth
                  onClick={handleDonate} 
                  loading={isProcessing}
                  disabled={isProcessing || !paymentMethod || !acceptedTerms}
                >
                  {isProcessing ? 'Processing...' : `Donate €${donationAmount}`}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {setShowDonateModal(false); resetModal();}} 
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
    </>
  );
};