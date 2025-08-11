import React from 'react';
import { Megaphone, Users, TrendingUp, Heart, Zap, Target, Camera, HelpCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { HowItWorksModal } from '../components/ui/HowItWorksModal';

export const Advertisement: React.FC = () => {
  const [showHowItWorks, setShowHowItWorks] = React.useState(false);

  const benefits = [
    {
      icon: Users,
      title: 'Community Amplification',
      description: 'Reach thousands of art enthusiasts and cultural influencers across Berlin through grassroots marketing.',
      metric: '50K+ monthly community interactions'
    },
    {
      icon: TrendingUp,
      title: 'Organic Visibility',
      description: 'Guerrilla campaigns generate authentic buzz and social media engagement without traditional advertising costs.',
      metric: '300% increase in organic reach'
    },
    {
      icon: Zap,
      title: 'Street-Level Impact',
      description: 'Transform public spaces into dynamic marketing opportunities that create memorable brand experiences.',
      metric: '25+ strategic locations across Berlin'
    },
    {
      icon: Heart,
      title: 'Artist Support',
      description: 'Directly support emerging artists while building authentic connections with Berlin\'s creative community.',
      metric: '150+ artists supported monthly'
    }
  ];

  const campaignTypes = [
    {
      title: 'Guerrilla Art Installations',
      description: 'Temporary installations in high-traffic areas that blend art with brand messaging',
      duration: '1-4 weeks',
      reach: '10K-50K daily impressions'
    },
    {
      title: 'Digital Street Projections',
      description: 'Interactive projections on building facades during evening hours',
      duration: '1-7 days',
      reach: '5K-25K daily impressions'
    },
    {
      title: 'Community Art Collaborations',
      description: 'Partner with local artists for authentic brand integration',
      duration: '2-8 weeks',
      reach: '15K-75K total reach'
    },
    {
      title: 'LED Display Sponsorship',
      description: 'Sponsor artwork displays on our network of LED screens',
      duration: '1-4 weeks',
      reach: '100K+ daily impressions'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-3">
            <Megaphone className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Partnership and Marketing</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Partner with Berlin's most authentic art community for impactful guerrilla marketing campaigns that support artists while amplifying your brand message through creative street-level experiences.
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

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center bg-gray-800 border-gray-700" elevated>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto">
                  <benefit.icon className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-serif">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">{benefit.description}</p>
                  <div className="mt-3 text-xs font-medium text-gray-200 bg-gray-700 px-2 py-1 rounded-full">
                    {benefit.metric}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Campaign Types */}
        <Card className="mb-16 bg-gray-800 border-gray-700" padding="lg" elevated>
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-white font-serif">Campaign Opportunities</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from various guerrilla marketing formats designed to maximize impact while supporting Berlin's artistic community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {campaignTypes.map((campaign, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white font-serif">{campaign.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{campaign.description}</p>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="font-medium text-gray-200">Duration:</span>
                      <span className="text-gray-300 ml-1">{campaign.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-200">Reach:</span>
                      <span className="text-gray-300 ml-1">{campaign.reach}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="text-center bg-gray-800 border-gray-700" padding="xl" elevated>
          <div className="space-y-6">
            <Camera className="w-16 h-16 text-white mx-auto" />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white font-serif">Ready to Launch Your Campaign?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Partner with us to create authentic, impactful guerrilla marketing campaigns that support artists and amplify your brand message across Berlin's creative landscape.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Start Your Campaign
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Download Media Kit
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Contact us at <span className="font-medium">partnerships@artxchange.com</span> for custom campaign proposals
            </p>
          </div>
        </Card>
      </div>

      {/* How It Works Modal */}
      <HowItWorksModal
        isOpen={showHowItWorks}
        onClose={() => setShowHowItWorks(false)}
        section="partnership"
      />
    </div>
  );
};