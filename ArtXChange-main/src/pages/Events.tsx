import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Ticket, Filter, Search, CheckCircle, X, CreditCard, User } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { EventsMap } from '../components/events/EventsMap';
import { Event } from '../types';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Digital Art Revolution: Future of Public Displays',
    description: 'Join leading digital artists and technologists for an evening exploring the intersection of art, technology, and public space.',
    date: '2024-02-15',
    time: '19:00',
    location: 'Potsdamer Platz Gallery',
    address: 'Potsdamer Platz 1, 10785 Berlin',
    coordinates: { lat: 52.5096, lng: 13.3760 },
    type: 'visual-art',
    capacity: 80,
    registered: 45,
    price: 0,
    imageUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'ArtXchange Community',
    hashtags: ['digitalart', 'technology', 'future', 'publicart'],
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Guerrilla Art Workshop: Street Installation Techniques',
    description: 'Learn practical techniques for creating impactful street art installations while respecting urban environments and communities.',
    date: '2024-02-20',
    time: '14:00',
    location: 'Kreuzberg Community Center',
    address: 'Oranienstraße 140, 10969 Berlin',
    coordinates: { lat: 52.4987, lng: 13.4180 },
    type: 'workshop',
    capacity: 25,
    registered: 18,
    price: 15,
    imageUrl: 'https://images.pexels.com/photos/1070968/pexels-photo-1070968.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'Street Art Collective',
    hashtags: ['guerrilla', 'workshop', 'streetart', 'community'],
    status: 'active'
  },
  {
    id: '3',
    title: 'Monthly Artist Showcase & Networking',
    description: 'Connect with fellow artists, share your work, and discover collaboration opportunities in Berlin\'s vibrant art scene.',
    date: '2024-02-25',
    time: '18:30',
    location: 'Hackescher Markt Hub',
    address: 'Hackescher Markt 1, 10178 Berlin',
    coordinates: { lat: 52.5225, lng: 13.4026 },
    type: 'other',
    capacity: 60,
    registered: 32,
    price: 5,
    imageUrl: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'Berlin Artists Network',
    hashtags: ['networking', 'artists', 'community', 'collaboration'],
    status: 'upcoming'
  },
  {
    id: '4',
    title: 'Interactive LED Installation Opening',
    description: 'Experience the premiere of our newest interactive LED installation responding to community votes and urban rhythms.',
    date: '2024-03-01',
    time: '20:00',
    location: 'Alexanderplatz Central',
    address: 'Alexanderplatz 1, 10178 Berlin',
    coordinates: { lat: 52.5219, lng: 13.4132 },
    type: 'performance',
    capacity: 200,
    registered: 89,
    price: 0,
    imageUrl: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'ArtXchange & Tech Collective',
    hashtags: ['interactive', 'led', 'installation', 'technology'],
    status: 'upcoming'
  }
];

