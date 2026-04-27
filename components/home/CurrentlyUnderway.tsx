import React from "react";
import Image from "next/image";
import { Anchor, MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const MEMBERS = [
  {
    vessel: "Windweaver",
    vesselType: "Hallberg-Rassy 43",
    passage: "Falmouth → Isles of Scilly",
    status: "Day 2 of 3",
    position: "Wolf Rock Light (W)",
    image: "https://images.unsplash.com/photo-1542612711-665519808d7e?auto=format&fit=crop&q=80&w=400",
  },
  {
    vessel: "Sea Mist",
    vesselType: "Beneteau Oceanis 38",
    passage: "Cherbourg → Solent",
    status: "Crossing Channel",
    position: "Mid-Channel (N)",
    image: "https://images.unsplash.com/photo-1517032283973-460ca466f917?auto=format&fit=crop&q=80&w=400",
  },
  {
    vessel: "Stardust",
    vesselType: "Contessa 32",
    passage: "Oban → Stornoway",
    status: "Day 1 of 5",
    position: "Sound of Mull",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=400",
  },
  {
    vessel: "Arctic Tern",
    vesselType: "Oyster 56",
    passage: "Tromsø → Lofoten",
    status: "Passage Complete",
    position: "Svolvær Harbour",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400",
  }
];

export function CurrentlyUnderway() {
  return (
    <section className="py-24 bg-sail overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl text-ocean font-bebas mb-4">
            CURRENTLY <span className="text-teal">UNDERWAY</span>
          </h2>
          <p className="text-lg text-ocean/60 font-nunito">
            Track real-time passages from the Deep Anchor community. Members share their routes, conditions, and insights as they sail.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ocean/40">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-compass rounded-full animate-pulse" />
            Live Passage
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-teal rounded-full" />
            Recently Completed
          </span>
        </div>
      </div>

      <div className="flex gap-8 px-6 overflow-x-auto pb-12 scrollbar-hide">
        {MEMBERS.map((member, i) => (
          <div key={i} className="flex-shrink-0 w-[350px] group cursor-pointer">
            <div className="relative h-[250px] mb-6 overflow-hidden">
              <Image
                src={member.image}
                alt={member.vessel}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 glass-panel px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ocean">
                {member.vesselType}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ocean/80 to-transparent">
                <div className="flex items-center gap-2 text-sail font-bebas text-xl">
                  <Navigation size={18} className="text-gold" />
                  {member.vessel}
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bebas tracking-wide text-ocean/40 uppercase">Passage</span>
                <span className="font-bold text-ocean">{member.passage}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-bebas tracking-wide text-ocean/40 uppercase">Status</span>
                <span className={cn("font-bold", member.status.includes("Complete") ? "text-teal" : "text-compass")}>
                  {member.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ocean/60 mt-4">
                <MapPin size={14} className="text-gold" />
                {member.position}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
