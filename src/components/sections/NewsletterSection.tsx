
import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NewsletterSection = () => {
  return (
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
  );
};
