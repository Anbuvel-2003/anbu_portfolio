"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Pin and vertical snap for single full-window cards
    const cards = gsap.utils.toArray(".exp-window");
    
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        end: "bottom top",
      });

      // Individual fade-in logic
      gsap.fromTo(card.querySelector('.exp-content'),
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const experiences = [
    {
      company: "Vineatz Technologies",
      role: "Full Stack Developer",
      location: "Peelamedu, Coimbatore, TN",
      period: "May 2024 – Present",
      badge: "Current Role",
      color: "from-emerald-400 to-teal-600",
      accent: "#34d399",
      desc: "Building full-stack solutions including web and mobile apps. Leading development across React Native and backend systems to deliver robust, scalable architectures.",
      link: "https://www.vineatztechnologies.com/"
    },
    {
      company: "Avanexa Technologies",
      role: "Mobile App Developer",
      location: "Ramanathapuram, Coimbatore, TN",
      period: "Aug 2024 – May 2025",
      badge: "Mobile Specialisation",
      color: "from-cyan-400 to-blue-600",
      accent: "#22d3ee",
      desc: "Developed cross-platform mobile applications using React Native. Focused strictly on mobile UI/UX quality, performance optimization, and REST API integration.",
    },
    {
      company: "AppLogiq",
      role: "Software Engineer",
      location: "Tiruppur, Tamil Nadu",
      period: "Nov 2023 – Jun 2024",
      badge: "First Role",
      color: "from-violet-400 to-fuchsia-600",
      accent: "#a78bfa",
      desc: "Contributed to front-end web development, gaining hands-on experience with React JS and learning modern team collaboration agile workflows.",
    },
  ];

  return (
    <section id="experience" ref={containerRef} className="relative bg-[#030305]">
      
      {/* Intro Window */}
      <div className="exp-window w-full h-screen flex flex-col justify-center items-center px-6 relative z-0">
         <div className="absolute inset-0 bg-accent/5 blur-[200px]" />
         <div className="text-center space-y-6">
            <span className="inline-block px-5 py-2 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                Professional Journey
            </span>
            <h2 className="text-5xl md:text-9xl font-black tracking-tighter">
                WORK <span className="text-gradient hover:tracking-widest transition-all duration-700">HISTORY</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-medium max-w-xl mx-auto pt-4">
                Scroll down to journey through my active roles and historical landmarks, each presented in full immersion.
            </p>
         </div>
      </div>

      {/* Experience Windows */}
      {experiences.map((exp, i) => (
        <div key={i} className="exp-window w-full h-screen flex justify-center items-center px-6 relative z-10" style={{ zIndex: i + 1 }}>
          
          {/* Subtle Dynamic Background per card */}
          <div className="absolute inset-0 bg-[#030305]" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
          <div className={`absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[200px] opacity-10 bg-gradient-to-br ${exp.color}`} />

          <div className="exp-content w-full max-w-7xl">
             <div className="glass-card w-full p-10 md:p-20 lg:p-32 rounded-[3rem] border-t border-l border-white/20 shadow-[0_-20px_80px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                
                {/* Large Background Graphic */}
                <div className="absolute -bottom-20 -right-20 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 rotate-12">
                   <Briefcase size={600} style={{ color: exp.accent }} />
                </div>

                <div className="relative z-10 flex flex-col gap-10 lg:gap-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                       <div className="space-y-4">
                           <span className="inline-block px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full border bg-opacity-10 backdrop-blur-md" style={{ color: exp.accent, borderColor: `${exp.accent}40`, backgroundColor: `${exp.accent}10` }}>
                               {exp.badge}
                           </span>
                           <h3 className="text-5xl md:text-7xl font-black tracking-tight text-white group-hover:tracking-wider transition-all duration-500">
                               {exp.role}
                           </h3>
                           <p className="text-2xl md:text-4xl font-bold" style={{ color: exp.accent }}>
                               {exp.company}
                           </p>
                       </div>
                       
                       <div className="flex flex-col gap-4 text-right items-start md:items-end shrink-0">
                           <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-white/70 text-sm md:text-lg font-bold">
                               <Calendar size={20} style={{ color: exp.accent }} />
                               {exp.period}
                           </div>
                           <div className="flex items-center gap-2 text-white/40 text-sm font-black uppercase tracking-widest pl-2 md:pl-0">
                               <MapPin size={16} style={{ color: exp.accent }} />
                               {exp.location}
                           </div>
                       </div>
                    </div>

                    <div className="w-full h-px bg-white/10" />

                    <p className="text-white/60 text-lg md:text-2xl leading-relaxed max-w-4xl font-medium">
                       {exp.desc}
                    </p>

                    {exp.link && (
                       <a href={exp.link} target="_blank" rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-4 text-lg font-black uppercase tracking-widest w-fit group/btn" style={{ color: exp.accent }}>
                          Visit Company <ArrowUpRight size={24} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-current transition-all group-hover/btn:w-full" />
                       </a>
                    )}
                </div>

             </div>
          </div>
        </div>
      ))}
      
    </section>
  );
};

export default Experience;
