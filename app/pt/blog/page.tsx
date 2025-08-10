import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BackButton } from "@/components/back-button";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-6 mt-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/pt/blog/variedades-cafe-brasileiro" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/photos/varieties.jpg"
                  alt="Variedades de Café Brasileiro"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Variedades de Café Brasileiro
                </h2>
                <p className="text-gray-600">
                  Explore as principais variedades de café cultivadas no Brasil
                  e suas características únicas.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/pt/blog/variedades-cafe-colombiano" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/photos/colombia-13-1-optimized.jpg"
                  alt="Variedades de Café Colombiano"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Variedades de Café Colombiano
                </h2>
                <p className="text-gray-600">
                  Descubra as características distintivas dos cafés colombianos
                  e suas regiões de produção.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/pt/blog/insights-cafe-verde" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/photos/pe_de_cafe_verde.jpg"
                  alt="Insights sobre Café Verde"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Insights sobre Café Verde
                </h2>
                <p className="text-gray-600">
                  Conheça as características, benefícios e usos do café verde no
                  mercado global.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
