import React, { useState } from 'react';
import { Mail, CheckCircle, Users, Calendar, Palette, Zap } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const newsletterTypes = [
    {
      id: 'weekly',
      title: 'Weekly Art Digest',
      description: 'Curated selection of featured artworks, voting highlights, and community spotlights',
      icon: Palette,
      frequency: 'Every Monday'
    },
    {
      id: 'events',
      title: 'Event Notifications',
      description: 'First access to workshops, exhibitions, and community gatherings',
      icon: Calendar,
      frequency: 'As scheduled'
    },
    {
      id: 'artist',
      title: 'Artist Spotlights',
      description: 'In-depth profiles of community artists and their creative journeys',
      icon: Users,
      frequency: 'Bi-weekly'
    },
    {
      id: 'guerrilla',
      title: 'Guerrilla Campaign Updates',
      description: 'Latest street art installations, campaign launches, and impact stories',
      icon: Zap,
      frequency: 'Monthly'
    }
  ];

  const handlePreferenceChange = (preferenceId: string) => {
    setPreferences(prev => 
      prev.includes(preferenceId)
        ? prev.filter(id => id !== preferenceId)
        : [...prev, preferenceId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && preferences.length > 0) {
      setIsSubscribed(true);
    }
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center space-y-8 bg-gray-800 border-gray-700" padding="xl" elevated>
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto" />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white font-serif">Welcome to the Community!</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Thank you for subscribing to ArtXchange updates. You'll receive your first newsletter within the next few days.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400">
                Check your email for a confirmation message and add us to your contacts to ensure delivery.
              </p>
              <Button size="lg" onClick={() => setIsSubscribed(false)}>
                Modify Preferences
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Stay Connected</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our community newsletter to receive curated art content, event invitations, and exclusive insights from Berlin's creative landscape.
          </p>
        </div>

        {/* Newsletter Options */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-white font-serif text-center">Choose Your Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsletterTypes.map((type) => (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all duration-200 bg-gray-800 border-gray-700 ${
                  preferences.includes(type.id) 
                    ? 'ring-2 ring-gray-400 bg-gray-700' 
                    : 'hover:shadow-elegant-lg'
                }`}
                onClick={() => handlePreferenceChange(type.id)}
                elevated
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    preferences.includes(type.id) ? 'bg-white' : 'bg-gray-700'
                  }`}>
                    <type.icon className={`w-6 h-6 ${
                      preferences.includes(type.id) ? 'text-gray-900' : 'text-gray-300'
                    }`} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white font-serif">{type.title}</h3>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        preferences.includes(type.id)
                          ? 'border-white bg-white'
                          : 'border-gray-500'
                      }`}>
                        {preferences.includes(type.id) && (
                          <CheckCircle className="w-3 h-3 text-gray-900" />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{type.description}</p>
                    <div className="text-xs text-gray-400 font-medium">{type.frequency}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscription Form */}
        <Card padding="lg" className="bg-gray-800 border-gray-700" elevated>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white font-serif">Subscribe Now</h3>
              <p className="text-gray-300">
                {preferences.length > 0 
                  ? `You've selected ${preferences.length} newsletter${preferences.length > 1 ? 's' : ''}`
                  : 'Please select at least one newsletter type above'
                }
              </p>
            </div>

            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              icon={<Mail className="w-5 h-5" />}
            />

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={!email || preferences.length === 0}
                fullWidth
              >
                Subscribe to Newsletter{preferences.length > 1 ? 's' : ''}
              </Button>
            </div>

            <div className="text-center text-sm text-gray-400 space-y-2">
              <p>We respect your privacy and will never share your email address.</p>
              <p>You can unsubscribe at any time using the link in our emails.</p>
            </div>
          </form>
        </Card>

        {/* Community Stats */}
        <Card className="mt-12 text-center bg-gray-800 border-gray-700" padding="lg" elevated>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif">Join Our Growing Community</h3>
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white font-serif">2.4K</div>
                <div className="text-gray-300 text-sm">Newsletter Subscribers</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white font-serif">156</div>
                <div className="text-gray-300 text-sm">Active Artists</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white font-serif">847</div>
                <div className="text-gray-300 text-sm">Artworks Featured</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};