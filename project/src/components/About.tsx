import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beer, Award, MapPin } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: '50+', label: 'Сортов пива' },
    { value: '3', label: 'Магазина в Киеве' },
    { value: '4.2', label: 'Рейтинг Google' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
            О нас
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
            Сеть beer stores в Киеве
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Beer Man — современная сеть beer stores с большим выбором разливного пива,
              крафтовых сортов и закусок. Мы работаем для тех, кто ценит качество
              и хочет наслаждаться настоящим крафтом каждый день.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: Beer, text: 'Только свежее пиво' },
                { icon: Award, text: 'Проверенные пивоварни' },
                { icon: MapPin, text: '3 магазина в Киеве' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon className="w-4 h-4 text-amber-500" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                className="glass-card rounded-2xl p-5 text-center hover-lift"
              >
                <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
