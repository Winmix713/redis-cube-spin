
import React from "react";
import ExtensionCard from "@/components/ExtensionCard";
import ObsidianCrystal from "@/components/ObsidianCrystal";
import FigmaLogo from "@/components/FigmaLogo";
import FigmaInterface from "@/components/FigmaInterface";
import FigmaShapes from "@/components/FigmaShapes";
import RedisCube from "@/components/RedisCube";
import TerminalWindow from "@/components/TerminalWindow";
import DockerContainers from "@/components/DockerContainers";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-5">
      <div className="flex flex-wrap gap-6 justify-center items-start">
        <ExtensionCard 
          type="obsidian"
          title="Obsidian" 
          description="Capture information, manage tasks and pin notes to your menu bar."
          delay="1220ms"
          iconContent="O"
        >
          <ObsidianCrystal />
        </ExtensionCard>

        <ExtensionCard 
          type="figma"
          title="Figma File Search" 
          description="Quickly open a Figma file from anywhere on your Mac."
          delay="580ms"
          iconContent={<FigmaLogo />}
        >
          <FigmaShapes />
          <FigmaInterface />
        </ExtensionCard>

        <ExtensionCard 
          type="redis"
          title="Redis" 
          description="Fast in-memory data structure store and caching solution."
          delay="940ms"
          iconContent="R"
        >
          <RedisCube />
        </ExtensionCard>

        <ExtensionCard 
          type="terminal"
          title="Terminal" 
          description="Powerful command-line terminal with advanced features."
          delay="1500ms"
          iconContent="$"
        >
          <TerminalWindow />
        </ExtensionCard>

        <ExtensionCard 
          type="docker"
          title="Docker" 
          description="Containerize applications for consistent deployment."
          delay="260ms"
          iconContent="🐳"
        >
          <DockerContainers />
        </ExtensionCard>
      </div>
    </div>
  );
};

export default Index;
