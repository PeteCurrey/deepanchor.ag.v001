import React from "react";
import { MarinaCard } from "@/components/marina/MarinaCard";
import { MOCK_MARINAS } from "@/lib/mock-data";
import { Search, Map as MapIcon, SlidersHorizontal, Anchor, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

export default function MarinaDirectoryPage() {
  return (
    <div className="flex flex-col h-screen pt-20 bg-sail overflow-hidden">
      {/* Top Bar */}
      <div className="bg-white border-b border-ocean/10 py-4 px-6 shrink-0 z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <h1 className="text-3xl font-bebas text-ocean m-0 leading-none mt-1">Marinas & Harbours</h1>
          <div className="hidden md:flex items-center gap-2 text-sm text-ocean/60 font-nunito bg-sail px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Live Data Active
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto flex-grow md:max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ocean/40" size={18} />
            <Input placeholder="Search by name, country, or coast..." className="pl-10 bg-sail border-transparent focus-visible:border-ocean/20" />
          </div>
          <Button variant="outline" className="shrink-0 border-ocean/20 text-ocean">
            <SlidersHorizontal size={18} className="mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden relative">
        {/* List View */}
        <div className="w-full md:w-[450px] lg:w-[550px] shrink-0 bg-sail border-r border-ocean/10 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between text-sm font-nunito text-ocean/60 mb-6">
              <span>Showing {MOCK_MARINAS.length} destinations</span>
              <select className="bg-transparent border-none outline-none font-bold text-ocean">
                <option>Highest Rated</option>
                <option>Nearest to me</option>
                <option>Most Reviews</option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {MOCK_MARINAS.map((marina) => (
                <MarinaCard key={marina.id} marina={marina} />
              ))}
            </div>
          </div>
        </div>

        {/* Map View (Mocked placeholder for now) */}
        <div className="flex-grow bg-[#A3C6C4] relative hidden md:block">
          {/* Mock Mapbox Container */}
          <div className="absolute inset-0 chart-overlay opacity-20 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center flex-col text-ocean/40">
             <MapIcon size={64} className="mb-4 opacity-50" />
             <p className="font-bebas text-3xl tracking-widest text-ocean">Interactive Map Interface</p>
             <p className="font-nunito text-sm text-ocean/80 max-w-sm text-center mt-2">
               Mapbox GL JS integration goes here. Showing live marina pins with real-time berth availability.
             </p>
          </div>

          {/* Map Controls */}
          <div className="absolute right-6 bottom-6 flex flex-col gap-2">
            <Button variant="outline" className="bg-white/90 backdrop-blur border-ocean/10 w-12 h-12 p-0 flex items-center justify-center text-ocean hover:text-gold shadow-lg">
              <Navigation size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
