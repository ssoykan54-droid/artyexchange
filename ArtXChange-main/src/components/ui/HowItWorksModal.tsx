import React from 'react';
import { X, Vote, Monitor, Handshake, Upload, Users, Eye } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: 'vote-discover' | 'led-displays' | 'partnership';
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({ isOpen, onClose, section }) => {
  if (!isOpen) return null;

  const getContent = () => {
    switch (section) {
      case 'vote-discover':
        return {
          title: 'How Vote & Discover Works',
          icon: Vote,
          steps: [
            {
              step: 1,
              title: 'Browse Community Gallery',
              description: 'Explore artworks submitted by Berlin\'s creative community with advanced filtering and search options.',
              icon: Eye
            },
            {
              step: 2,
              title: 'Democratic Voting Process',
              description: 'Vote for artworks that resonate with you. Each vote costs €0.10 to prevent spam and support platform maintenance.',
              icon: Vote
            },
            {
              step: 3,
              title: 'Community Curation',
              description: 'Top-voted artworks are selected for display on LED screens across Berlin, creating a democratic art curation process.',
              icon: Users
            },
            {
              step: 4,
              title: 'Artist Support',
              description: 'Support artists directly through donations (€1-€5) and help build Berlin\'s creative community.',
              icon: Handshake
            }
          ]
        };
      
      case 'led-displays':
        return {
          title: 'How LED Displays Work',
          icon: Monitor,
          steps: [
            {
              step: 1,
              title: 'Network of Displays',
              description: 'Our network spans 12 LED displays across Berlin\'s most vibrant locations, from Alexanderplatz to Kreuzberg.',
              icon: Monitor
            },
            {
              step: 2,
              title: 'Community-Driven Content',
              description: 'Artworks are selected based on community votes, ensuring democratic representation of Berlin\'s artistic preferences.',
              icon: Vote
            },
            {
              step: 3,
              title: 'Real-Time Updates',
              description: 'Displays update automatically based on voting results, with content rotating to showcase the most popular artworks.',
              icon: Upload
            },
            {
              step: 4,
              title: 'Public Engagement',
              description: 'QR codes on displays allow passersby to learn about artists, vote on artworks, and join the community.',
              icon: Users
            }
          ]
        };
      
      case 'partnership':
        return {
          title: 'How Partnership & Marketing Works',
          icon: Handshake,
          steps: [
            {
              step: 1,
              title: 'Partnership Proposal',
              description: 'Submit detailed campaign proposals outlining your marketing goals and desired collaboration with local artists.',
              icon: Upload
            },
            {
              step: 2,
              title: 'Artist Matching',
              description: 'Our team matches your campaign with suitable artists based on style, availability, and campaign requirements.',
              icon: Users
            },
            {
              step: 3,
              title: 'Campaign Development',
              description: 'Collaborate with artists to develop authentic guerrilla marketing campaigns that respect artistic integrity.',
              icon: Handshake
            },
            {
              step: 4,
              title: 'Street-Level Execution',
              description: 'Launch campaigns across Berlin\'s public spaces with proper permits and community engagement.',
              icon: Monitor
            }
          ]
        };
      
      default:
        return { title: '', icon: Vote, steps: [] };
    }
  };

  const content = getContent();
  const IconComponent = content.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <Card className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700" padding="lg">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <IconComponent className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white font-serif">{content.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.steps.map((step, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      {step.step}
                    </div>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white font-serif">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-gray-700">
            <Button onClick={onClose} size="lg">
              Got It
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};