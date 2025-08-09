"use client";

import {
  Mail,
  Smartphone,
  Instagram,
  Linkedin,
  HelpCircle,
  Shield,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { language } = useLanguage();
  const isPT = language === "pt";
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              {isPT ? "Links Rápidos" : "Quick Links"}
            </h4>
            <nav className="space-y-3">
              <Link
                href={isPT ? "/pt" : "/"}
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                {isPT ? "Início" : "Home"}
              </Link>
              <Link
                href={isPT ? "/pt/sobre" : "/about"}
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                {isPT ? "Sobre" : "About"}
              </Link>
              <Link
                href={isPT ? "/pt/historia-do-cafe" : "/coffee-history"}
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                {isPT ? "História do Café" : "Coffee History"}
              </Link>
              <Link
                href={isPT ? "/pt/contato" : "/contact"}
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                {isPT ? "Contato" : "Contact"}
              </Link>
            </nav>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {isPT ? "Produtos" : "Products"}
            </h4>
            <nav className="space-y-3">
              <Link
                href={isPT ? "/pt/cafe-verde" : "/green-coffee"}
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                {isPT ? "Café Verde" : "Green Coffee"}
              </Link>
              <Link
                href={isPT ? "/pt/variedades" : "/varieties"}
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                {isPT ? "Variedades" : "Varieties"}
              </Link>
              <Link
                href={isPT ? "/pt/blog" : "/blog"}
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* New Column 3: Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              {isPT ? "Informações" : "Information"}
            </h4>
            <nav className="space-y-3">
              <Link
                href="/privacy"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline"
              >
                <Shield className="h-4 w-4" />
                {isPT ? "Política de Privacidade" : "Privacy Policy"}
              </Link>
              <Link
                href="/terms"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline"
              >
                <FileText className="h-4 w-4" />
                {isPT ? "Termos de Uso" : "Terms of Use"}
              </Link>
              <Link
                href="/faq"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline"
              >
                <HelpCircle className="h-4 w-4" />
                {isPT ? "Perguntas Frequentes" : "FAQ"}
              </Link>
            </nav>
          </div>

          {/* Column 4: Connect & Contact */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                {isPT ? "Conecte-se Conosco" : "Connect With Us"}
              </h4>
              <div className="flex gap-4">
                <Link
                  href="mailto:thiago@cazarini.com"
                  className="text-muted-foreground hover:text-foreground"
                  title="Email"
                >
                  <Mail className="h-6 w-6" />
                </Link>
                <Link
                  href="https://instagram.com/cazarinitrading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                  title="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/thiago-marques-cazarini-903a96b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                  title="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                {isPT ? "Detalhes de Contato" : "Contact Details"}
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>trading@cazarini.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>+55 35 8488 0810</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Skype: mrcazarini</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>AMk: tilagoccazarini</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-6 pb-8 text-center">
          <p className="text-sm text-muted-foreground">
            {isPT
              ? "© 2025 Cazarini Trading. Todos os direitos reservados."
              : "© 2025 Cazarini Trading. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
