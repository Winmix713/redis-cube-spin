
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export const FeaturedCategories = () => {
  return (
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
  );
};
