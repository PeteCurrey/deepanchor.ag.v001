import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MOCK_ARTICLES } from "@/lib/mock-data";

export function TheWakePreview() {
  const featured = MOCK_ARTICLES[0];
  const others = MOCK_ARTICLES.slice(1);

  return (
    <section className="py-32 bg-sail relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-6xl text-ocean font-bebas mb-6 leading-none">
              THE <span className="text-compass">WAKE</span>
            </h2>
            <p className="text-lg text-ocean/60 font-nunito">
              In-depth journalism, technical deep dives, and honest accounts of life on the water. Stay ahead of the tide with our weekly editorial.
            </p>
          </div>
          <Link href="/the-wake">
            <Button variant="ghost" className="group text-ocean">
              Read The Journal
              <Newspaper className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Article */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative h-[500px] mb-8 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <div className="bg-compass text-sail px-4 py-1 text-xs font-bebas tracking-widest">
                  {featured.category}
                </div>
              </div>
            </div>
            <div className="max-w-2xl">
              <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-4">
                <span className="flex items-center gap-2"><User size={12} className="text-gold" /> {featured.author}</span>
                <span className="flex items-center gap-2"><Clock size={12} /> {featured.readTime}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bebas text-ocean mb-6 group-hover:text-gold transition-colors leading-tight">
                {featured.title}
              </h3>
              <p className="text-ocean/60 font-nunito text-lg mb-8">
                {featured.excerpt}
              </p>
              <Button variant="outline" className="group">
                Read Full Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Side Articles */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            {others.map((article) => (
              <div key={article.id} className="group cursor-pointer grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-2 relative h-[200px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="md:col-span-3 flex flex-col justify-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-compass mb-2">
                    {article.category}
                  </div>
                  <h4 className="text-2xl font-bebas text-ocean mb-3 group-hover:text-gold transition-colors leading-none">
                    {article.title}
                  </h4>
                  <p className="text-sm text-ocean/60 font-nunito line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-ocean/30">
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Newsletter Mini CTA */}
            <div className="mt-auto bg-ocean p-8 text-sail relative overflow-hidden">
              <div className="absolute inset-0 chart-overlay opacity-5 pointer-events-none" />
              <h4 className="font-bebas text-2xl mb-4 relative z-10">Get the Weekly Forecast</h4>
              <p className="text-sm text-sail/60 mb-6 font-nunito relative z-10">
                The latest intelligence and offshore stories, delivered to your cockpit every Friday.
              </p>
              <div className="flex gap-2 relative z-10">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-sail/10 border border-sail/20 px-4 py-2 text-sm w-full outline-none focus:border-gold"
                />
                <Button variant="gold" size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
