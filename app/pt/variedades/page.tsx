import React from "react";
import { BackButton } from "@/components/back-button";
import { Sun, Scale, Globe, Check, Trees, Leaf } from "lucide-react";
import type { Metadata } from "next";
import { COMMERCIAL_SPECS, SEO_KEYWORDS } from "@/lib/commercial-specs";

export const metadata: Metadata = {
  title: "Variedades de Café | CazariniTrading",
  description:
    "Especificações comerciais exatas de café verde da CazariniTrading: NY grades, Semi Washed, Naturais, Peaberries (Moka), Rio Minas e Conilon.",
  keywords: ["CazariniTrading", "Variedades", "Café Verde", ...SEO_KEYWORDS],
  openGraph: {
    title: "Variedades de Café | CazariniTrading",
    description:
      "Especificações comerciais exatas: NY 2/3 Semi Washed, Naturais Fine/Good Cup, Peaberries (Moka), Rio Minas, Conilon.",
    type: "website",
  },
};

// Seções genéricas removidas para manter apenas especificações exatas

// Usando lista centralizada COMMERCIAL_SPECS

const qualidadesColombianas = [
  {
    name: "UGQ",
    description:
      "Café colombiano de Qualidade Usual Boa com características equilibradas para várias aplicações.",
    characteristics: [
      "Equilibrado",
      "Versátil",
      "Grau Comercial",
      "Consistente",
    ],
    regions: ["Huila", "Antioquia", "Cauca"],
    certifications: ["RFA", "4C"],
    score: "80-82",
    process: "Processo Lavado",
    processDescription:
      "Processamento lavado tradicional com tempos de fermentação de 12-18 horas.",
  },
  {
    name: "EP-10",
    description:
      "Preparação Excelso 10, um grau premium colombiano com grãos maiores e excelentes características de xícara.",
    characteristics: [
      "Grau Premium",
      "Grãos Maiores",
      "Xícara Limpa",
      "Brilhante",
    ],
    regions: ["Huila", "Antioquia", "Nariño"],
    certifications: ["FAIR TRADE", "FAIR TRADE ORGANIC", "RFA"],
    score: "84+",
    process: "Processo Lavado",
    processDescription:
      "Representa os 10% melhores do grau Excelso colombiano.",
  },
  {
    name: "Supremos",
    description:
      "O mais alto grau de café colombiano com maior tamanho de grão e qualidade excepcional de xícara.",
    characteristics: [
      "Grãos Maiores",
      "Qualidade Excepcional",
      "Complexo",
      "Bem Equilibrado",
    ],
    regions: ["Cauca", "Nariño", "Huila"],
    certifications: ["RFA", "FAIR TRADE ORGANIC", "FAIR TRADE"],
    score: "85+",
    process: "Processo Lavado",
    processDescription:
      "Tamanho de peneira 17-18 com fermentação estendida (24-36 horas).",
  },
];

const certificacoes = [
  {
    name: "RFA",
    icon: <Trees className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Certificação Rainforest Alliance para sustentabilidade ambiental, social e econômica.",
  },
  {
    name: "4C",
    icon: <Leaf className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Padrão básico de sustentabilidade do Common Code for the Coffee Community.",
  },
  {
    name: "RS",
    icon: <Check className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Conformidade com práticas responsáveis e sustentáveis de compra.",
  },
  {
    name: "EUDR COMPLIANCE",
    icon: <Globe className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Conformidade com o Regulamento Europeu de Desmatamento (EUDR).",
  },
  {
    name: "FAIR TRADE",
    icon: <Scale className="h-8 w-8 text-[#b3a957]" />,
    description: "Certificação Fair Trade para relações comerciais justas.",
  },
  {
    name: "FAIR TRADE ORGANIC",
    icon: <Sun className="h-8 w-8 text-[#b3a957]" />,
    description: "Produção orgânica sob certificação Fair Trade.",
  },
];

export default function PaginaVariedadesCafe() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton />

      {/* Seção Header */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Variedades
          </h1>
          <p className="text-gray-300 text-xl">
            Especificações comerciais exatas
          </p>
        </div>
      </section>

      {/* Especificações Comerciais (Nomes Exatos) */}
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 pb-4">
            Especificações Comerciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMERCIAL_SPECS.map((item) => (
              <div
                key={item}
                className="p-4 border rounded-lg bg-gray-50 text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seções genéricas removidas para manter apenas especificações exatas */}

      {/* Seções genéricas removidas para manter apenas especificações exatas */}

      {/* Seção de Certificações */}
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 pb-4">
            Certificações
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificacoes.map((certificacao, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white p-4 rounded-full shadow mr-4">
                    {certificacao.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {certificacao.name}
                  </h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  {certificacao.description}
                </p>
              </div>
            ))}
          </div>
          {/* JSON-LD OfferCatalog para SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "OfferCatalog",
                name: "Variedades de Café CazariniTrading",
                itemListElement: COMMERCIAL_SPECS.map(
                  (spec: string, i: number) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    item: {
                      "@type": "Product",
                      name: spec,
                      brand: { "@type": "Brand", name: "CazariniTrading" },
                    },
                  })
                ),
              }),
            }}
          />
        </div>
      </section>
    </div>
  );
}
