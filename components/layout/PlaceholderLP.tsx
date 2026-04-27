import React from "react";
import { Compass } from "lucide-react";

export default function PlaceholderLP({ title }: { title: string }) {
  return (
    <div className="pt-40 pb-24 min-h-screen bg-sail flex flex-col items-center justify-center text-center px-6">
      <Compass className="w-20 h-20 text-gold mb-8 animate-spin" />
      <h1 className="text-6xl font-bebas text-ocean mb-4 uppercase">{title}</h1>
      <p className="text-xl text-ocean/60 font-nunito max-w-xl">
        This landing page is being optimized for conversion. Check back shortly for the full intelligence briefing.
      </p>
    </div>
  );
}
