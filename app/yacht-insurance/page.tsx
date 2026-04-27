import React from "react";
import { Shield, Check, Info, ArrowRight, Table, HelpCircle, FileText, Anchor } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PROVIDERS = [
  { name: "Pantaenius", bestFor: "Blue Water & Yachting", highlight: "Global Support", logo: "P" },
  { name: "BoatInsure", bestFor: "RIBs & Small Craft", highlight: "Instant Online Quotes", logo: "B" },
  { name: "Haven Knox-Johnston", bestFor: "Classic & Traditional", highlight: "UK Specialist", logo: "H" },
  { name: "GJW Direct", bestFor: "Cruising & Racing", highlight: "Comprehensive Coverage", logo: "G" },
];

export default function InsurancePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h1 className="text-7xl text-ocean font-bebas mb-6 leading-none">
            BOAT <span className="text-compass">INSURANCE</span>
          </h1>
          <p className="text-lg text-ocean/60 font-nunito mb-12">
            Navigate the complexities of maritime coverage. Compare the UK's leading marine insurance providers and secure the protection your vessel deserves.
          </p>
          <div className="flex flex-wrap gap-8">
             <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-ocean/40">
                <Shield className="text-teal" size={20} />
                FCA Regulated Advice
             </div>
             <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-ocean/40">
                <Anchor className="text-gold" size={20} />
                Specialist Marine Providers Only
             </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {PROVIDERS.map((provider, i) => (
            <div key={i} className="bg-white p-10 border border-ocean/5 shadow-sm group hover:border-gold transition-all relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-ocean/5 rounded-full flex items-center justify-center font-bebas text-5xl text-ocean/10">
                  {provider.logo}
               </div>
               <h3 className="text-3xl font-bebas text-ocean mb-2">{provider.name}</h3>
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-8">{provider.bestFor}</p>
               
               <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-2">
                     <Check size={14} className="text-teal shrink-0 mt-1" />
                     <span className="text-sm font-nunito text-ocean/70">{provider.highlight}</span>
                  </div>
                  <div className="flex items-start gap-2">
                     <Check size={14} className="text-teal shrink-0 mt-1" />
                     <span className="text-sm font-nunito text-ocean/70">No Claims Discount</span>
                  </div>
               </div>

               <Button variant="danger" className="w-full group">
                  Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
            </div>
          ))}
        </div>

        {/* Insurance Guide Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-8 space-y-16">
              <div className="prose prose-lg max-w-none">
                 <h2 className="text-5xl font-bebas text-ocean mb-8 leading-none">UNDERSTANDING <span className="text-gold">COVERAGE</span></h2>
                 <p className="text-xl text-ocean/70 font-nunito leading-relaxed mb-8">
                    Recreational boat insurance isn't just about protecting the hull; it's about safeguarding your liability, your crew, and your peace of mind. In the UK, while insurance isn't legally mandatory on all waters, most marinas and harbors will require a minimum of £3m third-party liability coverage before granting you a berth.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    <div className="bg-white p-8 border-l-4 border-teal shadow-sm">
                       <h4 className="font-bebas text-2xl text-ocean mb-4 uppercase">Third Party Only</h4>
                       <p className="text-sm text-ocean/60 leading-relaxed font-nunito">The minimum required for marina entry. Covers your liability for damage to other vessels or injury to third parties.</p>
                    </div>
                    <div className="bg-white p-8 border-l-4 border-gold shadow-sm">
                       <h4 className="font-bebas text-2xl text-ocean mb-4 uppercase">Comprehensive</h4>
                       <p className="text-sm text-ocean/60 leading-relaxed font-nunito">Covers accidental damage, theft, fire, and vandalism to your own vessel, as well as third-party liability.</p>
                    </div>
                 </div>
              </div>

              {/* FAQ Section */}
              <div>
                 <h2 className="text-5xl font-bebas text-ocean mb-12 leading-none">INSURANCE <span className="text-teal">ORACLE</span></h2>
                 <div className="space-y-6">
                    {[
                      { q: "Do I need survey for insurance?", a: "For vessels over 20 years old, most insurers will require a full structural survey every 5-7 years to maintain comprehensive coverage." },
                      { q: "What is 'Blue Water' coverage?", a: "Standard policies usually cover coastal waters (e.g. UK/Europe). Blue water coverage is required for trans-oceanic passages and high-risk areas." },
                      { q: "Are sails and rigging covered separately?", a: "Often yes. Mast, rigging, and sails usually have their own valuation and depreciation schedules within a comprehensive policy." }
                    ].map((faq, i) => (
                      <div key={i} className="p-8 bg-white border border-ocean/5 flex gap-6">
                         <HelpCircle className="text-gold shrink-0" />
                         <div>
                            <h4 className="font-bebas text-2xl text-ocean mb-2 uppercase tracking-wide">{faq.q}</h4>
                            <p className="text-ocean/60 font-nunito leading-relaxed">{faq.a}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-12">
              <div className="bg-ocean text-sail p-10 shadow-xl relative overflow-hidden">
                 <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
                 <FileText className="text-gold mb-6" size={32} />
                 <h3 className="font-bebas text-3xl mb-4">The Captain's Guide to Claims</h3>
                 <p className="text-sm font-nunito opacity-60 mb-8 leading-relaxed">
                    Our exclusive whitepaper on how to document an incident at sea for a successful insurance claim.
                 </p>
                 <Button variant="gold" className="w-full">Download PDF</Button>
              </div>

              <div className="bg-white p-10 border border-ocean/5 shadow-sm">
                 <h3 className="font-bebas text-2xl text-ocean mb-6">Comparison Table</h3>
                 <div className="space-y-4">
                    {["Hull Damage", "Third Party", "Salvage Costs", "Personal Effects", "Racing Coverage"].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-ocean/5 last:border-0">
                         <span className="text-xs font-bold uppercase tracking-widest text-ocean/40">{item}</span>
                         <Check size={14} className="text-teal" />
                      </div>
                    ))}
                 </div>
                 <Button variant="ghost" className="w-full mt-8 text-xs font-bold uppercase tracking-widest text-ocean/30">View Full Table</Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
