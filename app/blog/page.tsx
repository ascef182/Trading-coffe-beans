import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Calendar, User } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  featuredImage: string;
  excerpt: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
}

const blogPosts: BlogPost[] = [
  {
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
  },
  {
    slug: "colombian-coffee-varieties",
    title: "Colombian Coffee Varieties",
    subtitle: "Exploring Colombia's Premium Coffee Types",
    featuredImage: "/photos/colombia-13-1-optimized.jpg",
    excerpt:
      "Discover the unique characteristics of Colombian coffee varieties, from the traditional Typica to the innovative Castillo.",
    publishedAt: "2023-09-12T10:00:00Z",
    author: {
      name: "Ana Martinez",
      role: "Coffee Specialist",
    },
  },
  {
    slug: "green-coffee-insights",
    title: "Green Coffee Insights",
    subtitle: "Understanding Raw Coffee and Its Market Impact",
    featuredImage: "/photos/Café-Verde.webp",
    excerpt:
      "Learn about green coffee, its characteristics, and its crucial role in the global coffee market.",
    publishedAt: "2023-09-15T10:30:00Z",
    author: {
      name: "Maria Oliveira",
      role: "Green Coffee Expert",
    },
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Coffee Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/posts/${post.slug}`}
              className="group"
            >
              <article className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-200 group-hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-foreground">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author.name}</span>
                      <span className="text-muted-foreground/70">
                        ({post.author.role})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <time>
                        {formatDistanceToNow(new Date(post.publishedAt), {
                          addSuffix: true,
                        })}
                      </time>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
