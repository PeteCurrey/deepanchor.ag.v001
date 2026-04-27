import React from "react";
import { Navigation, Clock, Waves, Wind, AlertTriangle, CheckCircle2, Download, MapPin, Anchor } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default async function PassageRoutePage({ params }: { params: Promise<{ route: string }> }) {
  const { route } = await params;
  const routeName = route.replace("-", " ").replace("to", "→").toUpperCase();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
               <Navigation size={16} />
               Premium Passage Guide
            </div>
            <h1 className="text-7xl md:text-8xl text-ocean font-bebas leading-[0.85] mb-6 uppercase tracking-tighter">
               {routeName}
            </h1>
            <p className="text-xl text-ocean/60 font-nunito leading-relaxed">
               The complete tactical briefing for the {routeName} route. Includes verified waypoints, tidal gate windows, and coastal intelligence.
            </p>
          </div>
          <div className="flex gap-4">
             <Button variant="gold" size="lg" className="flex items-center gap-2">
                <Download size={18} /> Download Guide
             </Button>
          </div>
        </div>

        {/* Tactical Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
           <div className="bg-white p-10 border border-ocean/5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">Total Distance</p>
              <p className="text-4xl font-bebas text-ocean">68.4 <span className="text-sm">NM</span></p>
           </div>
           <div className="bg-white p-10 border border-ocean/5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">Difficulty</p>
              <p className="text-4xl font-bebas text-gold">OFFSHORE</p>
           </div>
           <div className="bg-white p-10 border border-ocean/5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">Tidal Gates</p>
              <p className="text-4xl font-bebas text-ocean">2 <span className="text-sm">Gates</span></p>
           </div>
           <div className="bg-white p-10 border border-ocean/5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">Average Time</p>
              <p className="text-4xl font-bebas text-ocean">11-14H</p>
           </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           <div className="lg:col-span-8 space-y-20">
              {/* Waypoints */}
              <section>
                 <h2 className="text-5xl font-bebas text-ocean mb-12 uppercase leading-none">RECOMMENDED <span className="text-gold">WAYPOINTS</span></h2>
                 <div className="space-y-6">
                    {[
                      { name: "Needles Fairway Buoy", pos: "50°38'.2N 001°38'.9W", info: "Safe water mark. Adjust for tide set before crossing TSS." },
                      { name: "Mid-Channel Alpha", pos: "50°12'.0N 001°45'.0W", info: "Watch for high-speed ferries. AIS active required." },
                      { name: "Cherbourg Grande Rade", pos: "49°40'.5N 001°37'.0W", info: "Contact Cherbourg Port Control VHF 12 for entry." }
                    ].map((wp, i) => (
                      <div key={i} className="bg-white p-8 border border-ocean/5 flex flex-col md:flex-row md:items-center gap-8 group hover:border-gold transition-all">
                         <div className="w-12 h-12 bg-ocean/5 flex items-center justify-center font-bebas text-2xl text-ocean group-hover:bg-gold transition-colors">
                            {i + 1}
                         </div>
                         <div className="flex-grow">
                            <h4 className="font-bebas text-2xl text-ocean leading-none mb-1 uppercase tracking-wide">{wp.name}</h4>
                            <p className="text-[10px] font-bold text-gold uppercase tracking-widest">{wp.pos}</p>
                         </div>
                         <div className="md:w-1/3">
                            <p className="text-sm text-ocean/60 font-nunito leading-relaxed italic">
                               "{wp.info}"
                            </p>
                         </div>
                      </div>
                    ))}
                 </div>
              </section>

              {/* Pilotage Notes */}
              <section className="bg-white p-12 border border-ocean/5 shadow-sm prose prose-lg max-w-none prose-ocean">
                 <h3 className="font-bebas text-4xl text-ocean mb-8 uppercase leading-none">PILOTAGE <span className="text-teal">NOTES</span></h3>
                 <p className="font-nunito text-ocean/70 leading-relaxed mb-8">
                    The {routeName} passage is a classic cross-channel route requiring careful consideration of the English Channel Traffic Separation Scheme (TSS). Vessels should maintain a course perpendicular to the traffic lanes to minimize time spent in the scheme.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 not-prose">
                    <div className="space-y-4">
                       <h5 className="text-xs font-bold uppercase tracking-widest text-ocean/40">TSS Crossing</h5>
                       <p className="text-sm text-ocean/70 leading-relaxed font-nunito">
                          Monitor VHF CH 16 and 11 (Jobourg Traffic). The crossing is approximately 20nm south of the Needles. 
                       </p>
                    </div>
                    <div className="space-y-4">
                       <h5 className="text-xs font-bold uppercase tracking-widest text-ocean/40">Cherbourg Entry</h5>
                       <p className="text-sm text-ocean/70 leading-relaxed font-nunito">
                          Enter via the Grande Rade (Western Entrance). Note that the eastern entrance is often restricted for commercial use.
                       </p>
                    </div>
                 </div>
              </section>
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-4 space-y-12">
              <div className="bg-ocean text-sail p-10 shadow-xl relative overflow-hidden">
                 <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
                 <h3 className="font-bebas text-2xl tracking-widest text-gold mb-8 flex items-center gap-3">
                    <Waves size={20} />
                    Tidal Gates
                 </h3>
                 <div className="space-y-8">
                    <div className="border-l-2 border-teal pl-6">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-sail/40 mb-1">Gate 1: The Needles</p>
                       <p className="text-sm text-sail/60 font-nunito leading-relaxed">
                          Best departure is at HW Portsmouth +4h to catch the full ebb stream through the Needles Channel.
                       </p>
                    </div>
                    <div className="border-l-2 border-compass pl-6">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-sail/40 mb-1">Gate 2: Alderney Race</p>
                       <p className="text-sm text-sail/60 font-nunito leading-relaxed">
                          If continuing west, ensure arrival at the Alderney Race at slack water. Streams can reach 10kts at springs.
                       </p>
                    </div>
                 </div>
              </div>

              <div className="bg-white p-10 border border-ocean/5 shadow-sm">
                 <h4 className="font-bebas text-2xl text-ocean mb-6 uppercase">Route Safety</h4>
                 <ul className="space-y-4">
                    {[
                      "AIS Transponder highly recommended",
                      "Full fuel tanks required (est. 12h motoring)",
                      "Lifejackets and harnesses for all crew",
                      "Current Imray C12 Chart required"
                    ].map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm text-ocean/60 font-nunito">
                         <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                         {s}
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-gold/5 p-10 border border-gold/10">
                 <h4 className="font-bebas text-2xl text-gold mb-4 uppercase">Captain Insight</h4>
                 <p className="text-xs text-ocean/60 font-nunito leading-relaxed italic">
                    "The Cherbourg Grande Rade is cavernous. Even in a gale, once you're inside the breakwater, the sea state drops instantly. It's the perfect refuge."
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
