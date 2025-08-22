import React from "react";
import { StatusIndicatorProps } from "../types";

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ icon, text }) => (
  <div className="flex items-center">
    {icon}
    <span className="ml-2">{text}</span>
  </div>
);

export default StatusIndicator;
