import React, { useState } from 'react';
import { User, MapPin, Calendar, Heart, MessageCircle, Share2, Instagram, Twitter, Globe, Award, TrendingUp, Users } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockArtists, mockArtworks } from '../data/mockData';

export const Profile: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('artworks');
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock profile data - in real app, fetch based on ID
  const artist = mockArtists[0]; // Maya Chen
  const artworks = mockArtworks.filter(artwork => artwork.artistName === artist.name);
  const campaigns = []; // Mock campaigns data
  const events = []; // Mock events data

  const tabs = [
    { id: 'artworks', label: 'Artworks', count: artworks.length },
    { id: 'campaigns', label: 'Campaigns', count: campaigns.length },
    { id: 'events', label: 'Events', count: events.length }
  ];

  const socialLinks = [
    { platform: 'Instagram', icon: Instagram, url: '#', handle: '@mayachen_art' },
    { platform: 'Twitter', icon: Twitter, url: '#', handle: '@mayachen' },
    { platform: 'Website', icon: Globe, url: '#', handle: 'mayachen.art' }
  ];

  const achievements = [
    { icon: Award, title: 'Featured Artist', description: '3 artworks featured on LED displays' },
    { icon: TrendingUp, title: 'Top Voted', description: 'Highest voted artwork this month' },
    { icon: Users, title: 'Community Leader', description: '500+ community interactions' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <Card className="mb-8 bg-gray-800 border-gray-700" elevated>
          {/* Banner */}
          <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-600 rounded-t-xl relative">
            <div className="absolute inset-0 bg-black/20 rounded-t-xl"></div>
          </div>

          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-16 relative z-10">
              {/* Avatar */}
              <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-500 rounded-2xl flex items-center justify-center shadow-elegant border-4 border-gray-800">
                <User className="w-16 h-16 text-white" />
              </div>

              {/* Info & Actions */}
              <div className="flex-1 mt-4 md:mt-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-white font-serif">{artist.name}</h1>
                    <div className="flex items-center space-x-4 text-gray-300">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Berlin, Germany</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {new Date(artist.joinDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mt-4 md:mt-0">
                    <Button
                      variant={isFollowing ? "outline" : "primary"}
                      onClick={() => setIsFollowing(!isFollowing)}
                      className={isFollowing ? "border-gray-600 text-gray-300 hover:bg-gray-700" : ""}
                    >
                      {isFollowing ? 'Following' : 'Follow'}
                    </Button>
                    <Button variant="outline" icon={MessageCircle} className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      Message
                    </Button>
                    <Button variant="ghost" icon={Share2} className="text-gray-400 hover:text-white">
                      Share
                    </Button>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl">
                  {artist.bio}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-8 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-serif">{artworks.length}</div>
                    <div className="text-sm text-gray-400">Artworks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-serif">{artist.totalVotes}</div>
                    <div className="text-sm text-gray-400">Total Votes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-serif">1.2K</div>
                    <div className="text-sm text-gray-400">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-serif">847</div>
                    <div className="text-sm text-gray-400">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Links */}
            <Card className="bg-gray-800 border-gray-700" elevated>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white font-serif">Connect</h3>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      <div>
                        <div className="text-white text-sm font-medium">{link.platform}</div>
                        <div className="text-gray-400 text-xs">{link.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="bg-gray-800 border-gray-700" elevated>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white font-serif">Achievements</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg">
                      <achievement.icon className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">{achievement.title}</div>
                        <div className="text-gray-400 text-xs">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Categories */}
            <Card className="bg-gray-800 border-gray-700" elevated>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white font-serif">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {artist.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex-1 justify-center ${
                    activeTab === tab.id
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">{tab.count}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'artworks' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {artworks.map((artwork) => (
                  <Card key={artwork.id} className="bg-gray-800 border-gray-700" hover elevated>
                    <div className="space-y-4">
                      <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white font-serif">{artwork.title}</h4>
                        <p className="text-sm text-gray-300 line-clamp-2">{artwork.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{artwork.votes}</span>
                            </div>
                            <div className="text-xs">
                              {new Date(artwork.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                          {artwork.featured && (
                            <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'campaigns' && (
              <Card className="text-center py-16 bg-gray-800 border-gray-700" elevated>
                <div className="space-y-4">
                  <TrendingUp className="w-16 h-16 text-gray-400 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-white font-serif">No campaigns yet</h3>
                    <p className="text-gray-300">This artist hasn't participated in any guerrilla marketing campaigns.</p>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === 'events' && (
              <Card className="text-center py-16 bg-gray-800 border-gray-700" elevated>
                <div className="space-y-4">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-white font-serif">No events yet</h3>
                    <p className="text-gray-300">This artist hasn't hosted or participated in any events.</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};