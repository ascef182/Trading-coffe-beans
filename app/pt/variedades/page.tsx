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

const processosBrasileiros = [
  {
    name: "Processo Totalmente Lavado",
    description:
      "Café de qualidade premium com toda a fruta removida antes da secagem, resultando em um perfil de xícara limpo, brilhante com acidez bem definida.",
    characteristics: [
      "Xícara Limpa",
      "Acidez Brilhante",
      "Qualidade Consistente",
      "Bem Equilibrado",
    ],
    regions: ["Sul de Minas", "Cerrado", "Mogiana", "Bahia", "Zona da Mata"],
    certifications: ["RFA", "UTZ", "4C", "Fairtrade", "Orgânico"],
    score: "85+",
    process: "Processo Totalmente Lavado",
    processDescription:
      "Os frutos são despolpados e fermentados em água por 12-36 horas para remover a mucilagem antes da lavagem e secagem.",
  },
  {
    name: "Processo Semi-Lavado",
    description:
      "Remoção parcial da fruta antes da secagem cria um perfil equilibrado com doçura e clareza na xícara.",
    characteristics: [
      "Perfil Equilibrado",
      "Doçura Suave",
      "Corpo Médio",
      "Versátil",
    ],
    regions: ["Sul de Minas", "Cerrado", "Mogiana", "Bahia", "Zona da Mata"],
    certifications: ["RFA", "UTZ", "4C"],
    score: "83-85",
    process: "Processo Semi-Lavado",
    processDescription:
      "Conhecido como natural despolpado, a casca é removida mas parte da mucilagem permanece durante a secagem.",
  },
  {
    name: "Naturais (Xícara Fina)",
    description:
      "Secados com a fruta intacta, esses cafés naturais premium oferecem doçura intensa e notas frutadas complexas.",
    characteristics: ["Frutado", "Doce", "Corpo Cheio", "Complexo"],
    regions: ["Sul de Minas", "Cerrado", "Bahia"],
    certifications: ["Orgânico", "Fairtrade", "RFA"],
    score: "84+",
    process: "Processo Natural",
    processDescription:
      "Os frutos são secos inteiros com a polpa intacta, permitindo que os açúcares fermentem no grão.",
  },
  {
    name: "Naturais (Xícara Boa)",
    description:
      "Cafés naturais de qualidade com boa doçura e corpo, oferecendo excelente custo-benefício para blends comerciais.",
    characteristics: [
      "Boa Doçura",
      "Corpo Médio",
      "Grau Comercial",
      "Confiável",
    ],
    regions: ["Todas as Regiões Brasileiras"],
    certifications: ["4C", "RFA"],
    score: "80-83",
    process: "Processo Natural",
    processDescription:
      "Similar aos naturais de xícara fina, mas com seleção menos rigorosa.",
  },
  {
    name: "Moedores",
    description:
      "Cafés de grau comercial adequados para moagem, oferecendo qualidade consistente e bom custo-benefício.",
    characteristics: ["Grau Comercial", "Consistente", "Custo-Benefício", "Confiável"],
    regions: ["Todas as Regiões Brasileiras"],
    certifications: ["4C"],
    score: "78-82",
    process: "Vários Processos",
    processDescription:
      "Selecionados para consistência em aplicações comerciais de moagem.",
  },
  {
    name: "Rio Minas",
    description:
      "Perfil tradicional de café brasileiro com corpo e sabor característicos, amplamente usado em blends.",
    characteristics: [
      "Perfil Tradicional",
      "Corpo Cheio",
      "Base para Blends",
      "Distintivo",
    ],
    regions: ["Espírito Santo", "Zona da Mata"],
    certifications: ["4C", "RFA"],
    score: "79-83",
    process: "Processo Seco",
    processDescription:
      "Tipicamente processado natural, seco em terreiro e cuidadosamente selecionado.",
  },
  {
    name: "Conillons",
    description:
      "Variedades Robusta que oferecem corpo forte e maior teor de cafeína, ideais para blends espresso.",
    characteristics: [
      "Robusta",
      "Corpo Forte",
      "Alta Cafeína",
      "Melhora a Crema",
    ],
    regions: ["Espírito Santo"],
    certifications: ["4C"],
    score: "75-80",
    process: "Processo Natural",
    processDescription:
      "Tipicamente processado natural, seco rapidamente e selecionado para realçar sabores intensos.",
  },
];

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
    certifications: ["UTZ", "4C", "Rainforest Alliance"],
    score: "80-82",
    process: "Processo Lavado",
    processDescription:
      "Processamento lavado tradicional com tempos de fermentação de 12-18 horas.",
  },
  {
    name: "EP-10",
    description:
      "Preparação Excelso 10, um grau premium colombiano com grãos maiores e excelentes características de xícara.",
    characteristics: ["Grau Premium", "Grãos Maiores", "Xícara Limpa", "Brilhante"],
    regions: ["Huila", "Antioquia", "Nariño"],
    certifications: ["Fairtrade", "Orgânico", "Rainforest Alliance"],
    score: "84+",
    process: "Processo Lavado",
    processDescription: "Representa os 10% melhores do grau Excelso colombiano.",
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
    certifications: ["UTZ", "Orgânico", "Fairtrade"],
    score: "85+",
    process: "Processo Lavado",
    processDescription:
      "Tamanho de peneira 17-18 com fermentação estendida (24-36 horas).",
  },
];

