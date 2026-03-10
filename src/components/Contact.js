"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Send, Mail, MapPin, Phone, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const infoItems = sectionRef.current.querySelectorAll(".contact-info-item");
    const formFields = sectionRef.current.querySelectorAll(".form-field");
    const header = sectionRef.current.querySelector(".contact-header");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(header, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    ).fromTo(infoItems, 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.6"
    ).fromTo(formFields, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=1"
    );
  }, []);

  const handleMouseMove = (e) => {
    if (!formRef.current) return;
    const { left, top, width, height } = formRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    gsap.to(formRef.current, { rotateY: x * 6, rotateX: -y * 6, duration: 0.4, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    if (!formRef.current) return;
    gsap.to(formRef.current, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power2.out" });
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding px-6 max-w-7xl mx-auto relative perspective-1000">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="contact-header space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">
                Available for New Challenges
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight relative">
                LET&apos;S <span className="text-gradient">TALK.</span>
                <MessageSquare size={60} className="absolute -top-6 -right-10 text-white/5 -rotate-12" />
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-8" />
            <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              Have a visionary project in mind or just want to say hi? 
              My inbox is always open for bold ideas and collaborations.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "anbuvel24072003@gmail.com", href: "mailto:anbuvel24072003@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 9677395645", href: "tel:+919677395645" },
              { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu" }
            ].map((item, i) => (
              <div key={i} className="contact-info-item flex items-center gap-6 group cursor-pointer w-fit p-4 rounded-[2rem] hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                <div className="p-5 glass rounded-3xl group-hover:bg-accent/10 transition-all duration-500 group-hover:scale-110 border border-white/5 group-hover:border-accent/30 shadow-lg">
                  <item.icon className="text-accent" size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-xl font-bold group-hover:text-accent transition-colors block mt-1">{item.value}</a>
                  ) : (
                    <p className="text-xl font-bold group-hover:text-accent transition-colors mt-1">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-info-item flex items-center gap-6 pt-10 border-t border-white/5">
             <a href="https://github.com/Anbuvel-2003" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:text-accent hover:border-accent/40 transition-all duration-300 hover:scale-110">
                <Github size={22} />
             </a>
             <a href="https://www.linkedin.com/in/anbuvel-s-75536526b/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:text-accent hover:border-accent/40 transition-all duration-300 hover:scale-110">
                <Linkedin size={22} />
             </a>
          </div>
        </div>

        <div 
            ref={formRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="glass-card p-8 md:p-14 space-y-8 relative overflow-hidden backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] preserve-3d h-fit"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="form-field space-y-3">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-all duration-300 font-medium placeholder:text-white/20 text-white" 
                placeholder="John Doe"
              />
            </div>
            <div className="form-field space-y-3">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-all duration-300 font-medium placeholder:text-white/20 text-white" 
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="form-field space-y-3 relative z-10">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Project Brief</label>
            <input 
              type="text" 
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-all duration-300 font-medium placeholder:text-white/20 text-white" 
              placeholder="What are we building?"
            />
          </div>

          <div className="form-field space-y-3 relative z-10">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Message</label>
            <textarea 
              rows="6" 
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-all duration-300 font-medium resize-none placeholder:text-white/20 text-white" 
              placeholder="Your mission brief..."
            />
          </div>

          <button className="form-field w-full glass glow-button py-6 rounded-2xl text-sm font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden group border border-white/20 relative z-10 hover:bg-accent/20">
            <span className="relative z-10 group-hover:translate-x-1 transition-transform text-white group-hover:text-accent">Transmit Message</span>
            <Send size={18} className="relative z-10 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform group-hover:text-accent" />
          </button>
        </div>
      </div>
      
      <footer className="mt-40 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-[10px] sm:text-xs font-black uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Anbuvel S. All Rights Reserved.</p>
        <div className="flex items-center gap-8">
            <a href="https://github.com/Anbuvel-2003" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/anbuvel-s-75536526b/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
