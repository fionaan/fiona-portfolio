import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LinkTray from "./LinkTray";
import Year from "./Year";

type ChildrenProps = {
  children: React.ReactNode;
};

export default function OverlayGlow({ children }: ChildrenProps) {
  const glowRef: React.RefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const glow = glowRef.current;
      if (!glow) return;
      const glowSize = glow.offsetWidth / 2;

      const xTo = gsap.quickTo(glow, "x", {
        duration: 0.6,
        ease: "power3",
      });

      const yTo = gsap.quickTo(glow, "y", {
        duration: 0.6,
        ease: "power3",
      });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX - glowSize);
        yTo(e.clientY - glowSize);
      });

      return () => {
        window.removeEventListener("mousemove", (e) => {
          xTo(e.clientX - glowSize);
          yTo(e.clientY - glowSize);
        });
      };
    });
    return ctx.revert();
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 aspect-square w-[50vmin] overflow-hidden rounded-full will-change-transform"
        aria-hidden="true"
        ref={glowRef}
      >
        <div className="h-full w-full animate-spin-slow bg-gradient-to-r from-pink-700/20 to-amber-600/20"></div>
      </div>
      <div aria-hidden="true" className="fixed inset-0 backdrop-blur-3xl"></div>
      <Year />
      <article className="absolute z-1 w-full flex flex-col justify-between gap-47 px-3">
        {children}
        <LinkTray />
      </article>
    </>
  );
}
