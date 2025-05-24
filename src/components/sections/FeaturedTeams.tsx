
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

export const FeaturedTeams = () => {
  return (
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
  );
};
