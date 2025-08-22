export interface FloatingOrbProps {
  size: string;
  delay: string;
  duration: string;
  x: string;
  y: string;
}

export interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: string;
}

export interface ServiceOrbProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  position: string;
  delay: string;
  onClick?: () => void;
}

export interface StatusIndicatorProps {
  icon: React.ReactNode;
  text: string;
}

export interface HeroSectionProps {
  isLoaded: boolean;
}
