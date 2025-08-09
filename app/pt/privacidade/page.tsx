import React from "react";
import type { Metadata } from "next";
import { BackButton } from "@/components/back-button";

export const metadata: Metadata = {
  title: "Política de Privacidade | CazariniTrading",
  description:
    "Política de Privacidade da CazariniTrading. Entenda como coletamos, usamos e protegemos seus dados pessoais.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <section className="py-16 bg-background">
        <div className="container max-w-3xl mx-auto px-4 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground">
            Esta Política de Privacidade explica como a CazariniTrading ("nós",
            "nosso") coleta, usa e protege suas informações ao utilizar nosso
            site e serviços.
          </p>
          <h2 className="text-xl font-semibold">1. Informações Coletadas</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              Dados de contato (nome, e-mail, empresa) quando você envia nossos
              formulários.
            </li>
            <li>
              Dados de uso (páginas visitadas, localização aproximada,
              dispositivo, navegador) para análise.
            </li>
          </ul>
          <h2 className="text-xl font-semibold">2. Uso das Informações</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Responder às suas solicitações e fornecer informações.</li>
            <li>Melhorar desempenho, segurança e experiência do site.</li>
            <li>Cumprir obrigações legais.</li>
          </ul>
          <h2 className="text-xl font-semibold">
            3. Compartilhamento de Dados
          </h2>
          <p className="text-muted-foreground">
            Não vendemos seus dados pessoais. Podemos compartilhar informações
            limitadas com prestadores de serviço estritamente para operar o site
            (ex.: hospedagem, análise, processamento de formulários) sob
            confidencialidade.
          </p>
          <h2 className="text-xl font-semibold">4. Retenção</h2>
          <p className="text-muted-foreground">
            Mantemos os dados apenas pelo tempo necessário para as finalidades
            desta política ou conforme exigido por lei.
          </p>
          <h2 className="text-xl font-semibold">5. Seus Direitos</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Acesso, correção ou exclusão de suas informações pessoais.</li>
            <li>Oposição ao tratamento e portabilidade, quando aplicável.</li>
          </ul>
          <h2 className="text-xl font-semibold">6. Segurança</h2>
          <p className="text-muted-foreground">
            Adotamos medidas técnicas e organizacionais apropriadas para
            proteger suas informações contra acesso não autorizado, alteração ou
            divulgação.
          </p>
          <h2 className="text-xl font-semibold">7. Cookies</h2>
          <p className="text-muted-foreground">
            Podemos usar cookies ou tecnologias semelhantes para funcionalidade
            e análise. Você pode controlá-los nas configurações do navegador.
          </p>
          <h2 className="text-xl font-semibold">8. Contato</h2>
          <p className="text-muted-foreground">
            Dúvidas sobre privacidade: trading@cazarini.com
          </p>
          <p className="text-xs text-muted-foreground">
            Última atualização: 2025-08-09
          </p>
        </div>
      </section>
    </div>
  );
}
