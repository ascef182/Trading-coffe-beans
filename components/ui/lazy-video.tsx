"use client";

import React, { useEffect, useRef, useState } from "react";

export interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export function LazyVideo({
  src,
  poster,
  className,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "200px 0px", threshold: 0.01 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive || !videoRef.current) return;
    const v = videoRef.current;
    // Assign src only when active to avoid initial network cost
    if (!v.src) {
      v.src = src;
    }
    // Attempt autoplay if requested
    if (autoPlay) {
      const playPromise = v.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
          // Autoplay might be blocked; ignore silently
        });
      }
    }
  }, [isActive, src, autoPlay]);

  return (
    <div ref={containerRef} className="block h-full w-full">
      <video
        ref={videoRef}
        className={className}
        poster={poster}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload="none"
      />
    </div>
  );
}
