/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Extra } from './components/Extra';
import { Navbar } from './components/Navbar';
import { Chatbot } from './components/Chatbot';
import { resumeData } from './data/resume';
import { CursorGlow } from './components/CursorGlow';


export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800); // 1.8s splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-indigo-500/30 relative">
      <AnimatedBackground />
      <CursorGlow />
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <Navbar />
          <main className="max-w-5xl mx-auto px-6 pb-24 space-y-32">
            <Hero data={resumeData.basics} />
            <Achievements data={resumeData.achievements} />
            <Experience data={resumeData.experience} />
            <Projects data={resumeData.projects} />
            <Skills data={resumeData.skills} />
            <Education data={resumeData.education} />
            <Extra 
              certifications={resumeData.certifications} 
              awards={resumeData.awards} 
              extra={resumeData.extra} 
            />
          </main>
          <Chatbot />
        </>
      )}
    </div>
  );
}
