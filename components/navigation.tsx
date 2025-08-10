"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { getTranslatedRoute, getOriginalRoute } from "@/utils/routes";

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
    { href: "/pt", label: "Início" },
    { href: "/pt/sobre", label: "Sobre" },
    { href: "/pt/historia-do-cafe", label: "História do Café" },
    { href: "/pt/cafe-verde", label: "Café Verde" },
    { href: "/pt/variedades", label: "Variedades" },
    { href: "/pt/blog", label: "Blog" },
    { href: "/pt/contato", label: "Contato" },
  ],
};

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    const translatedRoute = getTranslatedRoute(pathname, newLanguage);
    setLanguage(newLanguage);
    router.push(translatedRoute);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-0 sm:px-2 md:px-4 flex h-16 items-center">
        <Link
          href={language === "en" ? "/" : "/pt"}
          className="flex items-center h-full mr-auto"
        >
          <div className="h-16 w-auto ml-0">
            <Image
              src="/Logomarca-Cazarini-12.09.13.svg"
              alt="Cazarini Trading"
              width={200}
              height={64}
              className="w-[200px] h-[64px] object-contain"
              priority
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </Link>

        <nav className="flex items-center justify-end space-x-6">
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
                <span className="text-xs">PT</span>
              </>
            ) : (
              <>
                <BRFlag />
                <span className="text-xs">EN</span>
              </>
            )}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] sm:w-[380px]"
              title="Menu"
            >
              <nav className="flex flex-col space-y-4">
                {routes[language].map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={closeMenu}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === route.href
                        ? "text-foreground"
                        : "text-foreground/60"
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  onClick={() => {
                    toggleLanguage();
                    closeMenu();
                  }}
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
