
import React from "react";
import { ExtensionCard } from "@/components/ExtensionCard";
import ObsidianCrystal from "@/components/ObsidianCrystal";
import FigmaShapes from "@/components/FigmaShapes";
import FigmaInterface from "@/components/FigmaInterface";
import RedisCube from "@/components/RedisCube";
import TerminalWindow from "@/components/TerminalWindow";
import DockerContainers from "@/components/DockerContainers";
import ReactLogo from "@/components/ReactLogo";
import VueLogo from "@/components/VueLogo";
import AngularLogo from "@/components/AngularLogo";
import SvelteLogo from "@/components/SvelteLogo";
import NextjsLogo from "@/components/NextjsLogo";
import GatsbyLogo from "@/components/GatsbyLogo";
import GraphQLLogo from "@/components/GraphQLLogo";
import MongoDBLogo from "@/components/MongoDBLogo";
import PostgresLogo from "@/components/PostgresLogo";
import AWSLogo from "@/components/AWSLogo";
import FirebaseLogo from "@/components/FirebaseLogo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e2e] to-[#0d0d21] flex items-center justify-center p-5">
      <div className="flex flex-wrap gap-6 justify-center items-start max-w-7xl">
        {/* Eredeti kártyák */}
        <ExtensionCard 
          type="obsidian"
          title="Obsidian" 
          description="Capture information, manage tasks and pin notes to your menu bar."
          delay="100ms"
          icon={<span className="text-2xl font-bold">O</span>}
        >
          <ObsidianCrystal />
        </ExtensionCard>

        <ExtensionCard 
          type="figma"
          title="Figma File Search" 
          description="Quickly open a Figma file from anywhere on your Mac."
          delay="200ms"
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

        <ExtensionCard 
          type="redis"
          title="Redis" 
          description="Fast in-memory data structure store and caching solution."
          delay="300ms"
          icon={<span className="text-2xl font-bold">R</span>}
        >
          <RedisCube />
        </ExtensionCard>

        <ExtensionCard 
          type="terminal"
          title="Terminal" 
          description="Powerful command-line terminal with advanced features."
          delay="400ms"
          icon={<span className="text-xl font-bold">$</span>}
        >
          <TerminalWindow />
        </ExtensionCard>

        <ExtensionCard 
          type="docker"
          title="Docker" 
          description="Containerize applications for consistent deployment."
          delay="500ms"
          icon={<span className="text-2xl">🐳</span>}
        >
          <DockerContainers />
        </ExtensionCard>

        {/* Új kártyák */}
        <ExtensionCard 
          type="react"
          title="React" 
          description="A JavaScript library for building user interfaces with component-based architecture."
          delay="600ms"
          icon={<span className="text-2xl">⚛️</span>}
        >
          <ReactLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="vue"
          title="Vue" 
          description="Progressive framework for building user interfaces with incremental adoption."
          delay="700ms"
          icon={<span className="text-2xl font-bold">V</span>}
        >
          <VueLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="angular"
          title="Angular" 
          description="Platform for building mobile and desktop web applications."
          delay="800ms"
          icon={<span className="text-2xl font-bold">A</span>}
        >
          <AngularLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="svelte"
          title="Svelte" 
          description="Cybernetically enhanced web apps with less code and no virtual DOM."
          delay="900ms"
          icon={<span className="text-2xl font-bold">S</span>}
        >
          <SvelteLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="nextjs"
          title="Next.js" 
          description="React framework for production with hybrid static & server rendering."
          delay="1000ms"
          icon={<span className="text-2xl font-bold">N</span>}
        >
          <NextjsLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="gatsby"
          title="Gatsby" 
          description="React-based framework for building websites and apps with performance focus."
          delay="1100ms"
          icon={<span className="text-2xl font-bold">G</span>}
        >
          <GatsbyLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="graphql"
          title="GraphQL" 
          description="API query language that provides a complete description of the data."
          delay="1200ms"
          icon={<span className="text-2xl">◢</span>}
        >
          <GraphQLLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="mongodb"
          title="MongoDB" 
          description="Document-based NoSQL database with flexible schema and scalability."
          delay="1300ms"
          icon={<span className="text-2xl font-bold">M</span>}
        >
          <MongoDBLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="postgres"
          title="PostgreSQL" 
          description="Advanced open source relational database with extensive features."
          delay="1400ms"
          icon={<span className="text-2xl">🐘</span>}
        >
          <PostgresLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="aws"
          title="AWS" 
          description="Cloud platform offering compute power, database, content delivery, and more."
          delay="1500ms"
          icon={<span className="text-2xl">☁️</span>}
        >
          <AWSLogo />
        </ExtensionCard>

        <ExtensionCard 
          type="firebase"
          title="Firebase" 
          description="Platform for developing web and mobile applications with integrated tools."
          delay="1600ms"
          icon={<span className="text-2xl">🔥</span>}
        >
          <FirebaseLogo />
        </ExtensionCard>
      </div>
    </div>
  );
};

export default Index;
