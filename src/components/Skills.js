"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Code2, 
  Database, 
  Layout, 
  Smartphone, 
  Settings, 
  Cpu,
  Globe,
  Layers
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SkillCard = ({ title, icon: Icon, description, index }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    // 3D Tilt
    const xRotate = (y / height - 0.5) * 20;
    const yRotate = (x / width - 0.5) * -20;

    gsap.to(cardRef.current, {
      rotateX: xRotate,
      rotateY: yRotate,
      duration: 0.5,
      ease: "power2.out",
    });

    // Follower Glow
    gsap.to(glowRef.current, {
      x,
      y,
      opacity: 1,
      duration: 0.2,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.5,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-8 flex flex-col items-start text-left space-y-6 group cursor-pointer h-full relative overflow-hidden preserve-3d"
    >
      {/* Interactive Glow */}
      <div 
        ref={glowRef}
        className="absolute -inset-20 bg-accent/20 blur-[80px] rounded-full pointer-events-none opacity-0 z-0"
        style={{ width: '200px', height: '200px', transform: 'translate(-50%, -50%)' }}
      ></div>

      <div className="relative z-10 p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500 border border-white/5 group-hover:border-accent/20">
        <Icon className="text-accent group-hover:scale-110 transition-transform duration-500" size={32} />
      </div>

      <div className="space-y-3 relative z-10">
        <h3 className="text-xl font-black tracking-tight text-white/90 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed font-bold uppercase tracking-wider group-hover:text-white/60 transition-colors">
          {description}
        </p>
      </div>

      <div className="absolute top-4 right-4 text-[40px] font-black text-white/[0.02] select-none group-hover:text-accent/[0.05] transition-colors">
        0{index + 1}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".glass-card");
    const header = sectionRef.current.querySelector(".skills-header");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(header, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    ).fromTo(cards, 
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.6"
    );
  }, []);

  const skills = [
    { title: "Frontend Engineering", icon: Layout, description: "Next.js 15+, React 19, Tailwind, GSAP" },
    { title: "Backend Systems", icon: Database, description: "Node.js, Go, PostgreSQL, Redis, GraphQL" },
    { title: "Mobile Ecosystem", icon: Smartphone, description: "React Native, Expo, SwiftUI, Android" },
    { title: "Infrastructure", icon: Settings, description: "Docker, K8s, Terraform, AWS, CI/CD" },
    { title: "Cloud Architecture", icon: Cpu, description: "Microservices, Serverless, System Design" },
    { title: "Edge Computing", icon: Globe, description: "Edge Functions, Supabase, Vercel" },
    { title: "Visual Design", icon: Layers, description: "Figma, Design Systems, Prototypes" },
    { title: "Performance", icon: Code2, description: "SEO, Web Vitals, Security, Optimization" },
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding px-6 max-w-7xl mx-auto">
      <div className="skills-header text-left mb-20 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">
            Technological Stack
        </div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
          CORE <span className="text-gradient">EXPERTISE</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
