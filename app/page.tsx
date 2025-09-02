import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Check, CheckCircle, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  const stats = [
    { value: "20+", label: "Years in Coffee Trade" },
    { value: "50K+", label: "Tons Exported Each Year" },
    { value: "25+", label: "Distinct Varieties Offered" },
    { value: "98%", label: "Customer Satisfaction Rate" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Carousel with Gradient Overlay */}
        <div className="absolute inset-0">
          <Carousel
            images={[
              {
                src: "/photos/cafe-verde.jpeg",
                alt: "Fresh green coffee beans",
              },
              { src: "/photos/unnamed.jpg", alt: "Premium coffee selection" },
              {
                src: "/photos/fileiras-de-cafe.jpeg",
                alt: "Coffee plantation rows",
              },
              { src: "/photos/cafe-vermelho.jpeg", alt: "Red coffee cherries" },
              {
                src: "/photos/pe-de-cafe-amarelo.jpeg",
                alt: "Yellow coffee beans",
              },
              {
                src: "/photos/foto-drone-pes-cafe.jpeg",
                alt: "Aerial plantation view",
              },
            ]}
            autoPlayInterval={8000}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18170f] via-[#18170f]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center px-4 pt-8 sm:pt-10">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-[#b3a957]/20 backdrop-blur-sm rounded-full border border-[#b3a957]/30">
            <span className="text-[#e3e3cd] font-medium tracking-wider">
              SINCE 2009
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white"> ROUND THE CLOCK </span>{" "}
            <span className="text-[#b3a957]">COFFEE </span>
            <br />
            <span className="text-white">BROKERS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Helping coffee beans travel the world — from farm to roastery
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="min-w-[200px] bg-[#b3a957] hover:bg-[#ddd27b] text-[#18170f] font-medium transition-all"
            >
              <Link href="/contact">
                Request Samples <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-[200px] bg-transparent hover:bg-white/50 text-white border-white hover:border-[#b3a957] transition-all"
            >
              <Link href="/varieties">
                Explore Qualities <Coffee className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Direct Farm Relationships</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Traceable Lots</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Deforestation Free & Certified</span>
            </div>
          </div>

          {/* Icon decoration 
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Coffee className="h-6 w-6 text-[#b3a957]" />
          </div>*/}
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Coffee Varieties Preview (mantida, mas simplificada) */}
      <section id="varieties" className="py-20 bg-muted scroll-mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Coffee Qualities</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Discover our wide range of green coffee varieties from Brazil
                and Colombia. From classic FINE CUP to certified sustainable
                lots, we help you find the right coffee for your market.
              </p>
              <Button asChild variant="default">
                <Link href="/varieties">
                  View All Varieties <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/photos/coffe.jpg"
                alt="Green coffee selection"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Source <span className="text-[#b3a957]">Sustainable</span> Green
            Coffee
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with trusted Brazilian farmers to access premium, traceable,
            and certified coffee beans — backed by round-the-clock export
            support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-[200px] bg-[#b3a957] hover:bg-[#d8cd75] text-[#171717] font-medium transition-all hover:scale-105 shadow-lg"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center"
              >
                Request Samples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-[200px] bg-transparent text-white border-2 border-white hover:bg-white/50 hover:border-white/80 font-medium transition-all hover:scale-105"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center"
              >
                Download Price List <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b3a957]" />
              <span>Direct from Brazilian Farms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b3a957]" />
              <span>Certified Quality Control</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b3a957]" />
              <span>Global Export Expertise</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
