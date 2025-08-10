import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Coffee,
  Check,
  Leaf,
  Scale,
  Shield,
  CheckCircle,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "50K+", label: "Tons Exported Annually" },
    { value: "25+", label: "Coffee Varieties" },
    { value: "98%", label: "Quality Score Average" },
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
              {
                src: "/photos/unnamed.jpg",
                alt: "Premium coffee selection",
              },
              {
                src: "/photos/fileiras-de-cafe.jpeg",
                alt: "Coffee plantation rows",
              },
              {
                src: "/photos/cafe-vermelho.jpeg",
                alt: "Red coffee cherries on the tree",
              },
              {
                src: "/photos/pe-de-cafe-amarelo.jpeg",
                alt: "Yellow coffee beans ready for processing",
              },
              {
                src: "/photos/foto-drone-pes-cafe.jpeg",
                alt: "Aerial view of coffee plantation",
              },
            ]}
            autoPlayInterval={8000}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18170f] via-[#18170f]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center px-4 pt-8 sm:pt-10">
          {/* Subtle badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-[#b3a957]/20 backdrop-blur-sm rounded-full border border-[#b3a957]/30 max-[375px]:mb-4">
            <span className="text-[#e3e3cd] font-medium tracking-wider">
              SINCE 2009
            </span>
          </div>

          {/* Headline with better typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-[375px]:text-3xl font-bold mb-6 leading-tight">
            <span className="text-white">Premium</span>{" "}
            <span className="text-[#b3a957]">Brazilian</span>
            <br />
            <span className="text-white">Green Coffee</span>
          </h1>

          {/* Description with max-width */}
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Our specialty-grade green coffee beans deliver exceptional quality
            and traceability for discerning roasters.
          </p>

          {/* Buttons with improved hover states */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-[375px]:gap-3">
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
                Explore Varieties <Coffee className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 max-[480px]:mt-14 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Direct Farm Relationships</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>85+ SCA Points Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Traceable Lots</span>
            </div>
          </div>
        </div>

        {/* Animated coffee beans decoration (optional) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Coffee className="h-6 w-6 text-[#b3a957]" />
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

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Green Coffee
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium quality green coffee beans sourced directly from
              Brazil&apos;s most distinguished estates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Premium Selection */}
            <div className="group relative flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Selection</h3>
              <p className="text-muted-foreground">
                Only the top 2% of harvest meets our strict quality standards,
                hand-selected from Brazil&apos;s finest micro-lots
              </p>
            </div>

            {/* Card 2 - Quality Guarantee */}
            <div className="group relative flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Every lot cupped by Q-Graders with minimum 85+ SCA score and
                full traceability reports
              </p>
            </div>

            {/* Card 3 - Sustainable Sourcing */}
            <div className="group relative flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Sustainable Sourcing
              </h3>
              <p className="text-muted-foreground">
                Rainforest Alliance certified partners with eco-friendly
                processing and fair trade practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Varieties Preview */}
      <section id="varieties" className="py-20 bg-muted scroll-mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Premium Selection</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We offer a diverse range of high-quality green coffees from
                Brazil and Colombia, carefully selected to meet various market
                needs. Our portfolio includes different processing methods and
                quality grades to suit every requirement.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Brazilian Coffees
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• NY 2/3 Semi Washed 17/18 Fine Cup</li>
                    <li>• NY 2/3 Semi Washed 14/16 Fine Cup</li>
                    <li>• Natural NY 2/3 Cerrado/Mogiana 17/18 Fine Cup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Colombian Coffees
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• UGQ</li>
                    <li>• EP-10</li>
                    <li>• Supremos</li>
                  </ul>
                </div>
              </div>
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

      {/* Latest Blog Posts Preview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Coffee Market Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert analysis and updates on the green coffee market
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                slug: "/blog/posts/green-coffee-insights",
                title: "Global Green Coffee Market Insights",
                image: "/photos/AdobeStock_179552693.jpeg",
                tag: "Market Analysis",
                excerpt:
                  "Latest trends and forecasts in the green coffee market...",
              },
              {
                slug: "/blog/posts/brazilian-coffee-varieties",
                title: "Brazilian Coffee Varieties",
                image: "/photos/unnamed.jpg",
                tag: "Varieties",
                excerpt:
                  "Discover the distinctive processes and flavors of Brazilian coffee...",
              },
              {
                slug: "/blog/posts/colombian-coffee-varieties",
                title: "Colombian Coffee Varieties",
                image: "/photos/colombia-13-1-optimized.jpg",
                tag: "Varieties",
                excerpt:
                  "Explore the diversity of Colombian coffee profiles...",
              },
            ].map((post) => (
              <div
                key={post.slug}
                className="rounded-lg overflow-hidden border bg-card"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {post.tag}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" asChild className="p-0">
                    <Link href={post.slug}>Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">
            Source <span className="text-[#b3a957]">Premium</span> Green Coffee
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Connect directly with Brazilian growers to access the finest green
            coffee beans paired with end-to-end export solutions for your
            business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-[200px] bg-[#b3a957] hover:bg-[#d8cd75] text-[#171717] font-medium transition-all hover:scale-105 shadow-lg"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center"
              >
                Request Samples{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
