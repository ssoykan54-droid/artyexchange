import React, { useState } from 'react';
import { Upload, Image as ImageIcon, CheckCircle, Camera, Hash, HelpCircle, CreditCard, Shield, X, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';
import { Card } from '../components/ui/Card';
import { HashtagInput } from '../components/ui/HashtagInput';
import { SubmissionLimitIndicator } from '../components/ui/SubmissionLimitIndicator';
import { mockArtists } from '../data/mockData';

export const Submit: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    artistName: '',
    artistEmail: '',
    description: '',
    category: '',
    acceptedGuidelines: false,
    acceptedRestrictions: false
  });
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Mock current artist data (in real app, this would come from auth context)
  const currentArtist = { ...mockArtists[0], maxMonthlySubmissions: 10 }; // Updated to 10

  const categories = [
    'Urban', 'Nature', 'Abstract', 'Portrait', 'Digital', 'Traditional', 'Mixed Media', 'Photography', 'Other'
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: 'Create Account / Sign In',
      description: 'Register as an Artist or sign in to your existing account to access submission features.'
    },
    {
      step: 2,
      title: 'Upload Artwork & Details',
      description: 'Submit high-quality images with detailed descriptions, categories, and relevant hashtags.'
    },
    {
      step: 3,
      title: 'Security Check',
      description: 'Complete CAPTCHA verification and IP/VPN checks to ensure platform integrity.'
    },
    {
      step: 4,
      title: 'Confirmation & Display',
      description: 'Review and confirm your submission. Approved artworks enter community voting.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentArtist.monthlySubmissions >= currentArtist.maxMonthlySubmissions) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handlePaymentComplete = () => {
    setShowPaymentModal(false);
    // Continue with voting process
  };

  const canSubmit = currentArtist.monthlySubmissions < currentArtist.maxMonthlySubmissions;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center space-y-8 bg-gray-800 border-gray-700" padding="xl" elevated>
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto" />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white font-serif">Submission Successful</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Thank you for contributing to Berlin's digital art landscape. Your artwork has been added to the community voting process.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400">
                Community voting will determine if your piece is selected for public display on our LED screens across the city.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {hashtags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              <Button size="lg" onClick={() => setIsSubmitted(false)}>
                Submit Another Artwork
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Submit Your Artwork</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Share your creative vision with Berlin's community and become part of our public art showcase across the city's digital displays.
          </p>
          
          {/* How It Works Button */}
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

        {/* Submission Limit Indicator */}
        <div className="mb-8">
          <SubmissionLimitIndicator
            current={currentArtist.monthlySubmissions}
            max={currentArtist.maxMonthlySubmissions}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Upload Section */}
            <Card className="bg-gray-800 border-gray-700" elevated>
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-gray-300" />
                  <h3 className="text-xl font-semibold text-white font-serif">Artwork Image</h3>
                </div>
                
                {!imagePreview ? (
                  <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-gray-500 transition-colors group">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                      required
                      disabled={!canSubmit}
                    />
                    <label htmlFor="image-upload" className={`cursor-pointer ${!canSubmit ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      <ImageIcon className="w-20 h-20 text-gray-500 mx-auto mb-6 group-hover:text-gray-400 transition-colors" />
                      <div className="space-y-2">
                        <p className="text-xl font-medium text-gray-300 font-serif">Upload Your Artwork</p>
                        <p className="text-gray-400">Click to select a high-quality image file</p>
                        <p className="text-sm text-gray-500">PNG, JPG, or GIF up to 10MB</p>
                      </div>
                    </label>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-80 object-cover rounded-xl shadow-elegant"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setImagePreview('');
                        setImageFile(null);
                      }}
                      disabled={!canSubmit}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Change Image
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Form Fields */}
            <Card className="bg-gray-800 border-gray-700" elevated>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white font-serif">Artwork Details</h3>
                
                <div className="space-y-5">
                  <Input
                    label="Artwork Title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter the title of your artwork"
                    required
                  />

                  <Input
                    label="Artist Name"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleInputChange}
                    placeholder="Your name or artistic pseudonym"
                    required
                  />

                  <Input
                    label="Email Address"
                    name="artistEmail"
                    type="email"
                    value={formData.artistEmail}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300 font-serif">
                      Category <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Description */}
          <Card className="bg-gray-800 border-gray-700" elevated>
            <TextArea
              label="Artwork Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Share the story behind your artwork, your inspiration, creative process, and what makes this piece meaningful to you. Include relevant hashtags like #urbanlife #digitalfuture #abstractemotion..."
              rows={6}
              required
            />
          </Card>

          {/* Hashtags */}
          <Card className="bg-gray-800 border-gray-700" elevated>
            <HashtagInput
              hashtags={hashtags}
              onChange={setHashtags}
              placeholder="Add hashtags to help people discover your work..."
              maxTags={10}
            />
          </Card>

          {/* Guidelines Confirmation */}
          <Card className="bg-gray-800 border-gray-700" elevated>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="acceptedGuidelines"
                name="acceptedGuidelines"
                checked={formData.acceptedGuidelines}
                onChange={handleInputChange}
                required
                className="mt-1 w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400"
              />
              <label htmlFor="acceptedGuidelines" className="text-sm text-gray-300">
                <span className="text-red-400">*</span> I confirm this artwork abides by all{' '}
                <a href="/guidelines" className="text-white hover:text-gray-300 underline">community guidelines</a>,{' '}
                copyright laws, and Anti-Spam rules. I understand that violations may result in account restrictions.
              </label>
            </div>
          </Card>

          {/* Restrictions Confirmation */}
          <Card className="bg-gray-800 border-gray-700" elevated>
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
                <span className="text-red-400">*</span> I understand that violations may result in account restrictions and serious legal actions.
              </label>
            </div>
          </Card>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <Button
              type="submit"
              size="xl"
              icon={Upload}
              loading={isSubmitting}
              fullWidth={false}
              disabled={!canSubmit || !formData.acceptedGuidelines || !formData.acceptedRestrictions}
            >
              {!canSubmit 
                ? 'Monthly Limit Reached'
                : isSubmitting 
                ? 'Submitting Artwork...' 
                : 'Submit to Community'
              }
            </Button>
            {!canSubmit && (
              <p className="text-sm text-gray-400 mt-2">
                You've reached your monthly submission limit (10/month). Limit resets on the 1st of next month.
              </p>
            )}
          </div>
        </form>
      </div>

      {/* How It Works Modal */}
      {showHowItWorks && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowHowItWorks(false)} />
          <Card className="relative w-full max-w-2xl bg-gray-800 border-gray-700" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">How Submission Works</h3>
                <button onClick={() => setShowHowItWorks(false)} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {howItWorksSteps.map((step) => (
                  <div key={step.step} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200">{step.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Shield className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-200 font-medium">Security & Quality Assurance</p>
                    <p className="text-gray-300 text-sm mt-1">
                      All submissions undergo security checks including CAPTCHA verification and IP validation to maintain platform integrity and prevent spam.
                    </p>
                  </div>
                </div>
              </div>

              <Button onClick={() => setShowHowItWorks(false)} fullWidth>
                Got It
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPaymentModal(false)} />
          <Card className="relative w-full max-w-md bg-gray-800 border-gray-700" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">Voting Fee</h3>
                <button onClick={() => setShowPaymentModal(false)} className="text-gray-400 hover:text-white">
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
                  This small fee helps prevent spam voting and supports platform maintenance.
                </p>
              </div>

              <div className="space-y-3">
                <Button onClick={handlePaymentComplete} fullWidth>
                  Pay €0.10 & Vote
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