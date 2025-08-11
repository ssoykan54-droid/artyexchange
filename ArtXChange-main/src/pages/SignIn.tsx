import React, { useState } from 'react';
import { LogIn, Mail, Lock, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [accountStatus, setAccountStatus] = useState<'active' | 'suspended' | 'banned' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate account status check
    const mockAccountStatus = Math.random() > 0.8 ? 'suspended' : 'active';
    setAccountStatus(mockAccountStatus);
    setIsLoading(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending reset email
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setResetEmailSent(true);
    setIsLoading(false);
  };

  // Account Suspended/Banned Screen
  if (accountStatus === 'suspended' || accountStatus === 'banned') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center bg-gray-800 border-gray-700" padding="xl" elevated>
            <div className="space-y-6">
              <AlertCircle className="w-20 h-20 text-red-400 mx-auto" />
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-white font-serif">
                  Account {accountStatus === 'suspended' ? 'Suspended' : 'Banned'}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {accountStatus === 'suspended' 
                    ? 'Your account has been temporarily suspended due to a violation of our community guidelines.'
                    : 'Your account has been permanently banned due to repeated violations of our terms of service.'
                  }
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Reason for Action:</h3>
                <p className="text-gray-300 mb-4">
                  {accountStatus === 'suspended' 
                    ? 'VPN usage detected during voting process, which violates our platform integrity policies.'
                    : 'Multiple violations including spam submissions and vote manipulation attempts.'
                  }
                </p>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <p><strong>Action Date:</strong> January 15, 2024</p>
                  <p><strong>Duration:</strong> {accountStatus === 'suspended' ? '7 days' : 'Permanent'}</p>
                  <p><strong>Appeal Deadline:</strong> {accountStatus === 'suspended' ? 'January 29, 2024' : 'February 15, 2024'}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">Appeal Process</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  If you believe this action was taken in error, you can submit an appeal within 14 days. 
                  Please provide detailed information about your case and any evidence supporting your appeal.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/enforcement">
                    <Button size="lg" variant="primary">
                      Submit Appeal
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-700">
                      Return Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="bg-gray-800 border-gray-700" padding="lg" elevated>
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto">
                <LogIn className="w-8 h-8 text-gray-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white font-serif">
                  {showForgotPassword ? 'Reset Password' : 'Sign In'}
                </h1>
                <p className="text-gray-300 mt-2">
                  {showForgotPassword 
                    ? 'Enter your email to receive a new password'
                    : 'Welcome back to ArtXchange'
                  }
                </p>
              </div>
            </div>

            {/* Reset Email Sent Confirmation */}
            {resetEmailSent && (
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-gray-200 font-medium">Password Reset Sent</p>
                </div>
                <p className="text-gray-300 text-sm mt-1">
                  A new temporary password has been sent to your email address. Please check your inbox and spam folder.
                </p>
              </div>
            )}

            {/* Sign In Form */}
            {!showForgotPassword ? (
              <form onSubmit={handleSignIn} className="space-y-4">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  icon={<Mail className="w-5 h-5" />}
                  required
                />

                <Input
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  icon={<Lock className="w-5 h-5" />}
                  required
                />

                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  loading={isLoading}
                  fullWidth
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            ) : (
              /* Forgot Password Form */
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  icon={<Mail className="w-5 h-5" />}
                  required
                />

                <div className="space-y-3">
                  <Button
                    type="submit"
                    size="lg"
                    loading={isLoading}
                    fullWidth
                  >
                    {isLoading ? 'Sending...' : 'Send New Password'}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="ghost"
                    size="lg"
                    onClick={() => {
                      setShowForgotPassword(false);
                      setResetEmailSent(false);
                    }}
                    fullWidth
                  >
                    Back to Sign In
                  </Button>
                </div>
              </form>
            )}

            {/* Sign Up Link */}
            <div className="text-center pt-4 border-t border-gray-700">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link to="/signup" className="text-white hover:text-gray-300 font-medium transition-colors">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};