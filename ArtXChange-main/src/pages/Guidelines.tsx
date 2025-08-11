import React from 'react';
import { Shield, Users, Heart, AlertTriangle, CheckCircle, BookOpen, Ban, Wifi } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Guidelines: React.FC = () => {
  const guidelines = [
    {
      icon: Heart,
      title: 'Respect & Inclusivity',
      description: 'All artwork must promote respect, diversity, and inclusivity. Discriminatory, hateful, or offensive content is strictly prohibited.',
      examples: ['Celebrate cultural diversity', 'Promote positive social messages', 'Avoid stereotypes or prejudice']
    },
    {
      icon: Shield,
      title: 'Content Standards',
      description: 'Maintain high artistic and ethical standards. Content should be appropriate for public display in all contexts.',
      examples: ['No explicit or graphic content', 'Avoid commercial advertising', 'Respect intellectual property rights']
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Foster meaningful dialogue and connection within the artistic community through constructive participation.',
      examples: ['Provide thoughtful artwork descriptions', 'Engage respectfully in voting', 'Support fellow artists']
    },
    {
      icon: BookOpen,
      title: 'Submission Quality',
      description: 'Submit high-quality, original artwork with proper documentation and authentic artistic intent.',
      examples: ['Original work only', 'High-resolution images', 'Detailed artist statements']
    }
  ];

  const violations = [
    'Hate speech or discriminatory content',
    'Explicit sexual or violent imagery',
    'Copyright infringement',
    'Commercial advertising disguised as art',
    'Spam or low-quality submissions',
    'Manipulation of voting systems',
    'Use of VPN to circumvent restrictions',
    'Multiple account creation for vote manipulation'
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Community Guidelines</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our guidelines ensure ArtXchange remains a respectful, inclusive, and inspiring platform for Berlin's creative community.
          </p>
        </div>

        {/* Core Guidelines */}
        <div className="space-y-8 mb-12">
          {guidelines.map((guideline, index) => (
            <Card key={index} padding="lg" className="bg-gray-800 border-gray-700" elevated>
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-xl">
                  <guideline.icon className="w-6 h-6 text-gray-900" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white font-serif">{guideline.title}</h3>
                    <p className="text-gray-300 mt-2 leading-relaxed">{guideline.description}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-200">Examples:</h4>
                    <ul className="space-y-1">
                      {guideline.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Prohibited Content */}
        <Card padding="lg" className="mb-12 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Prohibited Content</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The following types of content are not permitted on ArtXchange and will result in immediate removal and potential account suspension:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {violations.map((violation, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                  {violation}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* VPN Restrictions */}
        <Card padding="lg" className="mb-12 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Wifi className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">VPN Usage Restrictions</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                To maintain voting integrity and platform security, VPN usage is strictly prohibited on ArtXchange. This policy ensures:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>One vote per artwork per user/IP address</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Prevention of vote manipulation and spam</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Fair representation of community preferences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Protection against automated voting systems</span>
                </li>
              </ul>
              <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="text-gray-200 font-medium">⚠️ VPN Detection Policy</p>
                <p className="text-gray-300 text-sm mt-1">
                  Users detected using VPN services will receive an immediate warning and temporary access restriction. 
                  Repeated violations will result in permanent account suspension.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Enforcement */}
        <Card padding="lg" className="bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif">Enforcement & Appeals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-200 font-serif">Violation Consequences</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-2">
                    <span className="font-medium text-gray-200">First Offense:</span>
                    <span>Warning and content removal</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-medium text-gray-200">Second Offense:</span>
                    <span>Temporary suspension (7 days)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-medium text-gray-200">Third Offense:</span>
                    <span>Permanent account suspension</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-medium text-gray-200">VPN Usage:</span>
                    <span>Immediate temporary restriction</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-200 font-serif">Appeal Process</h4>
                <p className="text-gray-300 leading-relaxed">
                  If you believe your content was removed in error or your account was restricted unfairly, you can appeal the decision by contacting our moderation team at 
                  <span className="font-medium"> appeals@artxchange.com</span> within 14 days of the action.
                </p>
                <div className="p-3 bg-gray-700 rounded-lg">
                  <p className="text-gray-200 text-sm font-medium">Account Status Notifications</p>
                  <p className="text-gray-300 text-sm">
                    Users will receive clear notifications about account restrictions, bans, or suspensions with detailed explanations and appeal instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};