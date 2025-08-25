import React from "react";
import { RecentWorks } from "../components/RecentWorksCard";

const RecentProjectsSection = () => {
  return (
    <section className="mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-left">
          Recent Works
        </h2>
      </div>
      <RecentWorks />
    </section>
  );
};

export default RecentProjectsSection;
