"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function OurClientsMovingCards() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  { name: "Client 1", src: "/logo-1.png", alt: "Client 1 Logo" },
  { name: "Client 2", src: "/logo-2.png", alt: "Client 2 Logo" },
  { name: "Client 3", src: "/logo-3.png", alt: "Client 3 Logo" },
  { name: "Client 4", src: "/logo-4.png", alt: "Client 4 Logo" },
  { name: "Client 5", src: "/logo-5.png", alt: "Client 5 Logo" },
];
