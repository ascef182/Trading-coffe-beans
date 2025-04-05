// app/blog/posts/brazilian-coffee-varieties.tsx
import React from "react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Calendar, User } from "lucide-react";
import { BackButton } from "@/components/back-button";

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

export const postMetadata = {
  slug: "variedades-cafe-brasileiro",
  title: "Variedades de Café Brasileiro",
  subtitle: "Descubra os processos e sabores distintos do café brasileiro",
  featuredImage: "/photos/unnamed.jpg",
  excerpt:
    "O Brasil é o maior produtor de café do mundo, oferecendo diversos métodos de processamento que resultam em perfis de sabor únicos.",
  publishedAt: "2023-11-10T12:00:00Z",
  author: {
    name: "Carlos Silva",
    role: "Especialista do Setor",
  },
};

const POST_DATA: BlogPost = {
  ...postMetadata,
  content: `Os métodos de processamento do café brasileiro são variados e contribuem para um sabor rico e complexo.

O processo natural, onde os frutos secam ao sol com a polpa ainda intacta, produz um café de corpo encorpado com notas frutadas e adocicadas. Este método tradicional representa cerca de 70% da produção brasileira.

O processo despolpado natural remove a casca mas mantém parte da mucilagem, criando um equilíbrio entre acidez suave e doçura. Os cafés lavados, embora menos comuns no Brasil, oferecem acidez mais vibrante e sabores mais limpos.

Esses processos únicos criam os sabores característicos que tornaram o café brasileiro famoso - notas de chocolate, nozes, geralmente com baixa acidez e corpo encorpado.`,
};

export default function BrazilianCoffeeVarieties() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton />

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