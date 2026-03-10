"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      textRef.current,
      { y: 150, opacity: 0, rotateX: -45 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.5, delay: 0.5 }
    )
    .fromTo(
      subTextRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=1"
    )
    .fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8 },
      "-=0.6"
    );

    // Floating animation for background shapes
    gsap.to(".floating-shape", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(heroRef.current, {
        rotateY: xPos / 2,
        rotateX: -yPos / 2,
        x: xPos,
        y: yPos,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-shape bg-accent/20 w-[500px] h-[500px] top-[-10%] left-[-5%] floating-shape"></div>
        <div className="bg-shape bg-accent-purple/20 w-[400px] h-[400px] bottom-[10%] right-[-5%] floating-shape"></div>
        <div className="bg-shape bg-white/5 w-[300px] h-[300px] top-[40%] right-[10%] floating-shape"></div>
      </div>

      <div ref={heroRef} className="relative z-10 text-center max-w-5xl space-y-10 perspective-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
          <Sparkles size={14} />
          Welcome to the Future
        </div>
        
        <h1 
          ref={textRef} 
          className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9] text-white"
        >
          ANBUVEL <span className="text-gradient">S.</span><br />
          <span className="opacity-90 leading-tight block mt-4 text-[4rem] md:text-[6rem]">FULL-STACK DEVELOPER</span>
        </h1>
        
        <p 
          ref={subTextRef} 
          className="text-lg md:text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Professional knowledge in creating responsive, dynamic, and 
          user-friendly web and mobile applications using React and React Native.
        </p>

        <div ref={buttonRef} className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
          <button className="glass glow-button px-10 py-5 text-sm font-black uppercase tracking-widest flex items-center gap-3 group">
            Explore My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="text-white/60 hover:text-white transition-all duration-300 flex items-center gap-2 font-black uppercase tracking-widest text-sm hover:gap-4">
            Contact Me <div className="w-10 h-[1px] bg-white/20"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
