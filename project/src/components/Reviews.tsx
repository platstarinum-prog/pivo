import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Олег К.',
    text: 'Отличный выбор крафтового пива! Всегда свежее разливное, приятный персонал. Мой любимый магазин в районе.',
    rating: 5,
  },
  {
    name: 'Анна М.',
    text: 'Уютное место с хорошими ценами. Приходим сюда с друзьями почти каждую пятницу. Рекомендую премиум сорта.',
    rating: 4,
  },
  {
    name: 'Дмитрий В.',
    text: 'Хороший ассортимент и адекватные цены. Особенно нравится, что можно взять пиво на разлив в свою тару.',
    rating: 4,
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="reviews" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 right-0 w-[300px] h-[200px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
            Что говорят клиенты
          </h2>
          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="text-4xl font-bold text-amber-500">4.2</span>
            <div className="flex flex-col items-start gap-1 ml-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${
                      s <= 4 ? 'text-amber-500 fill-amber-500' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">Google Reviews</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <Quote className="w-8 h-8 text-amber-500/15 mb-4" />

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &laquo;{review.text}&raquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3 h-3 ${
                          s <= review.rating
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
