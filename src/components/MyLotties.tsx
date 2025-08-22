"use client";
import dynamic from "next/dynamic";
import {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
} from "react";

// ✅ Lazy load Lottie (no SSR)
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center min-h-[100px]">
      <div className="w-12 h-12 border-3 border-gray-600 border-t-white rounded-full animate-spin opacity-60" />
    </div>
  ),
});

// Map of animation keys → dynamic imports
const animations = {
  WebDevelopment: () => import("./Lotties/WebDevelopment.json"),
  Publishing: () => import("./Lotties/publishing.json"),
  WordpressDev: () => import("./Lotties/WordpressDeveloper.json"),
  MobileAppDev: () => import("./Lotties/AppDevelopment.json"),
} as const;

// Type for animation names
type AnimationName = keyof typeof animations;

// Lottie ref interface based on lottie-react
interface LottieRefCurrentProps {
  play: () => void;
  stop: () => void;
  pause: () => void;
  goToAndStop: (frame: number, isFrame?: boolean) => void;
  goToAndPlay: (frame: number, isFrame?: boolean) => void;
  setSpeed: (speed: number) => void;
  setDirection: (direction: 1 | -1) => void;
  destroy: () => void;
}

// Our exposed ref interface
interface LottiePlayerRef {
  play: () => void;
  stop: () => void;
  pause: () => void;
  goToAndStop: (frame: number) => void;
  goToAndPlay: (frame: number) => void;
  setSpeed: (speed: number) => void;
  destroy: () => void;
}

interface LottiePlayerProps {
  name: AnimationName;
  autoplay?: boolean;
  loop?: boolean;
  isHovered?: boolean;
  className?: string;
  onComplete?: () => void;
  onLoopComplete?: () => void;
}

// Memoized loading component
const LoadingSpinner = () => (
  <div className="w-full h-full flex items-center justify-center min-h-[100px]">
    <div className="w-12 h-12 border-3 border-gray-600 border-t-white rounded-full animate-spin opacity-60" />
  </div>
);

