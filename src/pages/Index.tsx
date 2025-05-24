
import React from "react";
import { ArrowRight, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const premierLeagueTeams = [
  {
    name: "Arsenal",
    logo: "https://images.unsplash.com/photo-1623587010839-e54de0711629?auto=format&fit=crop&w=500&h=500",
  },
  {
    name: "Manchester City",
    logo: "https://images.unsplash.com/photo-1623587010839-e54de0711629?auto=format&fit=crop&w=500&h=500",
  },
  {
    name: "Liverpool",
    logo: "https://images.unsplash.com/photo-1623587010839-e54de0711629?auto=format&fit=crop&w=500&h=500",
  },
  {
    name: "Manchester United",
    logo: "https://images.unsplash.com/photo-1623587010839-e54de0711629?auto=format&fit=crop&w=500&h=500",
  },
  {
    name: "Newcastle United",
    logo: "https://images.unsplash.com/photo-1623587010839-e54de0711629?auto=format&fit=crop&w=500&h=500",
  },
  {
    name: "Tottenham Hotspur",
    logo: "https://images.unsplash.com/photo-1623587010839-e54de0711629?auto=format&fit=crop&w=500&h=500",
  },
  {
    name: "Aston Villa",
    logo: "https://images.unsplash.com/photo-1623587010839-e54de0711629?auto=format&fit=crop&w=500&h=500",
  },
  {
    name: "Brighton",
    logo: "https://images.unsplash.com/photo-1623587010839-e54de0711629?auto=format&fit=crop&w=500&h=500",
  }
];

const categories = [
  {
    name: "Top Teams",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80",
    tags: ["Big Six", "Champions League", "Premier League"],
    description:
      "Explore the powerhouse clubs of English football, featuring the most successful and popular teams in the Premier League.",
  },
  {
    name: "Rising Stars",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    tags: ["Emerging", "Talent", "Future"],
    description:
      "Discover the emerging teams making waves in the Premier League, showcasing promising talent and ambitious goals.",
  },
  {
    name: "Historic Clubs",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80",
    tags: ["Legacy", "Tradition", "History"],
    description:
      "Celebrate the rich history and tradition of established Premier League clubs with decades of memorable moments.",
  },
];

const extensionCards = [
  {
    type: "obsidian" as const,
    title: "Obsidian",
    description: "Capture information, manage tasks and pin notes to your menu bar.",
    icon: <span className="text-2xl font-bold">O</span>,
    component: <ObsidianCrystal />
  },
  {
    type: "figma" as const,
    title: "Figma File Search",
    description: "Quickly open a Figma file from anywhere on your Mac.",
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
    description: "Fast in-memory data structure store and caching solution.",
    icon: <span className="text-2xl font-bold">R</span>,
    component: <RedisCube />
  },
  {
    type: "terminal" as const,
    title: "Terminal",
    description: "Powerful command-line terminal with advanced features.",
    icon: <span className="text-xl font-bold">$</span>,
    component: <TerminalWindow />
  },
  {
    type: "docker" as const,
    title: "Docker",
    description: "Containerize applications for consistent deployment.",
    icon: <span className="text-2xl">🐳</span>,
    component: <DockerContainers />
  },
  {
    type: "react" as const,
    title: "React",
    description: "A JavaScript library for building user interfaces with component-based architecture.",
    icon: <span className="text-2xl">⚛️</span>,
    component: <ReactLogo />
  },
  {
    type: "vue" as const,
    title: "Vue",
    description: "Progressive framework for building user interfaces with incremental adoption.",
    icon: <span className="text-2xl font-bold">V</span>,
    component: <VueLogo />
  },
  {
    type: "angular" as const,
    title: "Angular",
    description: "Platform for building mobile and desktop web applications.",
    icon: <span className="text-2xl font-bold">A</span>,
    component: <AngularLogo />
  },
  {
    type: "svelte" as const,
    title: "Svelte",
    description: "Cybernetically enhanced web apps with less code and no virtual DOM.",
    icon: <span className="text-2xl font-bold">S</span>,
    component: <SvelteLogo />
  },
  {
    type: "nextjs" as const,
    title: "Next.js",
    description: "React framework for production with hybrid static & server rendering.",
    icon: <span className="text-2xl font-bold">N</span>,
    component: <NextjsLogo />
  },
  {
    type: "gatsby" as const,
    title: "Gatsby",
    description: "React-based framework for building websites and apps with performance focus.",
    icon: <span className="text-2xl font-bold">G</span>,
    component: <GatsbyLogo />
  },
  {
    type: "graphql" as const,
    title: "GraphQL",
    description: "API query language that provides a complete description of the data.",
    icon: <span className="text-2xl">◢</span>,
    component: <GraphQLLogo />
  },
  {
    type: "mongodb" as const,
    title: "MongoDB",
    description: "Document-based NoSQL database with flexible schema and scalability.",
    icon: <span className="text-2xl font-bold">M</span>,
    component: <MongoDBLogo />
  },
  {
    type: "postgres" as const,
    title: "PostgreSQL",
    description: "Advanced open source relational database with extensive features.",
    icon: <span className="text-2xl">🐘</span>,
    component: <PostgresLogo />
  },
  {
    type: "aws" as const,
    title: "AWS",
    description: "Cloud platform offering compute power, database, content delivery, and more.",
    icon: <span className="text-2xl">☁️</span>,
    component: <AWSLogo />
  },
  {
    type: "firebase" as const,
    title: "Firebase",
    description: "Platform for developing web and mobile applications with integrated tools.",
    icon: <span className="text-2xl">🔥</span>,
    component: <FirebaseLogo />
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1920&q=80"
              alt="Background"
              className="object-cover w-full h-full opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
          </div>

          <div className="relative container flex flex-col items-center justify-center min-h-screen text-center px-4 mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white mb-6 [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">
              <span className="block mb-4 [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">Premier League</span>
              <span className="text-blue-400 italic font-light">beyond</span>
              <span className="text-gray-300 italic font-light"> the ordinary</span>
            </h1>
            <p className="max-w-[600px] text-gray-300 text-lg md:text-xl mb-12">
              Discover the excitement and passion of English Premier League football.
            </p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105"
            >
              Explore Teams
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1920&q=80"
              alt="Background"
              className="object-cover w-full h-full opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
          </div>

          <div className="container relative mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">
              Premier League <span className="text-blue-400">Teams</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="group relative overflow-hidden rounded-3xl bg-black/60 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-black/70 border border-white/10"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>

                    <div className="flex flex-wrap gap-2">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>

                    <div className="pt-4">
                      <Button className="w-full bg-blue-500 hover:bg-blue-400 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                        View Team
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Teams */}
        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=1920&q=80"
              alt="Background"
              className="object-cover w-full h-full opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
          </div>

          <div className="container relative mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">
              Premier League <span className="text-blue-400">Teams</span>
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {premierLeagueTeams.map((team) => (
                  <CarouselItem key={team.name} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <div className="group bg-black/60 backdrop-blur-sm rounded-xl p-4 transition-transform duration-300 hover:scale-105 border border-white/10">
                      <div className="aspect-square overflow-hidden rounded-lg bg-black/50 mb-4">
                        <img
                          src={team.logo}
                          alt={team.name}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-lg font-medium text-white text-center mb-2">{team.name}</h3>
                      <div className="flex items-center justify-center">
                        <Button className="bg-blue-500 hover:bg-blue-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                          View Team
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Tech Extensions Section */}
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

        {/* Newsletter Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=1920&q=80"
              alt="Background"
              className="object-cover w-full h-full opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
          </div>

          <div className="container py-32 mx-auto">
            <div className="relative flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xl rounded-2xl" />
              <div className="relative px-6 py-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">
                  Join Our <span className="text-blue-400">Community</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-[600px] mb-8">
                  Subscribe to our newsletter for the latest Premier League updates, match highlights, and exclusive content.
                </p>
                <form className="flex w-full max-w-md mx-auto gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-full px-6 py-3 bg-black/50 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                  />
                  <Button className="bg-blue-500 hover:bg-blue-400 rounded-full px-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <Mail className="h-5 w-5 mr-2" />
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
