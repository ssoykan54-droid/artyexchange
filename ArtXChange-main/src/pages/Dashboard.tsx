import React, { useState } from 'react';
import { User, Upload, Heart, Calendar, Bell, BarChart3, Settings, Eye, TrendingUp, Award, MessageCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockArtworks, mockArtists } from '../data/mockData';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock current user data
  const currentUser = mockArtists[0]; // Maya Chen
  const userArtworks = mockArtworks.filter(artwork => artwork.artistName === currentUser.name);
  const totalVotes = userArtworks.reduce((sum, artwork) => sum + artwork.votes, 0);
  const featuredArtworks = userArtworks.filter(artwork => artwork.featured);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'artworks', label: 'My Artworks', icon: Upload },
    { id: 'saved', label: 'Saved', icon: Heart },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const notifications = [
    {
      id: '1',
      type: 'vote',
      message: 'Your artwork "Urban Solitude" received 5 new votes',
      time: '2 hours ago',
      unread: true
    },
    {
      id: '2',
      type: 'feature',
      message: 'Your artwork is now featured on Alexanderplatz display',
      time: '1 day ago',
      unread: true
    },
    {
      id: '3',
      type: 'event',
      message: 'New workshop: "Digital Art Revolution" - Register now',
      time: '2 days ago',
      unread: false
    }
  ];

  const savedArtworks = mockArtworks.slice(1, 4); // Mock saved artworks

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center shadow-elegant">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white font-serif">{currentUser.name}</h1>
              <p className="text-gray-300">Artist Dashboard</p>
              <p className="text-sm text-gray-400">Member since {new Date(currentUser.joinDate).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center bg-gray-800 border-gray-700" elevated>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-white font-serif">{userArtworks.length}</div>
                <div className="text-sm text-gray-300">Artworks</div>
              </div>
            </Card>
            <Card className="text-center bg-gray-800 border-gray-700" elevated>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-white font-serif">{totalVotes}</div>
                <div className="text-sm text-gray-300">Total Votes</div>
              </div>
            </Card>
            <Card className="text-center bg-gray-800 border-gray-700" elevated>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-white font-serif">{featuredArtworks.length}</div>
                <div className="text-sm text-gray-300">Featured</div>
              </div>
            </Card>
            <Card className="text-center bg-gray-800 border-gray-700" elevated>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-white font-serif">{currentUser.monthlySubmissions}</div>
                <div className="text-sm text-gray-300">This Month</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card className="bg-gray-800 border-gray-700" elevated>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white font-serif">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-white text-sm">Urban Solitude gained 12 votes</p>
                        <p className="text-gray-400 text-xs">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-white text-sm">Artwork featured on LED display</p>
                        <p className="text-gray-400 text-xs">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                      <Upload className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-white text-sm">New artwork submitted</p>
                        <p className="text-gray-400 text-xs">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Performance Chart */}
              <Card className="bg-gray-800 border-gray-700" elevated>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white font-serif">Performance Overview</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monthly Submissions</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-white h-2 rounded-full" style={{ width: `${(currentUser.monthlySubmissions / currentUser.maxMonthlySubmissions) * 100}%` }}></div>
                        </div>
                        <span className="text-white text-sm">{currentUser.monthlySubmissions}/{currentUser.maxMonthlySubmissions}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Vote Success Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <span className="text-white text-sm">78%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Community Engagement</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-white text-sm">65%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'artworks' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white font-serif">My Artworks</h3>
                <Button variant="primary" icon={Upload}>
                  Submit New Artwork
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userArtworks.map((artwork) => (
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
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-4 text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{artwork.votes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{Math.floor(artwork.votes * 1.5)}</span>
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
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-serif">Saved Artworks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedArtworks.map((artwork) => (
                  <Card key={artwork.id} className="bg-gray-800 border-gray-700" hover elevated>
                    <div className="space-y-4">
                      <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white font-serif">{artwork.title}</h4>
                        <p className="text-sm text-gray-400">by {artwork.artistName}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-gray-400">
                            <Heart className="w-4 h-4" />
                            <span>{artwork.votes}</span>
                          </div>
                          <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-serif">Notifications</h3>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <Card key={notification.id} className={`bg-gray-800 border-gray-700 ${notification.unread ? 'border-l-4 border-l-white' : ''}`} elevated>
                    <div className="flex items-start space-x-4">
                      <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-white' : 'bg-gray-600'}`}></div>
                      <div className="flex-1">
                        <p className="text-white">{notification.message}</p>
                        <p className="text-gray-400 text-sm mt-1">{notification.time}</p>
                      </div>
                      {notification.unread && (
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          Mark Read
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-serif">Account Settings</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-gray-800 border-gray-700" elevated>
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-white font-serif">Profile Information</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Display Name</label>
                        <input
                          type="text"
                          value={currentUser.name}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                        <textarea
                          value={currentUser.bio}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-vertical"
                        />
                      </div>
                      <Button variant="primary">Save Changes</Button>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gray-800 border-gray-700" elevated>
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-white font-serif">Notification Preferences</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Email notifications</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Vote updates</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Event reminders</span>
                        <input type="checkbox" className="w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Newsletter</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};