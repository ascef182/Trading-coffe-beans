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

// Using Formspree built-in validation

export default function ContactPage() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID as
    | string
    | undefined;
  const [state, handleSubmit] = useFormspree(formId ?? "");

  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                We&apos;d love to hear from you. Let&apos;s discuss how we can
                work together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Varginha, Minas Gerais
                      <br />
                      Brazil
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:contact@cazarinitrading.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      trading@cazarini.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+55123456789"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +55 35 8488 0810
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!formId ? (
                    <p className="text-red-600">
                      Form ID not configured. Set NEXT_PUBLIC_FORMSPREE_FORM_ID
                      in .env.local
                    </p>
                  ) : state.succeeded ? (
                    <p className="text-green-600">
                      Thanks! We&apos;ll get back to you soon.
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot field */}
                      <input
                        type="text"
                        name="_gotcha"
                        aria-hidden="true"
                        placeholder="Do not fill"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your needs..."
                          className="min-h-[150px]"
                          required
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={state.submitting}
                      >
                        {state.submitting ? "Sending..." : "Send Message"}
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
