"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // If we're on a blog post page, go back to the blog listing
    if (pathname.startsWith('/blog/') && pathname !== '/blog') {
      router.push('/blog');
    } else {
      // Otherwise go to home
      router.push('/');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className={`fixed top-24 left-4 z-50 rounded-full bg-transparent transition-all duration-300 ${
        isScrolled 
          ? "border-primary hover:bg-primary/10 hover:text-primary text-primary" 
          : "border-white hover:bg-white/20 text-white"
      }`}
      aria-label="Go back"
      tabIndex={0}
    >
      <ArrowLeft className="h-6 w-6" />
    </Button>
  );
}