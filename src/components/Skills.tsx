import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'motion/react';

const skillIconMap: Record<string, { type: 'devicon' | 'text'; value: string }> = {
  "Java":                 { type: 'devicon', value: 'devicon-java-plain colored' },
  "Python":               { type: 'devicon', value: 'devicon-python-plain colored' },
  "JavaScript":           { type: 'devicon', value: 'devicon-javascript-plain colored' },
  "React.js":             { type: 'devicon', value: 'devicon-react-original colored' },
  "Next.js":              { type: 'devicon', value: 'devicon-nextjs-plain' },
  "HTML":                 { type: 'devicon', value: 'devicon-html5-plain colored' },
  "CSS":                  { type: 'devicon', value: 'devicon-css3-plain colored' },
  "Material UI":          { type: 'devicon', value: 'devicon-materialui-plain colored' },
  "Spring Boot":          { type: 'devicon', value: 'devicon-spring-plain colored' },
  "REST APIs":            { type: 'devicon', value: 'devicon-fastapi-plain colored' },
  "WebClient":            { type: 'devicon', value: 'devicon-nodejs-plain colored' },
  "MongoDB":              { type: 'devicon', value: 'devicon-mongodb-plain colored' },
  "MySQL":                { type: 'devicon', value: 'devicon-mysql-plain colored' },
  "PostgreSQL":           { type: 'devicon', value: 'devicon-postgresql-plain colored' },
  "TensorFlow":           { type: 'devicon', value: 'devicon-tensorflow-original colored' },
  "Scikit-learn":         { type: 'devicon', value: 'devicon-scikitlearn-plain colored' },
  "AWS":                  { type: 'devicon', value: 'devicon-amazonwebservices-plain-wordmark colored' },
  "GitHub":               { type: 'devicon', value: 'devicon-github-original' },
  "Render":               { type: 'devicon', value: 'devicon-render-plain' },
  "Cisco Packet Tracer":  { type: 'text', value: '🔧' },
  "SD-WAN":               { type: 'text', value: '🌐' },
  "Cisco DNA Center":     { type: 'text', value: '🧬' },
  "Computer Networking":  { type: 'text', value: '🖧' },
  "AI/ML Integration":    { type: 'text', value: '🤖' },
  "Web Development":      { type: 'devicon', value: 'devicon-chrome-plain colored' },
  "Network Security":     { type: 'text', value: '🔒' },
  "IoT":                  { type: 'text', value: '📡' },
  "Cloud Deployment":     { type: 'devicon', value: 'devicon-googlecloud-plain colored' },
  "Arduino":              { type: 'devicon', value: 'devicon-arduino-plain colored' },
  "Raspberry Pi":         { type: 'devicon', value: 'devicon-raspberrypi-plain colored' },
  "ESP8266":              { type: 'text', value: '📶' },
  "Sensors":              { type: 'text', value: '🔬' },
};

const SkillPill: React.FC<{ label: string; 'aria-hidden'?: boolean }> = ({ label, ...rest }) => {
  const icon = skillIconMap[label];
  return (
    <span
      {...rest}
      className="whitespace-nowrap inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/10 rounded-xl text-sm text-gray-300 hover:bg-indigo-500/10 hover:border-indigo-500/40 hover:text-white transition-colors cursor-default select-none"
    >
      {icon && (
        icon.type === 'devicon'
          ? <i className={icon.value} style={{ fontSize: '16px' }} />
          : <span style={{ fontSize: '14px' }}>{icon.value}</span>
      )}
      {label}
    </span>
  );
};

// Hook to detect scroll direction
function useScrollDirection() {
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 2) {
        setDirection('down');
      } else if (currentY < lastScrollY.current - 2) {
        setDirection('up');
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return direction;
}

interface MarqueeRowProps {
  items: string[];
  duration: number;
  direction: 'down' | 'up';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, duration, direction }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);        // current translateX in px
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);

  // speed in px/frame — negative = left, positive = right
  const SPEED = 1.2;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!pausedRef.current) {
        const halfWidth = track.scrollWidth / 2;
        const delta = direction === 'down' ? -SPEED : SPEED;
        positionRef.current += delta;

        // Loop boundaries
        if (positionRef.current <= -halfWidth) positionRef.current += halfWidth;
        if (positionRef.current >= 0) positionRef.current -= halfWidth;

        track.style.transform = `translateX(${positionRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction]);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <div
        ref={trackRef}
        className="flex gap-3"
        style={{ width: 'max-content', willChange: 'transform' }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {items.map((item, j) => <SkillPill key={`a-${j}`} label={item} />)}
        {items.map((item, j) => <SkillPill key={`b-${j}`} label={item} aria-hidden />)}
      </div>
    </div>
  );
};

export const Skills: React.FC<{ data: any[] }> = ({ data }) => {
  const scrollDirection = useScrollDirection();

  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold mb-2">Skills</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="flex flex-col gap-6">
        {data.map((skillGroup, i) => {
          const duration = Math.max(25, skillGroup.items.length * 4);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 overflow-hidden"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                {skillGroup.group}
              </p>
              <MarqueeRow
                items={skillGroup.items}
                duration={duration}
                direction={scrollDirection}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
