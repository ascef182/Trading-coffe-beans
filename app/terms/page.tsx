import React from "react";
import type { Metadata } from "next";
import { BackButton } from "@/components/back-button";

export const metadata: Metadata = {
  title: "Terms of Use | CazariniTrading",
  description:
    "Terms of Use of CazariniTrading website. Understand the conditions for using our content and services.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <section className="py-16 bg-background">
        <div className="container max-w-3xl mx-auto px-4 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Use</h1>
          <p className="text-muted-foreground">
            By accessing and using this website, you agree to these Terms of
            Use. If you do not agree, please discontinue use of the website.
          </p>
          <h2 className="text-xl font-semibold">1. Use of Content</h2>
          <p className="text-muted-foreground">
            The content provided is for informational and commercial purposes
            related to green coffee. You may not copy, distribute, or modify
            materials without prior authorization.
          </p>
          <h2 className="text-xl font-semibold">
            2. Accuracy and Availability
          </h2>
          <p className="text-muted-foreground">
            We strive to keep information accurate and up-to-date, but we make
            no warranties about completeness or availability. We may modify
            content at any time without notice.
          </p>
          <h2 className="text-xl font-semibold">3. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            To the maximum extent permitted by law, CazariniTrading shall not be
            liable for any indirect, incidental, or consequential damages
            arising from the use of the website.
          </p>
          <h2 className="text-xl font-semibold">4. Third-Party Links</h2>
          <p className="text-muted-foreground">
            External links are provided for convenience. We are not responsible
            for the content or practices of third-party websites.
          </p>
          <h2 className="text-xl font-semibold">5. Governing Law</h2>
          <p className="text-muted-foreground">
            These terms are governed by the laws of Brazil. Any disputes shall
            be resolved in the competent courts of the state of Minas Gerais,
            Brazil.
          </p>
          <h2 className="text-xl font-semibold">6. Contact</h2>
          <p className="text-muted-foreground">
            For questions, contact: trading@cazarini.com
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated: 2025-08-09
          </p>
        </div>
      </section>
    </div>
  );
}
