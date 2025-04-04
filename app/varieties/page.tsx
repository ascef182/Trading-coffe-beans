import React from "react";
import { BackButton } from "@/components/back-button";
import {
  Leaf,
  Sun,
  Award,
  Scale,
  Globe,
  Check,
  Factory,
  Trees,
} from "lucide-react";

const brazilianProcesses = [
  {
    name: "Fully Washed",
    description:
      "Premium quality coffee with all fruit removed before drying, resulting in a clean, bright cup profile with well-defined acidity.",
    characteristics: [
      "Clean Cup",
      "Bright Acidity",
      "Consistent Quality",
      "Well-Balanced",
    ],
    regions: ["Sul de Minas", "Cerrado", "Mogiana", "Bahia", "Zona da Mata"],
    certifications: ["RFA", "UTZ", "4C", "Fairtrade", "Organic"],
    score: "85+",
    process: "Fully Washed Process",
    processDescription:
      "The cherries are depulped and then fermented in water for 12-36 hours to remove mucilage before washing and drying.",
  },
  {
    name: "Semi-Washed",
    description:
      "Partial removal of fruit before drying creates a balanced profile with both sweetness and clarity in the cup.",
    characteristics: [
      "Balanced Profile",
      "Mild Sweetness",
      "Medium Body",
      "Versatile",
    ],
    regions: ["Sul de Minas", "Cerrado", "Mogiana", "Bahia", "Zona da Mata"],
    certifications: ["RFA", "UTZ", "4C"],
    score: "83-85",
    process: "Semi-Washed Process",
    processDescription:
      "Also known as pulped natural, the skin is removed but some mucilage remains during drying.",
  },
  {
    name: "Naturals (Fine Cup)",
    description:
      "Dried with the fruit intact, these premium natural processed coffees offer intense sweetness and complex fruit notes.",
    characteristics: ["Fruity", "Sweet", "Full Body", "Complex"],
    regions: ["Sul de Minas", "Cerrado", "Bahia"],
    certifications: ["Organic", "Fairtrade", "RFA"],
    score: "84+",
    process: "Natural Process",
    processDescription:
      "Cherries are dried whole with fruit intact, allowing sugars to ferment into the bean.",
  },
  {
    name: "Naturals (Good Cup)",
    description:
      "Quality natural processed coffees with good sweetness and body, offering excellent value for commercial blends.",
    characteristics: [
      "Good Sweetness",
      "Medium Body",
      "Commercial Grade",
      "Reliable",
    ],
    regions: ["All Brazilian Regions"],
    certifications: ["4C", "RFA"],
    score: "80-83",
    process: "Natural Process",
    processDescription:
      "Similar to fine cup naturals but with less stringent sorting.",
  },
  {
    name: "Grinders",
    description:
      "Commercial grade coffees suitable for grinding applications, offering consistent quality and value.",
    characteristics: ["Commercial Grade", "Consistent", "Value", "Reliable"],
    regions: ["All Brazilian Regions"],
    certifications: ["4C"],
    score: "78-82",
    process: "Various Processes",
    processDescription:
      "Selected for consistency in commercial grinding applications.",
  },
  {
    name: "Rio Minas",
    description:
      "Traditional Brazilian coffee profile with characteristic body and flavor, widely used in blends.",
    characteristics: [
      "Traditional Profile",
      "Full Body",
      "Blend Base",
      "Distinctive",
    ],
    regions: ["Espírito Santo", "Zona da Mata"],
    certifications: ["4C", "RFA"],
    score: "79-83",
    process: "Dry Process",
    processDescription:
      "Typically natural processed, dried on patios, and carefully sorted.",
  },
  {
    name: "Conillons",
    description:
      "Robusta varieties offering strong body and higher caffeine content, ideal for espresso blends.",
    characteristics: [
      "Robusta",
      "Strong Body",
      "High Caffeine",
      "Crema Enhancer",
    ],
    regions: ["Espírito Santo"],
    certifications: ["4C"],
    score: "75-80",
    process: "Natural Process",
    processDescription:
      "Typically natural processed, dried rapidly, and sorted to enhance bold flavors.",
  },
];

