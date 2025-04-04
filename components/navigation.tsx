"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Componentes de bandeira (mantidos do código anterior)
const USFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    width="20"
    height="10"
  >
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#t)"
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const BRFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    width="20"
    height="10"
  >
    <rect width="60" height="30" fill="#009B3A" />
    <path d="M30,15 L0,0 L0,30 Z" fill="#FEDF00" />
    <circle cx="30" cy="15" r="7" fill="#002776" />
    <path d="M30,15 l4.5,-2.5 l-2.5,4.5 l-2.5,-4.5 Z" fill="#FEDF00" />
  </svg>
);

const routes = {
  en: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/coffee-history", label: "Coffee History" },
    { href: "/green-coffee", label: "Green Coffee" },
    { href: "/varieties", label: "Varieties" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  pt: [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
    { href: "/coffee-history", label: "História do Café" },
    { href: "/green-coffee", label: "Café Verde" },
    { href: "/varieties", label: "Variedades" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contato" },
  ],
};

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<"en" | "pt">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center h-full">
          <div className="h-16 w-auto">
            <Image
              src="/Logomarca-Cazarini-12.09.13.svg"
              alt="Cazarini Trading"
              width={200}
              height={64}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="flex flex-1 items-center justify-end space-x-6">
          <div className="hidden md:flex space-x-6">
            {routes[language].map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.href
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>

          {/* Botão para alternar idioma */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-2 px-3"
            aria-label="Toggle language"
          >
            {language === "en" ? (
              <>
                <USFlag />
                <span className="text-xs">EN</span>
              </>
            ) : (
              <>
                <BRFlag />
                <span className="text-xs">PT</span>
              </>
            )}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] sm:w-[380px]"
              title="Menu" // Adicionei a propriedade title obrigatória
            >
              <nav className="flex flex-col space-y-4">
                {routes[language].map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === route.href
                        ? "text-foreground"
                        : "text-foreground/60"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="mt-4 flex items-center justify-center gap-2"
                >
                  {language === "en" ? (
                    <>
                      <BRFlag />
                      <span>Português</span>
                    </>
                  ) : (
                    <>
                      <USFlag />
                      <span>English</span>
                    </>
                  )}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
