"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Info, ArrowRight, Anchor, Navigation, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRICING_TIERS } from "@/lib/constants";
import { cn, formatCurrency } from "@/lib/utils";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const tierIcons: Record<string, React.ReactNode> = {
    "Crew": <Anchor className="w-8 h-8 text-teal" />,
    "Captain": <Navigation className="w-8 h-8 text-gold" />,
    "Marina": <Shield className="w-8 h-8 text-ocean" />,
  };

  return (
    <section className="py-32 bg-ocean relative overflow-hidden">
      <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-6xl md:text-7xl text-sail font-bebas mb-6">
            CHOOSE YOUR <span className="text-gold">TIER</span>
          </h2>
          <p className="text-xl text-sail/60 font-nunito mb-12">
            Unlock professional-grade intelligence and community features. Save 17% with an annual subscription.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-6">
            <span className={cn("text-sm font-bebas tracking-widest", !isAnnual ? "text-sail" : "text-sail/40")}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-sail/10 rounded-full relative transition-colors hover:bg-sail/20 p-1"
            >
              <div className={cn(
                "w-6 h-6 bg-gold rounded-full transition-transform duration-300",
                isAnnual ? "translate-x-8" : "translate-x-0"
              )} />
            </button>
            <span className={cn("text-sm font-bebas tracking-widest", isAnnual ? "text-sail" : "text-sail/40")}>Annual</span>
            {isAnnual && (
              <span className="bg-gold/20 text-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                Save £60+
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "p-12 flex flex-col relative transition-all duration-500",
                tier.popular 
                  ? "bg-sail shadow-[0_0_100px_rgba(212,146,10,0.15)] ring-2 ring-gold" 
                  : "bg-sail/5 border border-sail/10 hover:border-sail/30"
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gold text-ocean font-bebas px-4 py-1 text-sm uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <div className="mb-6">{tierIcons[tier.name]}</div>
                <h3 className={cn("text-4xl font-bebas tracking-wide mb-2", tier.popular ? "text-ocean" : "text-sail")}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className={cn("text-5xl font-bebas", tier.popular ? "text-ocean" : "text-sail")}>
                    {formatCurrency(isAnnual ? tier.price * 0.83 : tier.price)}
                  </span>
                  <span className={cn("text-sm font-nunito uppercase tracking-widest opacity-40", tier.popular ? "text-ocean" : "text-sail")}>
                    / {tier.interval}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={cn("w-5 h-5 shrink-0 mt-0.5", tier.popular ? "text-teal" : "text-gold")} />
                    <span className={cn("text-sm font-nunito", tier.popular ? "text-ocean/70" : "text-sail/60")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "gold" : "outline"}
                className={cn(
                  "w-full py-6 text-xl group",
                  !tier.popular && "text-sail border-sail/20 hover:bg-sail hover:text-ocean"
                )}
              >
                {tier.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-20">
                <Info size={12} />
                Cancel anytime
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Link */}
        <div className="mt-20 text-center">
          <p className="text-sail/40 text-sm font-nunito mb-6 italic">
            * All prices exclude VAT where applicable. Annual billing saves up to 17% per year.
          </p>
          <Link href="/pricing" className="text-gold font-bebas text-lg tracking-widest hover:underline flex items-center justify-center gap-2">
            View Full Feature Comparison
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
