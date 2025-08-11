import React from 'react';
import { Zap, TrendingUp, Users, DollarSign, Target, Building, Palette, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const GuerrillaMarketing: React.FC = () => {
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
    <section id="guerrilla-marketing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-3">
            <Zap className="w-10 h-10 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">Guerrilla Marketing Opportunities</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform Berlin's streets into your canvas. Partner with authentic artists and government entities for impactful campaigns that benefit everyone in the ecosystem.
          </p>
        </div>

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

        {/* Eligibility & Process */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white font-serif">Eligibility Criteria</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-200 mb-2">For Artists:</h5>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Portfolio of at least 5 completed artworks</li>
                    <li>• Verified Berlin residency or work permit</li>
                    <li>• Clean community standing (no violations)</li>
                    <li>• Commitment to campaign timeline</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-2">For Partners:</h5>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Registered business entity</li>
                    <li>• Commitment to community guidelines</li>
                    <li>• Minimum campaign budget of €2,500</li>
                    <li>• Respect for artistic integrity</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white font-serif">Submission Process</h4>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="bg-white text-gray-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span>Submit campaign proposal with detailed brief</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-white text-gray-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span>Community review and artist matching process</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-white text-gray-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span>Collaborative planning and permit acquisition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-white text-gray-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <span>Campaign execution and impact measurement</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center space-y-6">
          <h3 className="text-3xl font-bold text-white font-serif">Ready to Launch Your Campaign?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join Berlin's most authentic guerrilla marketing ecosystem and create campaigns that truly resonate with the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/advertisement">
              <Button size="lg" variant="primary" icon={ArrowRight} iconPosition="right">
                Explore Partnership Options
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900">
                Create Partner Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};