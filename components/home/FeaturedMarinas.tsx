import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Anchor, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MOCK_MARINAS } from "@/lib/mock-data";

export function FeaturedMarinas() {
  return (
    <section className="py-32 bg-sail">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-6xl text-ocean font-bebas mb-6 leading-none">
              DISCOVER YOUR <br />
              <span className="text-gold">NEXT BERTH</span>
            </h2>
            <p className="text-lg text-ocean/60 font-nunito">
              Browse the world's most comprehensive marina directory. Verified facilities, real-time depth data, and community-driven fuel pricing.
            </p>
          </div>
          <Link href="/marinas">
            <Button variant="outline" className="group">
              View All Marinas
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_MARINAS.map((marina) => (
            <div key={marina.id} className="group cursor-pointer">
              <div className="relative h-[400px] mb-8 overflow-hidden">
                <Image
                  src={marina.image}
                  alt={marina.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute top-6 right-6">
                  <div className="glass-panel px-3 py-2 flex items-center gap-2">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="text-sm font-bold text-ocean">{marina.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest mb-2">
                    <MapPin size={12} />
                    {marina.coast.replace("-", " ")}
                  </div>
                  <h3 className="text-3xl text-sail font-bebas tracking-wide mb-4">{marina.name}</h3>
                  <div className="flex gap-4">
                    {marina.facilities.slice(0, 4).map((facility) => (
                      <div key={facility} className="text-sail/60" title={facility}>
                        <Anchor size={16} />
                      </div>
                    ))}
                    {marina.facilities.length > 4 && (
                      <div className="text-sail/60 text-xs font-bold self-center">+{marina.facilities.length - 4}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Cost Tier</span>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4].map((i) => (
                      <span key={i} className={i <= marina.costTier ? "text-teal" : "text-ocean/10"}>£</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Visitor Berths</span>
                  <span className="text-sm font-bold text-ocean mt-1">{marina.visitorBerths}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
