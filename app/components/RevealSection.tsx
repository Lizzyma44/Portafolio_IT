"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function RevealSection({
  id,
  className = "",
  children,
}: RevealSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let hasScrolled = window.scrollY > 10;

    const checkPosition = () => {
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Si está dentro de la pantalla visible
      if (rect.top < windowHeight * 0.9 && rect.bottom > 40) {
        if (hasScrolled) {
          // Pequeño respiro para que el navegador pinte el estado inicial y sí haga la transición
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        } else {
          // Si ya estaba visible al cargar sin hacer scroll, mostrarlo directo
          setIsVisible(true);
        }
      }
    };

    const onScroll = () => {
      hasScrolled = true;
      checkPosition();
    };

    checkPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkPosition);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(36px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      {children}
    </section>
  );
}