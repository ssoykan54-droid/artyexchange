import React, { useState } from 'react';
import { Shield, AlertTriangle, FileText, Mail, Clock, Ban, CheckCircle, X, Upload, Paperclip } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';

export const Enforcement: React.FC = () => {
  const [showAppealForm, setShowAppealForm] = useState(false);
  const [appealData, setAppealData] = useState({
    email: '',
    accountId: '',
    violationType: '',
    appealReason: '',
    evidence: '',
    attachments: [] as File[]
  });
  const [appealSubmitted, setAppealSubmitted] = useState(false);

  const violationTypes = [
    'Account Suspension',
    'Account Ban',
    'Content Removal',
    'VPN Detection',
    'Voting Restriction',
    'Submission Limit Violation',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppealData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const validFiles = files.filter(file => {
        const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
        const maxSize = 10 * 1024 * 1024; // 10MB
        return validTypes.includes(file.type) && file.size <= maxSize;
      });
      
      setAppealData(prev => ({ 
        ...prev, 
        attachments: [...prev.attachments, ...validFiles].slice(0, 5) // Max 5 files
      }));
    }
  };

  const removeAttachment = (index: number) => {
    setAppealData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };
  const handleAppealSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setAppealSubmitted(true);
  };

  const banningCriteria = [
    {
      violation: 'VPN Usage',
      firstOffense: 'Warning + 24h restriction',
      secondOffense: '7-day suspension',
      thirdOffense: 'Permanent ban',
      description: 'Using VPN services to circumvent voting restrictions or create multiple accounts'
    },
    {
      violation: 'Vote Manipulation',
      firstOffense: 'Warning + vote reset',
      secondOffense: '14-day suspension',
      thirdOffense: 'Permanent ban',
      description: 'Attempting to vote multiple times, using bots, or coordinating fake votes'
    },
    {
      violation: 'Spam Submissions',
      firstOffense: 'Content removal + warning',
      secondOffense: '7-day submission ban',
      thirdOffense: 'Permanent submission ban',
      description: 'Submitting low-quality, duplicate, or irrelevant content repeatedly'
    },
    {
      violation: 'Harassment',
      firstOffense: '3-day suspension',
      secondOffense: '30-day suspension',
      thirdOffense: 'Permanent ban',
      description: 'Targeting other users with abusive, threatening, or discriminatory behavior'
    },
    {
      violation: 'Copyright Violation',
      firstOffense: 'Content removal + warning',
      secondOffense: '14-day suspension',
      thirdOffense: 'Permanent ban',
      description: 'Submitting copyrighted material without permission or proper attribution'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Enforcement & Appeals</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our enforcement policies ensure a fair, safe, and authentic community experience for all ArtXchange members.
          </p>
        </div>

        {/* Banning Criteria */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Ban className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Violation Categories & Consequences</h3>
            </div>
            
            <div className="space-y-6">
              {banningCriteria.map((criteria, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-200 mb-2">{criteria.violation}</h4>
                      <p className="text-sm text-gray-400">{criteria.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <h5 className="font-medium text-gray-200 mb-1">1st Offense</h5>
                        <p className="text-sm text-gray-300">{criteria.firstOffense}</p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <h5 className="font-medium text-gray-200 mb-1">2nd Offense</h5>
                        <p className="text-sm text-gray-300">{criteria.secondOffense}</p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <h5 className="font-medium text-gray-200 mb-1">3rd Offense</h5>
                        <p className="text-sm text-gray-300">{criteria.thirdOffense}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* VPN Policy */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">VPN Usage Policy</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-red-200 font-medium">VPN Usage Strictly Prohibited</p>
                    <p className="text-red-300 text-sm mt-1">
                      The use of VPN services is completely banned on ArtXchange to maintain voting integrity and prevent abuse.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Why VPNs Are Banned:</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Prevents vote manipulation and multiple voting</li>
                    <li>• Maintains one-vote-per-person integrity</li>
                    <li>• Protects against automated voting systems</li>
                    <li>• Ensures fair representation of community preferences</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-200">Detection & Enforcement:</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Automatic VPN detection systems</li>
                    <li>• Immediate account restriction upon detection</li>
                    <li>• Clear notification with appeal instructions</li>
                    <li>• Escalating penalties for repeated violations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Appeal Process */}
        <Card padding="lg" className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6 text-gray-300" />
                <h3 className="text-2xl font-bold text-white font-serif">Appeal Process</h3>
              </div>
              <Button 
                variant="primary" 
                onClick={() => setShowAppealForm(true)}
                disabled={showAppealForm}
              >
                Submit Appeal
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-gray-900" />
                </div>
                <h4 className="font-semibold text-gray-200">1. Submit Appeal</h4>
                <p className="text-gray-300 text-sm">
                  Complete the appeal form with detailed information about your case and any supporting evidence.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <h4 className="font-semibold text-gray-200">2. Review Process</h4>
                <p className="text-gray-300 text-sm">
                  Our moderation team reviews your appeal within 5-7 business days, investigating all provided evidence.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <h4 className="font-semibold text-gray-200">3. Decision Notice</h4>
                <p className="text-gray-300 text-sm">
                  You'll receive a detailed email with our decision and any next steps or account status changes.
                </p>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-200 mb-2">Appeal Guidelines:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Appeals must be submitted within 14 days of the enforcement action</li>
                <li>• Provide specific details and evidence supporting your case</li>
                <li>• Be honest and respectful in your communication</li>
                <li>• One appeal per enforcement action is allowed</li>
                <li>• Frivolous or abusive appeals may result in additional penalties</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <Card padding="lg" className="bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-gray-300" />
              <h3 className="text-2xl font-bold text-white font-serif">Response Timeline</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm text-gray-300">Initial Response</div>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-white">5-7d</div>
                <div className="text-sm text-gray-300">Full Review</div>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-white">14d</div>
                <div className="text-sm text-gray-300">Appeal Deadline</div>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-white">30d</div>
                <div className="text-sm text-gray-300">Final Decision</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Appeal Form Modal */}
      {showAppealForm && (
        <div id="submit-appeal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowAppealForm(false)} />
          <Card className="relative w-full max-w-2xl bg-gray-800 border-gray-700 max-h-[90vh] overflow-y-auto" padding="lg">
            {appealSubmitted ? (
              <div className="text-center space-y-6">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif">Appeal Submitted</h3>
                  <p className="text-gray-300 mt-2">
                    Your appeal has been received and will be reviewed within 5-7 business days.
                  </p>
                </div>
                <Button onClick={() => {
                  setShowAppealForm(false);
                  setAppealSubmitted(false);
                  setAppealData({ email: '', accountId: '', violationType: '', appealReason: '', evidence: '', attachments: [] });
                }}>
                  Close
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-serif">Submit Appeal</h3>
                  <button 
                    onClick={() => setShowAppealForm(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <form onSubmit={handleAppealSubmit} className="space-y-4">
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={appealData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                  
                  <Input
                    label="Account ID or Username"
                    name="accountId"
                    value={appealData.accountId}
                    onChange={handleInputChange}
                    placeholder="Enter your account identifier"
                    required
                  />
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300 font-serif">
                      Violation Type <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="violationType"
                      value={appealData.violationType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white"
                    >
                      <option value="">Select violation type</option>
                      {violationTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <TextArea
                    label="Appeal Reason"
                    name="appealReason"
                    value={appealData.appealReason}
                    onChange={handleInputChange}
                    placeholder="Explain why you believe this enforcement action was incorrect..."
                    rows={4}
                    required
                  />
                  
                  <TextArea
                    label="Supporting Evidence"
                    name="evidence"
                    value={appealData.evidence}
                    onChange={handleInputChange}
                    placeholder="Provide any additional evidence or context that supports your appeal..."
                    rows={3}
                  />

                  {/* File Upload Section */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300 font-serif">
                      Supporting Documents (Optional)
                    </label>
                    
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-300 font-medium">Upload Supporting Files</p>
                        <p className="text-gray-400 text-sm mt-1">PDF, JPG, PNG up to 10MB each (max 5 files)</p>
                      </label>
                    </div>

                    {/* Uploaded Files List */}
                    {appealData.attachments.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-300">Uploaded Files:</h4>
                        {appealData.attachments.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                              <Paperclip className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">{file.name}</span>
                              <span className="text-gray-400 text-xs">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeAttachment(index)}
                              className="text-gray-400 hover:text-white"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowAppealForm(false)}
                      fullWidth
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" fullWidth>
                      Submit Appeal
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};