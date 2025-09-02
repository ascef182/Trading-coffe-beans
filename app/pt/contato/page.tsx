"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BackButton } from "@/components/back-button";
import { useForm as useFormspree, ValidationError } from "@formspree/react";

// Validação básica controlada pelo Formspree

export default function PaginaContato() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID as
    | string
    | undefined;
  const [state, handleSubmit] = useFormspree(formId ?? "");

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      {/* Seção do Formulário de Contato */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
              <p className="text-xl text-muted-foreground">
                Adoraríamos ouvir de você. Vamos discutir como podemos trabalhar
                juntos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Informações de Contato */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Endereço
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Varginha, Minas Gerais
                      <br />
                      Brasil
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      E-mail
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:trading@cazarini.com.br"
                      className="text-muted-foreground hover:text-primary"
                    >
                      trading@cazarini.com.br
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Telefone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+5535984160810"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +55 35 98416-0810
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Formulário de Contato */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Envie-nos uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e retornaremos o mais breve
                    possível.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!formId ? (
                    <p className="text-red-600">
                      Formulário não configurado. Defina
                      NEXT_PUBLIC_FORMSPREE_FORM_ID em .env.local
                    </p>
                  ) : state.succeeded ? (
                    <p className="text-green-600">
                      Obrigado! Em breve entraremos em contato.
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="_gotcha"
                        aria-hidden="true"
                        placeholder="Não preencher"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Nome</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="João"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Sobrenome</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Silva"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="joao@exemplo.com"
                          required
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Nome da sua empresa"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Conte-nos sobre suas necessidades..."
                          className="min-h-[150px]"
                          required
                        />
                        <ValidationError
                          prefix="Mensagem"
                          field="message"
                          errors={state.errors}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={state.submitting}
                      >
                        {state.submitting ? "Enviando..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
