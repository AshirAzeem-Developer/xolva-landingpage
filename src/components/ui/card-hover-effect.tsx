import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
  ComponentType,
} from "react";
import { cn } from "../../lib/util";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

// TypeScript interfaces
interface LottieRef {
  play: () => void;
  stop: () => void;
  pause: () => void;
  goToAndStop: (frame: number) => void;
  goToAndPlay: (frame: number) => void;
  setSpeed: (speed: number) => void;
  destroy: () => void;
}

interface HoverItem {
  title: string;
  description: string;
  link: string;
  LottieAnimation: ComponentType<any>;
}

interface HoverEffectProps {
  items?: HoverItem[];
  className?: string;
  gridCols?: string;
}

interface CardProps {
  className?: string;
  children: ReactNode;
}

interface LottieAnimationProps {
  className?: string;
  children: ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: ReactNode;
}

interface CardDescriptionProps {
  className?: string;
  children: ReactNode;
}

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({
  items = [],
  className = "",
  gridCols = "lg:grid-cols-4",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rect, setRect] = useState<Rect | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lottieRefs = useRef<(LottieRef | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize the grid classes to prevent unnecessary recalculations
  const gridClasses = useMemo(() => {
    const baseClasses = "grid grid-cols-1 md:grid-cols-2 py-10 relative";
    const responsiveClasses = gridCols || "lg:grid-cols-4";
    return cn(baseClasses, responsiveClasses, className);
  }, [className, gridCols]);

  // Optimized mouse enter handler
  const handleMouseEnter = useCallback((idx: number) => {
    setHoveredIndex(idx);

    // Play animation immediately without waiting for useEffect
    if (lottieRefs.current[idx]) {
      try {
        lottieRefs.current[idx]?.play();
      } catch (error) {
        console.warn("Error playing animation:", error);
      }
    }
  }, []);

  // Optimized mouse leave handler
  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);

    // Stop all animations immediately
    lottieRefs.current.forEach((lottieRef, index) => {
      if (lottieRef) {
        try {
          lottieRef.stop();
          lottieRef.goToAndStop(0);
        } catch (error) {
          console.warn(`Error stopping animation at index ${index}:`, error);
        }
      }
    });
  }, []);

  // Calculate hover background position
  useEffect(() => {
    if (
      hoveredIndex !== null &&
      cardRefs.current[hoveredIndex] &&
      containerRef.current
    ) {
      const el = cardRefs.current[hoveredIndex];
      const parentEl = containerRef.current;

      if (el && parentEl) {
        try {
          const box = el.getBoundingClientRect();
          const parentBox = parentEl.getBoundingClientRect();

          setRect({
            top: box.top - parentBox.top,
            left: box.left - parentBox.left,
            width: box.width,
            height: box.height,
          });
        } catch (error) {
          console.warn("Error calculating hover position:", error);
          setRect(null);
        }
      }
    } else {
      setRect(null);
    }
  }, [hoveredIndex]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clean up any remaining animation references
      lottieRefs.current = [];
      cardRefs.current = [];
    };
  }, []);

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-400">No items to display</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={gridClasses}>
      {items.map((item, idx) => {
        const Component = item.LottieAnimation;

        if (!Component) {
          console.warn(
            `Missing LottieAnimation component for item at index ${idx}`
          );
          return null;
        }

        return (
          <Link href={item.link}>
            <div
              key={item.link || `item-${idx}`}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="relative group block p-2 h-full w-full cursor-pointer"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <Card>
                <LottieAnimation>
                  <Component
                    ref={(ref: LottieRef) => {
                      lottieRefs.current[idx] = ref;
                    }}
                    autoplay={false}
                    loop={false}
                    isHovered={hoveredIndex === idx}
                  />
                </LottieAnimation>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </div>
          </Link>
        );
      })}

      {/* Shared hover background */}
      <AnimatePresence>
        {rect && (
          <motion.div
            layoutId="hoverBackground"
            className="absolute rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8] z-10 pointer-events-none"
            style={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
              layout: { duration: 0.2, ease: "easeInOut" },
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg",
        className
      )}
    >
      <div className="relative z-50 flex flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
};

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={cn(
        "w-60 h-60 mx-auto mb-4 overflow-hidden rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({
  className = "",
  children,
}) => {
  if (!children) return null;

  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide text-lg mt-4 transition-colors duration-300 group-hover:text-white",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className = "",
  children,
}) => {
  if (!children) return null;

  return (
    <p
      className={cn(
        "mt-3 text-zinc-400 tracking-wide leading-relaxed text-sm transition-colors duration-300 group-hover:text-zinc-300 max-w-sm mx-auto",
        className
      )}
    >
      {children}
    </p>
  );
};
