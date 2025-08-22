import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  MobielAppDev,
  Publishing,
  WebDevelopment,
  WordpressDev,
} from "./MyLotties";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    LottieAnimation: MobielAppDev,
    title: "Mobile App Development",
    description: "Android & iOS applications tailored to your needs.",
    link: "https://stripe.com",
  },
  {
    LottieAnimation: Publishing,

    title: "Website Development",
    description: "Custom websites using PHP, HTML, and CSS.",
    link: "https://netflix.com",
  },
  {
    LottieAnimation: WordpressDev,

    title: "WordPress Services",
    description: "Comprehensive WordPress solutions for your site.",
    link: "https://google.com",
  },
  {
    LottieAnimation: WebDevelopment,
    title: "Publishing Services",
    description: "End-to-end publishing support for your projects.",
    link: "https://meta.com",
  },
];
