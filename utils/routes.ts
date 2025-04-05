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

// Função para obter a rota traduzida
export function getTranslatedRoute(path: string, language: Language): string {
  // Se a rota já começa com /pt/, retorna a mesma rota
  if (path.startsWith("/pt/")) {
    return path;
  }
  
  // Se a rota existe no mapeamento, retorna a versão traduzida
  if (routeMapping[path]) {
    return routeMapping[path][language];
  }
  
  // Se a rota não existe no mapeamento, retorna a mesma rota
  return path;
}

// Função para obter a rota original a partir de uma rota traduzida
export function getOriginalRoute(path: string): string {
  // Se a rota começa com /pt/, procura a rota original
  if (path.startsWith("/pt/")) {
    for (const [originalPath, translations] of Object.entries(routeMapping)) {
      if (translations.pt === path) {
        return originalPath;
      }
    }
  }
  
  // Se não encontrar, retorna a mesma rota
  return path;
} 