export const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [showProposeModal, setShowProposeModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [registrationData, setRegistrationData] = useState({ name: '', email: '', message: '' });
  const [proposeEventData, setProposeEventData] = useState({
    title: '',
    type: '',
    subtype: '',
    date: '',
    time: '',
    location: '',
    description: '',
    username: '',
    capacity: '',
    ticketType: 'free', // 'free' or 'ticket'
    ticketPrice: '',
    paymentMethods: [] as string[]
  });
  const [showTicketPurchase, setShowTicketPurchase] = useState(false);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const eventTypes = ['all', 'music', 'visual-art', 'performance', 'workshop', 'festival', 'other'];
  const dateFilters = ['all', 'today', 'week', 'month'];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      exhibition: 'bg-gray-700 text-gray-100',
      workshop: 'bg-gray-600 text-white',
      talk: 'bg-gray-500 text-white',
      networking: 'bg-gray-400 text-gray-900',
      installation: 'bg-white text-gray-900'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-700 text-gray-100';
  };

  const paymentMethods = [
    { id: 'apple-pay', label: 'Apple Pay', icon: '🍎' },
    { id: 'google-pay', label: 'Google Pay', icon: '🔍' },
    { id: 'paypal', label: 'PayPal', icon: '💰' }
  ];

  const handleRegister = (event: Event) => {
    if (event.price > 0) {
      setSelectedEvent(event);
      setShowTicketPurchase(true);
    } else {
      setSelectedEvent(event);
      setShowRegistrationModal(true);
    }
  };

  const handleLearnMore = (event: Event) => {
    setSelectedEvent(event);
    setShowLearnMoreModal(true);
  };

  const handleProposeEvent = () => {
    setShowProposeModal(true);
  };

  const handleProposeInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProposeEventData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodToggle = (methodId: string) => {
    setProposeEventData(prev => ({
      ...prev,
      paymentMethods: prev.paymentMethods.includes(methodId)
        ? prev.paymentMethods.filter(id => id !== methodId)
        : [...prev.paymentMethods, methodId]
    }));
  };

  const closeModals = () => {
    setShowRegistrationModal(false);
    setShowLearnMoreModal(false);
    setShowProposeModal(false);
    setShowTicketPurchase(false);
    setSelectedEvent(null);
    setRegistrationData({ name: '', email: '', message: '' });
    setProposeEventData({
      title: '',
      type: '',
      subtype: '',
      date: '',
      time: '',
      location: '',
      description: '',
      username: '',
      capacity: '',
      ticketType: 'free',
      ticketPrice: '',
      paymentMethods: []
    });
    setPaymentMethod('');
    setAcceptedTerms(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">Community Events</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join Berlin's vibrant art community through workshops, exhibitions, talks, and networking events that celebrate creativity and collaboration.
          </p>
        </div>

        {/* Interactive Events Map */}
        <div className="mb-8">
          <EventsMap events={mockEvents} />
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-gray-800 border-gray-700" elevated>
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-300" />
              <h3 className="text-lg font-semibold text-white font-serif">Find Events</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search className="w-5 h-5" />}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 font-serif">Event Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
                >
                  {eventTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 font-serif">Date Range</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
                >
                  {dateFilters.map(filter => (
                    <option key={filter} value={filter}>
                      {filter === 'all' ? 'All Dates' : 
                       filter === 'today' ? 'Today' :
                       filter === 'week' ? 'This Week' : 'This Month'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <Card key={event.id} hover className="animate-slide-up bg-gray-800 border-gray-700" style={{ animationDelay: `${index * 0.1}s` }} elevated>
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white font-serif mb-2">{event.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {event.hashtags.slice(0, 4).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Organized by {event.organizer}</div>
                      <div className="font-semibold text-white">
                        {event.price === 0 ? 'Free' : `€${event.price}`}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleLearnMore(event)}>
                        Learn More
                      </Button>
                      <Button size="sm" variant="primary" icon={Ticket} onClick={() => handleRegister(event)}>
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-16 text-center bg-gray-800 border-gray-700" padding="xl" elevated>
          <div className="space-y-6">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto" />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white font-serif">Host Your Own Event</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Have an idea for a community event? We support artist-led workshops, exhibitions, and collaborative projects.
              </p>
            </div>
            <Button size="lg" variant="primary" onClick={handleProposeEvent}>
              Propose an Event
            </Button>
          </div>
        </Card>
      </div>

      {/* Registration Modal */}
      {showRegistrationModal && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 smooth-scroll-enhanced">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModals} />
          <Card className="relative w-full max-w-md bg-gray-800 border-gray-700 modal-content" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">Register for Event</h3>
                <button onClick={closeModals} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-200">{selectedEvent.title}</h4>
                <div className="space-y-3">
                  <Input
                    label="Full Name"
                    value={registrationData.name}
                    onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
                    placeholder="Enter your full name"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    value={registrationData.email}
                    onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
                    placeholder="Enter your email"
                  />
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300 font-serif">Message (Optional)</label>
                    <textarea
                      value={registrationData.message}
                      onChange={(e) => setRegistrationData({...registrationData, message: e.target.value})}
                      placeholder="Any questions or special requirements?"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white resize-vertical"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={closeModals} fullWidth>
                  Cancel
                </Button>
                <Button variant="primary" fullWidth>
                  Confirm Registration
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Ticket Purchase Modal */}
      {showTicketPurchase && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 smooth-scroll-enhanced">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModals} />
          <Card className="relative w-full max-w-md bg-gray-800 border-gray-700 modal-content" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">Purchase Tickets</h3>
                <button onClick={closeModals} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-center space-y-4">
                <Ticket className="w-16 h-16 text-gray-300 mx-auto" />
                <div>
                  <h4 className="text-lg font-semibold text-white">{selectedEvent.title}</h4>
                  <p className="text-gray-400 text-sm">{new Date(selectedEvent.date).toLocaleDateString()} at {selectedEvent.time}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Quantity:</span>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                      className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600"
                    >
                      -
                    </button>
                    <span className="text-white font-bold">{ticketQuantity}</span>
                    <button 
                      onClick={() => setTicketQuantity(Math.min(5, ticketQuantity + 1))}
                      className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-white">€{(selectedEvent.price * ticketQuantity).toFixed(2)}</div>
                  <p className="text-gray-300 text-sm">€{selectedEvent.price} per ticket</p>
                </div>

                {/* Payment Methods */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-serif">
                    Payment Method <span className="text-red-400">*</span>
                  </label>
                  <div className="space-y-2">
                    {paymentMethods.map(method => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`w-full p-3 rounded-lg border-2 text-left transition-all duration-200 flex items-center space-x-3 ${
                          paymentMethod === method.id
                            ? 'border-white bg-gray-700'
                            : 'border-gray-600 hover:border-gray-500 bg-gray-800'
                        }`}
                      >
                        <span className="text-lg">{method.icon}</span>
                        <span className="text-gray-300">{method.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="acceptedTicketTerms"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400"
                  />
                  <label htmlFor="acceptedTicketTerms" className="text-sm text-gray-300">
                    I understand that violations may result in account restrictions and serious legal actions.
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={closeModals} fullWidth>
                  Cancel
                </Button>
                <Button 
                  variant="primary" 
                  disabled={!paymentMethod || !acceptedTerms}
                  fullWidth
                >
                  Purchase Tickets
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMoreModal && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto smooth-scroll-enhanced">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModals} />
          <Card className="relative w-full max-w-2xl bg-gray-800 border-gray-700 my-8 modal-content" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">Event Details</h3>
                <button onClick={closeModals} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-48 object-cover rounded-lg" />
                <h4 className="text-2xl font-bold text-white font-serif">{selectedEvent.title}</h4>
                <p className="text-gray-300 leading-relaxed">{selectedEvent.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{selectedEvent.time}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{selectedEvent.registered}/{selectedEvent.capacity} registered</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-700 rounded-lg">
                  <p className="text-gray-300"><strong>Address:</strong> {selectedEvent.address}</p>
                  <p className="text-gray-300"><strong>Organizer:</strong> {selectedEvent.organizer}</p>
                  <p className="text-gray-300"><strong>Price:</strong> {selectedEvent.price === 0 ? 'Free' : `€${selectedEvent.price}`}</p>
                </div>
              </div>

              <Button variant="primary" onClick={() => handleRegister(selectedEvent)} fullWidth>
                Register for This Event
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Propose Event Modal */}
      {showProposeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto smooth-scroll-enhanced">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModals} />
          <Card className="relative w-full max-w-2xl bg-gray-800 border-gray-700 my-8 modal-content" padding="lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-serif">Propose an Event</h3>
                <button onClick={closeModals} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <Input 
                  label="Event Title" 
                  name="title"
                  value={proposeEventData.title}
                  onChange={handleProposeInputChange}
                  placeholder="Enter your event title" 
                />
                
                <Input 
                  label="Username" 
                  name="username"
                  value={proposeEventData.username}
                  onChange={handleProposeInputChange}
                  placeholder="Enter your username" 
                  icon={<User className="w-5 h-5" />}
                />
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-serif">Event Type</label>
                  <select 
                    name="type"
                    value={proposeEventData.type}
                    onChange={handleProposeInputChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white"
                  >
                    <option value="">Select event type</option>
                    <option value="workshop">Workshop</option>
                    <option value="visual-art">Visual Art</option>
                    <option value="music">Music</option>
                    <option value="performance">Performance</option>
                    <option value="festival">Festival</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {proposeEventData.type === 'performance' && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300 font-serif">Performance Subtype</label>
                    <select 
                      name="subtype"
                      value={proposeEventData.subtype}
                      onChange={handleProposeInputChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white"
                    >
                      <option value="">Select performance type</option>
                      <option value="theater">Theater</option>
                      <option value="dance">Dance</option>
                      <option value="spoken-word">Spoken Word</option>
                      <option value="comedy">Comedy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    label="Proposed Date" 
                    name="date"
                    type="date" 
                    value={proposeEventData.date}
                    onChange={handleProposeInputChange}
                  />
                  <Input 
                    label="Proposed Time" 
                    name="time"
                    type="time" 
                    value={proposeEventData.time}
                    onChange={handleProposeInputChange}
                  />
                </div>
                
                <Input 
                  label="Location" 
                  name="location"
                  value={proposeEventData.location}
                  onChange={handleProposeInputChange}
                  placeholder="Proposed venue or area" 
                />
                
                <Input 
                  label="Event Capacity" 
                  name="capacity"
                  type="number"
                  value={proposeEventData.capacity}
                  onChange={handleProposeInputChange}
                  placeholder="Maximum number of attendees" 
                  icon={<Users className="w-5 h-5" />}
                />
                
                {/* Ticket Type Toggle */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-300 font-serif">Event Access</label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setProposeEventData(prev => ({ ...prev, ticketType: 'free', ticketPrice: '', paymentMethods: [] }))}
                      className={`flex-1 p-3 rounded-lg border-2 transition-all duration-200 ${
                        proposeEventData.ticketType === 'free'
                          ? 'border-white bg-gray-700 text-white'
                          : 'border-gray-600 hover:border-gray-500 bg-gray-800 text-gray-300'
                      }`}
                    >
                      Free Event
                    </button>
                    <button
                      type="button"
                      onClick={() => setProposeEventData(prev => ({ ...prev, ticketType: 'ticket' }))}
                      className={`flex-1 p-3 rounded-lg border-2 transition-all duration-200 ${
                        proposeEventData.ticketType === 'ticket'
                          ? 'border-white bg-gray-700 text-white'
                          : 'border-gray-600 hover:border-gray-500 bg-gray-800 text-gray-300'
                      }`}
                    >
                      Ticketed Event
                    </button>
                  </div>
                </div>
                
                {/* Ticket Price and Payment Methods */}
                {proposeEventData.ticketType === 'ticket' && (
                  <div className="space-y-4">
                    <Input 
                      label="Ticket Price (€)" 
                      name="ticketPrice"
                      type="number"
                      step="0.01"
                      min="0"
                      value={proposeEventData.ticketPrice}
                      onChange={handleProposeInputChange}
                      placeholder="0.00" 
                      icon={<CreditCard className="w-5 h-5" />}
                    />
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300 font-serif">
                        Accepted Payment Methods <span className="text-red-400">*</span>
                      </label>
                      <div className="space-y-2">
                        {paymentMethods.map(method => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => handlePaymentMethodToggle(method.id)}
                            className={`w-full p-3 rounded-lg border-2 text-left transition-all duration-200 flex items-center space-x-3 ${
                              proposeEventData.paymentMethods.includes(method.id)
                                ? 'border-white bg-gray-700'
                                : 'border-gray-600 hover:border-gray-500 bg-gray-800'
                            }`}
                          >
                            <span className="text-lg">{method.icon}</span>
                            <span className="text-gray-300">{method.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300 font-serif">Event Description</label>
                  <textarea
                    name="description"
                    value={proposeEventData.description}
                    onChange={handleProposeInputChange}
                    placeholder="Describe your event, its goals, and what participants can expect..."
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white resize-vertical"
                    rows={4}
                  />
                </div>
                
                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="acceptedEventTerms"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-gray-400"
                  />
                  <label htmlFor="acceptedEventTerms" className="text-sm text-gray-300">
                    I understand that violations may result in account restrictions and serious legal actions.
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={closeModals} fullWidth>
                  Cancel
                </Button>
                <Button 
                  variant="primary" 
                  disabled={
                    !proposeEventData.title || 
                    !proposeEventData.type || 
                    !proposeEventData.username || 
                    !proposeEventData.capacity ||
                    !acceptedTerms ||
                    (proposeEventData.ticketType === 'ticket' && (!proposeEventData.ticketPrice || proposeEventData.paymentMethods.length === 0))
                  }
                  fullWidth
                >
                  Submit Proposal
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};