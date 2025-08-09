import React from "react";
import { BackButton } from "@/components/back-button";
import { Sun, Scale, Globe, Check, Trees, Leaf } from "lucide-react";
import type { Metadata } from "next";
import { COMMERCIAL_SPECS, SEO_KEYWORDS } from "@/lib/commercial-specs";

export const metadata: Metadata = {
  title: "Coffee Varieties | CazariniTrading",
  description:
    "Exact Brazilian green coffee specs by CazariniTrading: NY grades, Semi Washed, Naturals, Peaberries (Moka), Rio Minas, Conilon.",
  keywords: ["CazariniTrading", "Varieties", "Green Coffee", ...SEO_KEYWORDS],
  openGraph: {
    title: "Coffee Varieties | CazariniTrading",
    description:
      "Exact commercial specs: NY 2/3 Semi Washed, Naturals Fine/Good Cup, Peaberries (Moka), Rio Minas, Conilon.",
    type: "website",
  },
};

// Generic sections removed to focus on exact specs only

// Using centralized COMMERCIAL_SPECS

// Colombian generic qualities removed

const certifications = [
  {
    name: "RFA",
    icon: <Trees className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Rainforest Alliance certification for environmental, social and economic sustainability.",
  },
  {
    name: "4C",
    icon: <Leaf className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Common Code for the Coffee Community baseline sustainability standard.",
  },
  {
    name: "RS",
    icon: <Check className="h-8 w-8 text-[#b3a957]" />,
    description: "Responsible and sustainable sourcing compliance.",
  },
  {
    name: "EUDR COMPLIANCE",
    icon: <Globe className="h-8 w-8 text-[#b3a957]" />,
    description: "Compliance with the EU Deforestation Regulation (EUDR).",
  },
  {
    name: "FAIR TRADE",
    icon: <Scale className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Fair Trade certification for equitable trading relationships.",
  },
  {
    name: "FAIR TRADE ORGANIC",
    icon: <Sun className="h-8 w-8 text-[#b3a957]" />,
    description: "Organic production under Fair Trade certified standards.",
  },
];

export default function CoffeeVarietiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton />

      {/* Header Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Varieties
          </h1>
          <p className="text-gray-300 text-xl">
            Exact Brazilian commercial specs
          </p>
        </div>
      </section>

      {/* Commercialized Coffee Specs (Exact Names) */}
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 pb-4">
            Commercialized Coffee Specs
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

      {/* Certifications Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 pb-4">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white p-4 rounded-full shadow mr-4">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {cert.name}
                  </h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
          {/* JSON-LD OfferCatalog for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "OfferCatalog",
                name: "CazariniTrading Coffee Varieties",
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
