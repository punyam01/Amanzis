import { motion } from 'motion/react';

export const RobotMessage = () => {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="relative mb-12">
        {/* Stylized Robot SVG */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative z-10"
        >
          <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2ff" />
                <stop offset="100%" stopColor="#0066ff" />
              </linearGradient>
            </defs>
            {/* Head */}
            <rect x="50" y="40" width="100" height="80" rx="20" stroke="url(#robotGrad)" strokeWidth="3" fill="rgba(0, 242, 255, 0.05)" />
            {/* Eyes */}
            <motion.g
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
            >
              <circle cx="80" cy="75" r="10" fill="#00f2ff" />
              <circle cx="120" cy="75" r="10" fill="#00f2ff" />
            </motion.g>
            {/* Mouth/Antenna */}
            <motion.path 
              d="M85 100 Q100 110 115 100" 
              stroke="#00f2ff" 
              strokeWidth="3" 
              strokeLinecap="round" 
              animate={{ d: ["M85 100 Q100 110 115 100", "M85 100 Q100 105 115 100", "M85 100 Q100 110 115 100"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <line x1="100" y1="40" x2="100" y2="15" stroke="#00f2ff" strokeWidth="3" />
            <motion.circle 
              cx="100" cy="10" r="6" fill="#00f2ff" 
              animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </svg>
        </motion.div>
        
        {/* Pulse rings */}
        <motion.div 
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 border-2 border-cyan-500/40 rounded-full blur-sm"
        />
        <motion.div 
          animate={{ scale: [1, 3], opacity: [0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute inset-0 border-2 border-cyan-500/20 rounded-full blur-md"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl px-6"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
          "Hi, I hope you like our work."
        </h2>
        <motion.p 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-2xl md:text-3xl text-cyan-400 font-mono tracking-tight"
        >
          Scroll down to look at the exciting work we've delivered.
        </motion.p>
      </motion.div>
    </section>
  );
};
