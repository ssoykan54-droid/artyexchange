import { Artwork, Artist, LEDDisplay } from '../types';

export const mockArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Urban Solitude',
    artistName: 'Maya Chen',
    artistEmail: 'maya@example.com',
    description: 'A contemplative exploration of isolation within the bustling cityscape, captured through stark contrasts and geometric forms. #urbanlife #solitude #geometry',
    imageUrl: 'https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?auto=compress&cs=tinysrgb&w=800',
    votes: 247,
    createdAt: '2024-01-15',
    category: 'Urban',
    hashtags: ['urbanlife', 'solitude', 'geometry', 'blackandwhite'],
    featured: true,
    displayLocation: 'Alexanderplatz',
    guerrillaLocation: true
  },
  {
    id: '2',
    title: 'Whispers of Nature',
    artistName: 'David Rivera',
    artistEmail: 'david@example.com',
    description: 'An intimate dialogue between organic forms and urban environments, exploring the persistence of nature in metropolitan spaces. #nature #urban #organic #dialogue',
    imageUrl: 'https://images.pexels.com/photos/1070968/pexels-photo-1070968.jpeg?auto=compress&cs=tinysrgb&w=800',
    votes: 189,
    createdAt: '2024-01-12',
    category: 'Nature',
    hashtags: ['nature', 'urban', 'organic', 'dialogue', 'green'],
    featured: true,
    displayLocation: 'Potsdamer Platz'
  },
  {
    id: '3',
    title: 'Digital Metamorphosis',
    artistName: 'Alex Kim',
    artistEmail: 'alex@example.com',
    description: 'A fusion of traditional artistic techniques with contemporary digital aesthetics, questioning the boundaries of modern creativity. #digitalfuture #metamorphosis #traditional #modern',
    imageUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    votes: 312,
    createdAt: '2024-01-10',
    category: 'Digital',
    hashtags: ['digitalfuture', 'metamorphosis', 'traditional', 'modern', 'fusion'],
    featured: false,
    displayLocation: 'Hackescher Markt',
    guerrillaLocation: true
  },
  {
    id: '4',
    title: 'Collective Memory',
    artistName: 'Sarah Johnson',
    artistEmail: 'sarah@example.com',
    description: 'A visual narrative weaving together personal histories and shared cultural experiences through layered mixed media techniques. #memory #collective #narrative #culture',
    imageUrl: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
    votes: 156,
    createdAt: '2024-01-08',
    category: 'Abstract',
    hashtags: ['memory', 'collective', 'narrative', 'culture', 'abstractemotion'],
    featured: true,
    displayLocation: 'Brandenburg Gate'
  },
  {
    id: '5',
    title: 'Silent Portraits',
    artistName: 'Jordan Martinez',
    artistEmail: 'jordan@example.com',
    description: 'Capturing the unspoken stories etched in faces, exploring the depth of human emotion through minimalist photographic composition. #portrait #emotion #minimalist #stories',
    imageUrl: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    votes: 134,
    createdAt: '2024-01-05',
    category: 'Portrait',
    hashtags: ['portrait', 'emotion', 'minimalist', 'stories', 'human']
  },
  {
    id: '6',
    title: 'Cultural Synthesis',
    artistName: 'Priya Patel',
    artistEmail: 'priya@example.com',
    description: 'A harmonious blend of traditional motifs and contemporary expression, celebrating the evolution of cultural identity. #culture #synthesis #traditional #contemporary #identity',
    imageUrl: 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=800',
    votes: 203,
    createdAt: '2024-01-03',
    category: 'Traditional',
    hashtags: ['culture', 'synthesis', 'traditional', 'contemporary', 'identity'],
    featured: false,
    displayLocation: 'Museum Island'
  }
];

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Maya Chen',
    email: 'maya@example.com',
    bio: 'Contemporary artist exploring the intersection of urban landscapes and human emotion through mixed media installations.',
    artworks: mockArtworks.filter(art => art.artistName === 'Maya Chen'),
    totalVotes: 247,
    joinDate: '2023-08-15',
    categories: ['Urban', 'Abstract'],
    monthlySubmissions: 2,
    maxMonthlySubmissions: 5,
    lastSubmissionDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'David Rivera',
    email: 'david@example.com',
    bio: 'Environmental artist dedicated to highlighting the delicate relationship between nature and urban development.',
    artworks: mockArtworks.filter(art => art.artistName === 'David Rivera'),
    totalVotes: 189,
    joinDate: '2023-09-22',
    categories: ['Nature', 'Environmental'],
    monthlySubmissions: 1,
    maxMonthlySubmissions: 5,
    lastSubmissionDate: '2024-01-12'
  },
  {
    id: '3',
    name: 'Alex Kim',
    email: 'alex@example.com',
    bio: 'Digital artist pushing the boundaries of traditional art through innovative technology and interactive experiences.',
    artworks: mockArtworks.filter(art => art.artistName === 'Alex Kim'),
    totalVotes: 312,
    joinDate: '2023-07-10',
    categories: ['Digital', 'Interactive'],
    monthlySubmissions: 3,
    maxMonthlySubmissions: 5,
    lastSubmissionDate: '2024-01-10'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    bio: 'Mixed media artist weaving personal narratives with collective cultural memory through layered visual storytelling.',
    artworks: mockArtworks.filter(art => art.artistName === 'Sarah Johnson'),
    totalVotes: 156,
    joinDate: '2023-10-05',
    categories: ['Abstract', 'Mixed Media'],
    monthlySubmissions: 4,
    maxMonthlySubmissions: 5,
    lastSubmissionDate: '2024-01-08'
  }
];

