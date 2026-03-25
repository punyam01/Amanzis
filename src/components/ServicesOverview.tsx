"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud,
  ArrowRight,
  Brain,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: [
      "React & Next.js",
      "TypeScript",
      "SEO Optimization",
      "Performance",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    features: ["React Native", "Flutter", "App Store", "Push Notifications"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces.",
    features: ["User Research", "Wireframing", "Visual Design", "Prototyping"],
  },
  {
    icon: Database,
    title: "API Development",
    description: "Robust, scalable backend services.",
    features: ["REST APIs", "GraphQL", "Authentication", "Documentation"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and deployment automation.",
    features: ["AWS & Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "AI-powered solutions and automation.",
    features: ["ML Models", "NLP", "Computer Vision", "Analytics"],
  },
];

export default function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const N = services.length;
  const cardWidth = 240;
  const cardHeight = 300;
  const radius = 380;
  const rotation = -(360 / N) * activeIndex;

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Radial glow behind carousel — blends into neural bg */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(ellipse at center, rgba(0,255,255,0.04) 0%, rgba(0,255,255,0.015) 40%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Soft ambient ring */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10"
        style={{ width: "820px", height: "820px" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/5"
        style={{ width: "960px", height: "960px" }}
      />

      {/* TITLE */}
      <h2
        className="relative z-10 text-xl md:text-2xl font-semibold tracking-widest text-cyan-400 mb-12 uppercase text-center"
        style={{ textShadow: "0 0 30px rgba(0,255,255,0.3)" }}
      >
        Our Services
      </h2>

      {/* CAROUSEL — no wrapper box, pure 3D scene */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "100%",
          height: "420px",
          perspective: "1600px",
          // No background, no border, no shadow — fully transparent
        }}
      >
        <motion.div
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px)`,
          }}
          animate={{ rotateY: rotation }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {services.map((service, index) => {
            const angle = (360 / N) * index;
            const isActive = index === activeIndex;

            return (
              <div
                key={service.title}
                style={{
                  position: "absolute",
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  // Cards blend into neural background
                  background: isActive
                    ? "rgba(0, 20, 25, 0.55)"
                    : "rgba(0, 10, 14, 0.25)",
                  backdropFilter: isActive ? "blur(16px)" : "blur(6px)",
                  WebkitBackdropFilter: isActive ? "blur(16px)" : "blur(6px)",
                  border: isActive
                    ? "1px solid rgba(0,255,255,0.25)"
                    : "1px solid rgba(0,255,255,0.06)",
                  boxShadow: isActive
                    ? "0 0 40px rgba(0,255,255,0.08), inset 0 0 30px rgba(0,255,255,0.03)"
                    : "none",
                  borderRadius: "16px",
                  transition: "all 0.6s ease",
                  opacity: isActive ? 1 : 0.3,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px) ${isActive ? "scale(1.06)" : "scale(1)"}`,
                }}
                className="p-5 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg mb-3"
                    style={{
                      background: "rgba(0,255,255,0.06)",
                      border: "1px solid rgba(0,255,255,0.15)",
                    }}
                  >
                    <service.icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-3">
                    {service.description}
                  </p>

                  <div className="space-y-1">
                    {service.features.map((f) => (
                      <div
                        key={f}
                        className="text-xs text-zinc-500 flex items-center gap-1"
                      >
                        <span
                          className="rounded-full"
                          style={{
                            width: "4px",
                            height: "4px",
                            background: "rgba(0,255,255,0.6)",
                            flexShrink: 0,
                          }}
                        />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-cyan-400/70 mt-3">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom fade — helps cards dissolve into page */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        style={{
          height: "120px",
          background:
            "linear-gradient(to bottom, transparent, rgba(5,5,10,0.6))",
        }}
      />
    </section>
  );
}
