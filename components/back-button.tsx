"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

interface BackButtonProps {
  href?: string;
}

export function BackButton({ href }: BackButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (href) {
      router.push(href);
      return;
    }

    // Blog posts: return to the correct blog listing by language
    if (pathname.startsWith("/pt/blog/")) {
      router.push("/pt/blog");
      return;
    }
    if (pathname.startsWith("/blog/posts/")) {
      router.push("/blog");
      return;
    }

    // Default: go to localized home
    router.push(language === "pt" ? "/pt" : "/");
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClick}
        className={`fixed left-3 md:left-4 top-7 md:top-24 z-50 rounded-full bg-black/25 backdrop-blur-sm transition-all duration-300 ${
          isScrolled
            ? "hover:bg-black/20 text-white"
            : "hover:bg-black/30 text-white"
        } w-9 h-9 md:w-10 md:h-10`}
        aria-label="Go back"
        tabIndex={0}
      >
        <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
      </Button>
    </>
  );
}
