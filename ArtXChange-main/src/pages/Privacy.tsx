import React from 'react';
import { Shield, Eye, Lock, Database, Mail, AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is fundamental to our mission. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-400">Last updated: January 2024</p>
        </div>

        {/* Information Collection */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Database className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Information We Collect</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Personal Information</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Name and email address (for account creation)</li>
                  <li>• Artist profile information (bio, portfolio details)</li>
                  <li>• Artwork submissions and descriptions</li>
                  <li>• Communication preferences</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Technical Information</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• IP address (for voting integrity and spam prevention)</li>
                  <li>• Device information and browser type</li>
                  <li>• Usage patterns and interaction data</li>
                  <li>• Location data (for Berlin-specific features)</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* How We Use Information */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Eye className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">How We Use Your Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-200">Platform Operations</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Account management and authentication</li>
                  <li>• Artwork submission and curation</li>
                  <li>• Voting system integrity</li>
                  <li>• Community moderation</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-200">Communication</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Newsletter and event notifications</li>
                  <li>• Important platform updates</li>
                  <li>• Artist collaboration opportunities</li>
                  <li>• Community guidelines enforcement</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Data Protection */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Lock className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Data Protection & Security</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                We implement industry-standard security measures to protect your personal information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h5 className="font-semibold text-gray-200 mb-2">Technical Safeguards</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure database storage with encryption</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-700 rounded-lg">
                  <h5 className="font-semibold text-gray-200 mb-2">Operational Safeguards</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Limited staff access to personal data</li>
                    <li>• Regular staff training on privacy practices</li>
                    <li>• Incident response procedures</li>
                    <li>• Data retention policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Your Rights */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Your Privacy Rights</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Under GDPR and other applicable privacy laws, you have the following rights:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Access:</strong> Request copies of your personal data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Rectification:</strong> Correct inaccurate information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Erasure:</strong> Request deletion of your data</span>
                  </li>
                </ul>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Portability:</strong> Transfer your data to another service</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Objection:</strong> Object to certain data processing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Restriction:</strong> Limit how we process your data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card padding="lg" className="bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Contact Us</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Privacy Officer</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Email: privacy@artxchange.com</p>
                    <p>Response time: Within 30 days</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Data Protection Authority</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Berlin Commissioner for Data Protection</p>
                    <p>For complaints and inquiries</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-200 font-medium">Policy Updates</p>
                    <p className="text-gray-300 text-sm">
                      We may update this Privacy Policy periodically. Significant changes will be communicated via email and platform notifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};