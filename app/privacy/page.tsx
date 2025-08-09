import React from "react";
import type { Metadata } from "next";
import { BackButton } from "@/components/back-button";

export const metadata: Metadata = {
  title: "Privacy Policy | CazariniTrading",
  description:
    "Privacy Policy of CazariniTrading. Learn how we collect, use and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackButton />
      <section className="py-16 bg-background">
        <div className="container max-w-3xl mx-auto px-4 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">
            This Privacy Policy explains how CazariniTrading ("we", "our")
            collects, uses, and protects your information when you use our
            website and services.
          </p>
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              Contact information (name, email, company) when you submit our
              forms.
            </li>
            <li>
              Usage data (pages visited, approximate location, device, browser)
              for analytics.
            </li>
          </ul>
          <h2 className="text-xl font-semibold">2. Use of Information</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              To respond to your inquiries and provide requested information.
            </li>
            <li>To improve site performance, security, and user experience.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <h2 className="text-xl font-semibold">3. Data Sharing</h2>
          <p className="text-muted-foreground">
            We do not sell your personal data. We may share limited information
            with service providers strictly to operate our website (e.g.,
            hosting, analytics, form processing) under confidentiality
            obligations.
          </p>
          <h2 className="text-xl font-semibold">4. Data Retention</h2>
          <p className="text-muted-foreground">
            We retain personal data only as long as necessary to fulfill the
            purposes outlined in this policy or as required by law.
          </p>
          <h2 className="text-xl font-semibold">5. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              Access, correction, or deletion of your personal information.
            </li>
            <li>
              Objection to processing and data portability where applicable.
            </li>
          </ul>
          <h2 className="text-xl font-semibold">6. Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to
            protect your information from unauthorized access, alteration, or
            disclosure.
          </p>
          <h2 className="text-xl font-semibold">7. Cookies</h2>
          <p className="text-muted-foreground">
            We may use cookies or similar technologies to enhance site
            functionality and analytics. You can control cookies via your
            browser settings.
          </p>
          <h2 className="text-xl font-semibold">8. Contact</h2>
          <p className="text-muted-foreground">
            For privacy inquiries, contact: trading@cazarini.com
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated: 2025-08-09
          </p>
        </div>
      </section>
    </div>
  );
}
