import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Globe } from 'lucide-react';

export const Extra: React.FC<{ certifications: string[], awards: any[], extra: any[] }> = ({ certifications, awards, extra }) => {
  return (
    <section id="extra" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold mb-2">Additional</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/[0.02] border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Certifications</h3>
          </div>
          <ul className="space-y-4">
            {certifications.map((cert, i) => (
              <li key={i} className="text-gray-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/[0.02] border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Awards & Scholarships</h3>
          </div>
          <ul className="space-y-4">
            {awards.map((award, i) => (
              <li key={i} className="flex flex-col">
                <div className="flex justify-between items-start">
                  <span className="text-white font-medium">{award.title.replace(' [Certificate]', '')}</span>
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded ml-2 text-right shrink-0">{award.position}</span>
                </div>
                <span className="text-sm text-gray-500 mt-1">{award.awarder}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Languages */}
        {extra.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">{group.group}</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {group.items.map((item: string, j: number) => {
                const match = item.match(/(.*?)\s*\((.*?)\)/);
                const lang = match ? match[1] : item;
                const prof = match ? match[2] : '';
                return (
                  <div key={j} className="flex flex-col bg-white/5 border border-white/10 rounded-xl p-4 min-w-[150px]">
                    <span className="text-white font-medium mb-1">{lang}</span>
                    {prof && <span className="text-xs text-indigo-400">{prof}</span>}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
