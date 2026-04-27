import React from "react";
import Link from "next/link";
import { Compass, Instagram, Twitter, Youtube, Anchor } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-ocean text-sail py-20 border-t border-sail/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Compass className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bebas tracking-wider">
                DEEP <span className="text-gold">ANCHOR</span>
              </span>
            </Link>
            <p className="text-sail/60 text-sm leading-relaxed max-w-xs">
              The world's most complete intelligence platform for serious recreational sailors. Built by sailors, for sailors.
            </p>
            <div className="space-y-4">
              <p className="font-bebas text-lg tracking-wide">The Weekly Forecast</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-sail/5 border border-sail/10 px-4 py-2 text-sm focus:outline-none focus:border-gold w-full"
                />
                <Button variant="gold" size="sm">Join</Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bebas text-xl tracking-wide text-gold">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm text-sail/70">
              <li><Link href="/marinas" className="hover:text-gold transition-colors">Marina Directory</Link></li>
              <li><Link href="/passage-planner" className="hover:text-gold transition-colors">Passage Planner</Link></li>
              <li><Link href="/the-wake" className="hover:text-gold transition-colors">The Wake Editorial</Link></li>
              <li><Link href="/community" className="hover:text-gold transition-colors">Community Hub</Link></li>
              <li><Link href="/pricing" className="hover:text-gold transition-colors">Subscription Plans</Link></li>
            </ul>
          </div>

          {/* Top Marinas */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bebas text-xl tracking-wide text-gold">Top Coasts</h4>
            <ul className="flex flex-col gap-3 text-sm text-sail/70">
              <li><Link href="/marinas/uk/south-coast" className="hover:text-gold transition-colors">UK South Coast</Link></li>
              <li><Link href="/marinas/uk/west-country" className="hover:text-gold transition-colors">UK West Country</Link></li>
              <li><Link href="/marinas/uk/east-coast" className="hover:text-gold transition-colors">UK East Coast</Link></li>
              <li><Link href="/marinas/uk/scotland" className="hover:text-gold transition-colors">Scottish Highlands</Link></li>
              <li><Link href="/marinas/france/brittany" className="hover:text-gold transition-colors">Brittany, France</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bebas text-xl tracking-wide text-gold">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-sail/70">
              <li><Link href="/maintenance" className="hover:text-gold transition-colors">Maintenance Guides</Link></li>
              <li><Link href="/rya-courses" className="hover:text-gold transition-colors">RYA Course Finder</Link></li>
              <li><Link href="/yacht-insurance" className="hover:text-gold transition-colors">Boat Insurance Guide</Link></li>
              <li><Link href="/glossary" className="hover:text-gold transition-colors">Marine Glossary</Link></li>
              <li><Link href="/oracle" className="hover:text-gold transition-colors">Deep Anchor Oracle</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-sail/10 gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-help opacity-60 hover:opacity-100">
              <span className="text-[10px] font-bold uppercase tracking-widest">Partner</span>
              <span className="font-bebas text-lg">RYA</span>
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-help opacity-60 hover:opacity-100">
              <span className="text-[10px] font-bold uppercase tracking-widest">Partner</span>
              <span className="font-bebas text-lg uppercase">Yachting Monthly</span>
            </div>
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-sail/40 hover:text-gold transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="text-sail/40 hover:text-gold transition-colors"><Twitter size={20} /></Link>
            <Link href="#" className="text-sail/40 hover:text-gold transition-colors"><Youtube size={20} /></Link>
          </div>

          <p className="text-xs text-sail/40">
            © {new Date().getFullYear()} Deep Anchor Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
