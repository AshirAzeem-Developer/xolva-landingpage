"use client";
import { Command, Target } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <ul className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
      <GridItem
        icon={
          <Command className="h-10 w-10 text-black dark:text-neutral-400" />
        }
        title="IN XOLVA"
        description={
          <div className="space-y-4 leading-relaxed font-sans text-sm md:text-base text-black dark:text-neutral-200">
            <p>
              At Xolva, our mission is to empower our clients to achieve or
              surpass their business objectives through bespoke technology
              solutions. We define success by the tangible outcomes our clients
              reach, and our commitment is to building lasting, strategic
              partnerships.
            </p>
            <p>By leveraging our diagnose-and-cure approach, Xolva delivers:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 dark:marker:text-blue-400">
              <li>
                <strong>High-Quality, Cost-Effective Software Solutions</strong>
                <br />
                Tailored to meet your specific business needs.
              </li>
              <li>
                <strong>Technology and Business Consulting</strong>
                <br />
                Guiding your enterprise towards the most effective technological
                pathways.
              </li>
              <li>
                <strong>User-Centric Interface Design</strong>
                <br />
                Creating intuitive and easy-to-use digital experiences.
              </li>
              <li>
                <strong>Idea Incubation</strong>
                <br />
                Transforming innovative concepts into viable products.
              </li>
              <li>
                <strong>Optimized Human Resources</strong>
                <br />
                Providing top-tier talent to drive your projects forward.
              </li>
            </ul>
          </div>
        }
      />
      <GridItem
        icon={<Target className="h-10 w-10 text-black dark:text-neutral-400" />}
        title="OBJECTIVE"
        description={
          <div className="space-y-4 leading-relaxed font-sans text-sm md:text-base text-black dark:text-neutral-200">
            <p>
              Xolva’s primary objective is to eliminate technological hurdles
              for our clients. With extensive expertise and a cost-effective
              methodology, we implement software solutions that leverage the
              latest tools and best practices.
            </p>
            <p>
              Our team comprises highly skilled engineers dedicated to crafting
              software that is not only functional and scalable but also
              maintainable over the long term.
            </p>
            <p>
              We possess broad experience across various software development
              technologies, allowing us to select and deploy the most suitable
              solutions for your needs. Additionally, we excel in designing user
              interfaces that are not only intuitive but also enhance overall
              user engagement and satisfaction.
            </p>
          </div>
        }
      />
    </ul>
  );
}

const GridItem = ({ icon, title, description }) => {
  return (
    <li className="list-none">
      <div className="relative h-full rounded-2xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 p-2 md:rounded-3xl md:p-3 shadow-md hover:shadow-md transition-shadow">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="flex flex-col gap-4">
            <div className="w-fit rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-neutral-800 p-2">
              {icon}
            </div>
            <h3 className="font-sans text-xl font-semibold text-black md:text-2xl dark:text-white">
              {title}
            </h3>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </li>
  );
};
