import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/5858056/pexels-photo-5858056.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Разливное пиво',
  },
  {
    src: 'https://images.pexels.com/photos/1592931/pexels-photo-1592931.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Пивные краны',
  },
  {
    src: 'https://images.pexels.com/photos/544960/pexels-photo-544960.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Пивные бокалы',
  },
  {
    src: 'https://images.pexels.com/photos/2789240/pexels-photo-2789240.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Интерьер',
  },
  {
    src: 'https://images.pexels.com/photos/16976661/pexels-photo-16976661.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Бутылки крафтового пива',
  },
  {
    src: 'https://images.pexels.com/photos/5659753/pexels-photo-5659753.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Неон и атмосфера',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
            Галерея
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
            Атмосфера Beer Man
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: 'easeOut' }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0f0f0f]/0 group-hover:bg-[#0f0f0f]/40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
          <img
            src={images[lightbox].src.replace('w=800', 'w=1400')}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
}
