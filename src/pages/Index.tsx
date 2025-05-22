
import React from "react";
import { ExtensionCard } from "@/components/ExtensionCard";
import ObsidianCrystal from "@/components/ObsidianCrystal";
import FigmaInterface from "@/components/FigmaInterface";
import FigmaShapes from "@/components/FigmaShapes";
import RedisCube from "@/components/RedisCube";
import TerminalWindow from "@/components/TerminalWindow";
import DockerContainers from "@/components/DockerContainers";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e2e] to-[#0d0d21] flex items-center justify-center p-5">
      <div className="flex flex-wrap gap-6 justify-center items-start max-w-6xl">
        {/* Obsidian Card */}
        <ExtensionCard 
          type="obsidian"
          title="Obsidian" 
          description="Capture information, manage tasks and pin notes to your menu bar."
          delay="1220ms"
          icon={<span className="text-2xl font-bold">O</span>}
        >
          <ObsidianCrystal />
        </ExtensionCard>

        {/* Figma Card */}
        <ExtensionCard 
          type="figma"
          title="Figma File Search" 
          description="Quickly open a Figma file from anywhere on your Mac."
          delay="580ms"
          icon={
            <div className="w-7 h-7 relative transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-90">
              <div className="absolute w-3 h-3 bg-[#ff5757] top-0 left-2 rounded-t-md transition-all duration-300 ease-out group-hover:bg-[#ff6b6b] group-hover:shadow-[0_0_12px_rgba(255,87,87,0.6)]"></div>
              <div className="absolute w-3 h-3 bg-[#ff8c42] top-0 right-0 rounded-tr-md rounded-br-md transition-all duration-300 ease-out group-hover:bg-[#ffa726] group-hover:shadow-[0_0_12px_rgba(255,140,66,0.6)]"></div>
              <div className="absolute w-3 h-3 bg-[#a259ff] top-2 left-0 rounded-bl-md rounded-tl-md rounded-br-md transition-all duration-300 ease-out group-hover:bg-[#b569ff] group-hover:shadow-[0_0_12px_rgba(162,89,255,0.6)]"></div>
              <div className="absolute w-3 h-3 bg-[#1abcfe] top-2 right-2 rounded-full transition-all duration-300 ease-out group-hover:bg-[#29c5fe] group-hover:shadow-[0_0_12px_rgba(26,188,254,0.6)]"></div>
              <div className="absolute w-3 h-3 bg-[#0acf83] bottom-0 left-2 rounded-b-md transition-all duration-300 ease-out group-hover:bg-[#1dd490] group-hover:shadow-[0_0_12px_rgba(10,207,131,0.6)]"></div>
            </div>
          }
        >
          <div className="relative w-full h-full">
            <FigmaShapes />
            <FigmaInterface />
          </div>
        </ExtensionCard>

        {/* Redis Card */}
        <ExtensionCard 
          type="redis"
          title="Redis" 
          description="Fast in-memory data structure store and caching solution."
          delay="940ms"
          icon={<span className="text-2xl font-bold">R</span>}
        >
          <RedisCube />
        </ExtensionCard>

        {/* Terminal Card */}
        <ExtensionCard 
          type="terminal"
          title="Terminal" 
          description="Powerful command-line terminal with advanced features."
          delay="1500ms"
          icon={<span className="text-xl font-bold">$</span>}
        >
          <TerminalWindow />
        </ExtensionCard>

        {/* Docker Card */}
        <ExtensionCard 
          type="docker"
          title="Docker" 
          description="Containerize applications for consistent deployment."
          delay="260ms"
          icon={<span className="text-2xl">🐳</span>}
        >
          <DockerContainers />
        </ExtensionCard>
      </div>
    </div>
  );
};

export default Index;
