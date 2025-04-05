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

export default function Home() {
  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "50K+", label: "Toneladas Exportadas Anualmente" },
    { value: "25+", label: "Variedades de Café" },
    { value: "98%", label: "Média de Pontuação de Qualidade" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Seção Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Imagem de fundo com gradiente */}
        <div className="absolute inset-0">
          <Image
            src="/photos/pe_de_cafe_verde.jpg"
            alt="Grãos premium de café verde brasileiro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18170f] via-[#18170f]/70 to-transparent" />
        </div>

        {/* Conteúdo */}
        <div className="container relative z-10 text-center px-4">
          {/* Destaque */}
          <div className="inline-block mb-6 px-4 py-2 bg-[#b3a957]/20 backdrop-blur-sm rounded-full border border-[#b3a957]/30">
            <span className="text-[#e3e3cd] font-medium tracking-wider">
              DESDE 2009
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Café Verde</span>{" "}
            <span className="text-[#b3a957]">Brasileiro</span>
            <br />
            <span className="text-white">de Alta Qualidade</span>
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Diretamente adquiridos de fazendas brasileiras sustentáveis, nossos
            grãos de café verde de qualidade especial oferecem excelência e
            rastreabilidade para torrefadores exigentes.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="min-w-[200px] bg-[#b3a957] hover:bg-[#ddd27b] text-[#18170f] font-medium transition-all"
            >
              <Link href="/contact">
                Solicitar Amostras <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-[200px] bg-transparent hover:bg-white/10 text-white border-white hover:border-[#b3a957] transition-all"
            >
              <Link href="/green-coffee">
                Ver Variedades <Coffee className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Selos de confiança */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Parceria Direta com Produtores</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Garantia de 85+ pontos SCA</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#b3a957]" />
              <span>Lotes Rastreáveis</span>
            </div>
          </div>
        </div>

        {/* Decoração animada */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Coffee className="h-6 w-6 text-[#b3a957]" />
        </div>
      </section>

      {/* Seção de Estatísticas */}
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

      {/* Seção de Vantagens */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Escolher Nosso Café Verde
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Grãos de café verde premium diretamente das melhores fazendas do Brasil
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cartão 1 - Seleção Premium */}
            <div className="group relative flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seleção Premium</h3>
              <p className="text-muted-foreground">
                Apenas os 2% melhores da colheita atendem nossos padrões,
                selecionados à mão dos melhores microlotes brasileiros
              </p>
            </div>

            {/* Cartão 2 - Garantia de Qualidade */}
            <div className="group relative flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Garantia de Qualidade</h3>
              <p className="text-muted-foreground">
                Todos os lotes avaliados por Q-Graders com mínimo 85 pontos SCA
                e relatórios completos de rastreabilidade
              </p>
            </div>

            {/* Cartão 3 - Origem Sustentável */}
            <div className="group relative flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Origem Sustentável
              </h3>
              <p className="text-muted-foreground">
                Parcerias certificadas Rainforest Alliance com processamento
                ecológico e práticas de comércio justo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Variedades */}
      <section id="varieties" className="py-20 bg-muted scroll-mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Nossa Seleção</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Oferecemos uma variedade de cafés verdes de alta qualidade do
                Brasil e Colômbia, cuidadosamente selecionados para diferentes
                necessidades de mercado.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Cafés Brasileiros
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Totalmente Lavado</li>
                    <li>• Semi-Lavado</li>
                    <li>• Naturais (Copo Fino)</li>
                    <li>• Naturais (Bom Copo)</li>
                    <li>• Grinders</li>
                    <li>• Rio Minas</li>
                    <li>• Conillons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Cafés Colombianos
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
                  Ver Todas Variedades <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="photos/varieties.jpg"
                alt="Seleção de cafés verdes"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Artigos */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Mercado do Café</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Análises especializadas e atualizações sobre o mercado de café verde
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden border bg-card"
              >
                <div className="relative h-48">
                  <Image
                    src={
                      i === 1
                        ? "https://as2.ftcdn.net/v2/jpg/04/65/06/85/1000_F_465068570_ZpGdLiqjzOG4JILcNhRbVzipzPp4W4BX.jpg"
                        : i === 2
                        ? "https://t3.ftcdn.net/jpg/06/23/17/06/240_F_623170639_lgGNuAwLWyzv4ddB9lIzZSoYFeLh5mqg.jpg"
                        : "https://as1.ftcdn.net/v2/jpg/02/70/41/64/1000_F_270416431_O4mZ3lQPJZPKJuMAH6lZehdUTulnbH6p.jpg"
                    }
                    alt="Post do blog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {i === 1
                      ? "Análise de Mercado"
                      : i === 2
                      ? "Controle de Qualidade"
                      : "Origem"}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {i === 1
                      ? "Relatório do Mercado de Café Verde Brasileiro"
                      : i === 2
                      ? "Entendendo os Padrões de Classificação"
                      : "Parcerias Diretas com Produtores"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {i === 1
                      ? "Últimas tendências e previsões do mercado..."
                      : i === 2
                      ? "Guia completo dos padrões de qualidade..."
                      : "Construindo relações sustentáveis..."}
                  </p>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/blog">Ler Mais</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/coffee-beans-pattern.png')] bg-cover bg-center"></div>
        <div className="container text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">
            Adquira Café Verde <span className="text-[#b3a957]">Premium</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Conecte-se diretamente com produtores brasileiros para acesso aos
            melhores grãos de café verde e soluções completas de exportação
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
                Solicitar Amostras{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-[200px] bg-transparent text-white border-2 border-white hover:bg-white/10 hover:border-white/80 font-medium transition-all hover:scale-105"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center"
              >
                Baixar Tabela <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Selos */}
          <div className="mt-16 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b3a957]" />
              <span>Direto de Fazendas Brasileiras</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b3a957]" />
              <span>Qualidade Certificada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#b3a957]" />
              <span>Expertise em Exportação Global</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}