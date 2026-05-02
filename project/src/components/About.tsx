import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beer, Award, Star } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Beer, value: '200+', label: 'Сортов пива' },
    { icon: Award, value: '4.2', label: 'Рейтинг' },
    { icon: Star, value: '5', label: 'Лет работы' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">
              О нас
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Больше, чем просто
              <br />
              <span className="text-gradient">магазин пива</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Beer Man — уютный магазин пива в Киеве с большим выбором крафтового
              и классического пива. Атмосфера, хороший сервис и качественные напитки.
              Мы тщательно отбираем каждую позицию, чтобы вы получили только лучшее.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glow-amber">
              <img
                src="https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beer Man store interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-2xl blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
