/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Github, Twitter, Linkedin, Mail, ArrowDown } from "lucide-react";

import { Projects } from "./components/Projects";
import { RobotMessage } from "./components/RobotMessage";
import { BackgroundWeb } from "./components/BackgroundWeb";
import { FloatingRobot } from "./components/FloatingRobot";
import ServicesOverview from "./components/ServicesOverview"; // ✅ ADDED

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress, scrollY } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-black scroll-smooth"
    >
      <BackgroundWeb />
      <FloatingRobot scrollY={scrollY} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          LUMINA<span className="text-cyan-400">.</span>
        </motion.div>

        <div className="flex gap-8 text-sm font-medium tracking-widest uppercase">
          {["Works", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section (UPDATED ✅) */}
      <section className="relative min-h-screen snap-start flex flex-col items-center justify-start overflow-hidden px-6 pt-32">
        {/* Hero Text */}
        <motion.div style={{ y: textY }} className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              Freelance Creative Developer
            </span>

            <h1 className="text-[10vw] md:text-[6vw] font-bold leading-[0.85] tracking-tighter uppercase mb-8">
              Crafting <br />
              <span className="text-transparent border-text">Digital</span>{" "}
              <br />
              Experiences
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <p className="max-w-md text-zinc-400 text-lg leading-relaxed">
              I build high-performance web applications that bridge the gap
              between design and technology.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8"
            >
              <ArrowDown className="text-zinc-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 🔥 SERVICES CAROUSEL INSIDE HERO */}
        {/* 🔥 SERVICES CAROUSEL INSIDE HERO */}
        <div className="relative z-10 mt-12 w-full flex justify-center">
          <ServicesOverview />
        </div>
      </section>

      {/* Robot Message Section */}
      <section className="h-screen snap-start flex items-center justify-center">
        <RobotMessage />
      </section>

      {/* Projects Section */}
      <section
        id="works"
        className="h-screen snap-start flex items-center justify-center bg-zinc-950/30"
      >
        <Projects />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen snap-start flex flex-col items-center justify-center bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase mb-12">
              Let's <span className="text-cyan-400">Talk</span>
            </h2>

            <p className="text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto">
              Have a project in mind? Let's build something extraordinary
              together.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-24">
              <a
                href="mailto:hello@lumina.dev"
                className="group flex items-center gap-4 text-2xl font-bold hover:text-cyan-400 transition-colors"
              >
                <Mail size={32} /> hello@lumina.dev
              </a>
            </div>

            <div className="flex justify-center gap-12">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-12 w-full px-6 text-center text-zinc-600 text-sm uppercase tracking-widest">
          © 2026 LUMINA STUDIO. ALL RIGHTS RESERVED.
        </footer>
      </section>

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        @media (min-width: 768px) {
          .border-text {
            -webkit-text-stroke: 2px rgba(255,255,255,0.3);
          }
        }
      `}</style>
    </div>
  );
}
