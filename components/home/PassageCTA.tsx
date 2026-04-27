import React from "react";
import { Button } from "@/components/ui/Button";
import { MapPin, Navigation, Info, Lock, Anchor, ArrowRight } from "lucide-react";

export function PassageCTA() {
  return (
    <section className="py-32 bg-ocean relative overflow-hidden">
      {/* Decorative Chart Elements */}
      <div className="absolute inset-0 chart-overlay opacity-10 pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-96 h-96 border border-sail/10 rounded-full flex items-center justify-center opacity-20">
        <div className="w-80 h-80 border border-sail/10 rounded-full flex items-center justify-center">
          <div className="w-64 h-64 border border-sail/10 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Lock size={12} />
              Captain Tier Exclusive
            </div>
            <h2 className="text-6xl md:text-7xl text-sail font-bebas leading-[0.9] mb-8">
              AI-POWERED <br />
              <span className="text-gold">PASSAGE PLANNING</span>
            </h2>
            <p className="text-xl text-sail/60 font-nunito leading-relaxed mb-10 max-w-lg">
              Generate precise waypoints, analyze tidal gates, and identify optimal weather windows in seconds. Our AI engine processes local NOTAMs and UKHO data to ensure your passage is as safe as it is spectacular.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sail/5 flex-shrink-0 flex items-center justify-center text-gold">
                  <Navigation size={20} />
                </div>
                <div>
                  <h4 className="font-bebas text-lg text-sail">Waypoints</h4>
                  <p className="text-xs text-sail/40 mt-1">Precise course-to-steer recommendations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sail/5 flex-shrink-0 flex items-center justify-center text-teal">
                  <Anchor size={20} />
                </div>
                <div>
                  <h4 className="font-bebas text-lg text-sail">Tidal Gates</h4>
                  <p className="text-xs text-sail/40 mt-1">Analysis of spring and neap tidal windows.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sail p-10 md:p-16 relative shadow-2xl">
            <div className="absolute top-0 right-0 p-4">
              <Info className="text-ocean/20 cursor-help" />
            </div>
            <h3 className="font-bebas text-3xl text-ocean mb-10">Quick Plan</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Departure Point</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
                  <input
                    type="text"
                    placeholder="e.g. Lymington Yacht Haven"
                    className="w-full bg-ocean/5 border-none px-12 py-4 text-ocean font-nunito focus:ring-2 focus:ring-gold outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-compass w-4 h-4" />
                  <input
                    type="text"
                    placeholder="e.g. Cherbourg Marina"
                    className="w-full bg-ocean/5 border-none px-12 py-4 text-ocean font-nunito focus:ring-2 focus:ring-gold outline-none"
                  />
                </div>
              </div>
              <Button variant="danger" className="w-full py-6 text-xl group">
                Plan My Passage
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <p className="text-center text-xs text-ocean/40 font-nunito">
                Unlock full features with a Captain subscription.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
