import React from 'react';
import { motion } from 'motion/react';

export const Splash: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#050505] z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-display font-bold tracking-tighter mb-8"
      >
        PK<span className="text-indigo-500">.</span>
      </motion.div>
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-indigo-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};
