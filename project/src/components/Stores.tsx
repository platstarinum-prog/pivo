import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Clock, Navigation, X, Image as ImageIcon } from 'lucide-react';

const stores = [
  {
    name: 'Beer Man — Позняки',
    address: 'вул. Академика Булаховського, 5д.',
    hours: 'Ежедневно: 11:00 — 23:00',
    coords: '50.4454+30.6244',
    images: [
      '/пивко1.png',
      '/пивко2.png',
      '/пивко3.png',
    ],
  },
  {
    name: 'Beer Man — Клавдієвська',
    address: 'вул. Клавдієвська, 34.',
    hours: 'Ежедневно: 11:00 — 23:00',
    coords: '50.4200+30.6350',
    images: [
      '/пивко1.png',
      '/пивко2.png',
      '/пивко3.png',
    ],
  },
  {
    name: 'Beer Man — Семашка',
    address: 'вул. Семашка, 12.',
    hours: 'Ежедневно: 11:00 — 23:00',
    coords: '50.4050+30.6400',
    images: [
      '/пивко1.png',
      '/пивко2.png',
      '/пивко3.png',
    ],
  },
];

export default function Stores() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState<{ storeIndex: number; imageIndex: number } | null>(null);

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
            Топ-локации Beer Man в Киеве
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stores.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-6 hover-lift flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5 text-amber-500" />
              </div>

              <h3 className="font-semibold text-base mb-3">{store.name}</h3>

              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{store.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{store.hours}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                
                  href={`https://www.google.com/maps/dir/?api=1&destination=${store.coords}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors duration-200 font-medium"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Маршрут
                </a>

                <button
                  onClick={() => setLightbox({ storeIndex: i, imageIndex: 0 })}
                  className="ml-auto inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 transition-all duration-200"
                  title="Фото магазина"
                >
                  <ImageIcon className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0f0f0f]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center max-w-2xl w-full">
            <motion.img
              key={lightbox.imageIndex}
              src={stores[lightbox.storeIndex].images[lightbox.imageIndex]}
              alt={`${stores[lightbox.storeIndex].name} - ${lightbox.imageIndex + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-[70vh] object-contain rounded-lg mb-4"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({
                    storeIndex: lightbox.storeIndex,
                    imageIndex:
                      (lightbox.imageIndex - 1 + stores[lightbox.storeIndex].images.length) %
                      stores[lightbox.storeIndex].images.length,
                  });
                }}
                className="px-4 py-2 glass hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
              >
                ← Назад
              </button>

              <span className="text-sm text-gray-400">
                {lightbox.imageIndex + 1} / {stores[lightbox.storeIndex].images.length}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({
                    storeIndex: lightbox.storeIndex,
                    imageIndex:
                      (lightbox.imageIndex + 1) % stores[lightbox.storeIndex].images.length,
                  });
                }}
                className="px-4 py-2 glass hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
              >
                Далі →
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">{stores[lightbox.storeIndex].name}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
