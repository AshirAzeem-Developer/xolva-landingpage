import React from "react";
import { OurClientsMovingCards } from "@/components/ClientsMovingCards";

const OurClients = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left my-12 mt-20">
        Our Clients
      </h1>
      <OurClientsMovingCards />
    </div>
  );
};

export default OurClients;
