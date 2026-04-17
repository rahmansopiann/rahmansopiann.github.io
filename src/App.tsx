/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
              Tech <span className="text-accent italic">Stack</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Cypress', icon: '🧪' },
                { name: 'Cucumber', icon: '🥒' },
                { name: 'WebdriverIO', icon: '🤖' },
                { name: 'k6', icon: '📈' },
                { name: 'Java', icon: '☕' },
                { name: 'TypeScript', icon: 'TS' },
                { name: 'JavaScript', icon: 'JS' },
                { name: 'HTML/CSS', icon: '🌐' },
                { name: 'Git', icon: '🌲' },
              ].map((skill) => (
                <div 
                  key={skill.name} 
                  className="frosted-card p-8 flex flex-col items-center justify-center gap-4 hover:border-accent/40 transition-all group"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d1c7ff] py-1 px-3 rounded-sm bg-accent/15 border border-accent/20 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