export const mockLEDDisplays: LEDDisplay[] = [
  {
    id: '1',
    name: 'Alexanderplatz Central',
    location: 'Alexanderplatz',
    coordinates: { lat: 52.5219, lng: 13.4132 },
    currentArtwork: mockArtworks[0],
    isActive: true,
    address: 'Alexanderplatz 1, 10178 Berlin',
    isGuerrillaLocation: true,
    accessibility: 'public'
  },
  {
    id: '2',
    name: 'Potsdamer Platz Gallery',
    location: 'Potsdamer Platz',
    coordinates: { lat: 52.5096, lng: 13.3760 },
    currentArtwork: mockArtworks[1],
    isActive: true,
    address: 'Potsdamer Platz 1, 10785 Berlin',
    isGuerrillaLocation: false,
    accessibility: 'institutional'
  },
  {
    id: '3',
    name: 'Hackescher Markt Display',
    location: 'Hackescher Markt',
    coordinates: { lat: 52.5225, lng: 13.4026 },
    currentArtwork: mockArtworks[2],
    isActive: true,
    address: 'Hackescher Markt 1, 10178 Berlin',
    isGuerrillaLocation: true,
    accessibility: 'public'
  },
  {
    id: '4',
    name: 'Brandenburg Gate Screen',
    location: 'Brandenburg Gate',
    coordinates: { lat: 52.5163, lng: 13.3777 },
    currentArtwork: mockArtworks[3],
    isActive: true,
    address: 'Pariser Platz, 10117 Berlin',
    isGuerrillaLocation: false,
    accessibility: 'semi-public'
  },
  {
    id: '5',
    name: 'Kreuzberg Street Art Wall',
    location: 'Kreuzberg',
    coordinates: { lat: 52.4987, lng: 13.4180 },
    currentArtwork: mockArtworks[4],
    isActive: true,
    address: 'Oranienstraße 140, 10969 Berlin',
    isGuerrillaLocation: true,
    accessibility: 'public'
  },
  {
    id: '6',
    name: 'Friedrichshain Hub',
    location: 'Friedrichshain',
    coordinates: { lat: 52.5145, lng: 13.4531 },
    isActive: false,
    address: 'Warschauer Str. 70, 10243 Berlin',
    isGuerrillaLocation: true,
    accessibility: 'public'
  }
];

export const popularHashtags = [
  'urbanlife', 'digitalfuture', 'abstractemotion', 'nature', 'portrait',
  'memory', 'collective', 'minimalist', 'culture', 'identity',
  'guerrilla', 'community', 'streetart', 'interactive', 'contemporary'
];