import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Anchor, Info, ArrowRight } from "lucide-react";
import { Marina } from "@/lib/mock-data";

export function MarinaCard({ marina }: { marina: Marina }) {
  return (
    <Link href={`/marinas/${marina.country}/${marina.coast}/${marina.slug}`} className="group block">
      <div className="relative h-[300px] mb-6 overflow-hidden">
        <Image
          src={marina.image}
          alt={marina.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <div className="absolute top-4 right-4">
          <div className="glass-panel px-3 py-1 flex items-center gap-2">
            <Star size={12} className="text-gold fill-gold" />
            <span className="text-xs font-bold text-ocean">{marina.rating}</span>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest mb-1">
            <MapPin size={10} />
            {marina.coast.replace("-", " ")}
          </div>
          <h3 className="text-2xl text-sail font-bebas tracking-wide">{marina.name}</h3>
        </div>
      </div>

      <div className="flex items-center justify-between px-2">
        <div className="flex flex-col">
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className={i <= marina.costTier ? "text-teal text-xs font-bold" : "text-ocean/10 text-xs font-bold"}>£</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            {marina.facilities.slice(0, 3).map((f) => (
              <Anchor key={f} size={14} className="text-ocean/40" />
            ))}
          </div>
          <span className="text-[10px] font-bold text-ocean/60 uppercase tracking-widest">
            {marina.visitorBerths.split(" ")[0]} Berths
          </span>
        </div>
      </div>
    </Link>
  );
}
