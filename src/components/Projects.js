"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectCard = ({ title, description, tags, index, link }) => {
  const cardRef = useRef(null);

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
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-10 group relative flex flex-col h-[400px] preserve-3d overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
         <FolderGit2 size={250} className="text-accent" />
      </div>

      <div className="flex justify-between items-start relative z-10 mb-8">
         <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-500">
            <FolderGit2 size={32} className="text-accent" />
         </div>
         <div className="flex items-center gap-3">
            <a href="https://github.com/Anbuvel-2003" target="_blank" rel="noopener noreferrer" className="p-3 text-white/40 hover:text-white hover:bg-white/10 rounded-xl transition-all">
               <Github size={20} />
            </a>
            {link && (
               <a href={link} target="_blank" rel="noopener noreferrer" className="p-3 text-white/40 hover:text-accent hover:bg-accent/10 rounded-xl transition-all">
                  <ExternalLink size={20} />
               </a>
            )}
         </div>
      </div>

      <div className="space-y-4 relative z-10 flex-grow">
          <h3 className="text-3xl font-black tracking-tighter text-white group-hover:text-accent transition-colors duration-300">
             {title}
          </h3>
          <p className="text-white/50 text-base leading-relaxed font-medium">
             {description}
          </p>
      </div>

      <div className="mt-auto relative z-10 flex flex-wrap gap-2 pt-6 border-t border-white/5">
         {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-4 py-1.5 bg-transparent rounded-full border border-white/10 text-white/30 group-hover:border-accent/30 group-hover:text-white/70 transition-colors">
               {tag}
            </span>
         ))}
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
        stagger: 0.15,
        ease: "power4.out",
      },
      "-=0.6"
    );
  }, []);

  const projects = [
    {
      title: "Albion Bank Auction",
      description: "Find bank-auctioned properties at up to 50% below market price. Connects to 40,000+ repossessed properties nationwide.",
      tags: ["React Native", "Firebase", "Real Estate"],
      link: "https://play.google.com/store/apps/details?id=com.albionbankauctions"
    },
    {
      title: "Cignix",
      description: "Comprehensive smoke quitting assistant with structured daily progress tracking and expert-led motivation videos.",
      tags: ["React Native", "Context API", "Health"],
      link: "https://play.google.com/store/apps/details?id=com.cignix"
    },
    {
      title: "Truck Taxi",
      description: "Full taxi booking ecosystem for both customers and drivers featuring live map integration and real-time transit tracking.",
      tags: ["React Native", "Maps API", "Logistics"],
      link: "https://play.google.com/store/apps/details?id=com.trucktaxi"
    },
    {
      title: "ShopQ",
      description: "Complete E-commerce clothing application providing advanced product search, cart persistence, and live order tracking.",
      tags: ["React Native", "Redux", "E-commerce"],
    },
    {
      title: "ChatQ",
      description: "Real-time communication app like WhatsApp with image/video sharing, group chats, and extensive admin permissions.",
      tags: ["React Native", "Firebase", "Social"],
    },
    {
      title: "MR Brothers",
      description: "Secure B2B E-commerce application designed for the gold industry ensuring real-time stock updates and fast transactions.",
      tags: ["React Native", "B2B", "Jewelry"],
      link: "https://play.google.com/store/apps/details?id=com.mrbrothers"
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[200px] -z-10 pointer-events-none" />

      <div className="project-header space-y-6 mb-24 max-w-4xl mx-auto text-center">
        <span className="inline-block px-5 py-2 rounded-full glass border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
            Case Studies
        </span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
            SELECTED <span className="text-gradient">WORKS</span>
        </h2>
        <p className="text-white/40 text-lg md:text-xl font-medium pt-4">
            A highlight of cross-platform mobile apps deployed in production. Focused on complex state, real-time sync, and flawless UX.
        </p>
        <div className="w-40 h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-50 mx-auto mt-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
