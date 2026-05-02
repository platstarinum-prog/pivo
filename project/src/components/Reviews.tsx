import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Олександр К.',
    rating: 5,
    text: 'Отличный магазин! Огромный выбор крафтового пива, ребята всегда помогут с выбором. Атмосфера просто супер!',
    date: '2 недели назад',
  },
  {
    name: 'Марія В.',
    rating: 4,
    text: 'Очень уютное место. Приходим сюда с друзьями почти каждую пятницу. Пиво всегда свежее и холодное.',
    date: '1 месяц назад',
  },
  {
    name: 'Дмитро П.',
    rating: 4,
    text: 'Лучший пивной магазин в районе. Цены адекватные, выбор впечатляет. Особенно нравится их коллекция стаутов.',
    date: '3 недели назад',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4 block">
            Отзывы
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Что говорят <span className="text-gradient">гости</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4 ? 'text-amber-500 fill-amber-500' : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-3xl font-bold text-white">4.2</span>
            <span className="text-gray-500">/5</span>
          </div>
          <p className="text-gray-500 text-sm">На основе отзывов посетителей</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.06] transition-all duration-500 group relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-500/10 group-hover:text-amber-500/20 transition-colors duration-500" />

              <StarRating rating={review.rating} />

              <p className="text-gray-300 mt-4 mb-6 leading-relaxed">{review.text}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-semibold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
