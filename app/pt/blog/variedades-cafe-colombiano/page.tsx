// app/blog/posts/variedades-cafe-colombiano.tsx
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
  slug: "variedades-cafe-colombiano",
  title: "Variedades de Café Colombiano",
  subtitle: "Explorando a rica diversidade do café colombiano",
  featuredImage: "/photos/colombia-13-1-optimized.jpg",
  excerpt:
    "O café colombiano é famoso por seus sabores diversos e perfis regionais distintos. Conheça as variedades únicas que tornam o café da Colômbia reconhecido mundialmente.",
  publishedAt: "2023-10-01T12:00:00Z",
  author: {
    name: "Jane Smith",
    role: "Especialista em Café",
  },
};

// Dados completos do post
const POST_DATA: BlogPost = {
  ...postMetadata,
  content: `A Colômbia tem uma longa tradição no cultivo de café com sabores regionais distintos e métodos de processamento característicos.

As três principais regiões cafeeiras - Huila, Antioquia e Nariño - produzem grãos com características únicas. O solo vulcânico de Huila cria cafés com acidez brilhante e notas frutadas, enquanto as fazendas de alta altitude de Antioquia produzem sabores equilibrados com toques de chocolate.

O café colombiano é predominantemente lavado (processamento úmido), o que realça seu perfil limpo e brilhante. O rigoroso controle de qualidade e sistema de classificação do país garantem que apenas os melhores grãos recebem a designação "100% Café Colombiano".

Principais variedades incluem:
• Castillo: Resistente a doenças com notas cítricas e adocicadas
• Caturra: Acidez brilhante e corpo médio
• Typica: A variedade original com aromas florais delicados

Em resumo, o café colombiano continua sendo referência em qualidade e diversidade, oferecendo opções para todos os paladares dos amantes de café.`,
};

export default function VariedadesCafeColombiano() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton />

      {/* Seção Hero */}
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

      {/* Seção de Conteúdo */}
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