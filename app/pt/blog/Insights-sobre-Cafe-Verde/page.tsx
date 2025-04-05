// app/blog/posts/green-coffee-insights.tsx
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
  slug: "Insights-sobre-Cafe-Verde",
  title: "Panorama do Mercado Global de Café Verde",
  subtitle: "Últimas tendências e atualizações do mundo do café verde",
  featuredImage: "/photos/AdobeStock_179552693.jpeg",
  excerpt:
    "Grãos de café não torrados que preservam 50% mais compostos clorogênicos e oferecem diversos benefícios à saúde. Descubra as últimas análises sobre produção global, tendências de exportação e crescimento do mercado.",
  publishedAt: "2023-09-15T12:00:00Z",
  author: {
    name: "John Doe",
    role: "Analista de Mercado",
  },
};

const POST_DATA: BlogPost = {
  ...postMetadata,
  content: `O mercado global de café verde tem registrado crescimento significativo, impulsionado pela demanda por alternativas mais saudáveis e práticas de produção sustentável.

### Visão Geral do Mercado
O mercado de grãos de café verde deve crescer a uma taxa anual de 5,2% entre 2023 e 2030, atingindo US$ 42,3 bilhões até 2030. Principais fatores desse crescimento:
- Crescente demanda por bebidas funcionais
- Maior conscientização sobre saúde pelos consumidores
- Expansão de cafeterias especiais pelo mundo
- Aplicações crescentes em nutracêuticos e cosméticos

### Produção Regional
1. **Brasil**: Lidera a produção global com 40% de participação de mercado
2. **Vietnã**: Exportador que mais cresce (+8% ao ano)
3. **Colômbia**: Grãos de qualidade premium com preços mais elevados

### Tendências Emergentes
- Práticas sustentáveis e comércio direto ganhando força
- Certificações orgânicas e de comércio justo cada vez mais importantes
- Avanços tecnológicos em processamento e armazenamento

### Benefícios à Saúde
O café verde é rico em ácidos clorogênicos, associados a:
✓ Melhoria do metabolismo
✓ Propriedades antioxidantes
✓ Benefícios cardiovasculares
✓ Regulação do açúcar no sangue

Em conclusão, o mercado está preparado para expansão conforme as preferências migram para bebidas funcionais e métodos sustentáveis. Investidores devem acompanhar essas tendências de perto.`,
};

export default function GreenCoffeeInsights() {
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
                <div key={index}>
                  {paragraph.startsWith("###") ? (
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                      {paragraph.replace("###", "")}
                    </h3>
                  ) : paragraph.startsWith("-") || paragraph.startsWith("✓") ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {paragraph.split("\n").map((item, i) => (
                        <li
                          key={i}
                          className="text-base md:text-lg text-gray-700"
                        >
                          {item.replace(/^[-✓] /, "")}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base md:text-lg text-gray-700">
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}