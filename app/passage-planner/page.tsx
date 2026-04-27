"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MapPin, Navigation, Clock, Waves, Wind, AlertTriangle, Shield, CheckCircle2, Download, ExternalLink, Anchor, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function PassagePlannerPage() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep(2);
    }, 3000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          {step === 1 && !isGenerating && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-8">
                 <Shield size={16} />
                 Captain Tier Passage Planner
              </div>
              <h1 className="text-7xl text-ocean font-bebas mb-8 leading-none">
                PLAN YOUR <span className="text-gold">PASSAGE</span>
              </h1>
              
              <div className="bg-white p-12 shadow-2xl border border-ocean/5 space-y-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Departure</label>
                       <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
                          <input type="text" placeholder="e.g. Lymington Yacht Haven" className="w-full bg-ocean/5 border-none px-12 py-4 text-ocean outline-none focus:ring-2 focus:ring-gold" defaultValue="Lymington Yacht Haven" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Destination</label>
                       <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-compass w-4 h-4" />
                          <input type="text" placeholder="e.g. Cherbourg Marina" className="w-full bg-ocean/5 border-none px-12 py-4 text-ocean outline-none focus:ring-2 focus:ring-gold" defaultValue="Cherbourg Marina" />
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Cruise Speed (KTS)</label>
                       <input type="number" className="w-full bg-ocean/5 border-none px-6 py-4 text-ocean outline-none focus:ring-2 focus:ring-gold" defaultValue="6" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Vessel Draft (M)</label>
                       <input type="number" step="0.1" className="w-full bg-ocean/5 border-none px-6 py-4 text-ocean outline-none focus:ring-2 focus:ring-gold" defaultValue="2.1" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Departure Date</label>
                       <input type="date" className="w-full bg-ocean/5 border-none px-6 py-4 text-ocean outline-none focus:ring-2 focus:ring-gold" defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                 </div>

                 <Button variant="danger" className="w-full py-6 text-xl group" onClick={handleGenerate}>
                    Consult the Charts
                    <Navigation className="ml-3 group-hover:rotate-45 transition-transform" />
                 </Button>
              </div>
            </motion.div>
          )}

          {isGenerating && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-40"
            >
               <Compass className="w-24 h-24 text-gold animate-spin mb-8" />
               <h2 className="text-4xl font-bebas text-ocean mb-4 tracking-wider">Analyzing Coastal Intelligence</h2>
               <p className="text-ocean/40 font-nunito animate-pulse">Calculating waypoints, tidal gates, and weather windows...</p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
               <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
                       <CheckCircle2 size={16} className="text-teal" />
                       Passage Plan Generated
                    </div>
                    <h1 className="text-7xl text-ocean font-bebas leading-none uppercase">
                      Solent <span className="text-gold">→ Cherbourg</span>
                    </h1>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                       <Download size={18} /> Export PDF
                    </Button>
                    <Button variant="gold" className="flex items-center gap-2">
                       <Navigation size={18} /> Start Navigation
                    </Button>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {/* Left: Map & Route */}
                  <div className="lg:col-span-8 space-y-12">
                     <div className="h-[500px] bg-ocean/5 relative flex items-center justify-center border border-ocean/5 overflow-hidden">
                        <div className="absolute inset-0 chart-overlay opacity-20" />
                        <div className="relative z-10 text-center">
                           <MapPin className="text-gold w-12 h-12 mx-auto mb-4" />
                           <p className="font-bebas text-xl text-ocean/40 uppercase tracking-widest">Interactive Route Map</p>
                           <p className="text-xs text-ocean/20 mt-2">Mapbox GL JS • Waypoint Layer Active</p>
                        </div>
                        {/* Mock route line */}
                        <div className="absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gold/30 -rotate-12 border-t border-dashed border-gold">
                           <div className="absolute -left-1 -top-1 w-2 h-2 bg-gold rounded-full" />
                           <div className="absolute -right-1 -top-1 w-2 h-2 bg-compass rounded-full" />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 shadow-sm border border-ocean/5">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">Distance</p>
                           <p className="text-4xl font-bebas text-ocean">68.4 <span className="text-lg">NM</span></p>
                        </div>
                        <div className="bg-white p-8 shadow-sm border border-ocean/5">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">Est. Time</p>
                           <p className="text-4xl font-bebas text-ocean">11H 24M</p>
                        </div>
                        <div className="bg-white p-8 shadow-sm border border-ocean/5">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">Fuel Required</p>
                           <p className="text-4xl font-bebas text-teal">42 <span className="text-lg">L</span></p>
                        </div>
                     </div>

                     {/* Waypoints */}
                     <div className="space-y-6">
                        <h3 className="text-3xl font-bebas text-ocean mb-8">RECOMMENDED WAYPOINTS</h3>
                        <div className="space-y-4">
                           {[
                             { name: "Needles Fairway", pos: "50°38'.2N 001°38'.9W", info: "Start passage, head 192°T" },
                             { name: "Mid-Channel Alpha", pos: "50°12'.0N 001°45'.0W", info: "Watch for TSS traffic" },
                             { name: "Cherbourg Approach", pos: "49°42'.5N 001°36'.0W", info: "Contact Cherbourg Port Control CH 12" }
                           ].map((wp, i) => (
                             <div key={i} className="flex items-center gap-8 bg-white p-6 border border-ocean/5 group hover:border-gold transition-colors">
                                <div className="w-10 h-10 bg-ocean/5 flex items-center justify-center font-bebas text-ocean group-hover:bg-gold transition-colors">0{i+1}</div>
                                <div className="flex-grow">
                                   <h4 className="font-bebas text-xl text-ocean leading-none mb-1">{wp.name}</h4>
                                   <p className="text-[10px] font-bold text-ocean/30 uppercase tracking-widest">{wp.pos}</p>
                                </div>
                                <div className="text-right">
                                   <p className="text-sm text-ocean/60 italic font-nunito">{wp.info}</p>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Right: Intelligence Panels */}
                  <div className="lg:col-span-4 space-y-12">
                     <div className="bg-ocean text-sail p-10 shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
                        <h3 className="font-bebas text-2xl tracking-widest text-gold mb-8 flex items-center gap-3">
                           <Waves size={20} />
                           Tidal Gate Analysis
                        </h3>
                        <div className="space-y-8">
                           <div className="border-l-2 border-teal pl-6">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-sail/40 mb-1">Departure Window</p>
                              <p className="font-bebas text-xl">04:30 — 06:15</p>
                              <p className="text-xs text-teal mt-1">Optimal: Max Ebb Stream through Needles</p>
                           </div>
                           <div className="border-l-2 border-compass pl-6">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-sail/40 mb-1">Arrival Window</p>
                              <p className="font-bebas text-xl">15:45 — 17:30</p>
                              <p className="text-xs text-compass mt-1">Caution: Tidal stream 3kts at entrance</p>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white p-10 border border-ocean/5 shadow-sm">
                        <h3 className="font-bebas text-2xl text-ocean mb-8 flex items-center gap-3">
                           <Wind size={20} className="text-gold" />
                           Weather Window
                        </h3>
                        <div className="space-y-6">
                           <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-ocean/60 uppercase">Visibility</span>
                              <span className="text-sm font-bold text-teal">Excellent (10nm+)</span>
                           </div>
                           <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-ocean/60 uppercase">Sea State</span>
                              <span className="text-sm font-bold text-ocean">Slight to Moderate</span>
                           </div>
                           <div className="pt-6 border-t border-ocean/5">
                              <p className="text-xs text-ocean/40 font-nunito leading-relaxed italic">
                                "High pressure system remains stable for next 24h. SW winds 12-16kts backing W by late afternoon."
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="bg-compass/5 p-10 border border-compass/10">
                        <h3 className="font-bebas text-2xl text-compass mb-6 flex items-center gap-3">
                           <AlertTriangle size={20} />
                           NOTAMs & Hazards
                        </h3>
                        <ul className="space-y-4">
                           <li className="flex gap-3 text-xs text-ocean/70 leading-relaxed font-nunito">
                              <div className="w-1.5 h-1.5 bg-compass rounded-full shrink-0 mt-1.5" />
                              Lyme Bay: Military firing range active 0800-1600.
                           </li>
                           <li className="flex gap-3 text-xs text-ocean/70 leading-relaxed font-nunito">
                              <div className="w-1.5 h-1.5 bg-compass rounded-full shrink-0 mt-1.5" />
                              Channel Islands: VTS reporting required for all vessels {'>'}12m.
                           </li>
                        </ul>
                     </div>

                     <div className="bg-ocean p-10 text-sail">
                        <h3 className="font-bebas text-2xl mb-4">Recommended Stay</h3>
                        <p className="text-sm font-nunito opacity-60 mb-6 leading-relaxed">
                           Based on your arrival time and draft, we recommend:
                        </p>
                        <div className="flex items-center gap-4 bg-sail/5 p-4 group cursor-pointer hover:bg-sail/10 transition-colors">
                           <Anchor className="text-gold" />
                           <div>
                              <p className="font-bebas text-lg leading-none">Port Chantereyne</p>
                              <p className="text-[10px] text-sail/40 uppercase font-bold tracking-widest mt-1">Visitor pontoon G</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
