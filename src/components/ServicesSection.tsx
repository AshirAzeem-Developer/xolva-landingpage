import React from "react";
import { Smartphone, Monitor, BookOpen } from "lucide-react";
import { FeatureCardProps } from "./types";
import { CardHoverEffectDemo } from "../components/CardHoverEffectDemo";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay,
}) => (
  <div
    className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-black/40 backdrop-blur-sm border border-gray-700/50 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fadeInUp"
    style={{ animationDelay: delay }}
  >
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-gray-300/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => (
  <section className="mt-32">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Our Professional{" "}
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Services
        </span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        We bridge the gap between legacy solutions and updated, higher-quality
        solutions. Our talented engineers and designers collaborate with
        business partners at multiple levels to fulfill their requirements.
      </p>
    </div>

    {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={Smartphone}
        title="Mobile App Development"
        description="Native Android & iOS applications tailored to your business needs with cutting-edge features."
        delay="0.1s"
      />
      <FeatureCard
        icon={Monitor}
        title="Website Development"
        description="Custom websites using PHP, HTML, JavaScript, and modern frameworks for optimal performance."
        delay="0.3s"
      />
      <FeatureCard
        icon={BookOpen}
        title="Publishing Services"
        description="End-to-end publishing support for your projects with professional design and distribution."
        delay="0.5s"
      />
    </div> */}
    <CardHoverEffectDemo />
  </section>
);

export default ServicesSection;
