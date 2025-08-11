import React from 'react';
import { User, Calendar, Building, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const AccountTypes: React.FC = () => {
  const accountTypes = [
    {
      type: 'Artist Account',
      icon: User,
      description: 'Submit artworks, participate in community voting, and showcase your creative portfolio to Berlin\'s art community.',
      features: [
        'Submit up to 10 artworks per month',
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
      signupPath: '/signup?type=event-creator'
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
      signupPath: '/signup?type=guerrilla-partner'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Account Types & Management</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            All accounts require a €2 registration fee and €2 monthly subscription. Choose the type that best fits your creative goals.
          </p>
          <div className="bg-gray-800 rounded-2xl p-6 max-w-md mx-auto border border-gray-700">
            <p className="text-lg font-medium text-white">A €2/month subscription fee applies to all account types.</p>
          </div>
        </div>

        {/* Account Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {accountTypes.map((account, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:shadow-elegant-lg transition-all duration-300" padding="xl" elevated>
              <div className="space-y-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto">
                    <account.icon className="w-10 h-10 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif mb-2">{account.type}</h3>
                    <p className="text-sm text-gray-400">€2 registration + €2/month</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-center">{account.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-200">Features:</h4>
                  <ul className="space-y-3">
                    {account.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={account.signupPath}>
                  <Button variant="primary" fullWidth>
                    Join Us
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center pt-12 border-t border-gray-700 mt-16">
          <p className="text-gray-400">
            Already have an account? <Link to="/signin" className="text-white hover:text-gray-300 font-medium underline">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};