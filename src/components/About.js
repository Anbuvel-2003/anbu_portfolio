"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, GraduationCap, Award, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const InfoCard = ({ title, items, icon: Icon }) => (
  <div className="glass-card p-10 space-y-8 relative overflow-hidden group">
    <div className="flex items-center gap-6">
      <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent group-hover:text-black transition-all duration-500">
        <Icon size={28} />
      </div>
      <h3 className="text-3xl font-black tracking-tighter uppercase">{title}</h3>
    </div>
    
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4">
          <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
          <p className="text-white/60 font-medium leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".about-card-wrapper");
    const header = sectionRef.current.querySelector(".about-header");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(header, 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
    ).fromTo(cards, 
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  const summaries = [
    "Experienced in front-end web and mobile application development using HTML, CSS, Javascript, React JS, React Native, and Firebase.",
    "Proven expertise in State Management using Redux Toolkit and backend integration via Firebase services.",
    "Deep understanding of React Router and React Navigation for optimized user flow.",
    "Exceptional ability to quickly master new technologies and work effectively in group environments."
  ];

  const qualifications = [
    "MCA (Master of Computer Applications) - Currently Pursuing at Bharathiar University.",
    "BSC (Information Technology) - 76% from PSG College of Arts and Science (2023).",
    "HSC - 75% from Vikas Vidyalaya Matric Hr. Sec School (2020).",
    "SSLC - 84% from Sri Raghavender Vidyalaya High School (2018)."
  ];

  const certifications = [
    "Completed 3 months intensive Full Stack Development (MERN) course at Elysium Academy, Coimbatore."
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-purple/5 rounded-full blur-[200px] -z-10 pointer-events-none"></div>

      <div className="about-header text-center mb-24 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">
            The Foundation
        </div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic">
          PERSONAL <span className="text-gradient">CAPACITY</span>
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="about-card-wrapper lg:col-span-2">
          <div className="glass-card p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                <User size={300} />
            </div>
            <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-6">
                    <div className="p-5 bg-accent/10 rounded-3xl text-accent border border-accent/20">
                        <User size={40} />
                    </div>
                    <div>
                        <h3 className="text-4xl font-black tracking-tighter uppercase">Professional Summary</h3>
                        <p className="text-accent/50 font-bold uppercase tracking-widest text-xs mt-1">Core Philosophy & Approach</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {summaries.map((text, i) => (
                        <div key={i} className="space-y-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all group/sum">
                            <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover/sum:bg-accent group-hover/sum:text-black transition-all">
                                {i + 1}
                            </div>
                            <p className="text-white/60 leading-relaxed font-medium italic">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
        
        <div className="about-card-wrapper">
          <InfoCard title="Qualifications" items={qualifications} icon={GraduationCap} />
        </div>
        
        <div className="about-card-wrapper">
          <InfoCard title="Certifications" items={certifications} icon={Award} />
        </div>
      </div>
    </section>
  );
};

export default About;
