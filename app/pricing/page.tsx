import React from "react";
import { PricingSection } from "@/components/home/PricingSection";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const COMPARISON = [
  { feature: "Marina Directory Access", crew: true, captain: true, marina: true },
  { feature: "Tidal Curve Data", crew: true, captain: true, marina: true },
  { feature: "Passage Planning AI", crew: false, captain: true, marina: false },
  { feature: "Live Weather Stream", crew: true, captain: true, marina: true },
  { feature: "PDF Route Export", crew: false, captain: true, marina: false },
  { feature: "Tidal Gate Analysis", crew: false, captain: true, marina: false },
  { feature: "Berth Booking Integration", crew: false, captain: true, marina: true },
  { feature: "Priority Support", crew: false, captain: true, marina: true },
];

export default function PricingPage() {
  return (
    <div className="bg-ocean">
      <div className="pt-20">
         <PricingSection />
      </div>

      {/* Comparison Table */}
      <section className="py-32 container mx-auto px-6">
         <h2 className="text-6xl font-bebas text-sail mb-20 text-center uppercase">Detailed <span className="text-gold">Comparison</span></h2>
         
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-sail/10">
                     <th className="py-8 font-bebas text-2xl text-sail uppercase tracking-wider">Feature</th>
                     <th className="py-8 font-bebas text-2xl text-teal uppercase tracking-wider text-center">Crew</th>
                     <th className="py-8 font-bebas text-2xl text-gold uppercase tracking-wider text-center">Captain</th>
                     <th className="py-8 font-bebas text-2xl text-sail uppercase tracking-wider text-center">Marina</th>
                  </tr>
               </thead>
               <tbody className="text-sail/60 font-nunito">
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="border-b border-sail/5 hover:bg-sail/5 transition-colors">
                       <td className="py-6 text-lg">{row.feature}</td>
                       <td className="py-6 text-center">{row.crew ? <Check className="mx-auto text-teal" size={20} /> : "—"}</td>
                       <td className="py-6 text-center">{row.captain ? <Check className="mx-auto text-gold" size={20} /> : "—"}</td>
                       <td className="py-6 text-center">{row.marina ? <Check className="mx-auto text-sail/20" size={20} /> : "—"}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>

      {/* For Marinas Section */}
      <section className="py-32 bg-sail relative overflow-hidden">
         <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-6xl font-bebas text-ocean mb-8 uppercase leading-none">For <span className="text-teal">Marina Managers</span></h2>
            <p className="text-xl text-ocean/60 font-nunito mb-12 max-w-2xl mx-auto">
               Integrate with the Deep Anchor community. Showcase your facilities, manage visitor berths, and connect with thousands of active sailors.
            </p>
            <div className="flex justify-center gap-6">
               <Button variant="primary" size="lg" className="text-xl">Learn More</Button>
               <Button variant="outline" size="lg" className="text-xl">Book a Demo</Button>
            </div>
         </div>
      </section>

      {/* FAQ Accordion Placeholder */}
      <section className="py-32 container mx-auto px-6">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bebas text-sail mb-16 text-center uppercase tracking-widest">Subscription <span className="text-gold">Oracle</span></h2>
            <div className="space-y-6">
               {[
                 "Can I switch tiers anytime?",
                 "What happens if I cancel my Captain tier?",
                 "Is there a discount for multi-vessel owners?",
                 "Do you offer commercial licenses for schools?"
               ].map((q, i) => (
                 <div key={i} className="p-8 bg-sail/5 border border-sail/10 flex items-center justify-between group cursor-pointer hover:border-gold transition-all">
                    <span className="text-xl font-bebas text-sail/80 uppercase tracking-wide">{q}</span>
                    <HelpCircle className="text-sail/20 group-hover:text-gold transition-colors" />
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
