import {
  Mail,
  Smartphone,
  Instagram,
  Linkedin,
  HelpCircle,
  Shield,
  FileText,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                About
              </Link>
              <Link
                href="/coffee-history"
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                Coffee History
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <nav className="space-y-3">
              <Link
                href="/green-coffee"
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                Green Coffee
              </Link>
              <Link
                href="/varieties"
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                Varieties
              </Link>
              <Link
                href="/blog"
                className="block text-muted-foreground hover:text-foreground hover:underline"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* New Column 3: Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Information</h4>
            <nav className="space-y-3">
              <Link
                href="/privacy"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline"
              >
                <Shield className="h-4 w-4" />
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline"
              >
                <FileText className="h-4 w-4" />
                Terms of Use
              </Link>
              <Link
                href="/faq"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline"
              >
                <HelpCircle className="h-4 w-4" />
                FAQ
              </Link>
            </nav>
          </div>

          {/* Column 4: Connect & Contact */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect With Us</h4>
              <div className="flex gap-4">
                <Link
                  href="mailto:thiago@cazarini.com"
                  className="text-muted-foreground hover:text-foreground"
                  title="Email"
                >
                  <Mail className="h-6 w-6" />
                </Link>
                <Link
                  href="https://instagram.com/cazarinitrading"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground"
                  title="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/company/cazarini-trading"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground"
                  title="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Details</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>trading@cazarini.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>+55 35 8488 0810</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Skype: mrcazarini</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>AMk: tilagoccazarini</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-6 pb-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Cazarini Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
