import { formatDistanceToNow } from 'date-fns';

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  subtitle: string;
  featured_image: string;
  published_at: string;
  author: {
    name: string;
    role: string;
  };
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'The Art of Coffee Cultivation',
    slug: 'art-of-coffee-cultivation',
    subtitle: 'Mastering the Craft of Growing Premium Coffee',
    excerpt: 'Discover the meticulous process of growing premium coffee beans...',
    content: `Coffee cultivation is an art that requires patience, expertise, and dedication. The journey from seed to cup involves numerous critical steps and careful attention to detail.

At high altitudes in Brazil's rich soil, coffee plants thrive under specific conditions. The process begins with selecting premium coffee varietals suited to the local climate and soil conditions. Farmers must carefully manage shade, water, and nutrients throughout the growing cycle.

The harvesting process is equally crucial, with cherries picked at peak ripeness to ensure optimal flavor development. Post-harvest processing, whether natural, washed, or honey process, further influences the final cup quality.

Our partnerships with local farmers focus on sustainable practices that not only produce exceptional coffee but also protect the environment and support local communities. Through careful cultivation and processing, we ensure that each batch of coffee meets our rigorous quality standards.`,
    featured_image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=2940',
    published_at: new Date('2024-03-01').toISOString(),
    author: {
      name: 'Thiago Cazarini',
      role: 'Coffee Expert'
    }
  },
  {
    id: 2,
    title: 'Understanding Coffee Grading Standards',
    slug: 'coffee-grading-standards',
    subtitle: 'A Deep Dive into Quality Assessment',
    excerpt: 'A comprehensive guide to coffee quality standards...',
    content: `Coffee grading is a complex system that helps determine the quality and value of coffee beans. Understanding these standards is crucial for both producers and buyers in the specialty coffee market.

The grading process involves multiple factors:
- Bean size and uniformity
- Defect count and types
- Cup quality and flavor profile
- Processing method consistency
- Moisture content

Our quality control team meticulously evaluates each lot using these criteria, ensuring that only the highest quality beans reach our clients. This commitment to excellence has established us as a trusted source for premium Brazilian coffee.`,
    featured_image: 'https://images.unsplash.com/photo-1501492673258-2c23127f1fa1?auto=format&fit=crop&w=2940',
    published_at: new Date('2024-02-15').toISOString(),
    author: {
      name: 'Maria Santos',
      role: 'Quality Control Specialist'
    }
  },
  {
    id: 3,
    title: 'Direct Trade Relationships',
    slug: 'direct-trade-relationships',
    subtitle: 'Building Sustainable Partnerships in Coffee',
    excerpt: 'Building sustainable partnerships with producers...',
    content: `Direct trade relationships form the foundation of sustainable coffee production. These partnerships create value for both farmers and roasters while ensuring the highest quality standards are maintained.

Our approach to direct trade focuses on:
- Fair pricing that rewards quality
- Long-term commitment to farmers
- Technical support and knowledge sharing
- Investment in community development
- Environmental sustainability

Through these relationships, we're able to secure the finest Brazilian coffee while supporting the communities that produce it. This model has proven successful in creating lasting positive impact throughout the coffee supply chain.`,
    featured_image: 'https://images.unsplash.com/photo-1599999905374-a7264acb2c23?auto=format&fit=crop&w=2940',
    published_at: new Date('2024-02-01').toISOString(),
    author: {
      name: 'Carlos Oliveira',
      role: 'Sourcing Director'
    }
  },
];

export function getPosts() {
  return posts;
}

export function getPost(slug: string) {
  return posts.find(post => post.slug === slug);
}