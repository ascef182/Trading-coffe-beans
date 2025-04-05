// lib/blog-data.ts

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "green-coffee-insights",
    title: "Global Green Coffee Market Insights",
    subtitle: "Latest trends and updates from the world of green coffee",
    excerpt:
      "Unroasted coffee beans that preserve 50% more chlorogenic compounds and offer numerous health benefits. Discover the latest insights on global production, export trends, and market growth.",
    content: `The global green coffee market has been witnessing significant growth driven by consumer demand for healthier alternatives and sustainable production practices.

### Market Overview
The green coffee bean market is projected to grow at a CAGR of 5.2% from 2023 to 2030, reaching $42.3 billion by 2030. Key factors driving this growth include:
- Increasing demand for functional beverages
- Rising health consciousness among consumers
- Expansion of specialty coffee shops worldwide
- Growing applications in nutraceuticals and cosmetics

### Regional Production Insights
1. **Brazil**: Leads global production with 40% market share
2. **Vietnam**: Fastest growing exporter (+8% YoY)
3. **Colombia**: Premium quality beans commanding higher prices

### Emerging Trends
- Sustainable and direct trade practices gaining traction
- Organic and fair trade certifications increasing in importance
- Technological advancements in processing and storage

### Health Benefits Driving Demand
Green coffee is rich in chlorogenic acids which have been linked to:
✓ Improved metabolism
✓ Antioxidant properties
✓ Cardiovascular benefits
✓ Blood sugar regulation

In conclusion, the market is poised for further expansion as consumer preferences shift towards functional, health-promoting beverages and sustainable production methods. Investors and stakeholders should monitor these evolving trends closely.`,
    featuredImage: "/photos/AdobeStock_179552693.jpeg",
    publishedAt: "2023-09-15T12:00:00Z",
    author: {
      name: "John Doe",
      role: "Market Analyst",
    },
  },
  {
    id: "2",
    slug: "brazilian-coffee-varieties",
    title: "Brazilian Coffee Varieties",
    subtitle:
      "Discover the distinctive processes and flavors of Brazilian coffee",
    excerpt:
      "Brazil is the world's largest coffee producer, offering a wide range of processing methods that result in diverse flavor profiles.",
    content: `Brazilian coffee processing methods are varied and contribute to a rich and complex taste.

The natural process, where coffee cherries dry in the sun with the fruit still attached, produces a heavy-bodied coffee with fruity and sweet notes. This traditional method accounts for about 70% of Brazil's production.

The pulped natural process removes the skin but leaves some mucilage, creating a balance between clean acidity and sweetness. Washed coffees, though less common in Brazil, offer brighter acidity and cleaner flavors.

Ultimately, these unique processes create the signature flavors that Brazilian coffee is renowned for - chocolatey, nutty, and often with low acidity and a heavy body.`,
    featuredImage: "/photos/unnamed.jpg",
    publishedAt: "2023-11-10T12:00:00Z",
    author: {
      name: "Carlos Silva",
      role: "Industry Specialist",
    },
  },
  {
    id: "3",
    slug: "colombian-coffee-varieties",
    title: "Colombian Coffee Varieties",
    subtitle: "Exploring the rich diversity of Colombian coffee",
    excerpt:
      "Colombian coffee is renowned for its diverse flavors and distinct regional profiles. Explore the unique varieties that make Colombian coffee world famous.",
    content: `Colombia has a long-standing tradition of coffee cultivation with distinct regional flavors and processing methods.

The three main coffee-growing regions - Huila, Antioquia, and Nariño - each produce beans with unique characteristics. Huila's volcanic soil creates coffees with bright acidity and fruity notes, while Antioquia's high-altitude farms produce balanced, chocolatey flavors.

Colombian coffee is predominantly washed (wet-processed), which enhances its clean, bright profile. The country's strict quality control and grading system ensure only the best beans earn the "100% Colombian Coffee" designation.

Key varieties include:
• Castillo: Disease-resistant with sweet, citrus notes
• Caturra: Bright acidity and medium body
• Typica: The original variety with delicate floral aromas

In summary, Colombian coffee continues to be a benchmark for quality and diversity, offering something for every coffee lover's palate.`,
    featuredImage: "/photos/colombia-13-1-optimized.jpg",
    publishedAt: "2023-10-01T12:00:00Z",
    author: {
      name: "Jane Smith",
      role: "Coffee Expert",
    },
  },
];

// Funções mantidas intactas
export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
