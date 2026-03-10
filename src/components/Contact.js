"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Send, Mail, MapPin, Phone, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);

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

  return (
    <section id="contact" ref={sectionRef} className="section-padding px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="contact-header space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">
                Available for New Challenges
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight">LET'S <span className="text-gradient">TALK.</span></h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              Have a visionary project in mind or just want to say hi? 
              My inbox is always open for bold ideas and collaborations.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { icon: Mail, label: "Email", value: "hello@visionary.dev" },
              { icon: MapPin, label: "Location", value: "San Francisco, CA" }
            ].map((item, i) => (
              <div key={i} className="contact-info-item flex items-center gap-6 group cursor-pointer w-fit">
                <div className="p-5 glass rounded-3xl group-hover:bg-accent/10 transition-all duration-500 group-hover:scale-110 border border-white/5 group-hover:border-accent/30">
                  <item.icon className="text-accent" size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">{item.label}</p>
                  <p className="text-xl font-bold group-hover:text-accent transition-colors">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-info-item flex items-center gap-6 pt-8 border-t border-white/5">
             <a href="#" className="p-3 glass rounded-xl hover:text-accent hover:border-accent/40 transition-all duration-300">
                <Github size={20} />
             </a>
             <a href="#" className="p-3 glass rounded-xl hover:text-accent hover:border-accent/40 transition-all duration-300">
                <Twitter size={20} />
             </a>
             <a href="#" className="p-3 glass rounded-xl hover:text-accent hover:border-accent/40 transition-all duration-300">
                <Linkedin size={20} />
             </a>
          </div>
        </div>

        <div className="glass p-8 md:p-14 space-y-8 relative overflow-hidden backdrop-blur-3xl border border-white/10 rounded-[2rem]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-field space-y-3">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/40 focus:bg-white/10 transition-all duration-300 font-medium placeholder:text-white/10" 
                placeholder="Name"
              />
            </div>
            <div className="form-field space-y-3">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/40 focus:bg-white/10 transition-all duration-300 font-medium placeholder:text-white/10" 
                placeholder="Email"
              />
            </div>
          </div>
          
          <div className="form-field space-y-3">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Project Brief</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/40 focus:bg-white/10 transition-all duration-300 font-medium placeholder:text-white/10" 
              placeholder="What are we building?"
            />
          </div>

          <div className="form-field space-y-3">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Message</label>
            <textarea 
              rows="5" 
              className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/40 focus:bg-white/10 transition-all duration-300 font-medium resize-none placeholder:text-white/10" 
              placeholder="Your mission brief..."
            ></textarea>
          </div>

          <button className="form-field w-full glass glow-button py-6 text-sm font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden group">
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">Transmit Message</span>
            <Send size={18} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/20 text-xs font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Visionary Portfolio. All Rights Reserved.</p>
        <div className="flex items-center gap-8">
            <span className="text-white/10">Follow the path</span>
            <div className="w-10 h-[1px] bg-white/10"></div>
            <a href="#" className="hover:text-accent transition-colors">Github</a>
            <a href="#" className="hover:text-accent transition-colors">Dribbble</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
