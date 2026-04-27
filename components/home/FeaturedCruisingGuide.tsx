import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Map, Anchor, Compass } from "lucide-react";

export function FeaturedCruisingGuide() {
  return (
    <section className="py-32 bg-sail overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-ocean relative min-h-[600px] flex items-center shadow-2xl">
          {/* Decorative Chart Texture */}
          <div className="absolute inset-0 chart-overlay opacity-10 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            {/* Image side */}
            <div className="relative h-[400px] lg:h-full min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=100&w=1200"
                alt="Cruising the Isles of Scilly"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-ocean/20" />
            </div>

            {/* Content side */}
            <div className="p-12 md:p-24 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-8">
                <Map size={16} />
                Featured Cruising Guide
              </div>
              <h2 className="text-6xl md:text-8xl text-sail font-bebas leading-[0.8] mb-10">
                ISLES OF <span className="text-gold">SCILLY</span>
              </h2>
              <p className="text-xl text-sail/60 font-nunito leading-relaxed mb-12 max-w-lg">
                Explore the archipelago at the edge of the Atlantic. From the white sands of Tresco to the rugged anchorages of St Agnes, discover the ultimate pilotage guide for the Scillonian summer.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-12 border-y border-sail/10 py-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-sail/40 mb-2">Distance</p>
                  <p className="font-bebas text-2xl text-sail">28 <span className="text-sm">NM</span></p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-sail/40 mb-2">Anchorages</p>
                  <p className="font-bebas text-2xl text-sail">14 <span className="text-sm">Sites</span></p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-sail/40 mb-2">Difficulty</p>
                  <p className="font-bebas text-2xl text-gold">Coastal</p>
                </div>
              </div>

              <Button variant="gold" size="lg" className="w-fit text-xl">
                Read the Guide
              </Button>
            </div>
          </div>

          {/* Floater icon */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 border border-gold/10 rounded-full flex items-center justify-center hidden lg:flex">
             <Compass className="text-gold/20 w-20 h-20 rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
