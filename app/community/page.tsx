import React from "react";
import { Users, MapPin, MessageSquare, Ship, Search, Plus, Filter, Navigation, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

const POSTS = [
  { vessel: "Aurelia", user: "Captain Dave", title: "Best anchorage in the Solent for a quiet night?", category: "Destinations", replies: 12, time: "2h ago" },
  { vessel: "Mistral", user: "Sarah B.", title: "Looking for crew: Falmouth to Cork (May 14th)", category: "Crew Wanted", replies: 8, time: "4h ago" },
  { vessel: "Sea Dog", user: "Mike T.", title: "Volvo Penta D2-40 overheating issues", category: "Technical", replies: 24, time: "6h ago" },
];

export default function CommunityPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-7xl text-ocean font-bebas mb-6 leading-none">
              THE <span className="text-gold">QUARTERDECK</span>
            </h1>
            <p className="text-lg text-ocean/60 font-nunito">
              The intelligence and community hub for serious sailors. Share your position, find your crew, and trade insights.
            </p>
          </div>
          <div className="flex gap-4">
             <Button variant="danger" className="flex items-center gap-2">
                <Plus size={18} /> New Post
             </Button>
          </div>
        </div>

        {/* Community Map Placeholder */}
        <div className="h-[400px] bg-ocean relative overflow-hidden mb-16 shadow-2xl">
           <div className="absolute inset-0 chart-overlay opacity-10 pointer-events-none" />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">
                 <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                 Currently Underway
              </div>
              <h2 className="text-5xl font-bebas text-sail mb-4 leading-none">COMMUNITY POSITION MAP</h2>
              <p className="text-sail/40 font-nunito max-w-sm mb-8">
                 See where 2,400+ members are currently sailing. (Mapbox GL JS Real-time Layer)
              </p>
              <Button variant="outline" className="text-sail border-sail hover:bg-sail hover:text-ocean">
                 Enable My AIS Position
              </Button>
           </div>
           {/* Mock ship dots */}
           {[...Array(12)].map((_, i) => (
             <div 
               key={i} 
               className="absolute w-2 h-2 bg-gold rounded-full opacity-40 animate-pulse"
               style={{ 
                 top: `${Math.random() * 80 + 10}%`, 
                 left: `${Math.random() * 80 + 10}%` 
               }}
             />
           ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Discussion Feed */}
           <div className="lg:col-span-8 space-y-12">
              <div className="flex items-center justify-between border-b border-ocean/10 pb-6">
                 <h2 className="text-4xl font-bebas text-ocean uppercase tracking-wider">Discussion <span className="text-teal">Board</span></h2>
                 <div className="flex gap-6">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-ocean border-b-2 border-gold pb-1">Recent</button>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 hover:text-ocean transition-colors pb-1">Trending</button>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-ocean/40 hover:text-ocean transition-colors pb-1">My Posts</button>
                 </div>
              </div>

              <div className="space-y-6">
                 {POSTS.map((post, i) => (
                   <div key={i} className="bg-white p-8 border border-ocean/5 group hover:border-gold cursor-pointer transition-all">
                      <div className="flex items-center justify-between mb-4">
                         <div className="flex items-center gap-3">
                            <div className="bg-ocean/5 text-ocean px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                               {post.category}
                            </div>
                            <span className="text-[10px] font-bold text-ocean/30 uppercase tracking-widest flex items-center gap-1">
                               <Clock size={12} /> {post.time}
                            </span>
                         </div>
                         <div className="flex items-center gap-2 text-ocean/30 text-xs font-bold uppercase tracking-widest">
                            <MessageSquare size={14} /> {post.replies} Replies
                         </div>
                      </div>
                      <h3 className="text-3xl font-bebas text-ocean mb-4 group-hover:text-gold transition-colors tracking-tight">{post.title}</h3>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center font-bebas text-gold text-xs">
                               {post.user[0]}
                            </div>
                            <div className="flex flex-col">
                               <span className="text-xs font-bold text-ocean">{post.user}</span>
                               <span className="text-[10px] uppercase font-bold text-ocean/30 tracking-widest">SV {post.vessel}</span>
                            </div>
                         </div>
                         <Button variant="ghost" size="sm" className="group-hover:text-gold">Join Thread</Button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Sidebar: Crew & Classifieds */}
           <div className="lg:col-span-4 space-y-16">
              {/* Crew Wanted Mini Feed */}
              <div>
                 <h3 className="text-3xl font-bebas text-ocean mb-8 border-b border-ocean/10 pb-4">CREW <span className="text-compass">WANTED</span></h3>
                 <div className="space-y-6">
                    {[1, 2].map(i => (
                       <div key={i} className="bg-white p-6 border border-ocean/5 shadow-sm">
                          <div className="flex items-center justify-between mb-4">
                             <div className="flex items-center gap-2">
                                <Navigation size={14} className="text-gold" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-ocean">Solent → Brittany</span>
                             </div>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-teal">Day  Skipper Required</span>
                          </div>
                          <h4 className="font-bebas text-xl text-ocean mb-2">Oceanis 411 • 2 Weeks</h4>
                          <p className="text-xs text-ocean/60 font-nunito mb-4 line-clamp-2">Looking for a competent Day Skipper to join for a 2-week cruise across to North Brittany...</p>
                          <Button variant="outline" size="sm" className="w-full text-xs">Apply to Join</Button>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Classifieds Mini Feed */}
              <div>
                 <h3 className="text-3xl font-bebas text-ocean mb-8 border-b border-ocean/10 pb-4">BOAT <span className="text-gold">SALES</span></h3>
                 <div className="space-y-6">
                    {[1, 2].map(i => (
                       <div key={i} className="bg-white p-6 border border-ocean/5 shadow-sm group cursor-pointer hover:border-gold transition-all">
                          <div className="relative h-[150px] mb-4 bg-ocean/5 overflow-hidden">
                             <div className="absolute inset-0 flex items-center justify-center text-ocean/10 font-bebas text-3xl">PHOTO</div>
                             <div className="absolute top-2 right-2 bg-ocean text-sail px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                                £124,000
                             </div>
                          </div>
                          <h4 className="font-bebas text-xl text-ocean leading-tight">Beneteau Oceanis 38.1 (2018)</h4>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/30 mt-1">Hamble, UK • Immaculate</p>
                       </div>
                    ))}
                 </div>
                 <Button variant="ghost" className="w-full mt-6 text-xs font-bold uppercase tracking-widest text-ocean/30">View All Listings</Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
