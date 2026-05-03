import { motion } from 'framer-motion';
import { ChevronDown, Beer } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2607832/pexels-photo-2607832.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Beer background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-[#0f0f0f]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/60 via-transparent to-[#0f0f0f]" />
      </div>

      {/* Glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
        >
          <Beer className="w-4 h-4 text-amber-500" />
          <span className="text-amber-500 text-xs font-medium tracking-widest uppercase">
            Beer Man — сеть магазинов
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Craft Beer
          <br />
          <span className="text-amber-500 text-glow-amber">&amp; Good Mood</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Beer Man — сеть магазинов разливного и крафтового пива в Киеве.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-[#0f0f0f] font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 text-sm tracking-wide"
          >
            Ассортимент
          </a>
          <a
            href="#stores"
            className="px-8 py-4 glass hover:bg-white/10 text-white font-medium rounded-xl transition-all duration-300 text-sm tracking-wide"
          >
            Найти магазин
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
