import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_ARTICLES } from "@/lib/mock-data";
import { ArrowRight, Newspaper, Clock, User, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function TheWakePage() {
  const featured = MOCK_ARTICLES[0];
  const others = MOCK_ARTICLES.slice(1);

  const categories = ["Passages & Destinations", "Boat Tests", "Safety & Seamanship", "Interviews", "Technical Guides"];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-7xl text-ocean font-bebas mb-6 leading-none">
              THE <span className="text-compass">WAKE</span>
            </h1>
            <p className="text-lg text-ocean/60 font-nunito">
              Journalism, intelligence, and accounts of life on the water. For people who take their sailing as seriously as professionals.
            </p>
          </div>
          <div className="flex gap-4 border-b border-ocean/10 pb-4 w-full md:w-auto overflow-x-auto scrollbar-hide">
             {categories.map((cat) => (
               <button key={cat} className="text-[10px] font-bold uppercase tracking-[0.2em] text-ocean/40 hover:text-gold transition-colors whitespace-nowrap">
                 {cat}
               </button>
             ))}
          </div>
        </div>

        {/* Featured Story */}
        <section className="mb-32">
          <Link href={`/the-wake/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-7 relative h-[600px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8">
                  <div className="bg-compass text-sail px-6 py-2 text-sm font-bebas tracking-widest">
                    {featured.category}
                  </div>
                </div>
             </div>
             <div className="lg:col-span-5">
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-6">
                  <span className="flex items-center gap-2"><User size={14} className="text-gold" /> {featured.author}</span>
                  <span className="flex items-center gap-2"><Clock size={14} /> {featured.readTime}</span>
                </div>
                <h2 className="text-6xl font-bebas text-ocean mb-8 group-hover:text-gold transition-colors leading-none tracking-tight">
                  {featured.title}
                </h2>
                <p className="text-xl text-ocean/60 font-nunito mb-10 leading-relaxed italic">
                  "{featured.excerpt}"
                </p>
                <Button variant="outline" className="group">
                  Read Full Account
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
             </div>
          </Link>
        </section>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {MOCK_ARTICLES.concat(MOCK_ARTICLES).map((article, i) => (
            <Link key={i} href={`/the-wake/${article.slug}`} className="group flex flex-col">
               <div className="relative h-[300px] mb-8 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ocean/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-compass mb-4">
                 {article.category}
               </div>
               <h3 className="text-3xl font-bebas text-ocean mb-4 group-hover:text-gold transition-colors leading-none">
                 {article.title}
               </h3>
               <p className="text-ocean/60 font-nunito text-sm line-clamp-3 mb-6">
                 {article.excerpt}
               </p>
               <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-ocean/30">
                  <span className="flex items-center gap-2"><User size={12} /> {article.author}</span>
                  <span>{article.readTime}</span>
               </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-32 pt-12 border-t border-ocean/10 flex items-center justify-between">
           <span className="text-xs font-bold text-ocean/40 uppercase tracking-widest">Page 01 — 12</span>
           <div className="flex gap-4">
              <Button variant="outline" size="sm">Older Stories</Button>
           </div>
        </div>
      </div>
    </div>
  );
}
