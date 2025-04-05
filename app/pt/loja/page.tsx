import React from "react";
import { BackButton } from "@/components/back-button";

export default function LojaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-6">Loja</h1>
        <p>Conteúdo da página da Loja em português será adicionado aqui.</p>
      </div>
    </div>
  );
} 