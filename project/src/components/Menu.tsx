import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beer, Wine, Package, Cookie } from 'lucide-react';

const menuItems = [
  {
    title: 'Draft Beer',
    description: 'Свежее разливное пиво от крафтовых пивоварен Украины',
    price: 'от 35 грн',
    image: 'https://images.pexels.com/photos/5858056/pexels-photo-5858056.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Beer,
  },
  {
    title: 'Craft Beer',
    description: 'Лимитированные релизы, барливайн, сауэр и империал стауты',
    price: 'от 60 грн',
    image: 'https://images.pexels.com/photos/5659753/pexels-photo-5659753.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Wine,
  },
  {
    title: 'Bottled Beer',
    description: 'Бутылочное пиво: IPA, стауты, лагеры из Европы и США',
    price: 'от 45 грн',
    image: 'https://images.pexels.com/photos/16976661/pexels-photo-16976661.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Package,
  },
  {
    title: 'Snacks',
    description: 'Претцели, орехи, сухарики и снеки к пиву',
    price: 'от 20 грн',
    image: 'https://images.pexels.com/photos/13059524/pexels-photo-13059524.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Cookie,
  },
];

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="menu" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">
            Ассортимент
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
            Цены и позиции
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: 'easeOut' }}
                className="group glass-card rounded-2xl overflow-hidden hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-amber-500/15 backdrop-blur-sm flex items-center justify-center border border-amber-500/20">
                    <Icon className="w-4 h-4 text-amber-500" />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-amber-500 font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
