import React from "react";
import Image from "next/image";
import {
  Languages,
  Briefcase,
  Globe,
  Users,
  BarChart,
  BookOpen,
  CheckCircle,
  Newspaper,
  MapPin,
} from "lucide-react";
import { BackButton } from "@/components/back-button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/photos/coffe.jpg"
          alt="Green coffee beans"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Cazarini Trading
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Global coffee traders since 2009
          </p>
        </div>
      </section>

      {/* Thiago Cazarini Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo Column */}
            <div className="relative h-[500px] w-full group">
              <Image
                src="/photos/thiago.jpeg"
                alt="Thiago Cazarini - Founder and Head Coffee Trader"
                fill
                className="object-cover rounded-lg shadow-xl transition-all duration-300 group-hover:shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary px-6 py-3 rounded-lg shadow-md">
                <p className="text-white font-medium text-lg">
                  20+ Years Experience
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Thiago Cazarini
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-1 bg-primary rounded-full"></div>
                  <h3 className="text-xl text-primary font-medium">
                    Founder & Head Coffee Trader
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over 21 years of experience, I lead Cazarini Trading
                  Company, an organization I built from the ground up in 2009.
                  Today, it is recognized across all continents for its
                  excellence in coffee trading. Cazarini Trading Company excels
                  in risk management, international sales, and domestic
                  procurement, maintaining a meticulous focus on every detail
                  until contract fulfillment—always minimizing risk and
                  proactively addressing any challenges that may arise.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Through negotiation and the development of new markets and
                  clients, I help ensure that high-quality coffee beans travel
                  the world. I am fluent in English and Spanish, with basic
                  proficiency in Italian, and I leverage these language skills
                  to strengthen communication networks and strategic
                  partnerships across the coffee industry—encompassing trading
                  operations, logistics, risk management, production,
                  warehousing, and quality control.
                </p>

                <div className="space-y-5 pt-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <Globe className="h-6 w-6 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Market Development
                      </h4>
                      <p className="text-gray-700">
                        Specializes in developing new international markets and
                        cultivating long-term client relationships, facilitating
                        the global distribution of premium quality coffee beans.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <Languages className="h-6 w-6 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Multilingual Communication
                      </h4>
                      <p className="text-gray-700">
                        Fluent in English and Spanish with working knowledge of
                        Italian, enabling effective communication with
                        international partners across the coffee supply chain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <Briefcase className="h-6 w-6 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Comprehensive Expertise
                      </h4>
                      <p className="text-gray-700">
                        Brings comprehensive expertise spanning commodity
                        trading, logistics optimization, risk assessment,
                        production management, and quality control protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container space-y-16">
          {/* Global Operations */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
                OUR GLOBAL OPERATIONS
              </h2>
              <div className="w-16 h-px bg-gray-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2009,{" "}
                  <span className="font-medium text-gray-900">
                    Cazarini Trading Company
                  </span>{" "}
                  has grown to become a reference in specialty coffee trading,
                  serving{" "}
                  <span className="font-medium text-gray-900">
                    140+ clients
                  </span>{" "}
                  across all continents with approximately{" "}
                  <span className="font-medium text-gray-900">
                    500,000 bags
                  </span>{" "}
                  of green coffee annually.
                </p>

                <div className="border-l-2 border-gray-200 pl-4">
                  <p className="text-gray-600 italic mb-2">
                    "Maintaining consistent 15% year-over-year growth through
                    exceptional quality and reliable logistics"
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Our vertically integrated operations span from sourcing in
                  Brazil's prime coffee regions to global distribution,
                  supported by:
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Weekly market intelligence
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Real-time crop analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Custom logistics solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Quality control protocols
                    </span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="border border-gray-100 rounded-lg p-6 bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Featured In
                  </h3>
                  <div className="space-y-3">
                    {[
                      "The New York Times",
                      "Wall Street Journal",
                      "Bloomberg",
                      "Reuters",
                    ].map((outlet) => (
                      <div key={outlet} className="flex items-center gap-2">
                        <Newspaper className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700">{outlet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-gray-100 rounded-lg p-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Headquarters
                  </h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">
                        Varginha, Minas Gerais
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Brazil's specialty coffee heartland
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-100 rounded-lg p-4 text-center">
                    <p className="text-2xl font-light text-gray-900">15%</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Annual Growth
                    </p>
                  </div>
                  <div className="border border-gray-100 rounded-lg p-4 text-center">
                    <p className="text-2xl font-light text-gray-900">500K</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Bags/Year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
