import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const images = [
  {
    src: 'https://images.pexels.com/photos/155268/pexels-photo-155268.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Craft beer glasses',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1267326/pexels-photo-1267326.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Beer bottles collection',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Brewery equipment',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2739349/pexels-photo-2739349.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Beer tasting',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1288144/pexels-photo-1288144.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Bar interior',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3125366/pexels-photo-3125366.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Beer and snacks',
    span: 'md:col-span-2',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">
            Галерея
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Атмосфера <span className="text-gradient">Beer Man</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
