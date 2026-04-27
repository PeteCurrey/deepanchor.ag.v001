import React from "react";
import { Search, HelpCircle, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const QAS = [
  { q: "Do I need a licence to sail in the UK?", a: "For recreational purposes, there is no legal requirement for a skipper's licence for pleasure vessels under 24m in UK territorial waters. However, most insurance companies and marinas will require proof of competence (such as RYA Day Skipper) and third-party insurance." },
  { q: "What is a tidal gate and how do I plan for it?", a: "A tidal gate is a location (often a headland or narrow channel) where the tidal stream is so strong that a vessel cannot make headway against it. Planning involves calculating the time of slack water or the start of the favorable stream to ensure safe passage." },
  { q: "How much does it cost to berth in a marina in France?", a: "Prices vary significantly by region and season. On average, a 10m yacht can expect to pay between €25 and €45 per night in Normandy or Brittany, though prices in the South of France (Côte d'Azur) can be double or triple that." },
  { q: "What VHF channel do marinas use in the UK?", a: "Most UK marinas use VHF Channel 80 for primary communication. However, some larger commercial ports or specific regions may use other channels (e.g., CH 12 or CH 14). Always consult the local pilotage notes." },
];

export default function OraclePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
             <Sparkles size={16} />
             AI-Powered Intelligence
          </div>
          <h1 className="text-7xl text-ocean font-bebas mb-6 leading-none uppercase">
            DEEP ANCHOR <span className="text-gold">ORACLE</span>
          </h1>
          <p className="text-lg text-ocean/60 font-nunito mb-12">
            600+ marine and sailing questions answered by our coastal intelligence engine. Search our knowledge base for instant answers to your seamanship queries.
          </p>
          
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-ocean/30" />
            <input
              type="text"
              placeholder="Ask the Oracle (e.g. 'How do I plan for a tidal gate?')..."
              className="w-full bg-white border border-ocean/10 px-16 py-6 text-xl text-ocean font-nunito focus:ring-2 focus:ring-gold outline-none shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           {QAS.map((qa, i) => (
             <div key={i} className="bg-white p-10 border border-ocean/5 shadow-sm group hover:border-gold transition-all flex gap-6">
                <div className="shrink-0">
                   <HelpCircle className="text-gold" size={32} />
                </div>
                <div>
                   <h3 className="font-bebas text-3xl text-ocean mb-6 leading-tight uppercase tracking-wide group-hover:text-gold transition-colors">{qa.q}</h3>
                   <p className="text-ocean/70 font-nunito leading-relaxed">
                      {qa.a}
                   </p>
                   <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-ocean/30 uppercase tracking-widest">
                         <ShieldCheck size={14} className="text-teal" /> Verified Answer
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs group-hover:text-gold">Deep Dive</Button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Categories */}
        <div className="bg-ocean p-16 text-sail text-center relative overflow-hidden">
           <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
           <h2 className="text-5xl font-bebas mb-12 uppercase">Browse by <span className="text-gold">Intelligence Area</span></h2>
           <div className="flex flex-wrap justify-center gap-8">
              {["Navigation", "Legalities", "Maintenance", "Safety", "Cruising Grounds", "Technical Gear"].map(cat => (
                <button key={cat} className="px-8 py-4 bg-sail/5 border border-sail/10 hover:border-gold hover:text-gold transition-all font-bebas text-xl uppercase tracking-widest">
                   {cat}
                </button>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
