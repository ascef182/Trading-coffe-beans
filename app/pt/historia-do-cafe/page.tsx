import React from "react";
import Image from "next/image";
import { ScrollText } from "lucide-react";
import { BackButton } from "@/components/back-button";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1727",
    title: "Chegada do Café no Brasil",
    description:
      "Francisco de Melo Palheta trouxe as primeiras sementes de café para o Brasil da Guiana Francesa.",
  },
  {
    year: "Sec XIX",
    title: "Expansão Cafeeira",
    description:
      "O Brasil se torna o maior produtor mundial de café, que se torna a principal exportação do país.",
  },
  {
    year: "1920",
    title: "Capital do Café",
    description:
      "São Paulo se consolida como a capital mundial do café, impulsionando a economia brasileira.",
  },
  {
    year: "Hoje",
    title: "Líder Global",
    description:
      "O Brasil mantém sua posição como maior produtor e exportador mundial de café.",
  },
];

type ImagePaths = {
  hero: string;
  impact: string;
};

const IMAGES: ImagePaths = {
  hero: "/photos/Café-Verde.webp",
  impact: "/photos/sp.webp",
};

interface TimelineProps {
  events: TimelineEvent[];
}

export default function CoffeeHistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />

      <HeroSection />

      <main className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <Introduction />
          <Timeline events={TIMELINE_EVENTS} />
          <ImpactSection />
        </div>
      </main>
    </div>
  );
}

const HeroSection = () => (
  <section className="relative h-[300px] sm:h-[400px] flex items-center justify-center">
    <div className="absolute inset-0 bg-black/30 z-0" />
    <Image
      src={IMAGES.hero}
      alt="Plantação de café histórica"
      fill
      className="object-cover z-[-1] filter brightness-50"
      priority
      quality={80}
      sizes="100vw"
    />
    <div className="container relative z-10 text-center text-white px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
        A História do Café no Brasil
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
        Uma jornada no tempo: Das primeiras sementes à liderança global
      </p>
    </div>
  </section>
);

const Introduction = () => (
  <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
      A Jornada do Café
    </h2>
    <p className="text-base sm:text-lg text-muted-foreground mb-6 text-center">
      A trajetória do café no Brasil é marcada por ambição, inovação e 
      transformação. Desde seus humildes começos no século XVIII até se tornar 
      o maior produtor mundial, o café moldou a história, economia e cultura 
      do país.
    </p>
  </div>
);

const Timeline: React.FC<TimelineProps> = ({ events }) => (
  <div className="relative max-w-6xl mx-auto my-12 sm:my-16">
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

    <div className="space-y-8 sm:space-y-16">
      {events.map((event, index) => (
        <div
          key={event.year}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-start`}
        >
          <div
            className={`w-full md:w-1/2 p-4 sm:p-6 ${
              index % 2 === 0
                ? "md:pr-16 md:text-right"
                : "md:pl-16 md:text-left"
            }`}
          >
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-2 sm:mb-0 sm:mr-4 text-sm">
                  {event.year}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  {event.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {event.description}
              </p>
            </div>
          </div>

          <div className="hidden md:block w-0 relative h-full">
            <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md" />
            {index !== events.length - 1 && (
              <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />
            )}
          </div>

          <div className="hidden md:block w-1/2"></div>
        </div>
      ))}
    </div>
  </div>
);

const ImpactSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
    <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden">
      <Image
        src={IMAGES.impact}
        alt="Processamento de café"
        fill
        className="object-cover"
        quality={80}
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectPosition: "center center",
        }}
      />
    </div>
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Impacto do Café
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
        O café foi mais que uma simples cultura no Brasil; foi um catalisador
        para desenvolvimento, imigração e intercâmbio cultural. A indústria
        cafeeira moldou cidades, construiu ferrovias e atraiu milhões de
        imigrantes que enriqueceram o tecido cultural brasileiro.
      </p>
      <p className="text-sm sm:text-base text-muted-foreground">
        Hoje, a indústria cafeeira brasileira continua a evoluir, adotando
        práticas sustentáveis e novas tecnologias enquanto mantém sua posição
        como líder global na produção e exportação de café.
      </p>
    </div>
  </div>
);