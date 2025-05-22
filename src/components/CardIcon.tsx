
import React from "react";
import { cn } from "@/lib/utils";

interface CardIconProps {
  type: "obsidian" | "figma" | "redis" | "terminal" | "docker";
  children: React.ReactNode;
}

export const CardIcon: React.FC<CardIconProps> = ({ type, children }) => {
  return (
    <div className={cn("icon", type)}>
      {children}
    </div>
  );
};

export default CardIcon;
