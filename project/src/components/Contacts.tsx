import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Clock, Navigation, Phone, Instagram, Facebook, ChevronDown } from 'lucide-react';

const storeAddresses = [
  'Київ, пр. Науки 26в.',
  'Київ, вул. Клавдієвська 34.',
  'Київ, вул. Семашка 12.',
  'Київ, пр. Лобановського 35.',
  "Київ, вул. Соломʼянська 16.",
  'Київ, вул. Якубовського 9.',
  'Київ, вул. Березняківська 16.',
  'Київ, вул. Булаховського 5д.',
  'Київ, вул. Гарматна 26/2',
  'Макарів, вул. Набережна, 3.',
  'Клавдієво Тарасове, вул. Травнева 15.',
  'Київ, Івана Дзюби, 16',
];

export default function Contacts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expandAddresses, setExpandAddresses] = useState(false);

  return (
    <section id="contacts" className="py-24 sm:py-32 relative">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="space-y-5"
          >
            <div className="glass-card rounded-2xl p-6 space-y-5">
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

              <div className="h-px bg-white/5" />

              <motion.button
                onClick={() => setExpandAddresses(!expandAddresses)}
                className="w-full flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/15 transition-colors">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-sm mb-1">Адреса магазинів</div>
                  <div className="text-gray-400 text-sm">{storeAddresses.length} локацій</div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-amber-500 transition-transform duration-300 ${
                    expandAddresses ? 'rotate-180' : ''
                  }`}
                />
              </motion.button>
            </div>

            {/* Expandable addresses */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={
                expandAddresses
                  ? { opacity: 1, height: 'auto' }
                  : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="glass-card rounded-2xl p-6">
                <div className="space-y-2">
                  {storeAddresses.map((addr, i) => (
                    <motion.div
                      key={addr}
                      initial={{ opacity: 0, x: -10 }}
                      animate={expandAddresses ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <span className="text-amber-500 font-semibold flex-shrink-0">•</span>
                      <span>{addr}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/Beer+Man+Kyiv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-[#0f0f0f] font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 text-sm"
              >
                <Navigation className="w-4 h-4" />
                На Google Картах
              </a>

              <div className="flex items-center gap-3 ml-auto">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-white/10 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-white/10 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="glass-card rounded-2xl overflow-hidden h-[300px] sm:h-[360px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2!2d30.6244!3d50.4454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI2JzQzLjQiTiAzMMKwMzcnMjcuOCJF!5e0!3m2!1sru!2sua!4v1700000000000!5m2!1sru!2sua"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beer Man locations"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
