import React from "react";
import { MarinaCard } from "@/components/marina/MarinaCard";
import { MOCK_MARINAS } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function CountryHubPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const filtered = MOCK_MARINAS.filter(m => m.country === country);
  const countryName = country.toUpperCase();

  const coasts = Array.from(new Set(filtered.map(m => m.coast)));

  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-7xl text-ocean font-bebas mb-6 leading-none">
            SAILING IN <span className="text-gold">{countryName}</span>
          </h1>
          <p className="text-lg text-ocean/60 font-nunito max-w-2xl">
            The complete guide to marinas, harbours, and cruising grounds in {countryName}.
          </p>
        </div>

        {/* Coast Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {coasts.map(coast => (
            <Link key={coast} href={`/marinas/${country}/${coast}`} className="bg-ocean p-8 group hover:bg-ocean-light transition-all shadow-xl">
               <h3 className="text-sail font-bebas text-3xl mb-2 uppercase tracking-wide">{coast.replace("-", " ")}</h3>
               <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                 Explore Coast <ArrowRight size={14} />
               </div>
            </Link>
          ))}
        </div>

        <h2 className="text-4xl font-bebas text-ocean mb-10 leading-none">FEATURED <span className="text-teal">LOCATIONS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((marina) => (
            <MarinaCard key={marina.id} marina={marina} />
          ))}
        </div>
      </div>
    </div>
  );
}
