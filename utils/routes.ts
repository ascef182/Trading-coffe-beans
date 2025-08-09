import { Language } from "@/contexts/language-context";

// Mapeamento de rotas para cada idioma
export const routeMapping: Record<string, Record<Language, string>> = {
  "/": { en: "/", pt: "/pt" },
  "/about": { en: "/about", pt: "/pt/sobre" },
  "/coffee-history": { en: "/coffee-history", pt: "/pt/historia-do-cafe" },
  "/green-coffee": { en: "/green-coffee", pt: "/pt/cafe-verde" },
  "/varieties": { en: "/varieties", pt: "/pt/variedades" },
  "/blog": { en: "/blog", pt: "/pt/blog" },
  "/contact": { en: "/contact", pt: "/pt/contato" },
};

// Map EN<->PT slugs for blog posts
const blogPostSlugMap = {
  enToPt: {
    "brazilian-coffee-varieties": "variedades-cafe-brasileiro",
    "colombian-coffee-varieties": "variedades-cafe-colombiano",
    "green-coffee-insights": "insights-cafe-verde",
  },
  ptToEn: {
    "variedades-cafe-brasileiro": "brazilian-coffee-varieties",
    "variedades-cafe-colombiano": "colombian-coffee-varieties",
    "insights-cafe-verde": "green-coffee-insights",
  },
} as const;

// Função para obter a rota traduzida
export function getTranslatedRoute(path: string, language: Language): string {
  // Normaliza trailing slash
  const normalized =
    path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

  if (language === "pt") {
    // Já em PT
    if (normalized === "/pt" || normalized.startsWith("/pt/"))
      return normalized;
    // Mapeamento explícito
    if (routeMapping[normalized]) return routeMapping[normalized].pt;
    // Blog posts EN -> PT
    if (normalized.startsWith("/blog/posts/")) {
      const slug = normalized.replace("/blog/posts/", "");
      const ptSlug = (blogPostSlugMap.enToPt as Record<string, string>)[slug];
      return ptSlug ? `/pt/blog/${ptSlug}` : "/pt/blog`";
    }
    // Fallback: prefixa /pt para qualquer rota desconhecida
    return normalized === "/" ? "/pt" : `/pt${normalized}`;
  }

  // language === 'en'
  if (normalized === "/pt") return "/";
  if (normalized.startsWith("/pt/")) {
    // Blog posts PT -> EN
    if (normalized.startsWith("/pt/blog/")) {
      const slug = normalized.replace("/pt/blog/", "");
      const enSlug = (blogPostSlugMap.ptToEn as Record<string, string>)[slug];
      return enSlug ? `/blog/posts/${enSlug}` : "/blog";
    }
    // Remove o prefixo /pt para qualquer outra rota
    return normalized.slice(3) || "/";
  }
  if (routeMapping[normalized]) return routeMapping[normalized].en;
  return normalized;
}

// Função para obter a rota original a partir de uma rota traduzida
export function getOriginalRoute(path: string): string {
  // Para rotas PT aninhadas, retorna a versão EN removendo o prefixo
  if (path === "/pt") return "/";
  if (path.startsWith("/pt/")) return path.slice(3) || "/";
  // Se houver mapeamento exato, retorna a chave original
  for (const [originalPath, translations] of Object.entries(routeMapping)) {
    if (translations.pt === path || translations.en === path) {
      return originalPath;
    }
  }
  return path;
}
