import React, { useState } from 'react';
import { UserPlus, Mail, User, Palette, Building, Calendar, ArrowLeft, CheckCircle, CreditCard, X, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { countries } from '../data/countries';

export const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
    passportId: '',
    accountType: '',
    category: '', // For artists
    eventCategories: [] as string[], // For event creators
    companyName: '', // For guerrilla partners
    handelsregisternummer: '', // For guerrilla partners
    taxVatNumber: '', // For guerrilla partners
    acceptedTerms: false,
    acceptedEnforcement: false,
    acceptedRestrictions: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const accountTypes = [
    {
      value: 'artist',
      label: 'Artist',
      icon: Palette,
      description: 'Submit artworks, participate in voting, connect with the community'
    },
    {
      value: 'event-creator',
      label: 'Event Creator',
      icon: Calendar,
      description: 'Create and manage events, workshops, and community gatherings'
    },
    {
      value: 'guerrilla-partner',
      label: 'Guerrilla Marketing Partner',
      icon: Building,
      description: 'Launch campaigns, collaborate with artists, support community initiatives'
    }
  ];

  const artistCategories = [
    'Urban Art', 'Digital Art', 'Abstract', 'Portrait', 'Nature', 'Photography', 'Mixed Media', 'Traditional', 'Other'
  ];

  const eventCategories = [
    'Music', 'Visual Art', 'Performance', 'Workshop', 'Festival', 'Other'
  ];

  const paymentMethods = [
    { id: 'credit-card', label: 'Credit Card', icon: '💳' },
    { id: 'sepa', label: 'SEPA Direct Debit', icon: '🏦' },
    { id: 'paypal', label: 'PayPal', icon: '💰' },
    { id: 'apple-pay', label: 'Apple Pay', icon: '🍎' },
    { id: 'google-pay', label: 'Google Pay', icon: '🔍' }
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleEventCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      eventCategories: prev.eventCategories.includes(category)
        ? prev.eventCategories.filter(c => c !== category)
        : [...prev.eventCategories, category]
    }));
  };
  const handleAccountTypeSelect = (type: string) => {
    setFormData(prev => ({ 
      ...prev, 
      accountType: type, 
      category: '', 
      eventCategories: [],
      companyName: '',
      handelsregisternummer: '',
      taxVatNumber: ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show payment modal for Event Creator accounts
    if (formData.accountType === 'event-creator') {
      setShowPaymentModal(true);
      return;
    }
    
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSuccess(true);
  };

  const handlePaymentComplete = async () => {
    setShowPaymentModal(false);
    setIsLoading(true);

    // Simulate payment processing and account creation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSuccess(true);
  };
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center bg-gray-800 border-gray-700" padding="xl" elevated>
            <div className="space-y-6">
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto" />
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-white font-serif">Account Created Successfully!</h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Welcome to ArtXchange! Your {
                    formData.accountType === 'artist' ? 'Artist' : 
                    formData.accountType === 'event-creator' ? 'Event Creator' :
                    'Guerrilla Marketing Partner'
                  } account has been created.
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Next Steps:</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  {formData.accountType === 'artist' ? (
                    <>
                      <li>• Check your email for account verification</li>
                      <li>• Complete your artist profile</li>
                      <li>• Submit your first artwork</li>
                      <li>• Start participating in community voting</li>
                    </>
                  ) : formData.accountType === 'event-creator' ? (
                    <>
                      <li>• Check your email for account verification</li>
                      <li>• Complete your event creator profile</li>
                      <li>• Create your first event</li>
                      <li>• Engage with the community</li>
                    </>
                  ) : (
                    <>
                      <li>• Check your email for account verification</li>
                      <li>• Review partnership guidelines</li>
                      <li>• Explore collaboration opportunities</li>
                      <li>• Submit your first campaign proposal</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signin">
                  <Button size="lg" variant="primary">
                    Sign In Now
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-700">
                    Explore Platform
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="bg-gray-800 border-gray-700" padding="lg" elevated>
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto">
                <UserPlus className="w-8 h-8 text-gray-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white font-serif">Create Account</h1>
                <p className="text-gray-300 mt-2">Join Berlin's creative community</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Account Type Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300 font-serif">
                  Account Type <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-1 gap-4">
                  {accountTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => handleAccountTypeSelect(type.value)}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        formData.accountType === type.value
                          ? 'border-white bg-gray-700'
                          : 'border-gray-600 hover:border-gray-500 bg-gray-800'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <type.icon className={`w-6 h-6 mt-1 ${
                          formData.accountType === type.value ? 'text-white' : 'text-gray-400'
                        }`} />
                        <div>
                          <h3 className={`font-semibold ${
                            formData.accountType === type.value ? 'text-white' : 'text-gray-300'
                          }`}>
                            {type.label}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">{type.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Basic Information */}
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  icon={<User className="w-5 h-5" />}
                  required
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  icon={<Mail className="w-5 h-5" />}
                  required
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-serif">
                    Country <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
                  >
                    <option value="">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Passport / National ID Number"
                  name="passportId"
                  value={formData.passportId}
                  onChange={handleInputChange}
                  placeholder="Enter your passport or national ID number"
                  required
                />
                {/* Category for Artists */}
                {formData.accountType === 'artist' && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300 font-serif">
                      Primary Art Category <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
                    >
                      <option value="">Select your primary category</option>
                      {artistCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Event Categories for Event Creators */}
                {formData.accountType === 'event-creator' && (
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300 font-serif">
                      Event Categories <span className="text-red-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {eventCategories.map(category => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => handleEventCategoryToggle(category)}
                          className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${
                            formData.eventCategories.includes(category)
                              ? 'border-white bg-gray-700 text-white'
                              : 'border-gray-600 hover:border-gray-500 bg-gray-800 text-gray-300'
                          }`}
                        >
                          <div className="text-sm font-medium">{category}</div>
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">Select all categories that apply to your events</p>
                  </div>
                )}

                {/* Additional Fields for Guerrilla Marketing Partners */}
                {formData.accountType === 'guerrilla-partner' && (
                  <div className="space-y-4">
                    <Input
                      label="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      required
                    />

                    <Input
                      label="Handelsregisternummer"
                      name="handelsregisternummer"
                      value={formData.handelsregisternummer}
                      onChange={handleInputChange}
                      placeholder="Enter your commercial register number"
                      required
                    />

                    <Input
                      label="Tax/VAT Number"
                      name="taxVatNumber"
                      value={formData.taxVatNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your tax or VAT number"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="acceptedTerms"
                    name="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400"
                  />
                  <label htmlFor="acceptedTerms" className="text-sm text-gray-300">
                    I agree to the{' '}
                    <Link to="/terms" className="text-white hover:text-gray-300 underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-white hover:text-gray-300 underline">
                      Privacy Policy
                    </Link>
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="acceptedEnforcement"
                    name="acceptedEnforcement"
                    checked={formData.acceptedEnforcement}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400"
                  />
                  <label htmlFor="acceptedEnforcement" className="text-sm text-gray-300">
                    I acknowledge the{' '}
                    <Link to="/enforcement" className="text-white hover:text-gray-300 underline">
                      Enforcement & Appeals
                    </Link>{' '}
                    policies, including VPN usage prohibition
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="acceptedRestrictions"
                    name="acceptedRestrictions"
                    checked={formData.acceptedRestrictions}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400"
                  />
                  <label htmlFor="acceptedRestrictions" className="text-sm text-gray-300">
                    <AlertTriangle className="w-4 h-4 inline mr-1 text-yellow-400" />
                    I understand that violations may result in account restrictions and serious legal actions.
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                loading={isLoading}
                disabled={
                  !formData.accountType || 
                  !formData.acceptedTerms || 
                  !formData.acceptedRestrictions ||
                  !formData.acceptedEnforcement ||
                  (formData.accountType === 'event-creator' && formData.eventCategories.length === 0) ||
                  (formData.accountType === 'guerrilla-partner' && (!formData.companyName || !formData.handelsregisternummer || !formData.taxVatNumber))
                }
                fullWidth
              >
                {isLoading ? 'Processing...' : 'Continue to Payment'}
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="text-center pt-4 border-t border-gray-700">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/signin" className="text-white hover:text-gray-300 font-medium transition-colors">
                  Sign In
                </Link>
              </p>
              
              <div className="bg-gray-700 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-lg font-medium text-gray-200">A €2/month subscription fee applies to all account types.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Payment Modal for Event Creators */}
      {showPaymentModal && formData.accountType === 'event-creator' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPaymentModal(false)} />
          <Card className="relative w-full max-w-md bg-gray-800 border-gray-700" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">Account Registration</h3>
                <button onClick={() => setShowPaymentModal(false)} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-center space-y-4">
                <CreditCard className="w-16 h-16 text-gray-300 mx-auto" />
                <div>
                  <div className="text-3xl font-bold text-white">€4.00</div>
                  <p className="text-gray-300">€2 registration + €1 first month</p>
                </div>
                <p className="text-sm text-gray-400">
                  One-time registration fee plus monthly subscription
                </p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 font-serif">
                  Payment Method
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

              <div className="space-y-3">
                <Button 
                  onClick={handlePaymentComplete} 
                  disabled={!paymentMethod}
                  fullWidth
                >
                  Pay €4.00 & Create Account
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowPaymentModal(false)} 
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

      {/* Universal Payment Modal for All Account Types */}
      {showPaymentModal && formData.accountType !== 'event-creator' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPaymentModal(false)} />
          <Card className="relative w-full max-w-md bg-gray-800 border-gray-700" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">Account Registration</h3>
                <button onClick={() => setShowPaymentModal(false)} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-center space-y-4">
                <CreditCard className="w-16 h-16 text-gray-300 mx-auto" />
                <div>
                  <div className="text-3xl font-bold text-white">€4.00</div>
                  <p className="text-gray-300">€2 registration + €1 first month</p>
                </div>
                <p className="text-sm text-gray-400">
                  One-time registration fee plus monthly subscription
                </p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 font-serif">
                  Payment Method
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

              <div className="space-y-3">
                <Button 
                  onClick={handlePaymentComplete} 
                  disabled={!paymentMethod}
                  fullWidth
                >
                  Pay €4.00 & Create Account
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowPaymentModal(false)} 
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
    </div>
  );
};