import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Navigation, Phone } from 'lucide-react';

export default function Contacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacts" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">
            Контакты
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Как нас <span className="text-gradient">найти</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Адрес</h3>
                  <p className="text-gray-400">
                    Akademika Bulakhovs'koho St, 5Д
                    <br />
                    Kyiv, Ukraine
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Время работы</h3>
                  <p className="text-gray-400">
                    Ежедневно: 11:00 – 23:00
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Телефон</h3>
                  <p className="text-gray-400">+380 (XX) XXX-XX-XX</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//Akademika+Bulakhovs'koho+St,+5Д,+Kyiv,+Ukraine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-dark-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
            >
              <Navigation className="w-5 h-5" />
              Построить маршрут
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden glow-amber aspect-square lg:aspect-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2!2d30.6233!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjQiTiAzMMKwMzcnMjMuOSJF!5e0!3m2!1sru!2sua!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beer Man location"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
