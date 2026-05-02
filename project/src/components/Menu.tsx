import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const menuItems = [
  {
    title: 'Draft Beer',
    description: 'Свежее разливное пиво от крафтовых пивоварен Украины',
    price: 'от 35 грн',
    image: 'https://images.pexels.com/photos/5858056/pexels-photo-5858056.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Bottled Beer',
    description: 'Бутылочное пиво: IPA, стауты, лагеры из Европы и США',
    price: 'от 45 грн',
    image: 'https://images.pexels.com/photos/16976661/pexels-photo-16976661.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Premium Craft',
    description: 'Лимитированные релизы, барливайн, сауэр и империал стауты',
    price: 'от 60 грн',
    image: 'https://images.pexels.com/photos/5659753/pexels-photo-5659753.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Snacks',
    description: 'Претцели, орехи, сухарики и снеки к пиву',
    price: 'от 20 грн',
    image: 'https://images.pexels.com/photos/13059524/pexels-photo-13059524.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Growler Fill',
    description: 'Пиво навынос: наполняем вашу тару свежим разливным',
    price: 'от 120 грн',
    image: 'https://images.pexels.com/photos/6487920/pexels-photo-6487920.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Tasting Set',
    description: 'Дегустационный сет из 4 сортов по 150 мл каждый',
    price: 'от 150 грн',
    image: 'https://images.pexels.com/photos/30224702/pexels-photo-30224702.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="menu" className="py-24 sm:py-32 relative">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
            Меню
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
            Ассортимент и цены
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: 'easeOut' }}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-56 md:w-64 h-48 sm:h-auto flex-shrink-0 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-900/40 hidden sm:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent sm:hidden" />
                </div>

                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="text-amber-500 font-bold text-lg">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
