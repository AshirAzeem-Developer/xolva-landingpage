import { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/util";
import { AnimatePresence, motion } from "motion/react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [rect, setRect] = useState(null);

  const cardRefs = useRef([]);

  useEffect(() => {
    if (hoveredIndex !== null && cardRefs.current[hoveredIndex]) {
      const el = cardRefs.current[hoveredIndex];
      const box = el.getBoundingClientRect();
      // relative to parent grid
      const parentBox = el.parentElement.getBoundingClientRect();

      setRect({
        top: box.top - parentBox.top,
        left: box.left - parentBox.left,
        width: box.width,
        height: box.height,
      });
    } else {
      setRect(null);
    }
  }, [hoveredIndex]);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 relative",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          ref={(el) => (cardRefs.current[idx] = el)}
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card>
            <LottieAnimation>
              <item.LottieAnimation />
            </LottieAnimation>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}

      {/* ✅ Shared hover background aligned with card */}
      <AnimatePresence>
        {rect && (
          <motion.span
            layoutId="hoverBackground"
            className="absolute rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8] z-10"
            style={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 flex flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
};

export const LottieAnimation = ({ className, children }) => {
  return (
    <div className={cn("w-60 h-60 mx-auto mb-4", className)}>{children}</div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide text-lg mt-20",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
