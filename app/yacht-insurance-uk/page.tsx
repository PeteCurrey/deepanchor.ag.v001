import React from "react";
import { Shield, Check, Info, ArrowRight, ExternalLink, ShieldCheck, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yacht Insurance UK | Compare Boat Insurance Providers | Deep Anchor",
  description: "Navigate the complex world of UK recreational boat insurance. Compare top providers like Pantaenius, Haven Knox-Johnston, and GJW Direct.",
};

const PROVIDERS = [
  {
    name: "Pantaenius",
    logo: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=200",
    description: "Specialist blue water and superyacht insurance with global reach.",
    pros: ["Agreed fixed value", "No deductible for total loss", "Global coverage"],
    rating: 4.9,
    link: "#",
    bestFor: "Blue Water Cruisers",
  },
  {
    name: "Haven Knox-Johnston",
    logo: "https://images.unsplash.com/photo-1542612711-665519808d7e?auto=format&fit=crop&q=80&w=200",
    description: "One of the UK's most established names in boat insurance.",
    pros: ["Dedicated claims team", "Multi-boat discounts", "RYA member benefits"],
    rating: 4.8,
    link: "#",
    bestFor: "Coastal Cruisers",
  },
  {
    name: "GJW Direct",
    logo: "https://images.unsplash.com/photo-1517032283973-460ca466f917?auto=format&fit=crop&q=80&w=200",
    description: "Simplified online-first insurance with highly competitive rates.",
    pros: ["Fast online quotes", "Interest-free monthly payments", "Comprehensive cover"],
    rating: 4.7,
    link: "#",
    bestFor: "Value & Simplicity",
  },
  {
    name: "BoatInsure",
    logo: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=200",
    description: "Flexible insurance for everything from dinghies to offshore yachts.",
    pros: ["Broad vessel type support", "Competitive premiums", "Simple claims process"],
    rating: 4.6,
    link: "#",
    bestFor: "Dinghy & Small Craft",
  }
];

