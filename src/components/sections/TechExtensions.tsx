
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

const extensionCards = [
  {
    type: "obsidian" as const,
    title: "Obsidian",
    description: "Note-taking tool - Capture information, manage tasks and pin notes to your menu bar.",
    icon: <span className="text-2xl font-bold">O</span>,
    component: <ObsidianCrystal />
  },
  {
    type: "figma" as const,
    title: "Figma",
    description: "Design tool - Quickly open a Figma file from anywhere on your Mac.",
    icon: (
      <div className="w-7 h-7 relative transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-90">
        <div className="absolute w-3 h-3 bg-[#ff5757] top-0 left-2 rounded-t-md transition-all duration-300 ease-out group-hover:bg-[#ff6b6b] group-hover:shadow-[0_0_12px_rgba(255,87,87,0.6)]"></div>
        <div className="absolute w-3 h-3 bg-[#ff8c42] top-0 right-0 rounded-tr-md rounded-br-md transition-all duration-300 ease-out group-hover:bg-[#ffa726] group-hover:shadow-[0_0_12px_rgba(255,140,66,0.6)]"></div>
        <div className="absolute w-3 h-3 bg-[#a259ff] top-2 left-0 rounded-bl-md rounded-tl-md rounded-br-md transition-all duration-300 ease-out group-hover:bg-[#b569ff] group-hover:shadow-[0_0_12px_rgba(162,89,255,0.6)]"></div>
        <div className="absolute w-3 h-3 bg-[#1abcfe] top-2 right-2 rounded-full transition-all duration-300 ease-out group-hover:bg-[#29c5fe] group-hover:shadow-[0_0_12px_rgba(26,188,254,0.6)]"></div>
        <div className="absolute w-3 h-3 bg-[#0acf83] bottom-0 left-2 rounded-b-md transition-all duration-300 ease-out group-hover:bg-[#1dd490] group-hover:shadow-[0_0_12px_rgba(10,207,131,0.6)]"></div>
      </div>
    ),
    component: (
      <div className="relative w-full h-full">
        <FigmaShapes />
        <FigmaInterface />
      </div>
    )
  },
  {
    type: "redis" as const,
    title: "Redis",
    description: "In-memory data store - Fast in-memory data structure store and caching solution.",
    icon: <span className="text-2xl font-bold">R</span>,
    component: <RedisCube />
  },
  {
    type: "terminal" as const,
    title: "Terminal",
    description: "Command-line interface - Powerful command-line terminal with advanced features.",
    icon: <span className="text-xl font-bold">$</span>,
    component: <TerminalWindow />
  },
  {
    type: "docker" as const,
    title: "Docker",
    description: "Containerization platform - Containerize applications for consistent deployment.",
    icon: <span className="text-2xl">🐳</span>,
    component: <DockerContainers />
  },
  {
    type: "react" as const,
    title: "React",
    description: "JavaScript library - A JavaScript library for building user interfaces with component-based architecture.",
    icon: <span className="text-2xl">⚛️</span>,
    component: <ReactLogo />
  },
  {
    type: "vue" as const,
    title: "Vue",
    description: "Progressive framework - Progressive framework for building user interfaces with incremental adoption.",
    icon: <span className="text-2xl font-bold">V</span>,
    component: <VueLogo />
  },
  {
    type: "angular" as const,
    title: "Angular",
    description: "Web application platform - Platform for building mobile and desktop web applications.",
    icon: <span className="text-2xl font-bold">A</span>,
    component: <AngularLogo />
  },
  {
    type: "svelte" as const,
    title: "Svelte",
    description: "Cybernetically enhanced web apps - Cybernetically enhanced web apps with less code and no virtual DOM.",
    icon: <span className="text-2xl font-bold">S</span>,
    component: <SvelteLogo />
  },
  {
    type: "nextjs" as const,
    title: "Next.js",
    description: "React framework - React framework for production with hybrid static & server rendering.",
    icon: <span className="text-2xl font-bold">N</span>,
    component: <NextjsLogo />
  },
  {
    type: "gatsby" as const,
    title: "Gatsby",
    description: "React-based framework - React-based framework for building websites and apps with performance focus.",
    icon: <span className="text-2xl font-bold">G</span>,
    component: <GatsbyLogo />
  },
  {
    type: "graphql" as const,
    title: "GraphQL",
    description: "API query language - API query language that provides a complete description of the data.",
    icon: <span className="text-2xl">◢</span>,
    component: <GraphQLLogo />
  },
  {
    type: "mongodb" as const,
    title: "MongoDB",
    description: "NoSQL database - Document-based NoSQL database with flexible schema and scalability.",
    icon: <span className="text-2xl font-bold">M</span>,
    component: <MongoDBLogo />
  },
  {
    type: "postgres" as const,
    title: "PostgreSQL",
    description: "Relational database - Advanced open source relational database with extensive features.",
    icon: <span className="text-2xl">🐘</span>,
    component: <PostgresLogo />
  },
  {
    type: "aws" as const,
    title: "AWS",
    description: "Cloud platform - Cloud platform offering compute power, database, content delivery, and more.",
    icon: <span className="text-2xl">☁️</span>,
    component: <AWSLogo />
  },
  {
    type: "firebase" as const,
    title: "Firebase",
    description: "Development platform - Platform for developing web and mobile applications with integrated tools.",
    icon: <span className="text-2xl">🔥</span>,
    component: <FirebaseLogo />
  },
];

export const TechExtensions = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container relative mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">
          Development <span className="text-blue-400">Tools</span>
        </h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          Discover the powerful development tools and technologies that power modern web applications, 
          from frameworks to databases and cloud services.
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {extensionCards.map((card, index) => (
              <CarouselItem key={card.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <ExtensionCard
                    type={card.type}
                    title={card.title}
                    description={card.description}
                    delay={`${(index * 100) + 100}ms`}
                    icon={card.icon}
                  >
                    {card.component}
                  </ExtensionCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
