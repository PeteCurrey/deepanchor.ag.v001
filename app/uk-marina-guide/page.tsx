import React from "react";
import { Button } from "@/components/ui/Button";
import { Search, MapPin, Anchor, Star, ArrowRight, ShieldCheck, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_MARINAS } from "@/lib/mock-data";

export default function UKMarinaGuideLP() {
  return (
    <div className="bg-sail">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center pt-20">
         <div className="absolute inset-0 z-0">
            <Image 
               src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=100&w=2400" 
               alt="UK Marina" 
               fill 
               className="object-cover" 
            />
            <div className="absolute inset-0 bg-ocean/60 backdrop-blur-[1px]" />
         </div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
               <h1 className="text-7xl md:text-9xl text-sail font-bebas leading-[0.85] mb-8 tracking-tighter">
                  THE ULTIMATE <br />
                  <span className="text-gold">UK MARINA GUIDE</span>
               </h1>
               <p className="text-2xl text-sail/80 font-nunito mb-12 max-w-2xl leading-relaxed">
                  Discover over 500 verified marinas and harbours around the British Isles. Live depth data, visitor berth availability, and local intelligence.
               </p>
               
               <div className="flex flex-col md:flex-row gap-4 bg-white p-2 shadow-2xl max-w-2xl">
                  <div className="flex-grow flex items-center gap-4 px-6 py-4">
                     <MapPin className="text-gold" />
                     <input type="text" placeholder="Enter town or postcode..." className="w-full outline-none font-nunito text-ocean" />
                  </div>
                  <Button variant="danger" size="lg" className="py-6 px-12 text-xl">Find Marinas</Button>
               </div>
            </div>
         </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-ocean py-8 border-y border-sail/10">
         <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-12 opacity-40">
            <span className="font-bebas text-xl text-sail">RYA ACCREDITED</span>
            <span className="font-bebas text-xl text-sail uppercase">Yachting Monthly Verified</span>
            <span className="font-bebas text-xl text-sail">BRITISH MARINE</span>
            <span className="font-bebas text-xl text-sail uppercase">Cruising Association</span>
         </div>
      </section>

      {/* Features */}
      <section className="py-32 container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
               <div className="w-16 h-16 bg-gold/10 flex items-center justify-center text-gold">
                  <ShieldCheck size={32} />
               </div>
               <h3 className="text-4xl font-bebas text-ocean">Verified Data</h3>
               <p className="text-ocean/60 font-nunito leading-relaxed">
                  Every marina listing is manually verified for depth, VHF protocols, and facility availability by our coastal intelligence team.
               </p>
            </div>
            <div className="space-y-6">
               <div className="w-16 h-16 bg-teal/10 flex items-center justify-center text-teal">
                  <Star size={32} />
               </div>
               <h3 className="text-4xl font-bebas text-ocean">Community Ratings</h3>
               <p className="text-ocean/60 font-nunito leading-relaxed">
                  Real reviews from real sailors. Get the truth about visitor berth pricing and shore-side facilities before you arrive.
               </p>
            </div>
            <div className="space-y-6">
               <div className="w-16 h-16 bg-ocean/5 flex items-center justify-center text-ocean">
                  <Anchor size={32} />
               </div>
               <h3 className="text-4xl font-bebas text-ocean">Integrated Pilotage</h3>
               <p className="text-ocean/60 font-nunito leading-relaxed">
                  Combined pilotage notes and approach hazards for every UK harbour, updated with real-time NOTAM alerts.
               </p>
            </div>
         </div>
      </section>

      {/* Featured Marinas Section */}
      <section className="py-32 bg-ocean text-sail">
         <div className="container mx-auto px-6">
            <h2 className="text-6xl font-bebas mb-16 text-center uppercase tracking-wider">Top Rated <span className="text-gold">UK Destinations</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {MOCK_MARINAS.map(m => (
                 <Link key={m.id} href={`/marinas/uk/${m.coast}/${m.slug}`} className="group relative h-[400px] overflow-hidden">
                    <Image src={m.image} alt={m.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                       <h4 className="text-3xl font-bebas mb-1">{m.name}</h4>
                       <p className="text-xs font-bold text-gold uppercase tracking-widest">{m.coast.replace("-", " ")}</p>
                    </div>
                 </Link>
               ))}
            </div>
            <div className="mt-16 text-center">
               <Link href="/marinas">
                  <Button variant="gold" size="lg" className="text-xl group">
                     Explore All UK Marinas
                     <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </Link>
            </div>
         </div>
      </section>

      {/* Benefits List */}
      <section className="py-32 container mx-auto px-6">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-bebas text-ocean mb-12 uppercase">Why Sailors <span className="text-teal">Choose Us</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 text-left">
               {[
                 "Live visitor berth availability indicators",
                 "Verified tidal gate analysis for every harbour",
                 "Community-updated fuel & electricity prices",
                 "Downloadable PDF pilotage guides",
                 "Official UKHO & Met Office API integration",
                 "Real-time NOTAM and navigational alerts"
               ].map((benefit, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-teal text-sail rounded-full flex items-center justify-center shrink-0">
                       <Check size={14} />
                    </div>
                    <span className="text-lg font-nunito text-ocean/80">{benefit}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-compass text-sail text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-7xl font-bebas mb-8 tracking-tighter uppercase">Join 15,000+ UK Sailors</h2>
            <p className="text-2xl font-nunito mb-12 opacity-80 max-w-2xl mx-auto">
               Unlock the full power of Deep Anchor. Start planning your next UK coastal passage today.
            </p>
            <div className="flex justify-center gap-6">
               <Button variant="primary" className="bg-ocean text-xl py-6 px-12">Join the Crew</Button>
               <Button variant="outline" className="text-sail border-sail text-xl py-6 px-12">Pricing Plans</Button>
            </div>
         </div>
      </section>
    </div>
  );
}
