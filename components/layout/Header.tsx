"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, Menu, X, Anchor, Map, Newspaper, Users, Wrench, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons: Record<string, React.ReactNode> = {
    "Marinas": <Anchor className="w-4 h-4" />,
    "Passage Planner": <Map className="w-4 h-4" />,
    "The Wake": <Newspaper className="w-4 h-4" />,
    "Maintenance": <Wrench className="w-4 h-4" />,
    "Community": <Users className="w-4 h-4" />,
    "Pricing": <CreditCard className="w-4 h-4" />,
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-ocean/95 backdrop-blur-md py-3 shadow-xl" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Compass className={cn("w-10 h-10 transition-transform duration-500 group-hover:rotate-90", isScrolled ? "text-gold" : "text-gold")} />
          <span className={cn("text-3xl font-bebas tracking-wider", isScrolled ? "text-sail" : "text-sail")}>
            DEEP <span className="text-gold">ANCHOR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-2 text-sm font-bebas tracking-wide transition-colors hover:text-gold",
                isScrolled ? "text-sail/90" : "text-sail"
              )}
            >
              {icons[link.name]}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" className={cn(isScrolled ? "text-sail" : "text-sail")}>
            Log In
          </Button>
          <Button variant="danger">
            Start Free
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-sail"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-ocean z-40 transition-transform duration-500 lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-bebas text-sail hover:text-gold transition-colors flex items-center gap-4"
            >
              {icons[link.name]}
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 w-full mt-8">
            <Button variant="outline" className="w-full text-sail border-sail hover:bg-sail hover:text-ocean">
              Log In
            </Button>
            <Button variant="danger" className="w-full">
              Start Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
