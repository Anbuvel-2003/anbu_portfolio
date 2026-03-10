"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import Image from "next/image";

const ProjectCard = ({ title, description, tags, index, image, link }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotateY: x * 15,
      rotateX: -y * 15,
      transformPerspective: 1000,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      x: x * 30,
      y: y * 30,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card overflow-hidden group relative flex flex-col h-full preserve-3d"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <div ref={imageRef} className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]">
            <Image 
              src={image} 
              alt={title}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-60"></div>
        
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center gap-6 z-20">
          <a href="https://github.com/Anbuvel-2003" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-accent hover:text-black hover:-translate-y-1 transition-all duration-300 backdrop-blur-md border border-white/10">
            <Github size={24} />
          </a>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-accent hover:text-black hover:-translate-y-1 transition-all duration-300 backdrop-blur-md border border-white/10">
              <ExternalLink size={24} />
            </a>
          )}
        </div>
        
        <div className="absolute top-6 right-6 p-3 glass rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 border border-white/10">
            <ArrowUpRight className="text-accent" size={20} />
        </div>

        <div className="absolute bottom-6 left-8 z-20">
            <span className="text-white/20 font-black text-6xl select-none group-hover:text-accent/30 transition-colors duration-500">0{index + 1}</span>
        </div>
      </div>
      
      <div className="p-8 space-y-6 flex-grow flex flex-col bg-white/[0.01]">
        <div className="space-y-3">
          <h3 className="text-3xl font-black tracking-tight group-hover:text-accent transition-colors duration-300">{title}</h3>
          <p className="text-white/50 text-base leading-relaxed font-medium">
            {description}
          </p>
        </div>
        
        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-white/30 group-hover:border-accent/30 group-hover:text-white/60 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card-wrapper");
    const header = sectionRef.current.querySelector(".project-header");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(header, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    ).fromTo(cards, 
      { opacity: 0, y: 100, rotateX: 20 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      },
      "-=0.6"
    );
  }, []);

  const projects = [
    {
      title: "Albion Bank Auction",
      description: "Find bank-auctioned properties at up to 50% below market price. Connects to 40,000+ repossessed properties.",
      tags: ["React Native", "Firebase", "Real Estate"],
      image: "/project_ai_mockup_1773157808334.png",
      link: "https://play.google.com/store/apps/details?id=com.albionbankauctions"
    },
    {
      title: "Cignix",
      description: "Smoke quitting assistant with structured progress tracking and expert-led videos.",
      tags: ["React Native", "Context API", "Health"],
      image: "/project_health_mockup_1773157845606.png",
      link: "https://play.google.com/store/apps/details?id=com.cignix"
    },
    {
      title: "Truck Taxi",
      description: "Full taxi booking ecosystem for both customers and drivers with real-time tracking.",
      tags: ["React Native", "Maps API", "Logistics"],
      image: "/project_web3_mockup_1773157827462.png",
      link: "https://play.google.com/store/apps/details?id=com.trucktaxi"
    },
    {
      title: "ShopQ",
      description: "Complete E-commerce clothing application with product search, cart, and order tracking.",
      tags: ["React Native", "Redux", "E-commerce"],
      image: "/project_ai_mockup_1773157808334.png"
    },
    {
      title: "ChatQ",
      description: "Real-time communication app like WhatsApp with image/video sharing and admin controls.",
      tags: ["React Native", "Firebase", "Social"],
      image: "/project_health_mockup_1773157845606.png"
    },
    {
      title: "MR Brothers",
      description: "B2B E-commerce application for the gold industry with real-time updates.",
      tags: ["React Native", "B2B", "Jewelry"],
      image: "/project_web3_mockup_1773157827462.png",
      link: "https://play.google.com/store/apps/details?id=com.mrbrothers"
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[180px] -z-10 pointer-events-none"></div>

      <div className="project-header space-y-6 mb-24">
        <div className="inline-block px-4 py-1.5 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">
            Case Studies
        </div>
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic">SELECTED <span className="text-gradient">WORKS</span></h2>
            <button className="group flex items-center gap-3 text-accent font-black uppercase tracking-widest text-xs border-b-2 border-accent/20 pb-2 hover:border-accent transition-all">
                View All Projects
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
        </div>
        <div className="w-40 h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card-wrapper h-full">
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
