import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type ChildrenProps = {
  children: React.ReactNode;
};

export default function OverlayGlow({ children }: ChildrenProps) {
  const glowRef: React.RefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo(glowRef.current, "x", {
        duration: 0.6,
        ease: "power3",
      });

      const yTo = gsap.quickTo(glowRef.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      });

      return () => {
        window.removeEventListener("mousemove", (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        });
      };
    });
    return ctx.revert();
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 aspect-square w-[50vmin] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform"
        aria-hidden="true"
        ref={glowRef}
      >
        <div className="h-full w-full animate-spin-slow bg-gradient-to-r from-pink-700/20 to-amber-600/20"></div>
      </div>
      <div className="fixed inset-0 backdrop-blur-3xl"></div>
      <div className="absolute z-1 w-full flex flex-col justify-between gap-30 px-3">
        {children}
      </div>
    </>
  );
}
