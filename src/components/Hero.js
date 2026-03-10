"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Staggered massive text entry
    tl.fromTo(title1Ref.current,
      { y: 100, opacity: 0, rotateX: 60, transformOrigin: "0% 50% -50" },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.5, delay: 0.3 }
    )
    .fromTo(title2Ref.current,
      { y: 100, opacity: 0, rotateX: 60, transformOrigin: "0% 50% -50" },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.5 },
      "-=1.2"
    )
    .fromTo(roleRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 },
      "-=1"
    )
    .fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    );

    // Deep 3D Mouse Parallax
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5);
      const yPos = (clientY / window.innerHeight - 0.5);

      gsap.to(title1Ref.current, { x: xPos * -50, y: yPos * -50, rotateY: xPos * 10, rotateX: -yPos * 10, duration: 1, ease: "power2.out" });
      gsap.to(title2Ref.current, { x: xPos * -80, y: yPos * -80, rotateY: xPos * 15, rotateX: -yPos * 15, duration: 1.2, ease: "power2.out" });
      gsap.to(roleRef.current, { x: xPos * 30, y: yPos * 30, duration: 1, ease: "power2.out" });
      gsap.to(".hero-glow", { x: xPos * 200, y: yPos * 200, duration: 2, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* Immersive Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none perspective-1000">
        <div className="hero-glow absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="hero-glow absolute bottom-[10%] right-[10%] w-[800px] h-[800px] bg-accent-purple/10 rounded-full blur-[200px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center perspective-1000">
        
        {/* Massive 3D Titles */}
        <div className="relative transform-style-3d mb-6 w-full pointer-events-none">
          <h1 
            ref={title1Ref} 
            className="text-[12vw] sm:text-[10vw] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter leading-[0.85] text-white/5 uppercase"
            style={{ textShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
          >
            ANBUVEL <span className="text-white/10">S.</span>
          </h1>
          
          <h1 
            ref={title2Ref} 
            className="absolute inset-0 text-[12vw] sm:text-[10vw] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter leading-[0.85] uppercase"
            style={{ 
              background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(0,242,255,0.2))"
            }}
          >
            ANBUVEL S.
          </h1>
        </div>

        {/* Roles Box */}
        <div ref={roleRef} className="glass-card px-8 py-4 rounded-full border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] mb-10 flex items-center gap-4 flex-wrap justify-center">
            <span className="text-accent font-black tracking-widest uppercase text-xs sm:text-sm">Mobile Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
            <span className="text-white/80 font-black tracking-widest uppercase text-xs sm:text-sm">Full-Stack Engineer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
            <span className="text-white/50 font-black tracking-widest uppercase text-xs sm:text-sm">UX Enthusiast</span>
        </div>

        {/* Description */}
        <p ref={descRef} className="text-white/40 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
          Crafting <span className="text-white">responsive, dynamic,</span> and immersive digital experiences. 
          Specialised in scaling robust applications with React Native and modern web technologies.
        </p>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer animate-bounce">
        <span className="text-[9px] font-black tracking-[0.3em] uppercase text-accent">Discover</span>
        <div className="p-3 rounded-full border border-white/10 glass">
            <ArrowDown size={16} className="text-white" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
