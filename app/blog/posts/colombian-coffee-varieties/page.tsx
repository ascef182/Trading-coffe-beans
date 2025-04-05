// app/blog/posts/colombian-coffee-varieties.tsx
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
  slug: "colombian-coffee-varieties",
  title: "Colombian Coffee Varieties",
  subtitle: "Exploring the rich diversity of Colombian coffee",
  featuredImage: "/photos/colombia-13-1-optimized.jpg",
  excerpt:
    "Colombian coffee is renowned for its diverse flavors and distinct regional profiles. Explore the unique varieties that make Colombian coffee world famous.",
  publishedAt: "2023-10-01T12:00:00Z",
  author: {
    name: "Jane Smith",
    role: "Coffee Expert",
  },
};

// Dados completos do post
const POST_DATA: BlogPost = {
  ...postMetadata,
  content: `Colombia has a long-standing tradition of coffee cultivation with distinct regional flavors and processing methods.

The three main coffee-growing regions - Huila, Antioquia, and Nariño - each produce beans with unique characteristics. Huila's volcanic soil creates coffees with bright acidity and fruity notes, while Antioquia's high-altitude farms produce balanced, chocolatey flavors.

Colombian coffee is predominantly washed (wet-processed), which enhances its clean, bright profile. The country's strict quality control and grading system ensure only the best beans earn the "100% Colombian Coffee" designation.

Key varieties include:
• Castillo: Disease-resistant with sweet, citrus notes
• Caturra: Bright acidity and medium body
• Typica: The original variety with delicate floral aromas

In summary, Colombian coffee continues to be a benchmark for quality and diversity, offering something for every coffee lover's palate.`,
};

export default function ColombianCoffeeVarieties() {
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
