"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 mx-auto bg-surface border border-border rounded-2xl flex items-center justify-center mb-8">
            <div className="w-6 h-6 rounded-full bg-accent"/>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
            Intelligence that scales. <br/>
            <span className="text-muted">Built for humanity.</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted leading-relaxed">
            <p>
              At ORIGIN AI, our mission is to build safe, agentic and highly capable artificial intelligence systems that augment human potential. We aim to build AI technology that is proactive, acts and thinks before doing. The next era of computing will be defined by AI's that can reason, adapt, and most importantly. ACT in real-time.
            </p>
            <p>
              Founded in 2024, by a team of leading researchers and engineers, we are building systems that would help automate and ease everyday tasks. Routine automation is already being taken care of our other folks under the same umbrella. But we aim even higher. We aim to automate even the niche tasks by employing hardcore reasoning into out AI products we want to create a system that creates the automation for the user.
            </p>
            <p>
              In short, the mission is simple. Make every single human on earth, capable of understanding complex information, complex reasoning and most importantly building things for the greater good of humanity and the advancement of technology.
            </p>
          </div>
          
          <div className="mt-12 pt-12 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Founded', value: '2024' },
              { label: 'Parameters', value: '8B+' },
              { label: 'EFLOPS', value: '380' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-xs font-mono text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
