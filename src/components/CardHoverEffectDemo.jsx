import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  Publishing,
  WebDevelopment,
  WordpressDev,
  MobileAppDev,
} from "./MyLotties";
// import MobileAppDev from "../../public/images/MobileAppDev.jpg";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    LottieAnimation: MobileAppDev,
    // cardImage: MobileAppDev,
    title: "Mobile App Development",
    description: "Android & iOS applications tailored to your needs.",
    link: "mobile-app-development",
  },
  {
    LottieAnimation: Publishing,
    // cardImage: MobileAppDev,

    title: "Website Development",
    description: "Custom websites using PHP, HTML, and CSS.",
    link: "web-development",
  },
  {
    LottieAnimation: WordpressDev,

    title: "WordPress Services",
    description: "Comprehensive WordPress solutions for your site.",
    link: "wordpress-development",
  },
  {
    LottieAnimation: WebDevelopment,
    title: "Publishing Services",
    description: "End-to-end publishing support for your projects.",
    link: "publishing",
  },
];
