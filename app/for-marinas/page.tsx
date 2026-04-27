import React from "react";
import { Button } from "@/components/ui/Button";
import { Ship, Users, BarChart3, Globe, Check, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import Image from "next/image";

export default function ForMarinasLP() {
  return (
    <div className="bg-sail">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center pt-20 bg-ocean overflow-hidden">
         <div className="absolute inset-0 chart-overlay opacity-10 pointer-events-none" />
         <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/20 text-teal text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  <Globe size={12} />
                  Marina Intelligence Network
               </div>
               <h1 className="text-7xl md:text-9xl text-sail font-bebas leading-[0.85] mb-8 tracking-tighter">
                  GET YOUR MARINA <br />
                  <span className="text-gold">VERIFIED</span>
               </h1>
               <p className="text-2xl text-sail/60 font-nunito mb-12 max-w-xl leading-relaxed">
                  Join the world's most sophisticated maritime community. Increase visibility, manage visitor bookings, and connect with serious boaters.
               </p>
               <Button variant="gold" size="lg" className="text-xl py-8 px-12">Claim Your Listing</Button>
            </div>
            
            <div className="relative hidden lg:block">
               <div className="bg-sail/5 p-12 backdrop-blur-xl border border-sail/10 shadow-2xl">
                  <div className="flex items-center justify-between mb-12">
                     <h3 className="font-bebas text-3xl text-sail">Partner Dashboard</h3>
                     <ShieldCheck className="text-teal" />
                  </div>
                  <div className="space-y-8">
                     <div className="h-4 bg-sail/10 w-3/4" />
                     <div className="h-4 bg-sail/10 w-full" />
                     <div className="h-4 bg-sail/10 w-1/2" />
                     <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sail/10">
                        <div className="text-center">
                           <p className="text-[10px] font-bold text-sail/40 mb-1">Views</p>
                           <p className="text-2xl font-bebas text-gold">14.2K</p>
                        </div>
                        <div className="text-center">
                           <p className="text-[10px] font-bold text-sail/40 mb-1">Leads</p>
                           <p className="text-2xl font-bebas text-teal">248</p>
                        </div>
                        <div className="text-center">
                           <p className="text-[10px] font-bold text-sail/40 mb-1">Rating</p>
                           <p className="text-2xl font-bebas text-sail">4.8</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Benefits */}
      <section className="py-32 container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
               <div className="w-16 h-16 bg-ocean/5 flex items-center justify-center text-ocean">
                  <Users size={32} />
               </div>
               <h3 className="text-4xl font-bebas text-ocean">Direct Access</h3>
               <p className="text-ocean/60 font-nunito leading-relaxed">
                  Reach a targeted audience of 50,000+ active sailors monthly. Your marina is placed directly in front of skippers planning their next passage.
               </p>
            </div>
            <div className="space-y-6">
               <div className="w-16 h-16 bg-ocean/5 flex items-center justify-center text-ocean">
                  <BarChart3 size={32} />
               </div>
               <h3 className="text-4xl font-bebas text-ocean">Deep Analytics</h3>
               <p className="text-ocean/60 font-nunito leading-relaxed">
                  Understand visitor intent with our proprietary intelligence. See where visitors are arriving from and when they plan to stay.
               </p>
            </div>
            <div className="space-y-6">
               <div className="w-16 h-16 bg-ocean/5 flex items-center justify-center text-ocean">
                  <Ship size={32} />
               </div>
               <h3 className="text-4xl font-bebas text-ocean">Booking Tools</h3>
               <p className="text-ocean/60 font-nunito leading-relaxed">
                  Our platform integrates with your existing berth management systems or provides a lightweight solution for visitor berths.
               </p>
            </div>
         </div>
      </section>

      {/* Tiers */}
      <section className="py-32 bg-sail border-y border-ocean/10">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-6xl font-bebas text-ocean mb-16 uppercase">Listing <span className="text-gold">Tiers</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
               <div className="p-12 bg-white border border-ocean/10 text-left">
                  <h4 className="text-3xl font-bebas text-ocean mb-2">Verified Listing</h4>
                  <p className="text-4xl font-bebas text-gold mb-8">£49 <span className="text-sm">/ MONTH</span></p>
                  <ul className="space-y-4 mb-10">
                     {[
                       "Premium profile display",
                       "Verified facilities badge",
                       "Direct contact integration",
                       "Monthly view analytics"
                     ].map((f, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm font-nunito text-ocean/70">
                          <Check size={16} className="text-teal" /> {f}
                       </li>
                     ))}
                  </ul>
                  <Button variant="outline" className="w-full">Get Started</Button>
               </div>
               <div className="p-12 bg-ocean text-sail text-left shadow-2xl scale-105">
                  <h4 className="text-3xl font-bebas text-sail mb-2">Network Partner</h4>
                  <p className="text-4xl font-bebas text-teal mb-8">CONTACT US</p>
                  <ul className="space-y-4 mb-10">
                     {[
                       "Live berth booking integration",
                       "Priority placement in searches",
                       "Passage planner recommendations",
                       "Dedicated account manager",
                       "Custom lead generation"
                     ].map((f, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm font-nunito text-sail/60">
                          <Check size={16} className="text-teal" /> {f}
                       </li>
                     ))}
                  </ul>
                  <Button variant="gold" className="w-full">Speak to Sales</Button>
               </div>
            </div>
         </div>
      </section>

      {/* Form */}
      <section className="py-32 container mx-auto px-6 max-w-4xl">
         <div className="bg-white p-16 shadow-2xl">
            <h2 className="text-5xl font-bebas text-ocean mb-8 uppercase text-center">Request a <span className="text-teal">Demo</span></h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Marina Name</label>
                  <input type="text" className="w-full bg-ocean/5 border-none px-6 py-4 outline-none focus:ring-2 focus:ring-gold" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Your Name</label>
                  <input type="text" className="w-full bg-ocean/5 border-none px-6 py-4 outline-none focus:ring-2 focus:ring-gold" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Work Email</label>
                  <input type="email" className="w-full bg-ocean/5 border-none px-6 py-4 outline-none focus:ring-2 focus:ring-gold" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ocean/40">Phone Number</label>
                  <input type="tel" className="w-full bg-ocean/5 border-none px-6 py-4 outline-none focus:ring-2 focus:ring-gold" />
               </div>
               <div className="md:col-span-2">
                  <Button variant="primary" className="w-full py-6 text-xl">Submit Request</Button>
               </div>
            </form>
         </div>
      </section>
    </div>
  );
}
