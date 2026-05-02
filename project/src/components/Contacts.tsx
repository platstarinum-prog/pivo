import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Navigation, Phone } from 'lucide-react';

export default function Contacts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacts" className="py-24 sm:py-32 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
            Контакты
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
            Как нас найти
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Адрес</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    Akademika Bulakhovs&apos;koho St, 5Д, Kyiv
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Время работы</div>
                  <div className="text-gray-400 text-sm">Ежедневно: 11:00 — 23:00</div>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Телефон</div>
                  <div className="text-gray-400 text-sm">+380 (XX) XXX-XX-XX</div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=50.4454+30.6244"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-dark-900 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 text-sm"
            >
              <Navigation className="w-4 h-4" />
              Построить маршрут
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="glass rounded-2xl overflow-hidden h-[300px] sm:h-[360px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2!2d30.6244!3d50.4454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI2JzQzLjQiTiAzMMKwMzcnMjcuOCJF!5e0!3m2!1sru!2sua!4v1700000000000!5m2!1sru!2sua"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beer Man location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
