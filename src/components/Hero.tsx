import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[150px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Floating tech stack or profile photo could go here */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative group flex flex-col items-center">
            <span className="text-sm uppercase tracking-[0.3em] text-white/60 font-medium mb-12 block">
              Welcome to the <span className="text-accent">web portfolio</span>{" "}
              of
            </span>
            <div className="absolute inset-0 bg-accent/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-glass-border relative z-10 shadow-2xl">
              <img
                src="/img/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.8, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <span className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-9 leading-tight">
            Rahman <span className="text-accent">Sopian</span>
          </span>

          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 font-bold mb-16">
            Scroll down to learn more about my skills & experiences
          </p>

          {/* Tech Logos row - Placeholder icons */}
          <div className="relative w-screen mb-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              className="flex whitespace-nowrap gap-12 md:gap-16 items-center"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* Render 2 atau 3 kali agar tidak ada celah kosong saat looping */}
              {[1, 2, 3].map((loop) => (
                <div key={loop} className="flex gap-12 md:gap-16 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
                  <span className="font-display font-medium text-xl">Manual Testing</span>
                  <span className="font-display font-medium text-xl">Postman</span>
                  <span className="font-display font-medium text-xl">Cypress</span>
                  <span className="font-display font-medium text-xl">Playwright</span>
                  <span className="font-display font-medium text-xl">PostgreSQL</span>
                  <span className="font-display font-medium text-xl">K6</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group relative w-full sm:w-48 py-4 rounded-lg bg-transparent border border-white/20 text-sm font-bold uppercase tracking-widest overflow-hidden hover:border-white transition-colors"
            >
              <span className="relative z-10 transition-colors">
                Contact Me
              </span>
              <div className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/rahmansopiann"
              className="w-full sm:w-48 py-4 rounded-lg bg-[#111] text-white text-sm font-bold uppercase tracking-widest border border-accent/30 hover:bg-accent hover:border-accent transition-all duration-300 shadow-[0_0_20px_rgba(96,73,234,0.15)]"
            >
              Github
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