export default function YachtInsurancePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">
                <Shield size={16} />
                Vessel Protection Intelligence
              </div>
              <h1 className="text-7xl md:text-8xl text-ocean font-bebas mb-8 leading-none tracking-tighter">
                YACHT INSURANCE <span className="text-gold">NAVIGATOR</span>
              </h1>
              <p className="text-2xl text-ocean/60 font-nunito mb-12 leading-relaxed">
                Navigating the complex world of UK recreational boat insurance shouldn't be a solo passage. We've vetted the market's leading providers to help you protect your investment.
              </p>
              <div className="flex gap-4">
                <Button variant="danger" size="lg" className="text-xl">Compare All Quotes</Button>
                <Button variant="outline" size="lg" className="text-xl">Read Insurance Guide</Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full md:w-1/2 overflow-hidden">
               <Image 
                 src="https://images.unsplash.com/photo-1517032283973-460ca466f917?auto=format&fit=crop&q=100&w=1200"
                 alt="Sailing yacht in safe harbour"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-ocean/20 backdrop-blur-[1px]" />
            </div>
          </div>
        </section>

        {/* The Comparison Table/Grid */}
        <section className="mb-32">
           <h2 className="text-5xl font-bebas text-ocean mb-12 text-center uppercase tracking-wider">Top UK <span className="text-gold">Providers</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {PROVIDERS.map((provider, i) => (
               <div key={i} className="bg-white border border-ocean/5 p-10 flex flex-col hover:border-gold transition-all shadow-sm group">
                 <div className="h-16 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all">
                    <span className="font-bebas text-3xl text-ocean">{provider.name}</span>
                 </div>
                 <div className="mb-6">
                    <div className="bg-teal/10 text-teal px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-block mb-4">
                       Best for: {provider.bestFor}
                    </div>
                    <p className="text-sm text-ocean/60 font-nunito leading-relaxed">
                       {provider.description}
                    </p>
                 </div>
                 <div className="space-y-3 mb-10 flex-grow">
                    {provider.pros.map((pro, j) => (
                      <div key={j} className="flex items-center gap-3 text-xs text-ocean/80 font-nunito">
                         <Check size={14} className="text-teal shrink-0" />
                         {pro}
                      </div>
                    ))}
                 </div>
                 <Button variant="gold" className="w-full">
                    Get a Quote <ExternalLink size={14} className="ml-2" />
                 </Button>
               </div>
             ))}
           </div>
        </section>

        {/* Educational Content */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
           <div className="lg:col-span-7">
              <h2 className="text-5xl font-bebas text-ocean mb-8 leading-none uppercase">UK Boat Insurance <span className="text-teal">Explained</span></h2>
              <div className="space-y-8 prose prose-ocean max-w-none">
                 <div className="p-8 bg-white border-l-4 border-teal shadow-sm">
                    <h4 className="font-bebas text-2xl text-ocean mb-4 uppercase">Third Party vs Comprehensive</h4>
                    <p className="text-ocean/70 font-nunito leading-relaxed">
                       At a minimum, most UK marinas require £3,000,000 third-party liability insurance. Comprehensive cover adds protection for your own vessel against fire, theft, collision, and heavy weather damage.
                    </p>
                 </div>
                 <div className="p-8 bg-white border-l-4 border-gold shadow-sm">
                    <h4 className="font-bebas text-2xl text-ocean mb-4 uppercase">The "Agreed Value" Advantage</h4>
                    <p className="text-ocean/70 font-nunito leading-relaxed">
                       Many specialist providers (like Pantaenius) offer "Agreed Fixed Value" policies. Unlike market value policies, they pay out the full amount listed on your policy in the event of a total loss, regardless of depreciation.
                    </p>
                 </div>
                 <div className="p-8 bg-white border-l-4 border-compass shadow-sm">
                    <h4 className="font-bebas text-2xl text-ocean mb-4 uppercase">Cruising Area Constraints</h4>
                    <p className="text-ocean/70 font-nunito leading-relaxed">
                       Standard UK policies usually cover "UK Inland and Coastal waters including North Brest to Elbe". If you plan to cross the Bay of Biscay or head to the Baltic, you must extend your cruising area.
                    </p>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-5 space-y-8">
              <div className="bg-ocean text-sail p-12 relative overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
                 <h3 className="font-bebas text-3xl text-gold mb-6 uppercase tracking-widest">Quote Checklist</h3>
                 <p className="text-sail/60 text-sm font-nunito mb-8">Have these details ready to get the most accurate premium:</p>
                 <ul className="space-y-4">
                    {[
                      "Vessel make, model, and year",
                      "Current market value or purchase price",
                      "Hull material and engine type",
                      "Maximum speed (if over 15 knots)",
                      "Sum of all previous claims (last 5 years)",
                      "Highest sailing qualification (RYA/ICC)"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-center text-sm font-nunito">
                         <div className="w-5 h-5 bg-teal text-sail rounded-full flex items-center justify-center shrink-0">
                            <Check size={12} />
                         </div>
                         {item}
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-teal/5 border border-teal/10 p-10">
                 <h3 className="font-bebas text-2xl text-teal mb-4 uppercase">Member Benefit</h3>
                 <p className="text-sm font-nunito text-ocean/70 leading-relaxed mb-6">
                    Deep Anchor "Captain" tier members get access to exclusive group-negotiated rates with Haven Knox-Johnston and Pantaenius.
                 </p>
                 <Button variant="outline" className="w-full text-teal border-teal hover:bg-teal hover:text-sail">Upgrade to Captain</Button>
              </div>
           </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto">
           <h2 className="text-5xl font-bebas text-ocean mb-12 text-center uppercase tracking-wider">Insurance <span className="text-gold">Intelligence</span></h2>
           <div className="space-y-6">
              {[
                { q: "Is boat insurance compulsory in the UK?", a: "While not legally required by the government, almost all marinas, harbours, and boatyards require at least £3m Third Party liability insurance to use their facilities." },
                { q: "Does insurance cover my dinghy and outboard?", a: "Most comprehensive yacht policies include cover for a tender and outboard up to a certain value/length, provided they are marked with the name of the parent vessel." },
                { q: "Will I need a survey to get insurance?", a: "For vessels over 20-25 years old, most insurers will require a full structural survey every 5-7 years to maintain comprehensive cover." }
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-white border border-ocean/5">
                   <h4 className="font-bebas text-2xl text-ocean mb-4 uppercase tracking-wide">{faq.q}</h4>
                   <p className="text-ocean/60 font-nunito leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
