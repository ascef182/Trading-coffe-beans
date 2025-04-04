// lib/blog-data.ts

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
}

// Nosso "banco de dados" local
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "green-coffee-insights",
    title: "Green Coffee Market Insights",
    excerpt: "Análise completa do mercado de café verde em 2023",
    content: "...conteúdo completo do post...",
    featuredImage: "/images/green-coffee.jpg",
    publishedAt: "2023-11-15",
    author: {
      name: "Thiago Cazarini",
      role: "Especialista em Café",
    },
  },
  {
    id: "2",
    slug: "brazilian-coffee-varieties",
    title: "Variedades de Café Brasileiro",
    excerpt: "Conheça as principais variedades cultivadas no Brasil",
    content: "...conteúdo completo do post...",
    featuredImage: "/images/brazilian-coffee.jpg",
    publishedAt: "2023-10-20",
    author: {
      name: "Ana Silva",
      role: "Produtora de Café",
    },
  },
  {
    id: "3",
    slug: "colombian-coffee-varieties",
    title: "Cafés da Colômbia",
    excerpt: "O que torna os cafés colombianos tão especiais",
    content: "...conteúdo completo do post...",
    featuredImage: "/images/colombian-coffee.jpg",
    publishedAt: "2023-09-05",
    author: {
      name: "Carlos Mendez",
      role: "Importador",
    },
  },
];

// Funções para acessar os dados
export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
