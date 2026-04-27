"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Wind, Navigation, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517032283973-460ca466f917?auto=format&fit=crop&q=100&w=2400"
          alt="Offshore sailing yacht at dawn"
          fill
          className="object-cover scale-110 motion-safe:animate-pulse-slow"
          priority
        />
        <div className="absolute inset-0 bg-ocean/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 chart-overlay opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl text-sail font-bebas leading-none tracking-tighter mb-6 drop-shadow-2xl">
              YOUR PASSAGE <span className="text-gold">STARTS HERE</span>
            </h1>
            <p className="text-xl md:text-2xl text-sail/90 font-nunito font-light mb-12 max-w-2xl mx-auto drop-shadow-md">
              The world's most complete intelligence, planning, and community platform for serious recreational sailors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" variant="danger" className="text-xl group">
              Plan Your Passage
              <Navigation className="ml-3 w-6 h-6 transition-transform group-hover:rotate-45" />
            </Button>
            <Button size="lg" variant="outline" className="text-xl text-sail border-sail hover:bg-sail hover:text-ocean">
              Explore Marinas
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Hero Weather Widget */}
      <div className="absolute bottom-12 right-12 z-20 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="glass-panel p-8 text-ocean max-w-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bebas text-2xl tracking-wide">Current Conditions</h3>
            <Wind className="text-gold animate-pulse" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-ocean/60 mb-1">Wind Speed</p>
              <p className="text-4xl font-bebas">18 <span className="text-lg">KTS</span></p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-ocean/60 mb-1">Direction</p>
              <p className="text-4xl font-bebas text-gold">SW</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-ocean/60 mb-1">Beaufort</p>
              <p className="text-4xl font-bebas">F5 <span className="text-lg">Fresh</span></p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-ocean/60 mb-1">Visibility</p>
              <p className="text-4xl font-bebas">10 <span className="text-lg">NM</span></p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-ocean/10 flex items-center justify-between text-xs font-bold uppercase tracking-widest opacity-60">
            <span>Next High Water</span>
            <span className="text-gold">14:42 • 4.2m</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-sail/40 uppercase tracking-[0.3em] font-bold">Cast Off</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent animate-bounce" />
      </div>
    </section>
  );
}
