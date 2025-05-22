
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExtensionCardProps {
  type: "obsidian" | "figma" | "redis" | "terminal" | "docker";
  title: string;
  description: string;
  delay: string;
  iconContent: React.ReactNode;
  children: React.ReactNode;
}

const ExtensionCard: React.FC<ExtensionCardProps> = ({ 
  type, 
  title, 
  description, 
  delay,
  iconContent, 
  children 
}) => {
  return (
    <div 
      className={cn(
        "extension-card-wrapper", 
        type
      )}
      style={{ 
        animationDelay: delay,
        opacity: 0,
        animation: `slideIn 0.7s ${delay} cubic-bezier(0.215, 0.61, 0.355, 1) forwards`
      }}
    >
      <div className={cn("extension-card", type)}>
        <div className="header-container">
          <div className="header">
            <div className={cn("icon", type)}>
              {iconContent}
            </div>
            <div className="title-section">
              <div className="title">{title}</div>
            </div>
            <button className="action-button">
              <ArrowRight size={16} />
            </button>
          </div>
          <p className="description">{description}</p>
          <div className="divider"></div>
        </div>
        <div className={cn("card-image", type)}>
          <div className={cn("background-glow", type)}></div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;
