"use client";

import animationData from "./Lotties/WebDevelopment.json";
import PublishingData from "./Lotties/publishing.json";
import WordpressData from "./Lotties/WordpressDeveloper.json";
import MobileAppData from "./Lotties/Developer.json";

import { useLottie } from "lottie-react";

export const WebDevelopment = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};

export const Publishing = () => {
  const defaultOptions = {
    animationData: PublishingData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};

export const WordpressDev = () => {
  const defaultOptions = {
    animationData: WordpressData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};
export const MobielAppDev = () => {
  const defaultOptions = {
    animationData: MobileAppData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};
