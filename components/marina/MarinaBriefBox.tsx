import React from "react";
import { Anchor, Waves, Radio, Shield, Users, Clock } from "lucide-react";
import { Marina } from "@/lib/mock-data";

export function MarinaBriefBox({ marina }: { marina: Marina }) {
  return (
    <div className="bg-ocean text-sail p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
      <h3 className="font-bebas text-2xl tracking-widest text-gold mb-8 flex items-center gap-3">
        <Anchor size={20} />
        Deep Anchor Marina Brief
      </h3>
      
      <div className="grid grid-cols-2 gap-y-10 gap-x-8 relative z-10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-sail/40 mb-2 flex items-center gap-2">
            <Waves size={12} />
            Depth @ MLWS
          </p>
          <p className="font-bebas text-3xl">{marina.depthMLWS} <span className="text-sm">METRES</span></p>
        </div>
        
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-sail/40 mb-2 flex items-center gap-2">
            <Clock size={12} />
            Tidal Access
          </p>
          <p className="font-bebas text-xl leading-tight">{marina.tidalAccess}</p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-sail/40 mb-2 flex items-center gap-2">
            <Radio size={12} />
            VHF Channel
          </p>
          <p className="font-bebas text-3xl">CH <span className="text-gold">{marina.vhfChannel}</span></p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-sail/40 mb-2 flex items-center gap-2">
            <Users size={12} />
            Visitor Berths
          </p>
          <p className="font-bebas text-xl leading-tight">{marina.visitorBerths}</p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-sail/40 mb-2 flex items-center gap-2">
            <Shield size={12} />
            Deep Anchor Rating
          </p>
          <div className="flex items-center gap-2">
            <p className="font-bebas text-3xl text-gold">{marina.rating}</p>
            <span className="text-[10px] font-bold uppercase tracking-widest text-sail/40">/ 5.0</span>
          </div>
        </div>

        <div className="flex items-end">
          <div className="bg-gold/10 border border-gold/20 px-4 py-2 w-full text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Verified Status: 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
