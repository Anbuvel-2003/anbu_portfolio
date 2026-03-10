"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Database, Layout, Smartphone, Settings, Cpu, Globe, Layers, GitBranch } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SKILLS = [
  { title: "React Native", icon: Smartphone, description: "Cross-Platform Mobile Apps", level: 92, color: "#61DAFB" },
  { title: "Next.js", icon: Layers, description: "SSR & Full-Stack Framework", level: 88, color: "#00f2ff" },
  { title: "React JS", icon: Layout, description: "Single Page Web Applications", level: 90, color: "#61DAFB" },
  { title: "Firebase", icon: Database, description: "Auth, Firestore, Cloud Messaging", level: 85, color: "#FCCA3F" },
  { title: "Node.js", icon: Settings, description: "Backend & REST APIs", level: 72, color: "#3ECF8E" },
  { title: "Redux Toolkit", icon: Cpu, description: "Scalable State Management", level: 82, color: "#764ABC" },
  { title: "MongoDB", icon: Database, description: "NoSQL Data Architecture", level: 70, color: "#00ED64" },
  { title: "Tailwind CSS", icon: Code2, description: "Utility-First Styling", level: 88, color: "#38BDF8" },
  { title: "JavaScript", icon: Code2, description: "ES6+, Async, Functional", level: 90, color: "#F7DF1E" },
  { title: "Bootstrap", icon: Layout, description: "Responsive UI Prototyping", level: 80, color: "#7952B3" },
  { title: "HTML5 / CSS3", icon: Code2, description: "Semantic Web & Animations", level: 95, color: "#E34F26" },
  { title: "GitHub", icon: GitBranch, description: "Version Control & CI/CD", level: 78, color: "#ffffff" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Pin and horizontal scroll effect for full-screen immersive feel
    const cards = gsap.utils.toArray(".skill-panel");
    
    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (cards.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth * cards.length
      }
    });
  }, []);

  return (
    <section id="skills" className="relative bg-[#030305] overflow-hidden">
      
      {/* Immersive Background Blur that follows the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-accent-purple/5 blur-[250px] -z-10 pointer-events-none" />

      <div ref={containerRef} className="h-screen flex items-center w-[1200vw] sm:w-[600vw] lg:w-[400vw] xl:w-[300vw]">
        
        {/* Intro Panel */}
        <div className="skill-panel w-[100vw] h-screen flex flex-col justify-center items-center px-10 relative">
            <div className="glass-card p-12 md:p-24 rounded-[3rem] text-center w-full max-w-4xl border-white/10 mx-auto">
                <span className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-xs font-black uppercase tracking-[0.3em] text-accent mb-6">
                    Technological Arsenal
                </span>
                <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 group">
                    CORE <span className="text-gradient">SKILLS</span>
                </h2>
                <p className="text-white/40 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                    Swipe or scroll down to explore my specialized stack in full-screen detail.
                </p>
            </div>
            {/* Right arrow indicator */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 p-6 glass rounded-full animate-pulse border-white/20">
                <div className="w-12 h-1 bg-white/50 rounded-full" />
            </div>
        </div>

        {/* Skill Panels */}
        {SKILLS.map((skill, i) => (
          <div key={skill.title} className="skill-panel w-[100vw] h-screen flex justify-center items-center px-4 md:px-10 relative">
            
            <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at center, ${skill.color}80 0%, transparent 70%)` }} />

            <div className="glass flex flex-col items-center justify-center p-12 md:p-20 text-center rounded-[3rem] w-full max-w-5xl aspect-video md:aspect-auto h-[80vh] border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors relative overflow-hidden group">
                
                {/* Large Background Number */}
                <div className="absolute -top-10 -right-10 text-[20rem] font-black leading-none opacity-5 group-hover:opacity-10 transition-opacity select-none flex items-center justify-center" style={{ color: skill.color }}>
                    {i + 1}
                </div>

                <div 
                    className="p-8 md:p-12 rounded-[2.5rem] bg-black/40 border border-white/5 mb-10 group-hover:scale-110 transition-transform duration-700 shadow-2xl relative z-10"
                    style={{ borderColor: `${skill.color}40`, boxShadow: `0 20px 80px -20px ${skill.color}40` }}
                >
                    <skill.icon size={100} className="md:w-[140px] md:h-[140px]" style={{ color: skill.color }} />
                </div>
                
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500" style={{ backgroundImage: `linear-gradient(135deg, ${skill.color}, #ffffff)` }}>
                    {skill.title}
                </h3>
                
                <p className="text-white/60 text-xl md:text-3xl font-medium uppercase tracking-widest relative z-10">
                    {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full max-w-xl h-2 bg-white/10 rounded-full overflow-hidden mt-16 relative z-10">
                    <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%`, backgroundColor: skill.color, boxShadow: `0 0 20px ${skill.color}` }} />
                </div>
                <div className="mt-4 text-sm font-black tracking-widest uppercase relative z-10" style={{ color: skill.color }}>Proficiency: {skill.level}%</div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Skills;
