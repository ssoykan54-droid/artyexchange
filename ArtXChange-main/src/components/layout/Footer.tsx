import React from 'react';
import { Heart, Palette, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Brand - Mobile: Logo above text */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-3">
              {/* Mobile: Stack logo above text */}
              <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-3">
                <img 
                  src="https://www.dropbox.com/scl/fi/ikv9rffmbo1me8m6hqua6/Screenshot-2025-07-15-at-02.46.43.png?rlkey=rcbpyn0gnesjryqxvl0ur1f1y&st=24u1uwst&dl=1" 
                  alt="ArtXchange Logo" 
                  className="w-6 h-6 rounded-lg mb-2 sm:mb-0"
                />
                <div className="text-center sm:text-left">
                  <span className="text-xl font-bold font-serif">ArtXchange</span>
                  <p className="text-gray-400 text-sm">Community Art Platform</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed mx-auto sm:mx-0">
              Connecting artists with communities through democratic art curation and public display.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Platform</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/submit" className="hover:text-white transition-colors block py-1 smooth-scroll">Submit Artwork</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors block py-1 smooth-scroll">Vote & Discover</Link></li>
              <li><Link to="/artists" className="hover:text-white transition-colors block py-1 smooth-scroll">Artist Profiles</Link></li>
              <li><Link to="/displays" className="hover:text-white transition-colors block py-1 smooth-scroll">LED Displays</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Community</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/guidelines" className="hover:text-white transition-colors block py-1 smooth-scroll">Guidelines</Link></li>
              <li><Link to="/advertisement" className="hover:text-white transition-colors block py-1 smooth-scroll">Partnership and Marketing</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors block py-1 smooth-scroll">Events</Link></li>
              <li><Link to="/graffiti-map" className="hover:text-white transition-colors block py-1 smooth-scroll">Graffiti Map</Link></li>
              <li><Link to="/newsletter" className="hover:text-white transition-colors block py-1 smooth-scroll">Newsletter</Link></li>
              <li><Link to="/enforcement" className="hover:text-white transition-colors block py-1 smooth-scroll">Enforcement & Appeals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">hello@artxchange.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Berlin, Germany</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 ArtXchange. Crafted with{' '}
            <Heart className="w-4 h-4 inline text-gray-500" />{' '}
            for the creative community.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm smooth-scroll">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm smooth-scroll">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};