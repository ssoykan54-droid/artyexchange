import React from 'react';
import { FileText, Users, Shield, AlertTriangle, Scale, Gavel } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Terms of Service</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of ArtXchange and outline the rights and responsibilities of all community members.
          </p>
          <p className="text-sm text-gray-400">Last updated: January 2024</p>
        </div>

        {/* Acceptance of Terms */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Acceptance of Terms</h3>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                By accessing or using ArtXchange, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
              </p>
              
              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-gray-200 font-medium">Important Notice</p>
                <p className="text-gray-300 text-sm mt-1">
                  These terms constitute a legally binding agreement between you and ArtXchange. Please read them carefully.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* User Responsibilities */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">User Responsibilities</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-3">Account Management</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Provide accurate and complete registration information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Notify us immediately of any unauthorized access</li>
                  <li>• Accept responsibility for all activities under your account</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-3">Content Submission</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Submit only original artwork or content you have rights to use</li>
                  <li>• Ensure all submissions comply with community guidelines</li>
                  <li>• Respect intellectual property rights of others</li>
                  <li>• Provide accurate descriptions and metadata</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-3">Community Participation</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Engage respectfully with other community members</li>
                  <li>• Vote honestly and avoid manipulation of voting systems</li>
                  <li>• Report inappropriate content or behavior</li>
                  <li>• Respect the democratic nature of the platform</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Platform Rights */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Platform Rights & Moderation</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                ArtXchange reserves the right to maintain the quality and integrity of the platform through the following measures:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h5 className="font-semibold text-gray-200 mb-2">Content Moderation</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Review and approve artwork submissions</li>
                    <li>• Remove content violating guidelines</li>
                    <li>• Moderate community interactions</li>
                    <li>• Implement spam prevention measures</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h5 className="font-semibold text-gray-200 mb-2">Account Management</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Suspend or terminate accounts for violations</li>
                    <li>• Implement voting restrictions</li>
                    <li>• Monitor for fraudulent activity</li>
                    <li>• Enforce submission limits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Intellectual Property */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Scale className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Intellectual Property</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-3">Your Content</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• You retain ownership of your original artwork and content</li>
                  <li>• You grant ArtXchange a license to display and promote your work</li>
                  <li>• You warrant that you have the right to submit all content</li>
                  <li>• You agree to indemnify ArtXchange against IP claims</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-3">Platform Content</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• ArtXchange owns the platform design and functionality</li>
                  <li>• Community-generated data remains with the platform</li>
                  <li>• Voting data and analytics are platform property</li>
                  <li>• Platform branding and logos are protected trademarks</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Limitation of Liability */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Limitation of Liability</h3>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                ArtXchange is provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>• Uninterrupted platform availability</li>
                  <li>• Error-free operation</li>
                  <li>• Security of user data</li>
                  <li>• Accuracy of community votes</li>
                </ul>
                
                <ul className="space-y-2">
                  <li>• Success of artwork submissions</li>
                  <li>• Quality of user-generated content</li>
                  <li>• Compatibility with all devices</li>
                  <li>• Preservation of historical data</li>
                </ul>
              </div>
              
              <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                <p className="text-gray-200 font-medium">Liability Limitation</p>
                <p className="text-gray-300 text-sm mt-1">
                  In no event shall ArtXchange be liable for any indirect, incidental, special, or consequential damages 
                  arising from your use of the platform, even if we have been advised of the possibility of such damages.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Governing Law */}
        <Card padding="lg" className="bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Gavel className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Governing Law & Disputes</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Applicable Law</h4>
                  <div className="text-gray-300 space-y-2">
                    <p>These terms are governed by German law and EU regulations.</p>
                    <p>Disputes will be resolved in Berlin courts.</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Dispute Resolution</h4>
                  <div className="text-gray-300 space-y-2">
                    <p>We encourage informal resolution of disputes.</p>
                    <p>Formal complaints: legal@artxchange.com</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-700 rounded-lg">
                <p className="text-gray-200 font-medium">Changes to Terms</p>
                <p className="text-gray-300 text-sm mt-1">
                  We may modify these terms at any time. Significant changes will be communicated via email and platform notifications. 
                  Continued use of the platform constitutes acceptance of modified terms.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};