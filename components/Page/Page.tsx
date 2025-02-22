import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export type PageProps = {
  title?: string;
  children?: React.ReactNode;
};

const Page: React.FC<PageProps> = ({
  title = "Your Portfolio",
  children,
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return; // Only for devices with a pointer
  
    const interactive = interactiveRef.current;
    if (!interactive) return;
  
    let curX = 0,
      curY = 0,
      tgX = 0,
      tgY = 0;
  
    const move = () => {
      curX += (tgX - curX) * 0.1; // Smooth animation
      curY += (tgY - curY) * 0.1;
  
      interactive.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
      requestAnimationFrame(move);
    };
  
    const handlePointerMove = (event: PointerEvent) => {
      // Show the element with opacity
      interactive.style.opacity = "0.5";
  
      // Get half of interactive size
      const rect = interactive.getBoundingClientRect();
      const offsetX = rect.width / 2;
      const offsetY = rect.height / 2;
  
      // Set target position - offset to keep mouse in center
      tgX = event.clientX - offsetX;
      tgY = event.clientY - offsetY;
    };
  
    const handleScroll = () => {
      // Hide the element with opacity on scroll
      interactive.style.opacity = "0";
    };
  
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll);
    move();
  
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white bg-background max-w-screen">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@100..900&family=DM+Sans:wght@100..1000&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>

      <Header />
      {children}
      <Footer />

      <div className="gradients-container">
        <div className="interactive" ref={interactiveRef}></div>
      </div>
    </div>
  );
};

export default Page;
