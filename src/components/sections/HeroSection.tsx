
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
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
  );
};
