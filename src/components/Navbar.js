"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const pillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Fixed: Individual element animations instead of parent gap which can cause clumping
      if (scrolled) {
        gsap.to(pillRef.current, {
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "0.8rem",
          paddingBottom: "0.8rem",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(24px) saturate(200%)",
          scale: 0.95,
          duration: 0.4,
          ease: "power3.out"
        });
      } else {
        gsap.to(pillRef.current, {
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingTop: "1.4rem",
          paddingBottom: "1.4rem",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(16px) saturate(180%)",
          scale: 1,
          duration: 0.4,
          ease: "power3.out"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial Entrance
    gsap.fromTo(navRef.current, 
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "expo.out", delay: 0.5 }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div ref={navRef} className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none">
      <nav
        ref={pillRef}
        className="pointer-events-auto rounded-full border border-white/10 flex items-center justify-between shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group/nav transition-all duration-300"
      >
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none"></div>

        {/* Brand/Logo Section */}
        <div className="flex items-center gap-4 cursor-pointer group/logo relative z-10 shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent via-accent-purple to-cyan-400 flex items-center justify-center group-hover/logo:rotate-[360deg] transition-transform duration-1000 shadow-[0_0_20px_rgba(0,242,255,0.4)] overflow-hidden">
             <div className="absolute inset-0 bg-white/30 opacity-0 group-hover/logo:opacity-100 transition-opacity"></div>
             <Sparkles size={20} className="text-black relative z-10" />
          </div>
          <span className="text-sm font-black tracking-tighter text-gradient hidden lg:block uppercase transition-all group-hover/logo:tracking-widest text-[#00f2ff]">ANBUVEL.DEV</span>
        </div>

        {/* Separator */}
        <div className="h-5 w-[1px] bg-white/10 mx-6 hidden md:block"></div>

        {/* Links Section */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300 relative group/link py-1"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/link:w-full"></span>
            </a>
          ))}
        </div>

        {/* Separator */}
        <div className="h-5 w-[1px] bg-white/10 mx-6 hidden lg:block"></div>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-6 shrink-0 z-10">
          <div className="hidden xl:flex items-center gap-4">
             <a href="#" className="text-white/20 hover:text-accent transition-all hover:scale-110"><Github size={18} /></a>
             <a href="#" className="text-white/20 hover:text-accent transition-all hover:scale-110"><Linkedin size={18} /></a>
          </div>
          
          <button className="relative group/btn overflow-hidden px-8 py-3.5 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-widest transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] active:scale-95">
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-expo"></div>
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2.5 rounded-full glass hover:bg-white/10 text-white/60 hover:text-white transition-all shadow-inner"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div className={cn(
          "fixed inset-x-6 top-32 glass rounded-[40px] p-12 flex flex-col items-center gap-8 transition-all duration-700 md:hidden z-[101] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]",
          isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-20 invisible pointer-events-none"
        )}>
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter text-white/10 hover:text-accent hover:scale-105 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="w-full h-px bg-white/10 my-6"></div>
          <div className="flex items-center gap-10">
             <Github size={36} className="text-white/10 hover:text-accent transition-all" />
             <Linkedin size={36} className="text-white/10 hover:text-accent transition-all" />
             <Twitter size={36} className="text-white/10 hover:text-accent transition-all" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
