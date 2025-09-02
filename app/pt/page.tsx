import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Coffee,
  Check,
  CheckCircle,
  MessageCircle,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  const stats = [
    { value: "20+", label: "Anos de Experiência" },
    { value: "50K+", label: "Toneladas Exportadas Anualmente" },
    { value: "25+", label: "Variedades de Café" },
    { value: "98%", label: "Índice de Satisfação dos Clientes" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Carrossel com gradiente */}
        <div className="absolute inset-0">
          <Carousel
            images={[
              {
                src: "/photos/cafe-verde.jpeg",
                alt: "Grãos frescos de café verde",
              },
              { src: "/photos/unnamed.jpg", alt: "Seleção premium de café" },
              {
                src: "/photos/cafe-vermelho.jpeg",
                alt: "Cerejas de café vermelhas na árvore",
              },
              {
                src: "/photos/fileiras-de-cafe.jpeg",
                alt: "Fileiras de plantação de café",
              },
              {
                src: "/photos/pe-de-cafe-amarelo.jpeg",
                alt: "Grãos de café amarelo prontos para processamento",
              },
              {
                src: "/photos/foto-drone-pes-cafe.jpeg",
                alt: "Vista aérea da plantação de café",
              },
            ]}
            autoPlayInterval={8000}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18170f] via-[#18170f]/70 to-transparent" />
        </div>

        {/* Conteúdo */}
        <div className="container relative z-10 text-center px-4 pt-8 sm:pt-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#b3a957]/20 backdrop-blur-sm rounded-full border border-[#b3a957]/30">
            <span className="text-[#e3e3cd] font-medium tracking-wider">
              DESDE 2009
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Não tem hora pro</span>{" "}
            <span className="text-[#b3a957]">Café</span>
            <br />
            <span className="text-white">Corretor 24h</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Facilitando a jornada do café pelo mundo — da fazenda à torrefação
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="min-w-[200px] bg-[#b3a957] hover:bg-[#ddd27b] text-[#18170f] font-medium transition-all"
            >
              <Link href="/pt/contato">
                Solicitar Amostras <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-[200px] bg-transparent hover:bg-white/50 text-white border-white hover:border-[#b3a957] transition-all"
            >
              <Link href="/pt/variedades">
                Ver Variedades <Coffee className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Selos de confiança */}
          <div className="mt-20 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Parceria Direta com Produtores</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Lotes Rastreáveis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Certificação & Sustentabilidade</span>
            </div>
          </div>
        </div>

        {/* Ícone decorativo 
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Coffee className="h-6 w-6 text-[#b3a957]" />
        </div>*/}
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-[#18170f] text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#b3a957]">
                  {stat.value}
                </div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variedades */}
      <section id="varieties" className="py-20 bg-muted scroll-mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Variedades de Café</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Do Brasil e da Colômbia, oferecemos uma ampla gama de cafés
                verdes — do FINE CUP aos lotes certificados e sustentáveis.
              </p>
              <Button asChild variant="default">
                <Link href="/pt/variedades">
                  Ver Todas Variedades <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/photos/coffe.jpg"
                alt="Seleção de cafés verdes"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Prefira Café Verde{" "}
            <span className="text-[#b3a957]">Sustentável</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Grãos premium, rastreáveis e certificados — direto das <br />
            fazendas para o mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-[200px] bg-[#b3a957] hover:bg-[#d8cd75] text-[#171717] font-medium transition-all hover:scale-105 shadow-lg"
            >
              <Link
                href="/pt/contato"
                className="flex items-center justify-center"
              >
                Solicitar Amostras <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-[200px] bg-transparent text-white border-2 border-white hover:bg-white/50 hover:border-white/80 font-medium transition-all hover:scale-105"
            >
              <Link
                href="http://wa.me/5535984160810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Whatsapp <MessageCircle className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Selos finais */}
          <div className="mt-16 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b3a957]" />
              <span>Direto de Fazendas </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b3a957]" />
              <span>Qualidade Certificada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b3a957]" />
              <span>Exportação com Suporte Total</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
