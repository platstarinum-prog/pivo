import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

const stores = [
  {
    name: 'Beer Man — Позняки',
    address: 'ул. Академика Булаховського, 5д.',
    hours: 'Ежедневно: 11:00 — 23:00',
    coords: '50.4454+30.6244',
  },
  {
    name: 'Beer Man — Харьковское',
    address: 'Харьківське шосе, 19А',
    hours: 'Ежедневно: 11:00 — 23:00',
    coords: '50.4100+30.6300',
  },
  {
    name: 'Beer Man — Днепровская',
    address: 'вул. Днепровська набережна, 26',
    hours: 'Ежедневно: 10:00 — 22:00',
    coords: '50.3950+30.6100',
  },
];

export default function Stores() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stores" className="py-24 sm:py-32 relative">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
            Магазины
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
            Топ-локации Beer Man
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stores.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5 text-amber-500" />
              </div>

              <h3 className="font-semibold text-base mb-3">{store.name}</h3>

              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{store.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{store.hours}</span>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${store.coords}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors duration-200 font-medium"
              >
                <Navigation className="w-3.5 h-3.5" />
                Маршрут
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
