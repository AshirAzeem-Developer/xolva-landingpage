import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Utility function for combining class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Sample client data - replace with your actual data
const sampleClients = [
  { name: "Client 1", src: "/api/placeholder/200/100", alt: "Client 1 Logo" },
  { name: "Client 2", src: "/api/placeholder/200/100", alt: "Client 2 Logo" },
  { name: "Client 3", src: "/api/placeholder/200/100", alt: "Client 3 Logo" },
  { name: "Client 4", src: "/api/placeholder/200/100", alt: "Client 4 Logo" },
  { name: "Client 5", src: "/api/placeholder/200/100", alt: "Client 5 Logo" },
  { name: "Client 6", src: "/api/placeholder/200/100", alt: "Client 6 Logo" },
];

export const InfiniteMovingCards = ({
  items = sampleClients,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentDirection, setCurrentDirection] = useState(direction);

  useEffect(() => {
    addAnimation();
  }, []);

  useEffect(() => {
    getDirection();
  }, [currentDirection]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clear existing duplicates
      const originalItemsCount = items.length;
      const currentChildren = Array.from(scrollerRef.current.children);
      if (currentChildren.length > originalItemsCount) {
        currentChildren
          .slice(originalItemsCount)
          .forEach((child) => child.remove());
      }

      // Add duplicates for infinite scroll
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        currentDirection === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
          duration = "80s";
          break;
        default:
          duration = "40s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = isPaused
        ? "running"
        : "paused";
    }
  };

  const changeDirection = (newDirection) => {
    setCurrentDirection(newDirection);
  };

  return (
    <div className="relative w-full">
      {/* Control buttons */}

      {/* Carousel container */}
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden",
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="w-[280px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-white px-6 py-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              key={`${item.name}-${idx}`}
            >
              {/* Logo container with proper image handling */}
              <div className="relative h-20  w-full flex items-center justify-center rounded-lg p-4">
                <img
                  src={item.src}
                  alt={item.alt || item.name}
                  className="max-h-full w-auto max-w-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback for broken images
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiPkxvZ288L3RleHQ+Cjwvc3ZnPg==";
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear infinite
            var(--animation-direction, forwards);
        }

        .scroller {
          --animation-duration: 40s;
          --animation-direction: forwards;
        }
      `}</style>
    </div>
  );
};
