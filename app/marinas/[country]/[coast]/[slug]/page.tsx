import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MOCK_MARINAS } from "@/lib/mock-data";
import { MarinaBriefBox } from "@/components/marina/MarinaBriefBox";
import { Button } from "@/components/ui/Button";
import { Star, MapPin, Wind, Waves, Radio, Anchor, Info, AlertTriangle, MessageSquare } from "lucide-react";
import { generateSchema } from "@/lib/seo";

export default async function MarinaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const marina = MOCK_MARINAS.find((m) => m.slug === slug) || MOCK_MARINAS[0];

  if (!marina) notFound();

  const schema = {
    name: marina.name,
    description: marina.description,
    address: {
      "@type": "PostalAddress",
      "addressCountry": marina.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": marina.lat,
      "longitude": marina.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      "ratingValue": marina.rating,
      "reviewCount": marina.reviews,
    },
  };

  return (
    <div className="bg-sail min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateSchema("TouristDestination", schema)}
      />

      {/* Hero Gallery */}
      <section className="relative h-[60vh] overflow-hidden group">
        <Image
          src={marina.image}
          alt={marina.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean via-transparent to-transparent opacity-80" />
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 container px-6 flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
              <MapPin size={16} />
              {marina.country.toUpperCase()} • {marina.coast.replace("-", " ").toUpperCase()}
            </div>
            <h1 className="text-6xl md:text-8xl text-sail font-bebas leading-none tracking-tighter mb-2 shadow-text">
              {marina.name}
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className={i <= Math.floor(marina.rating) ? "text-gold fill-gold" : "text-sail/20"} />
                  ))}
                </div>
                <span className="text-sail font-bold text-sm">{marina.rating} ({marina.reviews} Reviews)</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="gold" size="lg" className="text-xl">Check Availability</Button>
            <Button variant="outline" size="lg" className="text-sail border-sail hover:bg-sail hover:text-ocean text-xl">
              Write Review
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Col: Info & Detail */}
          <div className="lg:col-span-8 space-y-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-5xl font-bebas text-ocean mb-8 leading-none">MARINA <span className="text-teal">OVERVIEW</span></h2>
              <p className="text-xl text-ocean/70 font-nunito leading-relaxed">
                {marina.description}
              </p>
            </div>

            {/* Approach Notes */}
            <div className="bg-white p-12 border border-ocean/5 shadow-sm">
              <h3 className="text-3xl font-bebas text-ocean mb-8 flex items-center gap-4">
                <AlertTriangle className="text-compass" />
                APPROACH & PILOTAGE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">Entry Notes</h4>
                    <p className="text-ocean/70 text-sm leading-relaxed">
                      Approach via the main Lymington River channel. Seasonal racing marks are present. Stick to the buoyed channel to avoid mudbanks.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">VHF Protocol</h4>
                    <p className="text-ocean/70 text-sm leading-relaxed">
                      Call "Lymington Yacht Haven" on VHF CH {marina.vhfChannel} when passing the Royal Lymington Yacht Club.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 mb-2">Hazards</h4>
                    <p className="text-ocean/70 text-sm leading-relaxed">
                      Strong cross-tides on the river. Ferries have right of way and create significant wash. Draft limited to {marina.depthMLWS}m at MLWS.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities Detail */}
            <div>
              <h2 className="text-5xl font-bebas text-ocean mb-12 leading-none">FACILITIES <span className="text-gold">& SERVICES</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {marina.facilities.map((facility) => (
                  <div key={facility} className="bg-white p-6 border border-ocean/5 flex flex-col items-center gap-4 group hover:border-gold transition-colors">
                    <Anchor className="w-8 h-8 text-ocean/20 group-hover:text-gold transition-colors" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-ocean/60 text-center">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reviews Section */}
            <div className="pt-16 border-t border-ocean/5">
               <h2 className="text-5xl font-bebas text-ocean mb-12 leading-none">VISITOR <span className="text-teal">REVIEWS</span></h2>
               <div className="space-y-8">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-white p-8 border border-ocean/5">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-ocean/5 rounded-full flex items-center justify-center font-bebas text-ocean">MT</div>
                          <div>
                            <h4 className="font-bebas text-lg leading-none">Marcus Thorne</h4>
                            <p className="text-[10px] uppercase font-bold text-ocean/30 mt-1">SV Windweaver • April 2026</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5 text-gold">
                           {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                        </div>
                      </div>
                      <p className="text-ocean/70 font-nunito leading-relaxed">
                        Excellent stay. Staff were extremely helpful with lines in a tricky breeze. The facilities are top-notch and the bistro was perfect for a post-passage meal.
                      </p>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full text-ocean/40 font-bebas">View All {marina.reviews} Reviews</Button>
               </div>
            </div>
          </div>

          {/* Right Col: Sidebar Brief & Widgets */}
          <div className="lg:col-span-4 space-y-12">
            <MarinaBriefBox marina={marina} />
            
            {/* Weather Mini Widget */}
            <div className="bg-white p-8 border border-ocean/5 shadow-sm">
              <h4 className="font-bebas text-xl text-ocean mb-6 flex items-center justify-between">
                Current Weather
                <Wind className="text-gold" />
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] uppercase font-bold text-ocean/40 mb-1">Wind</p>
                  <p className="font-bebas text-2xl">14 KTS SW</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-ocean/40 mb-1">Sea State</p>
                  <p className="font-bebas text-2xl">Slight</p>
                </div>
              </div>
            </div>

            {/* Passage Planning CTA */}
            <div className="bg-teal p-10 text-sail relative overflow-hidden">
               <div className="absolute inset-0 chart-overlay opacity-10 pointer-events-none" />
               <h4 className="font-bebas text-2xl mb-4">Plan Passage to {marina.name}</h4>
               <p className="text-sm font-nunito mb-8 opacity-70">Get AI-generated waypoints and tidal windows for your arrival.</p>
               <Button variant="outline" className="w-full text-sail border-sail hover:bg-sail hover:text-teal font-bebas">Start Planning</Button>
            </div>

            {/* Nearest Services Map Placeholder */}
            <div className="bg-ocean/5 h-[300px] flex flex-col items-center justify-center p-12 text-center">
               <MapPin className="text-ocean/20 w-12 h-12 mb-4" />
               <p className="text-xs font-bold uppercase tracking-widest text-ocean/40">Local Services Map</p>
               <p className="text-[10px] text-ocean/20 mt-2">Chandlers • Engineering • Supermarkets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
