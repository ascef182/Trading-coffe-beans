// app/blog/posts/green-coffee-insights/page.tsx
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

// Dados do post
const POST_DATA: BlogPost = {
  slug: "green-coffee-insights",
  title: "Green Coffee Insights",
  subtitle: "Understanding Raw Coffee and Its Market Impact",
  featuredImage: "/photos/Café-Verde.webp",
  excerpt:
    "Learn about green coffee, its characteristics, and its crucial role in the global coffee market.",
  content: `Green coffee, also known as raw coffee, is the coffee bean in its natural state before roasting. These beans maintain their original properties and have a milder, herbaceous flavor.

Characteristics of Green Coffee:
• Olive-green color
• Mild and herbaceous flavor
• High chlorogenic acid content
• Lower caffeine content compared to roasted coffee
• Better storage durability

Health Benefits:
Green coffee is rich in antioxidants, especially chlorogenic acid, which may help reduce blood pressure and improve cardiovascular health. Studies suggest that regular consumption of green coffee may contribute to weight management and blood sugar regulation.

Market Uses:
Beyond direct consumption, green coffee is used in the production of dietary supplements and functional beverage extracts. The cosmetics industry also uses green coffee extracts in skincare products.

Global Market:
The green coffee market has grown significantly in recent years, driven by demand for natural and functional products. Cazarini Trading specializes in exporting high-quality green coffee to various international markets.`,
  publishedAt: "2023-09-15T10:30:00Z",
  author: {
    name: "Maria Oliveira",
    role: "Green Coffee Expert",
  },
};

export default function GreenCoffeeInsightsPage() {
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
                <p key={index} className="text-base md:text-lg text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
