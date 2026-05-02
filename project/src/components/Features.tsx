import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beer, UtensilsCrossed, Coffee } from 'lucide-react';

const features = [
  {
    icon: Beer,
    title: 'Craft Beer',
    description: 'Более 200 сортов крафтового пива от лучших украинских и мировых пивоварен.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Fresh Snacks',
    description: 'Закуски, которые идеально дополнят вкус вашего пива — от чипсов до сыров.',
  },
  {
    icon: Coffee,
    title: 'Cozy Atmosphere',
    description: 'Уютная атмосфера и дружелюбный персонал сделают ваш визит незабываемым.',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">
            Преимущества
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Почему <span className="text-gradient">Beer Man</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:glow-amber relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/0 group-hover:bg-amber-500/5 rounded-full blur-2xl transition-all duration-500 -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
