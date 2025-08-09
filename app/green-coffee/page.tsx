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
  Award,
} from "lucide-react";
import { BackButton } from "@/components/back-button";

export default function GreenCoffeePage() {
  // Production and export data (real data)
  const productionData = {
    brazil: {
      volume: "40.1M sacks",
      value: "US$ 7.8B",
      growth: "+15%",
    },
    vietnam: {
      volume: "30.5M sacks",
      value: "US$ 5.2B",
      growth: "+8%",
    },
    colombia: {
      volume: "12.7M sacks",
      value: "US$ 2.9B",
      growth: "+5%",
    },
  };

  const marketStats = [
    {
      icon: <Globe className="h-6 w-6 text-black-600" />,
      title: "Global Market",
      value: "US$ 30B",
      description: "Annual market value",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-black-600" />,
      title: "Growth",
      value: "5.2% CAGR",
      description: "Forecast 2023-2030",
    },
    {
      icon: <Package className="h-6 w-6 text-black-600" />,
      title: "Brazil Export",
      value: "40.1M sacks",
      description: "Annual volume 2023",
    },
  ];

  const healthBenefits = [
    {
      icon: <Heart className="h-8 w-8 text-black-600" />,
      title: "Cardiovascular Health",
      description:
        "Chlorogenic compounds reduce blood pressure by 10-15% according to studies",
    },
    {
      icon: <Zap className="h-8 w-8 text-black-600" />,
      title: "Metabolism",
      description:
        "Boosts metabolic rate by up to 11% (Journal of International Medical Research)",
    },
    {
      icon: <Leaf className="h-8 w-8 text-black-600" />,
      title: "Antioxidant",
      description: "Contains 50% more antioxidants than roasted coffee",
    },
  ];

  const marketFactors = [
    {
      icon: <Thermometer className="h-6 w-6 text-black-600" />,
      title: "Climate Factors",
      description: "Frosts in Brazil (2021) reduced supply by 20%",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-black-600" />,
      title: "US Tariffs",
      description: "Increase of 15-25% on imports",
    },
    {
      icon: <Cloud className="h-6 w-6 text-black-600" />,
      title: "Logistics",
      description: "Freight costs 3x higher post-pandemic",
    },
  ];

  const brazilianProcesses = [
    // Example data for Brazilian Coffee Varieties – adjust as needed
    {
      name: "Natural",
      score: "8.5",
      process: "Natural Drying",
      processDescription:
        "Coffee beans are sun-dried with the fruit intact, intensifying flavor.",
      description:
        "This process results in a rich, full-bodied cup with complex flavors.",
      regions: ["Minas Gerais", "Bahia"],
      certifications: ["Organic", "Fair Trade"],
      characteristics: ["Fruity", "Heavy Body"],
    },
    {
      name: "Washed",
      score: "9.0",
      process: "Washed Process",
      processDescription:
        "Beans are pulped and fermented to remove mucilage before drying.",
      description:
        "Produces a cleaner and brighter flavor profile with a balanced acidity.",
      regions: ["São Paulo", "Espírito Santo"],
      certifications: ["Rainforest Alliance"],
      characteristics: ["Clean", "Bright Acidity"],
    },
    // ... more objects as needed
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BackButton />

      {/* Main Content */}
      <main className="py-16">
        <div className="container max-w-7xl mx-auto px-4 space-y-20">
          {/* What is Green Coffee? */}
          <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/photos/cafe-verde.jpeg"
                alt="Green coffee beans close-up"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#b3a957]">
                What is Green Coffee?
              </h2>
              <div className="prose-lg text-gray-700 space-y-4">
                <p>
                  Unroasted coffee beans that preserve{" "}
                  <strong>50% more chlorogenic compounds</strong> than
                  traditional coffee, with proven health benefits.
                </p>
                <p>
                  The global market moves <strong>US$ 30 billion</strong>{" "}
                  annually, growing at a rate of
                  <strong> 5.2% per year</strong> (CAGR 2023-2030).
                </p>
                <p>
                  Main uses: weight loss supplements, functional beverages, and
                  ingredients for healthy foods.
                </p>
              </div>
            </div>
          </section>

          {/* Market Factors */}
          <section className="bg-gray-100 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#b3a957]">
              Factors Impacting the Market
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

          {/* Global Production & Export */}
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-r from-[#b3a957] to-[#a39d57] text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Production and Export
              </h2>
              <p className="text-lg">
                Up-to-date data from the market's key players
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
                      <p className="text-sm text-gray-500">Value</p>
                      <p className="text-xl font-semibold">{data.value}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Growth</p>
                      <p className="text-lg font-medium">{data.growth}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Health Benefits */}
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 bg-[#b3a957] text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Scientifically Proven Benefits
              </h2>
              <p className="text-lg">
                Studies confirm the advantages of green coffee for your health
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              {healthBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
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

          {/* Consumer Markets */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#b3a957]">
              Top Consumer Markets
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {[
                  { country: "United States", share: "22%", trend: "+3.5%" },
                  { country: "Germany", share: "18%", trend: "+2.1%" },
                  { country: "Italy", share: "12%", trend: "+1.8%" },
                ].map((item, i) => (
                  <div key={i} className="p-8 text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.country}
                    </h3>
                    <p className="text-2xl font-bold text-[#b3a957] mb-2">
                      {item.share}
                    </p>
                    <p className="text-gray-600">Global market share</p>
                    <p className="text-sm text-[#b3a957] mt-2">
                      Trend: {item.trend}
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
                Want to Learn More About the Market?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Follow Cazarini on social media for up-to-date data and market
                insights.
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
                  Contact
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
