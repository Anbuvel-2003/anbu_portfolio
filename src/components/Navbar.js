"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Github, Linkedin, Sparkles, Download } from "lucide-react";
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
      
      if (scrolled) {
        gsap.to(pillRef.current, {
          paddingLeft: "2rem", paddingRight: "2rem",
          paddingTop: "0.8rem", paddingBottom: "0.8rem",
          backgroundColor: "rgba(3, 3, 5, 0.85)",
          backdropFilter: "blur(24px) saturate(200%)",
          scale: 0.95, duration: 0.4, ease: "power3.out"
        });
      } else {
        gsap.to(pillRef.current, {
          paddingLeft: "3rem", paddingRight: "3rem",
          paddingTop: "1.2rem", paddingBottom: "1.2rem",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(16px) saturate(180%)",
          scale: 1, duration: 0.4, ease: "power3.out"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    gsap.fromTo(navRef.current, 
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "expo.out", delay: 0.2 }
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
        className="pointer-events-auto rounded-[2rem] border border-white/10 flex items-center justify-between shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group/nav transition-all w-full max-w-7xl"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none" />

        {/* LEFT: Brand */}
        <div className="flex items-center gap-4 cursor-pointer group/logo relative z-10 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent via-accent-purple to-cyan-400 p-[1px] group-hover/logo:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
            <div className="w-full h-full bg-[#030305] rounded-[11px] flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/logo:opacity-100 transition-opacity" />
              <Sparkles size={18} className="text-accent relative z-10 group-hover/logo:scale-110 transition-transform" />
            </div>
          </div>
          <span className="text-sm font-black tracking-tighter text-white uppercase transition-all group-hover/logo:tracking-wider">
            Anbu Developer
          </span>
        </div>

        {/* CENTER: Links */}
        <div className="hidden lg:flex items-center gap-8 shrink-0 relative z-10 w-full justify-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.15em] text-white/50 hover:text-white transition-all duration-300 relative group/link"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4 shrink-0 z-10 ml-auto lg:ml-0">
          <div className="hidden xl:flex items-center gap-3 mr-2">
             <a href="https://github.com/Anbuvel-2003" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-accent hover:border-accent/40 transition-all hover:scale-110">
               <Github size={16} />
             </a>
             <a href="https://www.linkedin.com/in/anbuvel-s-75536526b/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-accent hover:border-accent/40 transition-all hover:scale-110">
               <Linkedin size={16} />
             </a>
          </div>
          
          {/* Resume Download */}
          <a shrink-0 href="/anbuvel_resume.pdf" download className="hidden md:flex items-center gap-2 group/res px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300">
            <span>Resume</span>
            <Download size={14} className="group-hover/res:-translate-y-0.5 transition-transform" />
          </a>
          
          {/* Hire Me */}
          <button className="relative group/btn overflow-hidden px-7 py-3 rounded-xl bg-white text-black text-[11px] font-black uppercase tracking-widest transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95">
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-expo" />
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden p-3 rounded-xl glass hover:bg-white/10 text-white/80 transition-all"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-x-4 top-28 glass rounded-[32px] p-8 flex flex-col items-center gap-6 transition-all duration-700 lg:hidden z-[101] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]",
          isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-10 invisible pointer-events-none"
        )}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-black uppercase tracking-tighter text-white/50 hover:text-accent hover:scale-105 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="w-full h-px bg-white/10 my-4" />
          <a href="/anbuvel_resume.pdf" download className="w-full py-4 rounded-xl bg-accent text-black text-center text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2">
            Download Resume <Download size={18} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
