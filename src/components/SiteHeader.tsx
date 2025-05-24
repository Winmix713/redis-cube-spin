
import React from "react";
import { Button } from "@/components/ui/button";

export const SiteHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          Premier <span className="text-blue-400">League</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Teams</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Fixtures</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Table</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">News</a>
        </nav>
        <Button className="bg-blue-500 hover:bg-blue-400 text-white">
          Sign In
        </Button>
      </div>
    </header>
  );
};
