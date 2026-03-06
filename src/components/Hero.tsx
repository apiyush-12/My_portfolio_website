import React from 'react';
import { motion } from 'motion/react';
import { FileText, ChevronDown, MapPin, Mail, Phone, Github, Linkedin, Code2 } from 'lucide-react';

export const Hero: React.FC<{ data: any }> = ({ data }) => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'leetcode': return <Code2 className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-indigo-400 font-mono text-sm md:text-base mb-4 tracking-wider uppercase">
          {data.title}
        </h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
          {data.name.split(' ')[0]} <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            {data.name.split(' ')[1]}
          </span>
        </h1>
        
         <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-8">
          <div className="flex-1">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              {data.summary}
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-xl group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-indigo-500/50 transition-colors duration-500">
              <img 
                src="/profile_picture.jpg" 
                alt={data.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10 text-sm text-gray-300">
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <MapPin className="w-4 h-4 text-indigo-400" /> {data.location}
          </div>
          <a href={`mailto:${data.email}`} className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
            <Mail className="w-4 h-4 text-indigo-400" /> {data.email}
          </a>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <Phone className="w-4 h-4 text-indigo-400" /> {data.phone}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="#experience"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center gap-2"
          >
            View Experience <ChevronDown className="w-4 h-4" />
          </a>
          <a href="/personal_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all flex items-center gap-2">
            <FileText className="w-4 h-4" />
            View Resume
          </a>
          
          <div className="flex gap-3 ml-auto md:ml-4 mt-4 md:mt-0">
            {data.links.map((link: any, i: number) => (
              <a 
                key={i} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-indigo-400 transition-colors"
                aria-label={link.name}
              >
                {getIcon(link.name)}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
