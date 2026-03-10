"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, GraduationCap, Award, Code2, Phone, Mail, Github, Linkedin } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = gsap.utils.toArray(".about-animate");
    gsap.fromTo(els,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
      }
    );
  }, []);

  const qualifications = [
    { degree: "MCA – Master of Computer Applications", institute: "Bharathiar University", year: "2024 – Pursuing", grade: "" },
    { degree: "BSC – Information Technology", institute: "PSG College of Arts and Science", year: "2023", grade: "76%" },
    { degree: "HSC – Higher Secondary", institute: "Vikas Vidyalaya Matric Hr. Sec School", year: "2020", grade: "75%" },
    { degree: "SSLC – Secondary", institute: "Sri Raghavender Vidyalaya High School", year: "2018", grade: "84%" },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="about-animate text-center mb-20 space-y-4">
        <span className="inline-block px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
          About Me
        </span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
          WHO I <span className="text-gradient">AM</span>
        </h2>
        <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
          A passionate Full-Stack Developer from Coimbatore, specialising in building real-world 
          apps with React Native, Next.js, and Firebase.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* LEFT – Profile Card */}
        <div className="about-animate lg:col-span-2 flex flex-col gap-6">
          <div className="glass-card p-10 text-center space-y-6">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-accent via-accent-purple to-cyan-400 p-[2px] mx-auto">
              <div className="w-full h-full rounded-full bg-[#030305] flex items-center justify-center">
                <span className="text-5xl font-black text-gradient">AS</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tighter">Anbuvel S.</h3>
              <p className="text-accent text-sm font-bold uppercase tracking-widest mt-1">Full-Stack Developer</p>
            </div>
            <div className="w-full h-px bg-white/5" />
            <div className="space-y-3 text-left text-sm">
              <a href="mailto:anbuvel24072003@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors group">
                <Mail size={16} className="text-accent/60 group-hover:text-accent transition-colors" />
                anbuvel24072003@gmail.com
              </a>
              <a href="tel:+919677395645" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors group">
                <Phone size={16} className="text-accent/60 group-hover:text-accent transition-colors" />
                +91 9677395645
              </a>
              <a href="https://github.com/Anbuvel-2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors group">
                <Github size={16} className="text-accent/60 group-hover:text-accent transition-colors" />
                github.com/Anbuvel-2003
              </a>
              <a href="https://www.linkedin.com/in/anbuvel-s-75536526b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors group">
                <Linkedin size={16} className="text-accent/60 group-hover:text-accent transition-colors" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Certification card */}
          <div className="glass-card p-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-400/10 rounded-xl border border-amber-400/20">
                <Award size={22} className="text-amber-400" />
              </div>
              <h4 className="text-lg font-black uppercase tracking-wider">Certification</h4>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              3-Month Full Stack Development <span className="text-amber-400 font-bold">(MERN Stack)</span> course at <span className="text-white/80">Elysium Academy</span>, Coimbatore.
            </p>
          </div>
        </div>

        {/* RIGHT – Summary + Education */}
        <div className="about-animate lg:col-span-3 flex flex-col gap-6">
          {/* Objective */}
          <div className="glass-card p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                <User size={22} className="text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-black uppercase tracking-wider">Objective</h4>
                <p className="text-accent/40 text-[11px] font-bold uppercase tracking-widest">Professional Mission</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed text-base font-medium">
              Seeking a position in an organization that offers a great opportunity for a <span className="text-white/90 font-bold">responsible career</span>. 
              Focused on building <span className="text-accent font-bold">responsive, dynamic, and user-friendly</span> web and mobile applications — 
              while continuously growing both personally and professionally.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Apps Deployed", value: "6+" },
                { label: "Tech Stack", value: "12 Skills" },
                { label: "Status", value: "Available" },
              ].map(({ label, value }) => (
                <div key={label} className="p-4 bg-white/[0.03] rounded-2xl border border-white/5">
                  <p className="text-accent text-xl font-black">{value}</p>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="glass-card p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/20">
                <GraduationCap size={22} className="text-violet-400" />
              </div>
              <h4 className="text-xl font-black uppercase tracking-wider">Education</h4>
            </div>
            <div className="space-y-4">
              {qualifications.map((q, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-400/30 transition-all group">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                  <div className="flex-grow">
                    <p className="font-black text-white/90 text-sm">{q.degree}</p>
                    <p className="text-white/40 text-xs font-medium mt-0.5">{q.institute}</p>
                  </div>
                  <div className="text-right shrink-0">
                    {q.grade && <p className="text-accent font-black text-sm">{q.grade}</p>}
                    <p className="text-white/30 text-xs font-bold">{q.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
