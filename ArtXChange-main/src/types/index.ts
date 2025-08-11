export interface Artwork {
  id: string;
  title: string;
  artistName: string;
  artistEmail: string;
  description: string;
  imageUrl: string;
  votes: number;
  createdAt: string;
  category: string;
  hashtags: string[];
  featured?: boolean;
  displayLocation?: string;
  guerrillaLocation?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  email: string;
  bio?: string;
  artworks: Artwork[];
  totalVotes: number;
  joinDate: string;
  categories: string[];
  monthlySubmissions: number;
  maxMonthlySubmissions: number;
  lastSubmissionDate: string;
}

export interface EventCreator {
  id: string;
  name: string;
  email: string;
  country: string;
  passportId: string;
  eventCategories: string[];
  bio?: string;
  joinDate: string;
  eventsCreated: number;
  registrationFeePaid: boolean;
}

export interface GuerrillaMarketingPartner {
  id: string;
  name: string;
  email: string;
  country: string;
  passportId: string;
  companyName: string;
  handelsregisternummer: string;
  taxVatNumber: string;
  bio?: string;
  joinDate: string;
  campaignsLaunched: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  type: 'music' | 'visual-art' | 'performance' | 'workshop' | 'festival' | 'other';
  capacity: number;
  registered: number;
  price: number;
  imageUrl: string;
  organizer: string;
  hashtags: string[];
  status: 'upcoming' | 'active' | 'completed';
}

export interface VoteData {
  artworkId: string;
  timestamp: string;
}

export interface LEDDisplay {
  id: string;
  name: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  currentArtwork?: Artwork;
  isActive: boolean;
  address: string;
  isGuerrillaLocation: boolean;
  accessibility: 'public' | 'semi-public' | 'institutional';
}

export interface FilterOptions {
  category: string;
  sortBy: 'votes' | 'recent' | 'title' | 'artist';
  dateRange: 'all' | 'week' | 'month' | 'year';
  searchTerm: string;
  hashtags: string[];
}

export interface NewsletterSubscription {
  email: string;
  preferences: string[];
  subscribedAt: string;
}

export interface PaymentMethod {
  id: string;
  type: 'credit-card' | 'sepa' | 'paypal' | 'apple-pay' | 'google-pay';
  label: string;
  icon: string;
  lastFour?: string;
  expiryDate?: string;
}

export interface UserAccount {
  id: string;
  email: string;
  name: string;
  accountType: 'artist' | 'event-creator' | 'guerrilla-partner';
  registrationFeePaid: boolean;
  subscriptionActive: boolean;
  paymentMethod?: PaymentMethod;
  dailyDonations: number;
  lastDonationDate: string;
  createdAt: string;
}

export interface Donation {
  id: string;
  fromUserId: string;
  toArtistId: string;
  artworkId?: string;
  amount: number;
  timestamp: string;
  message?: string;
}