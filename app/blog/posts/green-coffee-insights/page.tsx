// app/blog/posts/green-coffee-insights.tsx
import React from "react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Calendar, User } from "lucide-react";
import { BackButton } from "@/components/back-button";

// Interface para tipagem dos dados do post
interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  featuredImage: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
}

// Metadados exportados para uso na listagem de posts
export const postMetadata = {
  slug: "green-coffee-insights",
  title: "Global Green Coffee Market Insights",
  subtitle: "Latest trends and updates from the world of green coffee",
  featuredImage: "/photos/AdobeStock_179552693.jpeg",
  excerpt:
    "Unroasted coffee beans that preserve 50% more chlorogenic compounds and offer numerous health benefits. Discover the latest insights on global production, export trends, and market growth.",
  publishedAt: "2023-09-15T12:00:00Z",
  author: {
    name: "John Doe",
    role: "Market Analyst",
  },
};

// Dados completos do post
const POST_DATA: BlogPost = {
  ...postMetadata,
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
};

export default function GreenCoffeeInsights() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={POST_DATA.featuredImage}
            alt={POST_DATA.title}
            fill
            className="object-cover brightness-50"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            {POST_DATA.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
            {POST_DATA.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 md:h-5 md:w-5" />
              <span>{POST_DATA.author.name}</span>
              <span className="text-white/70">({POST_DATA.author.role})</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 md:h-5 md:w-5" />
              <time>
                {formatDistanceToNow(new Date(POST_DATA.publishedAt), {
                  addSuffix: true,
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 font-medium">
              {POST_DATA.excerpt}
            </p>
            <div className="space-y-4 md:space-y-6">
              {POST_DATA.content.split("\n\n").map((paragraph, index) => (
                <div key={index}>
                  {paragraph.startsWith("###") ? (
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                      {paragraph.replace("###", "")}
                    </h3>
                  ) : paragraph.startsWith("-") || paragraph.startsWith("✓") ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {paragraph.split("\n").map((item, i) => (
                        <li
                          key={i}
                          className="text-base md:text-lg text-gray-700"
                        >
                          {item.replace(/^[-✓] /, "")}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base md:text-lg text-gray-700">
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
