import React from 'react';
import { Eye, Keyboard, Volume2, MousePointer, Smartphone, Monitor } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Accessibility: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Accessibility Statement</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ArtXchange is committed to ensuring digital accessibility for all users, including those with disabilities. 
            We strive to provide an inclusive experience for everyone in our creative community.
          </p>
          <p className="text-sm text-gray-400">Last updated: January 2024</p>
        </div>

        {/* Our Commitment */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Eye className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Our Commitment</h3>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                We are committed to conforming with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                Our goal is to ensure that ArtXchange is accessible to users with diverse abilities and assistive technologies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-700 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-200 mb-2">Perceivable</h4>
                  <p className="text-gray-300 text-sm">Information presented in ways users can perceive</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-200 mb-2">Operable</h4>
                  <p className="text-gray-300 text-sm">Interface components users can operate</p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-200 mb-2">Understandable</h4>
                  <p className="text-gray-300 text-sm">Information and UI operation is understandable</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Accessibility Features */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif">Accessibility Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Keyboard className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Keyboard Navigation</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Full keyboard accessibility for all interactive elements</li>
                      <li>• Logical tab order throughout the platform</li>
                      <li>• Visible focus indicators</li>
                      <li>• Skip navigation links</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Volume2 className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Screen Reader Support</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Semantic HTML structure</li>
                      <li>• Descriptive alt text for images</li>
                      <li>• ARIA labels and descriptions</li>
                      <li>• Proper heading hierarchy</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MousePointer className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Motor Accessibility</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Large touch targets (minimum 44px)</li>
                      <li>• Sufficient spacing between interactive elements</li>
                      <li>• No time-sensitive interactions</li>
                      <li>• Alternative input methods supported</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Eye className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Visual Accessibility</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• High contrast color schemes</li>
                      <li>• Scalable text up to 200% without loss of functionality</li>
                      <li>• No reliance on color alone for information</li>
                      <li>• Consistent visual design patterns</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Smartphone className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Mobile Accessibility</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Responsive design for all screen sizes</li>
                      <li>• Touch-friendly interface elements</li>
                      <li>• Orientation support (portrait/landscape)</li>
                      <li>• Zoom functionality without horizontal scrolling</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Monitor className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Assistive Technology</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Compatible with major screen readers</li>
                      <li>• Voice control software support</li>
                      <li>• Switch navigation compatibility</li>
                      <li>• Magnification software friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Known Issues */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif">Known Issues & Improvements</h3>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                We continuously work to improve accessibility. Currently identified areas for enhancement include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-200 mb-2">In Progress</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Enhanced image description automation</li>
                    <li>• Improved color contrast in certain UI elements</li>
                    <li>• Additional keyboard shortcuts</li>
                    <li>• Better error message accessibility</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-200 mb-2">Planned</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Audio descriptions for video content</li>
                    <li>• High contrast mode toggle</li>
                    <li>• Reduced motion preferences</li>
                    <li>• Multi-language screen reader support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Feedback & Support */}
        <Card padding="lg" className="bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif">Feedback & Support</h3>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                We welcome feedback about the accessibility of ArtXchange. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Accessibility Team</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Email: accessibility@artxchange.com</p>
                    <p>Response time: Within 5 business days</p>
                    <p>Phone: +49 30 1234 5678</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Alternative Formats</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Large print versions available</p>
                    <p>Audio format upon request</p>
                    <p>Braille format (advance notice required)</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-gray-200 font-medium">Accessibility Testing</p>
                <p className="text-gray-300 text-sm mt-1">
                  We regularly test our platform with assistive technologies and conduct accessibility audits. 
                  We also work with users with disabilities to ensure real-world usability.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};