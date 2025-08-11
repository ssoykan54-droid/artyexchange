import React from 'react';
import { ArrowRight, Sparkles, Users, Palette, Monitor, ArrowUp, LogIn, UserPlus } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const Hero: React.FC<{ onOpenGuerrillaModal: () => void }> = ({ onOpenGuerrillaModal }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Mini-Navigation */}
      <div className="lg:hidden bg-gray-800 border-b border-gray-700 mobile-nav-enhanced">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center space-x-6 py-4">
            <Link to="/signin">
              <Button size="sm" variant="outline" icon={LogIn} className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" variant="outline" icon={UserPlus} className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900">
                Join Us
              </Button>
            </Link>
            <Link 
              to="/newsletter" 
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors smooth-scroll"
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 animate-bounce-gentle">
            <Palette className="w-12 h-12" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-bounce-gentle" style={{ animationDelay: '2s' }}>
            <Users className="w-14 h-14" />
          </div>
          <div className="absolute top-1/2 right-1/3 animate-bounce-gentle" style={{ animationDelay: '3s' }}>
            <Monitor className="w-10 h-10" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-serif">
                Where Art Meets
                <span className="block text-gray-300 italic">
                  Community
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Submit your artwork, engage with the community through democratic voting, 
                and witness creativity illuminate Berlin's LED displays across the city.
              </p>
            </div>

            {/* Updated button order: Vote & Discover above Submit Your Art */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/gallery">
                <Button size="xl" variant="outline" icon={ArrowRight} iconPosition="right" className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900">
                  Vote & Discover
                </Button>
              </Link>
              <Link to="/submit">
                <Button size="xl" variant="outline" className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900">
                  Submit Your Art
                </Button>
              </Link>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900"
                onClick={onOpenGuerrillaModal}
              >
                Partnership and Marketing
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-700">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-white font-serif">847</div>
                <div className="text-gray-400 font-light">Artworks Submitted</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-white font-serif">3.2K</div>
                <div className="text-gray-400 font-light">Community Votes</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-white font-serif">156</div>
                <div className="text-gray-400 font-light">Active Artists</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-white font-serif">12</div>
                <div className="text-gray-400 font-light">LED Display Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-elegant-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};