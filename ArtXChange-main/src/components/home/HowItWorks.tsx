import React from 'react';
import { QrCode, Upload, Vote, Monitor, UserPlus, Handshake, User, Calendar, Building, X, CreditCard } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  const [showAccountTypesModal, setShowAccountTypesModal] = React.useState(false);

  const steps = [
    {
      icon: QrCode,
      title: 'Scan & Access',
      description: 'Discover QR codes throughout Berlin and instantly access our community platform'
    },
    {
      icon: UserPlus,
      title: 'Create Account',
      description: 'Register as an Artist or Guerrilla Marketing Partner to unlock platform features'
    },
    {
      icon: Upload,
      title: 'Submit Artwork',
      description: 'Share your creative vision with detailed descriptions and high-quality imagery'
    },
    {
      icon: Vote,
      title: 'Community Curation',
      description: 'Browse, discover, and vote for artworks that resonate with your aesthetic sensibilities'
    },
    {
      icon: Monitor,
      title: 'Public Display',
      description: 'Witness top-voted artworks illuminate LED screens across Berlin\'s cultural landscape'
    },
    {
      icon: Handshake,
      title: 'Guerrilla Partnerships',
      description: 'Collaborate with artists and brands for authentic street-level marketing campaigns'
    }
  ];

  const accountTypes = [
    {
      type: 'Artist Account',
      icon: User,
      description: 'Submit artworks, participate in community voting, and showcase your creative portfolio to Berlin\'s art community.',
      features: [
        'Submit up to 5 artworks per month',
        'Participate in community voting (10/day)',
        'Track artwork performance and votes',
        'Connect with guerrilla marketing partners',
        'Access to artist networking events'
      ],
      signupPath: '/signup?type=artist'
    },
    {
      type: 'Event Creator Account',
      icon: Calendar,
      description: 'Create and manage community events, workshops, and cultural gatherings that bring Berlin\'s creative community together.',
      features: [
        'Create up to 10 events per month',
        'Access to event management tools',
        'Promote events to targeted audiences',
        'Collaborate with artists and venues',
        'Event analytics and attendance tracking'
      ],
      signupPath: '/signup?type=event-creator',
      fee: '€2 registration + €2/month'
    },
    {
      type: 'Guerrilla Marketing Partner',
      icon: Building,
      description: 'Launch authentic street-level marketing campaigns by partnering directly with Berlin\'s most talented artists.',
      features: [
        'Launch guerrilla marketing campaigns',
        'Direct collaboration with artists',
        'Access to campaign analytics',
        'Government partnership opportunities',
        'Brand integration with community art'
      ],
      signupPath: '/signup?type=guerrilla-partner',
      fee: '€2 registration + €2/month'
    }
  ];
  return (
    <>
      <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-4xl md:text-5xl font-bold text-white font-serif hover:text-gray-300 transition-colors cursor-pointer smooth-scroll"
          >
            How It Works
          </button>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Six elegant steps to join our community-driven art movement, create authentic partnerships, and contribute to Berlin's digital art renaissance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-elegant">
                  <step.icon className="w-10 h-10 text-gray-900" />
                </div>
                <div className="absolute -top-2 -right-2 bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white font-serif">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Account Types & Management */}
        <div className="mt-16 p-8 bg-gray-800 rounded-2xl border border-gray-700">
          <div className="text-center space-y-6">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAccountTypesModal(true)}
              className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900"
            >
              Account Types & Management
            </Button>
            <p className="text-gray-400 text-sm">
              Learn about different account types and choose the one that fits your creative goals
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Account Types Modal */}
      {showAccountTypesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowAccountTypesModal(false)} />
          <Card className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white font-serif">Account Types & Management</h2>
                <button
                  onClick={() => setShowAccountTypesModal(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                All accounts require a €2 registration fee and €2 monthly subscription. Choose the type that best fits your creative goals.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {accountTypes.map((account, index) => (
                  <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-gray-700 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto">
                        <account.icon className="w-8 h-8 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-serif">{account.type}</h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {account.fee || '€2 registration + €2/month'}
                        </p>
                        {account.fee && (
                          <p className="text-sm text-gray-400 mt-1">{account.fee}</p>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{account.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-200">Features:</h4>
                      <ul className="space-y-2">
                        {account.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link to={account.signupPath}>
                      <Button variant="primary" fullWidth onClick={() => setShowAccountTypesModal(false)}>
                        Join Us
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Already have an account? <Link to="/signin" className="text-white hover:text-gray-300 underline">Sign in here</Link>
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};