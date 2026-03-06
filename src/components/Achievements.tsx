import React from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, Activity, Target } from 'lucide-react';

export const Achievements: React.FC<{ data: string[] }> = ({ data }) => {
  const icons = [TrendingUp, Activity, Target, Trophy];

  return (
    <section id="achievements" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold mb-2">Top Impact</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((achievement, i) => {
          const Icon = icons[i % icons.length];
          // Extract number if exists for highlighting
          const numMatch = achievement.match(/\d+\+?%/);
          const highlight = numMatch ? numMatch[0] : '';
          const text = highlight ? achievement.replace(highlight, '') : achievement;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-colors"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  {highlight && (
                    <div className="text-3xl font-display font-bold text-white mb-2">
                      {highlight}
                    </div>
                  )}
                  <p className="text-gray-400 leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
