import React from "react";
import { MarinaCard } from "@/components/marina/MarinaCard";
import { MOCK_MARINAS } from "@/lib/mock-data";

export default async function CoastHubPage({ params }: { params: Promise<{ country: string, coast: string }> }) {
  const { coast } = await params;
  const filtered = MOCK_MARINAS.filter(m => m.coast === coast);
  const coastName = coast.replace("-", " ");

  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-7xl text-ocean font-bebas mb-6 leading-none uppercase">
            {coastName} <span className="text-gold">MARINAS</span>
          </h1>
          <p className="text-lg text-ocean/60 font-nunito max-w-2xl">
            Discover the best visitor berths and anchorages across the {coastName}. Complete with pilotage notes and local intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((marina) => (
            <MarinaCard key={marina.id} marina={marina} />
          ))}
        </div>
      </div>
    </div>
  );
}
