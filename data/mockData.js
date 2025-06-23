export const categories = [
  { id: 'singers', name: 'Singers', icon: '🎤' },
  { id: 'dancers', name: 'Dancers', icon: '💃' },
  { id: 'speakers', name: 'Speakers', icon: '🎯' },
  { id: 'djs', name: 'DJs', icon: '🎧' },
  { id: 'comedians', name: 'Comedians', icon: '😄' },
  { id: 'magicians', name: 'Magicians', icon: '🎩' }
];

export const locations = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 
  'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Goa'
];

export const priceRanges = [
  '₹5,000 - ₹15,000',
  '₹15,000 - ₹50,000', 
  '₹50,000 - ₹1,00,000',
  '₹1,00,000+'
];

export const languages = [
  'Hindi', 'English', 'Tamil', 'Telugu', 'Marathi', 
  'Bengali', 'Gujarati', 'Kannada', 'Malayalam', 'Punjabi'
];

export const mockArtists = [
  {
    id: '1',
    name: 'Arjun Sharma',
    category: ['singers'],
    priceRange: '₹25,000 - ₹50,000',
    location: 'Mumbai',
    bio: 'Professional playback singer with 8+ years of experience in Bollywood music industry.',
    languages: ['Hindi', 'English', 'Marathi'],
    profileImage: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.8,
    verified: true
  },
  {
    id: '2', 
    name: 'Priya Nair',
    category: ['dancers'],
    priceRange: '₹15,000 - ₹35,000',
    location: 'Bangalore',
    bio: 'Classical and contemporary dance performer specializing in Bharatanatyam and modern fusion.',
    languages: ['English', 'Tamil', 'Kannada'],
    profileImage: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.9,
    verified: true
  },
  {
    id: '3',
    name: 'Raj Patel',
    category: ['speakers'],
    priceRange: '₹50,000 - ₹1,00,000',
    location: 'Delhi',
    bio: 'Motivational speaker and corporate trainer with expertise in leadership and personal development.',
    languages: ['Hindi', 'English', 'Gujarati'],
    profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.7,
    verified: true
  },
  {
    id: '4',
    name: 'DJ Arya',
    category: ['djs'],
    priceRange: '₹30,000 - ₹75,000',
    location: 'Goa',
    bio: 'Electronic music producer and DJ performing at top venues across India.',
    languages: ['English', 'Hindi'],
    profileImage: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.6,
    verified: false
  },
  {
    id: '5',
    name: 'Kavya Reddy',
    category: ['singers', 'dancers'],
    priceRange: '₹40,000 - ₹80,000',
    location: 'Chennai',
    bio: 'Multi-talented performer combining classical vocals with traditional dance forms.',
    languages: ['Tamil', 'Telugu', 'English'],
    profileImage: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.9,
    verified: true
  },
  {
    id: '6',
    name: 'Rohit Joshi',
    category: ['comedians'],
    priceRange: '₹20,000 - ₹45,000',
    location: 'Pune',
    bio: 'Stand-up comedian and improv artist entertaining audiences with relatable humor.',
    languages: ['Hindi', 'English', 'Marathi'],
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.5,
    verified: true
  }
];

export const mockSubmissions = [
  {
    id: '1',
    artistName: 'Arjun Sharma',
    category: ['singers'],
    city: 'Mumbai',
    fee: '₹25,000 - ₹50,000',
    status: 'approved',
    submittedAt: '2025-01-10'
  },
  {
    id: '2',
    artistName: 'Meera Kapoor', 
    category: ['dancers'],
    city: 'Delhi',
    fee: '₹30,000 - ₹60,000',
    status: 'pending',
    submittedAt: '2025-01-12'
  },
  {
    id: '3',
    artistName: 'Vikram Singh',
    category: ['speakers'],
    city: 'Bangalore',
    fee: '₹75,000+',
    status: 'rejected',
    submittedAt: '2025-01-08'
  }
];