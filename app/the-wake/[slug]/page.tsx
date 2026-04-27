import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MOCK_ARTICLES } from "@/lib/mock-data";
import { Clock, User, Share2, Facebook, Twitter, Link as LinkIcon, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { generateSchema } from "@/lib/seo";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug) || MOCK_ARTICLES[0];

  if (!article) notFound();

  const schema = {
    headline: article.title,
    image: article.image,
    author: {
      "@type": "Person",
      "name": article.author,
    },
    datePublished: article.date,
    description: article.excerpt,
  };

  return (
    <article className="bg-sail min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateSchema("Article", schema)}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ocean/40" />
        <div className="absolute inset-0 chart-overlay opacity-10" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center container px-6 mx-auto">
          <Link href="/the-wake" className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.4em] mb-12 hover:gap-4 transition-all">
             <ArrowLeft size={16} /> Back to Journal
          </Link>
          <div className="bg-compass text-sail px-6 py-2 text-sm font-bebas tracking-widest mb-8">
             {article.category}
          </div>
          <h1 className="text-6xl md:text-8xl text-sail font-bebas leading-[0.9] max-w-5xl mb-12 tracking-tighter drop-shadow-2xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-sail/60">
             <span className="flex items-center gap-2 text-sail"><User size={14} className="text-gold" /> {article.author}</span>
             <span className="flex items-center gap-2"><Clock size={14} /> {article.readTime}</span>
             <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="prose prose-xl prose-ocean font-nunito leading-relaxed text-ocean/80">
          <p className="text-2xl font-light text-ocean mb-12 leading-relaxed first-letter:text-7xl first-letter:font-bebas first-letter:text-gold first-letter:mr-3 first-letter:float-left">
            {article.excerpt}
          </p>
          
          <p>
            The sea has a way of stripping back the layers of artifice we build in our daily lives. Out here, 50 miles from the nearest coast, the only things that matter are the set of your sails, the depth of the water, and the honesty of your crew.
          </p>

          <h2 className="font-bebas text-4xl text-ocean mt-16 mb-8">The Weight of the Wind</h2>
          
          <p>
            Crossing the Channel at night is a ritual of passage for many sailors, but for Marcus Thorne, it was the start of a much longer journey. "We were doing 8 knots under a reefed main and the spray was lighting up with bioluminescence," he recalls, his eyes fixed on some distant horizon only he can see.
          </p>

          <blockquote className="border-l-4 border-gold pl-10 my-16 italic text-3xl font-light text-ocean">
            "Sailing isn't about where you're going; it's about the intelligence you gather along the way."
          </blockquote>

          <p>
            The technology we carry in our cockpits has changed—AIS, digital charts, and satellite weather have tamed the dragons that used to inhabit the edges of the maps. But the fundamental relationship between a sailor and the ocean remains unchanged. It is a dialogue of respect, punctuated by long silences and occasional, violent interruptions.
          </p>

          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="relative h-[400px]">
                <Image src="https://images.unsplash.com/photo-1542612711-665519808d7e?auto=format&fit=crop&q=80&w=600" alt="Detail" fill className="object-cover" />
             </div>
             <div className="relative h-[400px]">
                <Image src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600" alt="Detail" fill className="object-cover" />
             </div>
          </div>

          <p>
            As we conclude our interview in the quiet cockpit of his Hallberg-Rassy, the sun is beginning to dip below the breakwater. The masts in the marina create a rhythmic clatter, a mechanical chorus that underscores the peace of the harbor. "Next week?" Marcus smiles. "Next week we're heading West. There's an anchorage in the Scillies that I haven't seen in ten years."
          </p>
        </div>

        {/* Footer / Share */}
        <div className="mt-24 pt-12 border-t border-ocean/10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-ocean/40">Share Passage</span>
              <div className="flex gap-4">
                 <button className="p-2 hover:text-gold transition-colors"><Facebook size={18} /></button>
                 <button className="p-2 hover:text-gold transition-colors"><Twitter size={18} /></button>
                 <button className="p-2 hover:text-gold transition-colors"><LinkIcon size={18} /></button>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-ocean/40">Keep Reading</span>
              <Button variant="outline" className="group">
                 Next Story <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
           </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="bg-ocean py-24">
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="w-32 h-32 bg-sail/10 shrink-0 relative overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=200" alt="Author" fill className="object-cover grayscale" />
               </div>
               <div className="text-center md:text-left">
                  <h4 className="font-bebas text-3xl text-sail mb-4">{article.author}</h4>
                  <p className="text-sail/60 font-nunito leading-relaxed">
                     Emma has been writing about the sea for over two decades. A lifelong sailor with multiple Atlantic crossings under her belt, she specializes in the intersection of seamanship and maritime culture.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </article>
  );
}
