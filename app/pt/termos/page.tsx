import React from "react";
import type { Metadata } from "next";
import { BackButton } from "@/components/back-button";

export const metadata: Metadata = {
  title: "Termos de Uso | CazariniTrading",
  description:
    "Termos de Uso do site CazariniTrading. Condições para utilização do conteúdo e serviços.",
};

export default function TermosUsoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <section className="py-16 bg-background">
        <div className="container max-w-3xl mx-auto px-4 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Termos de Uso</h1>
          <p className="text-muted-foreground">
            Ao acessar e utilizar este site, você concorda com estes Termos de
            Uso. Caso não concorde, interrompa o uso do site.
          </p>
          <h2 className="text-xl font-semibold">1. Uso do Conteúdo</h2>
          <p className="text-muted-foreground">
            O conteúdo é fornecido para fins informativos e comerciais
            relacionados ao café verde. Você não pode copiar, distribuir ou
            modificar materiais sem autorização prévia.
          </p>
          <h2 className="text-xl font-semibold">
            2. Exatidão e Disponibilidade
          </h2>
          <p className="text-muted-foreground">
            Buscamos manter as informações precisas e atualizadas, mas não
            garantimos integralidade ou disponibilidade. Podemos modificar o
            conteúdo a qualquer momento, sem aviso prévio.
          </p>
          <h2 className="text-xl font-semibold">
            3. Limitação de Responsabilidade
          </h2>
          <p className="text-muted-foreground">
            Na máxima medida permitida por lei, a CazariniTrading não se
            responsabiliza por danos indiretos, incidentais ou consequenciais
            decorrentes do uso do site.
          </p>
          <h2 className="text-xl font-semibold">4. Links de Terceiros</h2>
          <p className="text-muted-foreground">
            Links externos são fornecidos por conveniência. Não nos
            responsabilizamos pelo conteúdo ou práticas de sites de terceiros.
          </p>
          <h2 className="text-xl font-semibold">5. Legislação Aplicável</h2>
          <p className="text-muted-foreground">
            Estes termos são regidos pelas leis do Brasil. Eventuais disputas
            serão resolvidas nos tribunais competentes do estado de Minas
            Gerais.
          </p>
          <h2 className="text-xl font-semibold">6. Contato</h2>
          <p className="text-muted-foreground">Dúvidas: trading@cazarini.com</p>
          <p className="text-xs text-muted-foreground">
            Última atualização: 2025-08-09
          </p>
        </div>
      </section>
    </div>
  );
}
