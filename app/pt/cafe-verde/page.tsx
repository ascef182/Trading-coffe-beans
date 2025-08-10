import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Leaf,
  Heart,
  TrendingUp,
  Globe,
  Package,
  ArrowRight,
  Zap,
  DollarSign,
  Cloud,
  Thermometer,
} from "lucide-react";
import { BackButton } from "@/components/back-button";

export default function GreenCoffeePage() {
  // Dados reais de produção e exportação
  const productionData = {
    brazil: {
      volume: "40.1M sacas",
      value: "US$ 7.8 bi",
      growth: "+15%",
    },
    vietnam: {
      volume: "30.5M sacas",
      value: "US$ 5.2 bi",
      growth: "+8%",
    },
    colombia: {
      volume: "12.7M sacas",
      value: "US$ 2.9 bi",
      growth: "+5%",
    },
  };

  const marketStats = [
    {
      icon: <Globe className="h-6 w-6 text-black-600" />,
      title: "Mercado Global",
      value: "US$ 30 bi",
      description: "Valor anual do mercado",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-black-600" />,
      title: "Crescimento",
      value: "5.2% CAGR",
      description: "Previsão 2023-2030",
    },
    {
      icon: <Package className="h-6 w-6 text-black-600" />,
      title: "Exportação Brasil",
      value: "40.1M sacas",
      description: "Volume anual 2023",
    },
  ];

  const healthBenefits = [
    {
      icon: <Heart className="h-8 w-8 text-black-600" />,
      title: "Saúde Cardiovascular",
      description:
        "Clorogênicos reduzem pressão arterial em 10-15% segundo estudos",
    },
    {
      icon: <Zap className="h-8 w-8 text-black-600" />,
      title: "Metabolismo",
      description:
        "Aumenta taxa metabólica em até 11% (Journal of International Medical Research)",
    },
    {
      icon: <Leaf className="h-8 w-8 text-black-600" />,
      title: "Antioxidante",
      description: "50% mais antioxidantes que café torrado",
    },
  ];

  const marketFactors = [
    {
      icon: <Thermometer className="h-6 w-6 text-black-600" />,
      title: "Fatores Climáticos",
      description: "Geadas no Brasil (2021) reduziram oferta em 20%",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-black-600" />,
      title: "Tarifas EUA",
      description: "Aumento de 15-25% sobre importações",
    },
    {
      icon: <Cloud className="h-6 w-6 text-black-600" />,
      title: "Logística",
      description: "Custos de frete 3x maiores pós-pandemia",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton />
      {/* Main Content */}
      <main className="py-16">
        <div className="container max-w-7xl mx-auto px-4 space-y-20">
          {/* O que é Café Verde */}
          <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#b3a957]">
                O que é Café Verde?
              </h2>
              <div className="prose-lg text-gray-700 space-y-4">
                <p>
                  Grãos de café não torrados que preservam{" "}
                  <strong>50% mais clorogênicos</strong> que o café tradicional,
                  compostos com comprovados benefícios à saúde.
                </p>
                <p>
                  O mercado global movimenta <strong>US$ 30 bilhões</strong>{" "}
                  anualmente, com crescimento de
                  <strong> 5.2% ao ano</strong> (CAGR 2023-2030).
                </p>
                <p>
                  Principais usos: suplementos para perda de peso, bebidas
                  funcionais e ingrediente para alimentos saudáveis.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg order-first lg:order-none">
              <Image
                src="/photos/cafe-verde.jpeg"
                alt="Green coffee beans close-up"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Fatores de Mercado */}
          <section className="bg-gray-100 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#b3a957]">
              Fatores que Impactam o Mercado
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketFactors.map((factor, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-full">
                      {factor.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{factor.title}</h3>
                  </div>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Produção Global */}
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-r bg-[#b3a957] text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Produção e Exportação
              </h2>
              <p className="text-lg">
                Dados atualizados dos principais players do mercado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {Object.entries(productionData).map(([country, data]) => (
                <div key={country} className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4 capitalize">
                    {country}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Volume</p>
                      <p className="text-2xl font-bold text-[#b3a957]">
                        {data.volume}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Valor</p>
                      <p className="text-xl font-semibold">{data.value}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Crescimento</p>
                      <p className="text-lg font-medium">{data.growth}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefícios à Saúde */}
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 bg-[#b3a957] text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Benefícios Cientificamente Comprovados
              </h2>
              <p className="text-lg">
                Estudos comprovam as vantagens do café verde para a saúde
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              {healthBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border border-black-100 rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-center mb-3 text-[#b3a957]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Mercados Consumidores */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#b3a957]">
              Principais Mercados Consumidores
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {[
                  { country: "Estados Unidos", share: "22%", trend: "+3.5%" },
                  { country: "Alemanha", share: "18%", trend: "+2.1%" },
                  { country: "Itália", share: "12%", trend: "+1.8%" },
                ].map((item, i) => (
                  <div key={i} className="p-8 text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.country}
                    </h3>
                    <p className="text-2xl font-bold text-[#b3a957] mb-2">
                      {item.share}
                    </p>
                    <p className="text-gray-600">
                      Participação no mercado global
                    </p>
                    <p className="text-sm text-[#b3a957] mt-2">
                      Tendência: {item.trend}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-[#b3a957] rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quer Saber Mais Sobre o Mercado?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Siga a Cazarini nas redes sociais para dados atualizados e
                análise de mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/thiago-marques-cazarini-903a96b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#b3a957] px-8 py-3 rounded-full font-semibold hover:bg-emerald-100 transition-all flex items-center justify-center gap-2"
                >
                  Linkedin <ArrowRight className="w-5 h-5" />
                </a>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                  Contato
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
