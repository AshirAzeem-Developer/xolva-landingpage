"use client";
import React, { useState } from "react";
import { cn } from "../../lib/util";
import Image from "next/image";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <Image src={card.src} alt={card.title} className="object-cover" fill />

    {/* This is the default title chip */}
    <div
      className={cn(
        "absolute bottom-4 left-4 z-10 bg-black/85 text-white rounded-full px-6 py-2 text-sm md:text-base font-medium transition-opacity duration-300",
        hovered === index ? "opacity-0" : "opacity-100"
      )}
    >
      {card.title}
    </div>

    {/* This is the overlay that appears on hover */}
    <div
      className={cn(
        "absolute inset-0 bg-black/60 flex flex-col items-start justify-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">
        {card.title}
      </div>
      <div className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mt-1">
        {card.description}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto md:px-4 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
