import React, { useState } from 'react';
import { Heart, CreditCard, X, CheckCircle, Smartphone, Wallet } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';

interface DonateButtonProps {
  artistId: string;
  artistName: string;
  artworkId?: string;
  artworkTitle?: string;
  className?: string;
}

export const DonateButton: React.FC<DonateButtonProps> = ({
  artistId,
  artistName,
  artworkId,
  artworkTitle,
  className = ''
}) => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState(5);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationComplete, setDonationComplete] = useState(false);

  // Mock user data - in real app, this would come from auth context
  const userDailyDonations = 3; // Current donations today
  const maxDailyDonations = 10;
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const canDonate = userDailyDonations < maxDailyDonations;

  const handleDonate = async () => {
    if (!canDonate) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setDonationComplete(true);
    
    // Hide modal after 3 seconds
    setTimeout(() => {
      setShowDonateModal(false);
      setDonationComplete(false);
      setMessage('');
    }, 3000);
  };

  const paymentMethods = [
    { id: 'apple-pay', label: 'Apple Pay', icon: '🍎' },
    { id: 'google-pay', label: 'Google Pay', icon: '🔍' },
    { id: 'paypal', label: 'PayPal', icon: '💰' }
  ];

  const taxAmount = (donationAmount * 0.14).toFixed(2);
  const artistAmount = (donationAmount - parseFloat(taxAmount)).toFixed(2);

  const resetModal = () => {
    setPaymentMethod('');
    setAcceptedTerms(false);
  };

  if (!canDonate) {
    return (
      <Button
        size="sm"
        variant="ghost"
        disabled
        className={`text-gray-400 cursor-not-allowed ${className}`}
      >
        <Heart className="w-4 h-4 mr-1" />
        Daily limit reached
      </Button>
    );
  }

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={() => setShowDonateModal(true)}
        className={`hover:bg-gray-900 hover:text-white hover:border-gray-900 ${className}`}
      >
        <Heart className="w-4 h-4 mr-1" />
        Donate
      </Button>

      {/* Donate Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowDonateModal(false)} />
          <Card className="relative w-full max-w-md bg-gray-800 border-gray-700" padding="lg">
            {donationComplete ? (
              <div className="text-center space-y-6">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif">Thank You!</h3>
                  <p className="text-gray-300 mt-2">
                    Your €{donationAmount} donation to {artistName} has been processed. Artist receives €{artistAmount} (after 14% state tax).
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-serif">Support Artist</h3>
                  <button onClick={() => {setShowDonateModal(false); resetModal();}} className="text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="text-center space-y-4">
                  <CreditCard className="w-16 h-16 text-gray-300 mx-auto" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{artistName}</h4>
                    {artworkTitle && (
                      <p className="text-gray-400 text-sm">for "{artworkTitle}"</p>
                    )}
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
                        max="5"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(Number(e.target.value))}
                        className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-white font-bold">€{donationAmount}</span>
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <p>Maximum €10 per donation</p>
                      <p>Artist receives: €{artistAmount}</p>
                      <p>State tax (14%): €{taxAmount}</p>
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
                      <strong>Daily donations:</strong> {userDailyDonations}/{maxDailyDonations}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={handleDonate} 
                    loading={isProcessing}
                    disabled={isProcessing || !paymentMethod || !acceptedTerms}
                    fullWidth
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
            )}
          </Card>
        </div>
      )}
    </>
  );
};