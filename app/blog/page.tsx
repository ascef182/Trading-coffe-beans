import { BackButton } from "@/components/back-button";
import Image from "next/image";
import Link from "next/link";

// Importe os metadados com o nome correto
import { postMetadata as brazilianPost } from "./posts/brazilian-coffee-varieties/page";
import { postMetadata as colombianPost } from "./posts/colombian-coffee-varieties/page";
import { postMetadata as greenCoffeePost } from "./posts/green-coffee-insights/page";

// Defina o tipo para os metadados
interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
}

const allPosts: BlogPostMetadata[] = [
  brazilianPost,
  colombianPost,
  greenCoffeePost,
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton />

      {/* Hero Section */}
      <section className="relative h-[200px] flex items-center justify-center">
        <Image
          src="/photos/trading.jpg"
          alt="Coffee plantation"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Coffee Insights
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Latest news, trends, and stories from the world of coffee
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/blog/posts/${post.slug}`} className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <span className="text-emerald-600 font-medium hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
