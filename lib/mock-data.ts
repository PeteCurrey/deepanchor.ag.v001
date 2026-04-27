export interface Marina {
  id: string;
  name: string;
  slug: string;
  country: string;
  coast: string;
  image: string;
  rating: number;
  reviews: number;
  costTier: 1 | 2 | 3 | 4;
  facilities: string[];
  depthMLWS: number;
  tidalAccess: string;
  vhfChannel: number;
  visitorBerths: string;
  lat: number;
  lng: number;
  description: string;
}

export const MOCK_MARINAS: Marina[] = [
  {
    id: "1",
    name: "Lymington Yacht Haven",
    slug: "lymington-yacht-haven",
    country: "uk",
    coast: "south-coast",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
    rating: 4.8,
    reviews: 124,
    costTier: 3,
    facilities: ["fuel", "water", "wifi", "showers", "laundry", "crane", "chandlery", "bar", "electricity"],
    depthMLWS: 2.5,
    tidalAccess: "All states of tide (shallow draft)",
    vhfChannel: 80,
    visitorBerths: "50+ available",
    lat: 50.7516,
    lng: -1.5306,
    description: "Located on the edge of the New Forest, Lymington Yacht Haven is a 5-star marina offering spectacular views across the Solent to the Isle of Wight.",
  },
  {
    id: "2",
    name: "Cowes Yacht Haven",
    slug: "cowes-yacht-haven",
    country: "uk",
    coast: "south-coast",
    image: "https://images.unsplash.com/photo-1517032283973-460ca466f917?auto=format&fit=crop&q=80&w=1200",
    rating: 4.6,
    reviews: 215,
    costTier: 4,
    facilities: ["water", "wifi", "showers", "laundry", "bar", "electricity"],
    depthMLWS: 3.0,
    tidalAccess: "All states of tide",
    vhfChannel: 80,
    visitorBerths: "Unlimited (seasonal rafting)",
    lat: 50.7628,
    lng: -1.2941,
    description: "In the heart of Cowes, the world's premier yachting destination. Home to Cowes Week and numerous international regattas.",
  },
  {
    id: "3",
    name: "Port Hamble Marina",
    slug: "port-hamble-marina",
    country: "uk",
    coast: "south-coast",
    image: "https://images.unsplash.com/photo-1542612711-665519808d7e?auto=format&fit=crop&q=80&w=1200",
    rating: 4.7,
    reviews: 98,
    costTier: 3,
    facilities: ["fuel", "water", "wifi", "showers", "laundry", "crane", "chandlery", "bar", "electricity"],
    depthMLWS: 2.0,
    tidalAccess: "All states of tide",
    vhfChannel: 80,
    visitorBerths: "30 available",
    lat: 50.8583,
    lng: -1.3144,
    description: "A hub for yacht racing and cruising on the River Hamble, offering extensive shore-side facilities and access to the Solent.",
  }
];

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Ocean Passage: An Honest Account",
    slug: "ocean-passage-honest-account",
    category: "Interviews",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1200",
    excerpt: "We sat down with veteran sailor Marcus Thorne to discuss the realities of crossing the Atlantic solo.",
    author: "Emma Sail",
    date: "April 20, 2026",
    readTime: "12 min read",
  },
  {
    id: "2",
    title: "Mastering the Art of Anchoring",
    slug: "mastering-anchoring",
    category: "Technical Guides",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
    excerpt: "From scope to swing, everything you need to know about staying put in any condition.",
    author: "Captain Jack",
    date: "April 18, 2026",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Top 5 West Country Anchorages",
    slug: "top-5-west-country-anchorages",
    category: "Passages & Destinations",
    image: "https://images.unsplash.com/photo-1517032283973-460ca466f917?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Discover the hidden gems of the UK's most beautiful cruising ground.",
    author: "Sarah Breeze",
    date: "April 15, 2026",
    readTime: "10 min read",
  }
];
