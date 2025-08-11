import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Users, Plus, Minus, Navigation, Search, Filter } from 'lucide-react';
import { Event } from '../../types';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface EventsMapProps {
  events: Event[];
}

export const EventsMap: React.FC<EventsMapProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [mapZoom, setMapZoom] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const categories = ['all', 'music', 'visual-art', 'performance', 'workshop', 'festival', 'other'];
  const dateFilters = ['all', 'today', 'week', 'month'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.type === selectedCategory;
    const matchesStatus = event.status === 'active' || event.status === 'upcoming';
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.2, 0.8));
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Map Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Calendar className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-serif">Berlin Events Network</h2>
        </div>
        <p className="text-base md:text-lg text-white max-w-2xl mx-auto px-4">
          {filteredEvents.length} active events • {events.filter(e => e.status === 'upcoming').length} upcoming events
        </p>
      </div>

      {/* Map Filters */}
      <Card className="mb-6 bg-gray-800 border-gray-700" elevated>
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-300" />
            <h3 className="text-lg font-semibold text-white font-serif">Filter Events</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="w-5 h-5" />}
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 font-serif">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white hover:border-gray-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 font-serif">Date Range</label>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
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

      {/* Interactive Berlin Map */}
      <Card className="relative h-[400px] md:h-[500px] bg-gray-100 overflow-hidden touch-pan-x touch-pan-y" elevated>
        {/* Map Background - Simplified Berlin Layout */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-300 origin-center"
          style={{ transform: `scale(${mapZoom})` }}
        >
          {/* Spree River representation */}
          <div className="absolute top-1/2 left-1/4 w-1/2 h-2 bg-gray-400 rounded-full transform -rotate-12 opacity-60"></div>
          
          {/* Major districts indicators */}
          <div className="absolute top-4 left-4 text-xs text-gray-500 font-medium">Mitte</div>
          <div className="absolute top-4 right-4 text-xs text-gray-500 font-medium">Friedrichshain</div>
          <div className="absolute bottom-4 left-4 text-xs text-gray-500 font-medium">Kreuzberg</div>
          <div className="absolute bottom-4 right-4 text-xs text-gray-500 font-medium">Prenzlauer Berg</div>

          {/* Event Pins */}
          {filteredEvents.map((event, index) => {
            const positions = [
              { left: '45%', top: '35%' }, // Alexanderplatz
              { left: '35%', top: '55%' }, // Potsdamer Platz
              { left: '55%', top: '40%' }, // Hackescher Markt
              { left: '40%', top: '45%' }, // Brandenburg Gate
              { left: '25%', top: '65%' }, // Kreuzberg
              { left: '70%', top: '30%' }  // Friedrichshain
            ];

            const position = positions[index] || { left: '50%', top: '50%' };

            return (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation ${
                  selectedEvent?.id === event.id ? 'z-20' : 'z-10'
                }`}
                style={position}
                title={event.title}
              >
                <div className={`relative ${
                  selectedEvent?.id === event.id 
                    ? 'scale-125' 
                    : ''
                }`}>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-elegant ${
                    event.status === 'active'
                      ? 'bg-green-600 text-white'
                      : event.status === 'upcoming'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    <Calendar className="w-3 h-3 md:w-5 md:h-5" />
                  </div>
                  
                  {event.status === 'active' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {event.title}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button
            onClick={handleZoomIn}
            className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-elegant flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Zoom in"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
          <button
            onClick={handleZoomOut}
            className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-elegant flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Zoom out"
          >
            <Minus className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-elegant">
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                <Calendar className="w-2 h-2 text-white" />
              </div>
              <span>Active Event</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <Calendar className="w-2 h-2 text-white" />
              </div>
              <span>Upcoming Event</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span>Completed</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Results Summary */}
      <div className="mb-6">
        <p className="text-gray-300">
          Showing <span className="font-semibold">{filteredEvents.length}</span> of <span className="font-semibold">{events.length}</span> events
        </p>
      </div>

      {/* Event Details */}
      {selectedEvent && (
        <Card className="animate-scale-in" elevated>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-serif">
                    {selectedEvent.title}
                  </h3>
                  <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full mt-2 sm:mt-0 w-fit ${
                    selectedEvent.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : selectedEvent.status === 'upcoming'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedEvent.status.charAt(0).toUpperCase() + selectedEvent.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-start text-gray-600 space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{selectedEvent.address}</span>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{selectedEvent.registered}/{selectedEvent.capacity}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 font-serif">Event Details</h4>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
                <div className="flex flex-wrap gap-1">
                  {selectedEvent.hashtags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Button size="sm" variant="outline" className="w-full sm:w-auto">
                  Get Directions
                </Button>
                <Button size="sm" variant="ghost" className="w-full sm:w-auto">
                  View Details
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.title}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Organizer:</strong> {selectedEvent.organizer}</p>
                <p className="text-sm text-gray-600"><strong>Type:</strong> {selectedEvent.type.replace('-', ' ')}</p>
                <p className="text-sm text-gray-600"><strong>Price:</strong> {selectedEvent.price === 0 ? 'Free' : `€${selectedEvent.price}`}</p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};