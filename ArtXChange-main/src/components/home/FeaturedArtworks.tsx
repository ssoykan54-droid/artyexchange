import React from 'react';
import { Star, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockArtworks } from '../../data/mockData';
import { ArtworkCard } from '../artwork/ArtworkCard';
import { Button } from '../ui/Button';

export const FeaturedArtworks: React.FC = () => {
  const featuredArtworks = mockArtworks.filter(artwork => artwork.featured).slice(0, 3);

  return (
    <section id="featured-artworks" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-3">
            <Star className="w-8 h-8 text-white" />
            <button 
              onClick={() => document.getElementById('featured-artworks')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-4xl md:text-5xl font-bold text-white font-serif hover:text-gray-300 transition-colors cursor-pointer"
            >
              Featured Artworks
            </button>
            <Star className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the most celebrated pieces from our vibrant community of artists, 
            currently illuminating Berlin's digital canvases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArtworks.map((artwork, index) => (
            <div key={artwork.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                {artwork.votes > 200 && (
                  <div className="absolute -top-3 -right-3 z-10 bg-white text-gray-900 px-3 py-1.5 rounded-full text-sm font-medium flex items-center space-x-1 shadow-elegant">
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending</span>
                  </div>
                )}
                <ArtworkCard artwork={artwork} showLocation={true} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <Button size="lg" variant="outline" icon={ArrowRight} iconPosition="right" className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900">
              View All Artworks
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};