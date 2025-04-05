// app/blog/posts/brazilian-coffee-varieties.tsx
import React from "react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
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

// Metadados para uso interno (não exportados)
const postMetadata = {
  slug: "variedades-cafe-brasileiro",
  title: "Variedades de Café Brasileiro",
  subtitle: "Guia das Principais Variedades de Café do Brasil",
  featuredImage: "/photos/varieties.jpg",
  excerpt:
    "Explore a rica diversidade das variedades de café brasileiro, desde as notas doces do Bourbon Amarelo até o encorpado Mundo Novo.",
  publishedAt: "2023-09-10T09:00:00Z",
  author: {
    name: "João Silva",
    role: "Especialista em Café",
  },
};

const POST_DATA: BlogPost = {
  ...postMetadata,
  content: `O Brasil é o lar de algumas das variedades de café mais distintivas do mundo. Cada tipo traz suas próprias características e sabores únicos para sua xícara. Vamos explorar algumas das variedades brasileiras mais notáveis:

Bourbon Amarelo:
• Conhecido por seu sabor doce e complexo
• Corpo suave com baixa acidez
• Notas de caramelo e chocolate
• Cultivado principalmente em Minas Gerais e São Paulo

Mundo Novo:
• Um híbrido natural de Typica e Bourbon
• Encorpado com acidez média
• Excelente para blends de espresso
• Alta produtividade e resistência a doenças

Catuaí:
• Desenvolvido a partir do Caturra Amarelo e Mundo Novo
• Xícara equilibrada com boa doçura
• Adaptável a diferentes condições de cultivo
• Popular na cafeicultura brasileira moderna

Essas variedades representam apenas uma pequena amostra da rica herança cafeeira do Brasil. Cada uma contribui para fazer do Brasil o maior produtor mundial de café e líder em qualidade.`,
};

export default function VariedadesCafeBrasileiroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton href="/pt/blog" />

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
                  locale: ptBR,
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