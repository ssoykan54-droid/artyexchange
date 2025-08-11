import React from 'react';
import { X, Zap, TrendingUp, Users, DollarSign, Target, Building, Palette, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface GuerrillaMarketingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuerrillaMarketingModal: React.FC<GuerrillaMarketingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const opportunities = [
    {
      icon: Users,
      title: 'Artist Collaborations',
      description: 'Partner directly with Berlin\'s most talented street artists for authentic brand integration',
      benefit: 'Authentic community engagement'
    },
    {
      icon: Building,
      title: 'Government Partnerships',
      description: 'Work with local authorities to transform public spaces into dynamic marketing opportunities',
      benefit: 'Official endorsement & permits'
    },
    {
      icon: TrendingUp,
      title: 'Business Campaigns',
      description: 'Launch impactful guerrilla marketing campaigns that generate organic buzz and social media engagement',
      benefit: '300% increase in organic reach'
    }
  ];

  const financialBenefits = [
    {
      stakeholder: 'Artists',
      benefits: ['Direct commission payments', 'Ongoing royalties from successful campaigns', 'Portfolio development opportunities', 'Professional networking access'],
      icon: Palette
    },
    {
      stakeholder: 'Platform',
      benefits: ['Campaign management fees', 'Premium partnership subscriptions', 'Analytics and reporting services', 'Event organization revenue'],
      icon: Target
    },
    {
      stakeholder: 'Government',
      benefits: ['Cultural development funding', 'Tourism attraction increase', 'Public space revitalization', 'Community engagement metrics'],
      icon: Building
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <Card className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700" padding="lg">
        <div className="space-y-6">
          {/* ArtXchange Logo */}
          <div className="text-center">
            <img 
              src="https://www.dropbox.com/scl/fi/ikv9rffmbo1me8m6hqua6/Screenshot-2025-07-15-at-02.46.43.png?rlkey=rcbpyn0gnesjryqxvl0ur1f1y&st=24u1uwst&dl=1" 
              alt="ArtXchange Logo" 
              className="w-12 h-12 rounded-xl mx-auto mb-4"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-10 h-10 text-white" />
              <h2 className="text-3xl font-bold text-white font-serif">Guerrilla Marketing Opportunities</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform Berlin's streets into your canvas. Partner with authentic artists and government entities for impactful campaigns that benefit everyone in the ecosystem.
          </p>

          {/* Collaboration Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <opportunity.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white font-serif">{opportunity.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{opportunity.description}</p>
                    <div className="text-sm font-medium text-gray-400 bg-gray-800 px-3 py-2 rounded-lg">
                      {opportunity.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Financial Benefits */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white font-serif flex items-center justify-center space-x-3">
                <DollarSign className="w-8 h-8" />
                <span>Financial Opportunities</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our guerrilla marketing ecosystem creates sustainable revenue streams for all stakeholders while fostering authentic artistic expression.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {financialBenefits.map((stakeholder, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <stakeholder.icon className="w-6 h-6 text-gray-900" />
                      </div>
                      <h4 className="text-xl font-semibold text-white font-serif">{stakeholder.stakeholder}</h4>
                    </div>
                    <ul className="space-y-3">
                      {stakeholder.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center space-y-6">
            <h3 className="text-3xl font-bold text-white font-serif">Ready to Launch Your Campaign?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join Berlin's most authentic guerrilla marketing ecosystem and create campaigns that truly resonate with the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/advertisement" onClick={onClose}>
                <Button size="lg" variant="primary" icon={ArrowRight} iconPosition="right">
                  Explore Partnership Options
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900">
                Create Partner Account
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};