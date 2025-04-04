import React from 'react';
import Image from 'next/image';
import { getPost } from '@/lib/blog-data';
import { formatDistanceToNow } from 'date-fns';
import { notFound } from 'next/navigation';
import { Calendar, User } from 'lucide-react';
import { BackButton } from '@/components/back-button';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 px-4 md:px-20">
          <div className="relative w-full h-full">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover brightness-50 rounded-none"
              priority
            />
          </div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl md:text-2xl mb-8">{post.subtitle}</p>
          <div className="flex items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.author.name}</span>
              <span className="text-white/70">({post.author.role})</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <time>
                {formatDistanceToNow(new Date(post.published_at), { addSuffix: true })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg dark:prose-invert">
            <p className="text-xl text-muted-foreground mb-8 font-medium">
              {post.excerpt}
            </p>
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg text-muted-foreground text-left">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
}