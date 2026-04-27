import React from "react";
import { Search, Hash, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const TERMS = [
  { term: "MLWS", definition: "Mean Low Water Springs. The average of the heights of two successive low waters during those periods of 24 hours when the range of the tide is greatest." },
  { term: "Waypoint", definition: "A reference point in physical space used for purposes of navigation, usually specified by latitude and longitude." },
  { term: "Tidal Gate", definition: "A location where the tidal stream is so strong that a vessel can only pass through it when the tide is flowing in the desired direction." },
  { term: "VMG", definition: "Velocity Made Good. A term used in sailing that indicates the speed of a boat towards or away from a target, such as the wind or a waypoint." },
  { term: "Man Overboard", definition: "An emergency situation where a person has fallen off a vessel and into the water and requires immediate rescue." },
  { term: "Heave To", definition: "A way of slowing a sailboat's forward progress, often used to wait out a storm or for a rest, by backing the jib and lashing the tiller." },
];

export default function GlossaryPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-7xl text-ocean font-bebas mb-6 leading-none uppercase">
            MARINE <span className="text-gold">GLOSSARY</span>
          </h1>
          <p className="text-lg text-ocean/60 font-nunito mb-12">
            600+ sailing and marine terms defined for the modern mariner. From MLWS to VMG, we've catalogued the language of the sea.
          </p>
          
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-ocean/30" />
            <input
              type="text"
              placeholder="Search terms..."
              className="w-full bg-white border border-ocean/10 px-16 py-6 text-xl text-ocean font-nunito focus:ring-2 focus:ring-gold outline-none shadow-xl"
            />
          </div>
        </div>

        {/* A-Z Nav */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-ocean/10 pb-8">
           { "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => (
             <button key={l} className="w-10 h-10 flex items-center justify-center font-bebas text-xl text-ocean/40 hover:text-gold hover:bg-gold/5 transition-all">
                {l}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {TERMS.map((t, i) => (
             <div key={i} className="bg-white p-8 border border-ocean/5 shadow-sm group hover:border-gold transition-all">
                <div className="flex items-center gap-3 text-gold mb-4">
                   <Hash size={16} />
                   <h3 className="font-bebas text-3xl text-ocean group-hover:text-gold transition-colors uppercase tracking-wide">{t.term}</h3>
                </div>
                <p className="text-ocean/60 font-nunito leading-relaxed text-sm">
                   {t.definition}
                </p>
             </div>
           ))}
        </div>

        <div className="mt-24 text-center">
           <p className="text-sm font-nunito text-ocean/40 mb-8 italic">Viewing 6 of 642 terms</p>
           <Button variant="outline">Load More Terms</Button>
        </div>
      </div>
    </div>
  );
}
