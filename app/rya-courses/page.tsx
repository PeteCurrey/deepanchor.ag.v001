import React from "react";
import { GraduationCap, MapPin, Calendar, CreditCard, Filter, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const COURSES = [
  {
    level: "Day Skipper",
    type: "Practical",
    location: "Solent, UK",
    duration: "5 Days",
    price: 645,
    provider: "Solent Sailing School",
    rating: 4.9,
    nextDate: "May 12, 2026",
  },
  {
    level: "Yachtmaster Offshore",
    type: "Theory",
    location: "Online / Classroom",
    duration: "40 Hours",
    price: 425,
    provider: "Global Maritime Academy",
    rating: 4.8,
    nextDate: "June 01, 2026",
  },
  {
    level: "Competent Crew",
    type: "Practical",
    location: "South Devon, UK",
    duration: "5 Days",
    price: 595,
    provider: "West Country Sails",
    rating: 5.0,
    nextDate: "May 18, 2026",
  },
  {
    level: "Coastal Skipper",
    type: "Practical",
    location: "Clyde, Scotland",
    duration: "5 Days",
    price: 675,
    provider: "Highland Sailing",
    rating: 4.7,
    nextDate: "June 15, 2026",
  }
];

export default function RYACoursesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-sail">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-7xl text-ocean font-bebas mb-6 leading-none uppercase">
              RYA <span className="text-gold">COURSE FINDER</span>
            </h1>
            <p className="text-lg text-ocean/60 font-nunito">
              Master the art of seamanship. Browse verified RYA training providers and secure your next qualification.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean/40">
                <ShieldCheck className="text-gold" size={18} />
                RYA Accredited Providers Only
             </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white p-6 border border-ocean/5 shadow-sm mb-12 flex flex-wrap items-center gap-8">
           <div className="flex items-center gap-4 flex-grow max-w-sm">
              <Filter size={18} className="text-ocean/30" />
              <select className="w-full bg-transparent border-none text-ocean font-bebas text-xl outline-none">
                 <option>All Course Levels</option>
                 <option>Competent Crew</option>
                 <option>Day Skipper</option>
                 <option>Coastal Skipper</option>
                 <option>Yachtmaster</option>
              </select>
           </div>
           <div className="flex items-center gap-4 flex-grow max-w-sm">
              <MapPin size={18} className="text-ocean/30" />
              <select className="w-full bg-transparent border-none text-ocean font-bebas text-xl outline-none">
                 <option>All Locations</option>
                 <option>South Coast</option>
                 <option>West Country</option>
                 <option>Scotland</option>
                 <option>Wales</option>
                 <option>Online</option>
              </select>
           </div>
           <Button variant="primary">Search Courses</Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COURSES.map((course, i) => (
            <div key={i} className="bg-white border border-ocean/5 p-10 group hover:border-gold transition-all flex flex-col md:flex-row gap-10">
               <div className="md:w-1/3 flex flex-col justify-center items-center text-center p-6 bg-ocean/5 relative">
                  <div className="absolute top-4 left-4">
                     <GraduationCap size={20} className="text-gold opacity-30" />
                  </div>
                  <h3 className="font-bebas text-3xl text-ocean leading-tight mb-2">{course.level}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{course.type}</p>
               </div>
               
               <div className="md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                       <h4 className="font-bebas text-xl text-ocean">{course.provider}</h4>
                       <div className="flex items-center gap-1 text-gold">
                          <Star size={14} fill="currentColor" />
                          <span className="text-xs font-bold">{course.rating}</span>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-y-4 mb-8">
                       <div className="flex items-center gap-3">
                          <MapPin size={14} className="text-ocean/20" />
                          <span className="text-sm text-ocean/60 font-nunito">{course.location}</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <Calendar size={14} className="text-ocean/20" />
                          <span className="text-sm text-ocean/60 font-nunito">{course.duration}</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <CreditCard size={14} className="text-ocean/20" />
                          <span className="font-bebas text-xl text-ocean">£{course.price}</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <Calendar size={14} className="text-ocean/20" />
                          <span className="text-sm text-teal font-bold">{course.nextDate}</span>
                       </div>
                    </div>
                  </div>

                  <Button variant="gold" className="w-full group">
                     Book Course <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto">
           <h2 className="text-5xl font-bebas text-ocean mb-12 text-center uppercase tracking-wider">Course <span className="text-gold">Intelligence</span></h2>
           <div className="space-y-6">
              {[
                { q: "Is RYA Day Skipper worth it?", a: "Yes. It is the international standard for recreational skippers, recognized worldwide and essential for chartering vessels over 10m." },
                { q: "What is the difference between Practical and Theory?", a: "Theory courses focus on navigation, tides, and weather in a classroom or online setting. Practical courses take place on the water to apply those skills." },
                { q: "Do I need previous experience for Competent Crew?", a: "No. Competent Crew is designed for absolute beginners to learn how to be a useful and safe member of a yacht's crew." }
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-white border border-ocean/5">
                   <h4 className="font-bebas text-2xl text-ocean mb-4 uppercase tracking-wide">{faq.q}</h4>
                   <p className="text-ocean/60 font-nunito leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
