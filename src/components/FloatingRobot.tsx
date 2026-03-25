import { motion, AnimatePresence, MotionValue } from 'motion/react';
import { useState, useEffect } from 'react';

interface FloatingRobotProps {
  scrollY: MotionValue<number>;
}

export const FloatingRobot = ({ scrollY }: FloatingRobotProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("Need help navigating?");
  
  // Show robot after scrolling 300px
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const messages = [
    "Check out my latest projects below!",
    "I'm here to guide you through my work.",
    "Feel free to reach out anytime!",
    "Scroll down for more exciting stuff.",
    "I love building interactive experiences!"
  ];

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMessage);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 100 }}
          className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none"
        >
          {/* Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={message}
            className="bg-zinc-900/90 backdrop-blur-md border border-cyan-500/30 px-4 py-2 rounded-2xl text-xs text-cyan-400 font-mono shadow-xl max-w-[200px] text-right"
          >
            {message}
          </motion.div>

          {/* Miniature Robot */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-16 h-16 bg-zinc-900/80 backdrop-blur-md border border-cyan-500/50 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/20"
          >
            <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="40" width="100" height="80" rx="20" stroke="#00f2ff" strokeWidth="4" fill="rgba(0, 242, 255, 0.1)" />
              <circle cx="80" cy="75" r="10" fill="#00f2ff" />
              <circle cx="120" cy="75" r="10" fill="#00f2ff" />
              <path d="M90 100 H110" stroke="#00f2ff" strokeWidth="4" strokeLinecap="round" />
              <line x1="100" y1="40" x2="100" y2="20" stroke="#00f2ff" strokeWidth="4" />
              <circle cx="100" cy="15" r="8" fill="#00f2ff" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
