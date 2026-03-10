"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ExperienceCard = ({ company, role, location, period, index }) => {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="glass-card p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-500"
    >
      <div className="flex-shrink-0 p-4 bg-accent/10 rounded-2xl border border-accent/20 group-hover:bg-accent group-hover:text-black transition-all duration-500">
        <Briefcase size={28} />
      </div>

      <div className="space-y-4 flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-accent transition-colors">
              {role}
            </h3>
            <p className="text-xl font-bold text-white/70 italic">{company}</p>
          </div>
          <div className="flex items-center gap-2 text-accent/60 font-medium text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 uppercase tracking-widest">
            <Calendar size={14} />
            {period}
          </div>
        </div>

        <div className="flex items-center gap-2 text-white/40 font-bold text-xs uppercase tracking-wider">
          <MapPin size={14} className="text-accent" />
          {location}
        </div>
      </div>

      <div className="absolute top-4 right-8 text-7xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-accent/[0.05] transition-colors">
        0{index + 1}
      </div>
    </div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".experience-card-wrapper");
    const header = sectionRef.current.querySelector(".experience-header");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(header, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    ).fromTo(cards, 
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.6"
    );
  }, []);

  const experiences = [
    {
       company: "Vineatz Technologies",
       role: "Full Stack Developer",
       location: "Coimbatore, Tamil Nadu",
       period: "May 2024 – Present"
    },
    {
      company: "Avanexa Technologies",
      role: "Mobile Application Developer",
      location: "Coimbatore, Tamil Nadu",
      period: "Aug 2024 – May 2025"
    },
    {
      company: "AppLogiq",
      role: "Software Engineer",
      location: "Tiruppur, Tamil Nadu",
      period: "Nov 2023 – Jun 2024"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="section-padding px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="experience-header text-left mb-20 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">
            Professional Journey
        </div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic">
          WORK <span className="text-gradient">HISTORY</span>
        </h2>
        <div className="w-40 h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-50"></div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card-wrapper">
            <ExperienceCard {...exp} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
