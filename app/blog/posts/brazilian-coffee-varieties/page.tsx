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

// Metadados para uso interno (não exportados)
const postMetadata = {
  slug: "brazilian-coffee-varieties",
  title: "Brazilian Coffee Varieties",
  subtitle: "A Guide to Brazil's Most Popular Coffee Types",
  featuredImage: "/photos/coffe.jpg",
  excerpt:
    "Explore the rich diversity of Brazilian coffee varieties, from the sweet notes of Yellow Bourbon to the full-bodied Mundo Novo.",
  publishedAt: "2023-09-10T09:00:00Z",
  author: {
    name: "João Silva",
    role: "Coffee Expert",
  },
};

// Dados completos do post
const POST_DATA: BlogPost = {
  ...postMetadata,
  content: `Brazil is home to some of the world's most distinctive coffee varieties. Each type brings its own unique characteristics and flavors to your cup. Let's explore some of the most notable Brazilian coffee varieties:

Yellow Bourbon:
• Known for its sweet, complex flavor
• Smooth body with low acidity
• Notes of caramel and chocolate
• Grown primarily in Minas Gerais and São Paulo

Mundo Novo:
• A natural hybrid of Typica and Bourbon
• Full-bodied with medium acidity
• Excellent for espresso blends
• High yield and disease resistance

Catuai:
• Developed from Yellow Caturra and Mundo Novo
• Balanced cup with good sweetness
• Adaptable to different growing conditions
• Popular in modern Brazilian coffee farming

These varieties represent just a small sample of Brazil's rich coffee heritage. Each one contributes to making Brazil the world's largest coffee producer and a leader in coffee quality.`,
};

export default function BrazilianCoffeeVarietiesPage() {
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
