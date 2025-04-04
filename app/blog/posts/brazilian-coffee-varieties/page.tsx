// app/blog/posts/brazilian-coffee-varieties.tsx
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
  slug: "brazilian-coffee-varieties",
  title: "Brazilian Coffee Varieties",
  subtitle:
    "Discover the distinctive processes and flavors of Brazilian coffee",
  featuredImage: "/photos/unnamed.jpg",
  excerpt:
    "Brazil is the world's largest coffee producer, offering a wide range of processing methods that result in diverse flavor profiles.",
  publishedAt: "2023-11-10T12:00:00Z",
  author: {
    name: "Carlos Silva",
    role: "Industry Specialist",
  },
};

// Dados completos do post
const POST_DATA: BlogPost = {
  ...postMetadata,
  content: `Brazilian coffee processing methods are varied and contribute to a rich and complex taste.

The natural process, where coffee cherries dry in the sun with the fruit still attached, produces a heavy-bodied coffee with fruity and sweet notes. This traditional method accounts for about 70% of Brazil's production.

The pulped natural process removes the skin but leaves some mucilage, creating a balance between clean acidity and sweetness. Washed coffees, though less common in Brazil, offer brighter acidity and cleaner flavors.

Ultimately, these unique processes create the signature flavors that Brazilian coffee is renowned for - chocolatey, nutty, and often with low acidity and a heavy body.`,
};

export default function BrazilianCoffeeVarieties() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[600px] flex items-center justify-center">
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