const certificacoes = [
  {
    name: "Rainforest Alliance (RFA)",
    icon: <Trees className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Fazendas certificadas atendem a padrões abrangentes de sustentabilidade ambiental, social e econômica.",
  },
  {
    name: "UTZ Certified",
    icon: <Check className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Garante práticas agrícolas sustentáveis e melhores oportunidades para produtores e suas famílias.",
  },
  {
    name: "Certificação 4C",
    icon: <Leaf className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Padrão básico de sustentabilidade abordando aspectos econômicos, sociais e ambientais da produção de café.",
  },
  {
    name: "Fairtrade",
    icon: <Scale className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Garante preços justos e condições de trabalho para pequenos produtores e trabalhadores.",
  },
  {
    name: "Orgânico",
    icon: <Sun className="h-8 w-8 text-[#b3a957]" />,
    description:
      "Cultivado sem pesticidas ou fertilizantes sintéticos, seguindo práticas de agricultura orgânica.",
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
            De todas as regiões brasileiras e Colômbia
          </p>
        </div>
      </section>

      {/* Cafés Brasileiros */}
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 pb-4">
            Cafés Brasileiros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processosBrasileiros.map((processo, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {processo.name}
                  </h3>
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Pontuação: {processo.score}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-lg">
                    <Leaf className="h-6 w-6 mr-2 text-[#b3a957]" />
                    {processo.process}
                  </h4>
                  <p className="text-gray-700 text-base">
                    {processo.processDescription}
                  </p>
                </div>

                <p className="text-gray-700 text-base mb-6">
                  {processo.description}
                </p>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-sm">
                    <Globe className="h-5 w-5 mr-2 text-[#b3a957]" />
                    Regiões
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {processo.regions.map((regiao, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {regiao}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-sm">
                    <Award className="h-5 w-5 mr-2 text-[#b3a957]" />
                    Certificações
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {processo.certifications.map((certificacao, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {certificacao}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    Características
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {processo.characteristics.map((caracteristica, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {caracteristica}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Café Colombiano */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 pb-4">
            Café Colombiano
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualidadesColombianas.map((qualidade, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {qualidade.name}
                  </h3>
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Pontuação: {qualidade.score}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-lg">
                    <Leaf className="h-6 w-6 mr-2 text-[#b3a957]" />
                    {qualidade.process}
                  </h4>
                  <p className="text-gray-700 text-base">
                    {qualidade.processDescription}
                  </p>
                </div>

                <p className="text-gray-700 text-base mb-6">
                  {qualidade.description}
                </p>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-sm">
                    <Globe className="h-5 w-5 mr-2 text-[#b3a957]" />
                    Regiões
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {qualidade.regions.map((regiao, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {regiao}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="flex items-center font-semibold text-gray-800 mb-2 text-sm">
                    <Award className="h-5 w-5 mr-2 text-[#b3a957]" />
                    Certificações
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {qualidade.certifications.map((certificacao, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {certificacao}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    Características
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {qualidade.characteristics.map((caracteristica, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {caracteristica}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        </div>
      </section>
    </div>
  );
}