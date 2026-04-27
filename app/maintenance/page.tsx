import React from "react";
import { Search, Wrench, Zap, Waves, Settings, Anchor, Shield, ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { name: "Engine & Mechanical", icon: <Settings size={40} />, count: 124, color: "text-gold" },
  { name: "Electrical & Electronics", icon: <Zap size={40} />, count: 86, color: "text-blue-500" },
  { name: "Plumbing & Tanks", icon: <Waves size={40} />, count: 42, color: "text-teal" },
  { name: "Sails & Rigging", icon: <Anchor size={40} />, count: 98, color: "text-ocean" },
  { name: "Hull & Deck", icon: <Shield size={40} />, count: 65, color: "text-compass" },
  { name: "Safety Equipment", icon: <Shield size={40} />, count: 34, color: "text-teal" },
];

export default function MaintenancePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-7xl text-ocean font-bebas mb-6 leading-none">
            MAINTENANCE <span className="text-gold">HUB</span>
          </h1>
          <p className="text-lg text-ocean/60 font-nunito mb-12">
            The complete library of vessel maintenance guides. From winterization to mid-ocean repairs, we've catalogued the intelligence you need to keep your vessel in prime condition.
          </p>
          
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-ocean/30" />
            <input
              type="text"
              placeholder="Search by system (e.g. Yanmar 3JH, Volvo Penta, solar wiring)..."
              className="w-full bg-white border border-ocean/10 px-16 py-6 text-xl text-ocean font-nunito focus:ring-2 focus:ring-gold outline-none shadow-xl"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="bg-white p-10 border border-ocean/5 group hover:border-gold cursor-pointer transition-all shadow-sm">
               <div className={cn("mb-6 transition-transform group-hover:scale-110", cat.color)}>
                  {cat.icon}
               </div>
               <h3 className="text-3xl font-bebas text-ocean mb-2 leading-none">{cat.name}</h3>
               <p className="text-xs font-bold text-ocean/30 uppercase tracking-[0.2em]">{cat.count} Guides Available</p>
               <div className="mt-8 flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Library <ArrowRight size={14} />
               </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="bg-ocean p-12 text-sail relative overflow-hidden">
              <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
              <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                 <Video size={16} />
                 New Video Guide
              </div>
              <h2 className="text-5xl font-bebas mb-6 leading-none">ANNUAL DIESEL <br /> <span className="text-gold">SERVICE MASTERCLASS</span></h2>
              <p className="text-sail/60 font-nunito mb-10 text-lg leading-relaxed max-w-md">
                 A step-by-step video walkthrough of a full service on the Yanmar 3GM30F engine. Filters, oil, and impeller replacement.
              </p>
              <Button variant="gold" className="text-xl">Watch Now</Button>
           </div>

           <div className="space-y-8">
              <h3 className="text-3xl font-bebas text-ocean">POPULAR GUIDES</h3>
              <div className="space-y-4">
                 {[
                   "Identifying & Treating Gelcoat Osmosis",
                   "Solar Array Optimization for Blue Water Cruising",
                   "Standing Rigging: When to Replace?",
                   "VHF Radio Licensing & MMSI Configuration"
                 ].map((guide, i) => (
                   <div key={i} className="bg-white p-6 border border-ocean/5 flex items-center justify-between group hover:border-teal transition-all cursor-pointer">
                      <h4 className="font-bebas text-xl text-ocean leading-none group-hover:text-teal transition-colors">{guide}</h4>
                      <ArrowRight size={18} className="text-ocean/10 group-hover:text-teal group-hover:translate-x-1 transition-all" />
                   </div>
                 ))}
              </div>
              <div className="pt-8 flex items-center justify-between">
                 <p className="text-xs font-bold text-ocean/40 uppercase tracking-widest italic">Can't find what you need?</p>
                 <Button variant="outline" size="sm">Request a Guide</Button>
              </div>
           </div>
        </div>

        {/* Affiliate Box */}
        <div className="mt-32 bg-sail border border-ocean/10 p-12 text-center">
           <h3 className="font-bebas text-3xl text-ocean mb-4">Sourcing Parts?</h3>
           <p className="text-ocean/60 font-nunito mb-8 max-w-xl mx-auto">
              We partner with the world's leading chandlers to bring you genuine parts at member-exclusive prices.
           </p>
           <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-30">
              <span className="font-bebas text-2xl">CHANDLER A</span>
              <span className="font-bebas text-2xl">MARINESUPPLY</span>
              <span className="font-bebas text-2xl">RIGGING CO</span>
              <span className="font-bebas text-2xl">POWERPARTS</span>
           </div>
        </div>
      </div>
    </div>
  );
}

