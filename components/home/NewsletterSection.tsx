import React from "react";
import { Button } from "@/components/ui/Button";
import { Mail, Ship, Bell } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-32 bg-teal relative overflow-hidden">
      <div className="absolute inset-0 chart-overlay opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <Ship className="w-16 h-16 text-sail/20 mx-auto mb-8" />
          <h2 className="text-6xl md:text-7xl text-sail font-bebas mb-6 leading-none">
            THE WEEKLY <span className="text-ocean">FORECAST</span>
          </h2>
          <p className="text-xl text-sail/80 font-nunito mb-12">
            Stay ahead of the tide with our curated briefing of offshore intelligence, new marina listings, and seamanship guides.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto p-2 bg-sail/10 backdrop-blur-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent border-none px-6 py-4 text-sail placeholder:text-sail/40 font-nunito outline-none"
            />
            <Button variant="primary" className="bg-ocean hover:bg-ocean-dark py-4 px-10 text-lg">
              Subscribe
            </Button>
          </form>

          <div className="flex items-center justify-center gap-12 mt-12">
            <div className="flex items-center gap-3 text-sail/60 text-xs font-bold uppercase tracking-widest">
              <Bell size={16} />
              No Spam
            </div>
            <div className="flex items-center gap-3 text-sail/60 text-xs font-bold uppercase tracking-widest">
              <Mail size={16} />
              Weekly Brief
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
