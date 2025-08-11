import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Palette, Home, Calendar, Monitor, Menu, X, ArrowLeft, LogIn, UserPlus, Heart, User, Vote, HelpCircle, Users, Upload, MessageCircle, Settings, Bell, Shield, Lock, FileText, Eye, Mail, ArrowUp, Building } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showAccountTypesModal, setShowAccountTypesModal] = useState(false);
  
  const isHomePage = location.pathname === '/';
  const showBackButton = location.pathname !== '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const mainNavItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/gallery', label: 'Vote & Discover', icon: Vote },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/displays', label: 'LED Displays', icon: Monitor },
    { path: '/artists', label: 'Artists', icon: Users },
    { path: '/submit', label: 'Submit Art', icon: Upload }
  ];

  const communityItems = [
    { path: '/guidelines', label: 'Community Guidelines', icon: MessageCircle },
    { path: '/advertisement', label: 'Support Artists', icon: Heart },
    { path: '/newsletter', label: 'Newsletter', icon: Bell }
  ];

  const faqItems = [
    {
      question: "How do I submit artwork?",
      answer: "Create an account, go to Submit Art, upload your high-quality image with description and hashtags. Each artist can submit up to 5 artworks per month."
    },
    {
      question: "How does voting work?",
      answer: "Community members vote on artworks with a small €0.10 fee to prevent spam. Top-voted artworks are displayed on LED screens across Berlin."
    },
    {
      question: "What are guerrilla marketing opportunities?",
      answer: "Partner with artists for authentic street-level campaigns. Contact partnerships@artxchange.com for collaboration opportunities."
    },
    {
      question: "Why is VPN usage prohibited?",
      answer: "VPNs are banned to maintain voting integrity and prevent manipulation. One vote per person per artwork ensures fair community representation."
    },
    {
      question: "How do LED displays work?",
      answer: "Our network of LED screens across Berlin displays community-voted artworks. Displays rotate content based on voting results and community engagement."
    },
    {
      question: "What happens if my account is suspended?",
      answer: "Suspended accounts can appeal within 14 days. Visit the Enforcement & Appeals page or contact appeals@artxchange.com for assistance."
    }
  ];

  return (
    <>
      <header className="bg-gray-900/95 border-b border-gray-700 sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Mobile Back Button */}
            <div className="flex items-center space-x-3">
              {showBackButton && (
                <button
                  onClick={handleBackClick}
                  className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  aria-label="Go back"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
                <img 
                  src="https://www.dropbox.com/scl/fi/ikv9rffmbo1me8m6hqua6/Screenshot-2025-07-15-at-02.46.43.png?rlkey=rcbpyn0gnesjryqxvl0ur1f1y&st=24u1uwst&dl=1" 
                  alt="ArtXchange Logo" 
                  className="w-8 h-8 md:w-12 md:h-12 rounded-xl group-hover:opacity-90 transition-opacity duration-200"
                />
                <div className="flex flex-col">
                  <span className="text-lg md:text-2xl font-bold text-white font-serif">ArtXchange</span>
                  <span className="text-xs text-gray-400 font-sans -mt-1 hidden sm:block">Community Art Platform</span>
                </div>
              </Link>
            </div>

            {/* Standardized Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <Link
                to="/graffiti-map"
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/graffiti-map'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Palette className="w-4 h-4" />
                <span>Graffiti Map</span>
              </Link>
              <Link
                to="/events"
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/events'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Events</span>
              </Link>
              <Link
                to="/displays"
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/displays'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>LED Displays</span>
              </Link>
              <Link
                to="/advertisement"
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/advertisement'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>Partnership and Marketing</span>
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Desktop Account Actions */}
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/signin">
                  <button className="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium">
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="flex items-center space-x-2 px-4 py-2.5 text-sm bg-white text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium">
                    <UserPlus className="w-4 h-4" />
                    <span>Join Us</span>
                  </button>
                </Link>
              </div>

              {/* Mobile Account Buttons */}
              <div className="md:hidden flex items-center space-x-2">
                <Link to="/signin">
                  <button className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="flex items-center space-x-1 px-3 py-2 text-sm bg-white text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium">
                    <UserPlus className="w-4 h-4" />
                    <span>Join Us</span>
                  </button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="hidden md:block p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors ml-2"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Full-Screen Menu Panel */}
          <div className="fixed inset-0 bg-gray-900 overflow-y-auto mobile-nav-enhanced">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <img
                  src="https://www.dropbox.com/scl/fi/ikv9rffmbo1me8m6hqua6/Screenshot-2025-07-15-at-02.46.43.png?rlkey=rcbpyn0gnesjryqxvl0ur1f1y&st=24u1uwst&dl=1"
                  alt="ArtXchange Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-lg font-bold text-white font-serif">ArtXchange</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Main Navigation */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Main Navigation</h3>
                <nav className="space-y-2">
                  {mainNavItems.map(({ path, label, icon: Icon }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                        location.pathname === path
                          ? 'text-white bg-gray-800 shadow-sm'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{label}</span>
                    </Link>
                  ))}
                  <button
                    onClick={closeMobileMenu}
                  >
                    <Link
                      to="/account-types"
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 w-full text-left"
                    >
                      <Users className="w-5 h-5" />
                      <span>Account Types & Management</span>
                    </Link>
                  </button>
                </nav>
              </div>

              {/* Community Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Community</h3>
                <nav className="space-y-2">
                  <Link
                    to="/graffiti-map"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                  >
                    <Palette className="w-5 h-5" />
                    <span>Graffiti Map</span>
                  </Link>
                  <Link
                    to="/guidelines"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Community Guidelines</span>
                  </Link>
                  <Link
                    to="/advertisement"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Partnership and Marketing</span>
                  </Link>
                  <Link
                    to="/newsletter"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                  >
                    <Bell className="w-5 h-5" />
                    <span>Newsletter</span>
                  </Link>
                </nav>
              </div>

              {/* Additional Menu Items */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">More</h3>
                <nav className="space-y-2">
                  <Link
                    to="/enforcement"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Enforcement & Appeals</span>
                  </Link>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      // Navigate to enforcement page and scroll to appeal section
                      window.location.href = '/enforcement#submit-appeal';
                    }}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 w-full text-left"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Submit Appeal</span>
                  </button>
                  <Link
                    to="/privacy"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                  >
                    <Lock className="w-5 h-5" />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link
                    to="/terms"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Terms of Service</span>
                  </Link>
                  <Link
                    to="/accessibility"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Accessibility</span>
                  </Link>
                  <button
                    onClick={() => setShowFAQ(true)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 w-full text-left"
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span>FAQ & Support</span>
                  </button>
                </nav>
              </div>

              {/* Account Actions */}
              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Account</h3>
                <div className="space-y-3">
                  <Link to="/signin" onClick={closeMobileMenu}>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                      <LogIn className="w-5 h-5" />
                      <span>Sign In</span>
                    </button>
                  </Link>
                  <Link to="/signup" onClick={closeMobileMenu}>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium">
                      <UserPlus className="w-5 h-5" />
                      <span>Join Us</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="border-t border-gray-700 p-6 bg-gray-800">
              <p className="text-sm text-gray-400 text-center">
                Berlin's Community Art Platform
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Account Types Modal */}
      {showAccountTypesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowAccountTypesModal(false)} />
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-800 border border-gray-700 rounded-2xl p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white font-serif">Account Types & Management</h2>
                <button
                  onClick={() => setShowAccountTypesModal(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                All accounts require a one-time €2 registration fee and €2 monthly subscription. Choose the type that best fits your creative goals.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto">
                      <User className="w-8 h-8 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-serif">Artist Account</h3>
                      <p className="text-sm text-gray-400 mt-1">€2 registration + €2/month</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">Submit artworks, participate in community voting, and showcase your creative portfolio to Berlin's art community.</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-200">Features:</h4>
                    <ul className="space-y-2">
                      {['Submit up to 10 artworks per month', 'Participate in community voting (10/day)', 'Track artwork performance and votes', 'Connect with guerrilla marketing partners', 'Access to artist networking events'].map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/signup?type=artist">
                    <Button variant="primary" fullWidth onClick={() => setShowAccountTypesModal(false)}>
                      Join Us
                    </Button>
                  </Link>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto">
                      <Calendar className="w-8 h-8 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-serif">Event Creator Account</h3>
                      <p className="text-sm text-gray-400 mt-1">€2 registration + €2/month</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">Create and manage community events, workshops, and cultural gatherings that bring Berlin's creative community together.</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-200">Features:</h4>
                    <ul className="space-y-2">
                      {['Create up to 10 events per month', 'Access to event management tools', 'Promote events to targeted audiences', 'Collaborate with artists and venues', 'Event analytics and attendance tracking'].map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/signup?type=event-creator">
                    <Button variant="primary" fullWidth onClick={() => setShowAccountTypesModal(false)}>
                      Join Us
                    </Button>
                  </Link>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto">
                      <Building className="w-8 h-8 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-serif">Guerrilla Marketing Partner</h3>
                      <p className="text-sm text-gray-400 mt-1">€2 registration + €2/month</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">Launch authentic street-level marketing campaigns by partnering directly with Berlin's most talented artists.</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-200">Features:</h4>
                    <ul className="space-y-2">
                      {['Launch guerrilla marketing campaigns', 'Direct collaboration with artists', 'Access to campaign analytics', 'Government partnership opportunities', 'Brand integration with community art'].map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/signup?type=guerrilla-partner">
                    <Button variant="primary" fullWidth onClick={() => setShowAccountTypesModal(false)}>
                      Join Us
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Already have an account? <Link to="/signin" className="text-white hover:text-gray-300 underline">Sign in here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* FAQ Modal */}
      {showFAQ && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowFAQ(false)} />
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
            {/* FAQ Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white font-serif">FAQ & Support</h2>
              </div>
              <button
                onClick={() => setShowFAQ(false)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* FAQ Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white font-serif mb-3">{item.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>

              {/* Contact Support */}
              <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white font-serif mb-3">Need More Help?</h3>
                <p className="text-gray-300 mb-4">Can't find what you're looking for? Our support team is here to help.</p>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>General Support:</strong> hello@artxchange.com</p>
                  <p><strong>Technical Issues:</strong> support@artxchange.com</p>
                  <p><strong>Partnerships:</strong> partnerships@artxchange.com</p>
                  <p><strong>Appeals:</strong> appeals@artxchange.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};