const colombianQualities = [
  {
    name: "UGQ",
    description:
      "Usual Good Quality Colombian coffee with balanced characteristics suitable for various applications.",
    characteristics: [
      "Balanced",
      "Versatile",
      "Commercial Grade",
      "Consistent",
    ],
    regions: ["Huila", "Antioquia", "Cauca"],
    certifications: ["UTZ", "4C", "Rainforest Alliance"],
    score: "80-82",
    process: "Washed Process",
    processDescription:
      "Traditional washed processing with fermentation times of 12-18 hours.",
  },
  {
    name: "EP-10",
    description:
      "Excelso Preparation 10, a premium Colombian grade with larger beans and excellent cup characteristics.",
    characteristics: ["Premium Grade", "Larger Beans", "Clean Cup", "Bright"],
    regions: ["Huila", "Antioquia", "Nariño"],
    certifications: ["Fairtrade", "Organic", "Rainforest Alliance"],
    score: "84+",
    process: "Washed Process",
    processDescription: "Represents the top 10% of Colombian Excelso grade.",
  },
  {
    name: "Supremos",
    description:
      "The highest grade of Colombian coffee with the largest bean size and exceptional cup quality.",
    characteristics: [
      "Largest Beans",
      "Exceptional Quality",
      "Complex",
      "Well-Balanced",
    ],
    regions: ["Cauca", "Nariño", "Huila"],
    certifications: ["UTZ", "Organic", "Fairtrade"],
    score: "85+",
    process: "Washed Process",
    processDescription:
      "Screen size 17-18 with extended fermentation (24-36 hours).",
  },
];

const certifications = [
  {
    name: "Rainforest Alliance (RFA)",
    icon: <Trees className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Certified farms meet comprehensive standards for environmental, social and economic sustainability.",
  },
  {
    name: "UTZ Certified",
    icon: <Check className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Ensures sustainable farming practices and better opportunities for farmers and their families.",
  },
  {
    name: "4C Certification",
    icon: <Leaf className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Basic sustainability standard addressing economic, social and environmental aspects of coffee production.",
  },
  {
    name: "Fairtrade",
    icon: <Scale className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Guarantees fair prices and working conditions for small-scale farmers and workers.",
  },
  {
    name: "Organic",
    icon: <Sun className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Grown without synthetic pesticides or fertilizers, following organic farming practices.",
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
            From all Brazilian regions and Colombia
          </p>
        </div>
      </section>

      {/* Brazilian Coffee */}
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 pb-4">
            Brazilian Coffee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brazilianProcesses.map((process, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {process.name}
                  </h3>
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Score: {process.score}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-lg">
                    <Leaf className="h-6 w-6 mr-2 text-[#b3a957]" />
                    {process.process}
                  </h4>
                  <p className="text-gray-700 text-base">
                    {process.processDescription}
                  </p>
                </div>

                <p className="text-gray-700 text-base mb-6">
                  {process.description}
                </p>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-sm">
                    <Globe className="h-5 w-5 mr-2 text-[#b3a957]" />
                    Regions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {process.regions.map((region, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-sm">
                    <Award className="h-5 w-5 mr-2 text-[#b3a957]" />
                    Certifications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {process.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    Characteristics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {process.characteristics.map((char, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colombian Coffee */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 pb-4">
            Colombian Coffee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {colombianQualities.map((quality, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {quality.name}
                  </h3>
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Score: {quality.score}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-lg">
                    <Leaf className="h-6 w-6 mr-2 text-[#b3a957]" />
                    {quality.process}
                  </h4>
                  <p className="text-gray-700 text-base">
                    {quality.processDescription}
                  </p>
                </div>

                <p className="text-gray-700 text-base mb-6">
                  {quality.description}
                </p>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-sm">
                    <Globe className="h-5 w-5 mr-2 text-[#b3a957]" />
                    Regions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {quality.regions.map((region, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-sm">
                    <Award className="h-5 w-5 mr-2 text-[#b3a957]" />
                    Certifications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {quality.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    Characteristics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {quality.characteristics.map((char, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
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
        </div>
      </section>
    </div>
  );
}