const LottiePlayer = forwardRef<LottiePlayerRef, LottiePlayerProps>(
  (
    {
      name,
      autoplay = false,
      loop = false,
      isHovered = false,
      className = "",
      onComplete,
      onLoopComplete,
    },
    ref
  ) => {
    const [animationData, setAnimationData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Use useRef for the Lottie instance to avoid re-renders
    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

    // Expose play/stop methods to parent
    useImperativeHandle(
      ref,
      () => ({
        play: () => {
          if (
            lottieRef.current &&
            typeof lottieRef.current.play === "function"
          ) {
            lottieRef.current.play();
          }
        },
        stop: () => {
          if (
            lottieRef.current &&
            typeof lottieRef.current.stop === "function"
          ) {
            lottieRef.current.stop();
          }
        },
        pause: () => {
          if (
            lottieRef.current &&
            typeof lottieRef.current.pause === "function"
          ) {
            lottieRef.current.pause();
          }
        },
        goToAndStop: (frame: number) => {
          if (
            lottieRef.current &&
            typeof lottieRef.current.goToAndStop === "function"
          ) {
            lottieRef.current.goToAndStop(frame, true);
          }
        },
        goToAndPlay: (frame: number) => {
          if (
            lottieRef.current &&
            typeof lottieRef.current.goToAndPlay === "function"
          ) {
            lottieRef.current.goToAndPlay(frame, true);
          }
        },
        setSpeed: (speed: number) => {
          if (
            lottieRef.current &&
            typeof lottieRef.current.setSpeed === "function"
          ) {
            lottieRef.current.setSpeed(speed);
          }
        },
        destroy: () => {
          if (
            lottieRef.current &&
            typeof lottieRef.current.destroy === "function"
          ) {
            lottieRef.current.destroy();
          }
        },
      }),
      []
    );

    // Load animation data with proper error handling
    useEffect(() => {
      if (!name) {
        setError(`Animation name is required`);
        setIsLoading(false);
        return;
      }

      if (!Object.prototype.hasOwnProperty.call(animations, name)) {
        setError(`Animation "${name}" not found`);
        setIsLoading(false);
        return;
      }

      let isCancelled = false;

      const loadAnimation = async () => {
        try {
          setIsLoading(true);
          setError(null);

          const animationLoader = animations[name];
          const data = await animationLoader();

          if (!isCancelled) {
            if (data && data.default) {
              setAnimationData(data.default);
            } else {
              throw new Error("Invalid animation data format");
            }
          }
        } catch (err: any) {
          if (!isCancelled) {
            console.error("Failed to load animation:", err);
            setError(err.message || "Failed to load animation");
          }
        } finally {
          if (!isCancelled) {
            setIsLoading(false);
          }
        }
      };

      loadAnimation();

      return () => {
        isCancelled = true;
      };
    }, [name]);

    // Handle hover state changes
    useEffect(() => {
      if (!lottieRef.current || !animationData) return;

      const animationInstance = lottieRef.current;

      try {
        if (isHovered) {
          if (typeof animationInstance.play === "function") {
            animationInstance.play();
          }
        } else {
          if (typeof animationInstance.stop === "function") {
            animationInstance.stop();
          }
          if (typeof animationInstance.goToAndStop === "function") {
            animationInstance.goToAndStop(0, true);
          }
        }
      } catch (err) {
        console.warn("Error controlling Lottie animation:", err);
      }
    }, [isHovered, animationData]);

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        if (
          lottieRef.current &&
          typeof lottieRef.current.destroy === "function"
        ) {
          try {
            lottieRef.current.destroy();
          } catch (err) {
            console.warn("Error destroying Lottie animation:", err);
          }
        }
      };
    }, []);

    // Memoize the lottie props
    const lottieProps = useMemo(() => {
      const props: any = {
        lottieRef,
        animationData,
        autoplay,
        loop,
        style: { width: "100%", height: "100%" },
      };

      if (onComplete) props.onComplete = onComplete;
      if (onLoopComplete) props.onLoopComplete = onLoopComplete;
      if (className) props.className = className;

      return props;
    }, [animationData, autoplay, loop, onComplete, onLoopComplete, className]);

    // Error state
    if (error) {
      return (
        <div className="w-full h-full flex items-center justify-center min-h-[100px]">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 text-red-500">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500">Animation Error</p>
          </div>
        </div>
      );
    }

    // Loading state
    if (isLoading || !animationData) {
      return <LoadingSpinner />;
    }

    return <Lottie {...lottieProps} />;
  }
);

LottiePlayer.displayName = "LottiePlayer";

/**
 * Optimized named exports with proper prop forwarding and TypeScript
 */
export const WebDevelopment = forwardRef<
  LottiePlayerRef,
  Omit<LottiePlayerProps, "name">
>((props, ref) => <LottiePlayer ref={ref} name="WebDevelopment" {...props} />);
WebDevelopment.displayName = "WebDevelopment";

export const Publishing = forwardRef<
  LottiePlayerRef,
  Omit<LottiePlayerProps, "name">
>((props, ref) => <LottiePlayer ref={ref} name="Publishing" {...props} />);
Publishing.displayName = "Publishing";

export const WordpressDev = forwardRef<
  LottiePlayerRef,
  Omit<LottiePlayerProps, "name">
>((props, ref) => <LottiePlayer ref={ref} name="WordpressDev" {...props} />);
WordpressDev.displayName = "WordpressDev";

export const MobileAppDev = forwardRef<
  LottiePlayerRef,
  Omit<LottiePlayerProps, "name">
>((props, ref) => <LottiePlayer ref={ref} name="MobileAppDev" {...props} />);
MobileAppDev.displayName = "MobileAppDev";

// Utility function to preload animations
export const preloadAnimation = async (name: AnimationName) => {
  if (animations[name]) {
    try {
      return await animations[name]();
    } catch (error) {
      console.warn(`Failed to preload animation: ${name}`, error);
      return null;
    }
  }
  return null;
};

// Preload all animations
export const preloadAllAnimations = async () => {
  const animationNames = Object.keys(animations) as AnimationName[];
  const preloadPromises = animationNames.map((name) => preloadAnimation(name));
  return Promise.allSettled(preloadPromises);
};

export default LottiePlayer;
