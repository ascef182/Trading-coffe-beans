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

      {/* Seção Principal */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/photos/coffe.jpg"
          alt="Grãos de café verde"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre a Cazarini Trading
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Comerciantes globais de café desde 2009
          </p>
        </div>
      </section>

      {/* Seção Thiago Cazarini */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Coluna da Foto */}
            <div className="relative h-[500px] w-full group">
              <Image
                src="/photos/thiago.jpeg"
                alt="Thiago Cazarini - Fundador e Principal Comerciante de Café"
                fill
                className="object-cover rounded-lg shadow-xl transition-all duration-300 group-hover:shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary px-6 py-3 rounded-lg shadow-md">
                <p className="text-white font-medium text-lg">
                  15+ Anos de Experiência
                </p>
              </div>
            </div>

            {/* Coluna de Conteúdo */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Thiago Cazarini
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-1 bg-primary rounded-full"></div>
                  <h3 className="text-xl text-primary font-medium">
                    Fundador & Principal Comerciante de Café
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Com mais de 15 anos de experiência no mercado de café, Thiago Cazarini 
                  é a força motriz por trás da Cazarini Trading. Sob sua liderança, 
                  a empresa tornou-se uma referência global reconhecida por sua excelência 
                  na comercialização de cafés especiais.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Como Principal Comerciante na Montesa Exportadora, supervisiona 
                  todos os aspectos de gestão de risco, vendas internacionais e 
                  aquisições domésticas, combinando atenção meticulosa aos detalhes 
                  com expertise completa em logística.
                </p>

                <div className="space-y-5 pt-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <Globe className="h-6 w-6 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Desenvolvimento de Mercado
                      </h4>
                      <p className="text-gray-700">
                        Especialista em desenvolver novos mercados internacionais e 
                        cultivar relações de longo prazo, facilitando a distribuição 
                        global de grãos de café premium.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <Languages className="h-6 w-6 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Comunicação Multilíngue
                      </h4>
                      <p className="text-gray-700">
                        Fluente em inglês e espanhol com conhecimento prático de italiano, 
                        garantindo comunicação eficaz com parceiros internacionais em 
                        toda a cadeia produtiva do café.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <Briefcase className="h-6 w-6 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Expertise Abrangente
                      </h4>
                      <p className="text-gray-700">
                        Domínio completo em trading de commodities, otimização logística, 
                        análise de riscos, gestão produtiva e protocolos de controle de qualidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visão Geral da Empresa */}
      <section className="py-16 bg-white">
        <div className="container space-y-16">
          {/* Operações Globais */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
                NOSSAS OPERAÇÕES GLOBAIS
              </h2>
              <div className="w-16 h-px bg-gray-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Fundada em 2009, a{" "}
                  <span className="font-medium text-gray-900">
                    Cazarini Trading
                  </span>{" "}
                  consolidou-se como referência no comércio de cafés especiais, 
                  atendendo{" "}
                  <span className="font-medium text-gray-900">
                    140+ clientes
                  </span>{" "}
                  em todos os continentes com aproximadamente{" "}
                  <span className="font-medium text-gray-900">
                    500,000 sacas
                  </span>{" "}
                  de café verde anualmentente.
                </p>

                <div className="border-l-2 border-gray-200 pl-4">
                  <p className="text-gray-600 italic mb-2">
                    "Mantendo crescimento consistente de 15% ao ano através 
                    de qualidade excepcional e logística confiável"
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Nossas operações integradas abrangem desde a aquisição nas 
                  melhores regiões cafeeiras do Brasil até a distribuição global, 
                  apoiadas por:
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Inteligência de mercado semanal
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Análise de safra em tempo real
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Soluções logísticas personalizadas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Protocolos rigorosos de qualidade
                    </span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="border border-gray-100 rounded-lg p-6 bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Repercussão
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
                    Sede
                  </h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">
                        Varginha, Minas Gerais
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Coração do café especial brasileiro
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-100 rounded-lg p-4 text-center">
                    <p className="text-2xl font-light text-gray-900">15%</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Crescimento Anual
                    </p>
                  </div>
                  <div className="border border-gray-100 rounded-lg p-4 text-center">
                    <p className="text-2xl font-light text-gray-900">500K</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Sacas/Ano
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