import { Beer, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Beer className="w-6 h-6 text-amber-500" />
            <span className="font-display text-xl font-bold text-white">Beer Man</span>
          </div>

          <p className="text-gray-500 text-sm">Drink responsibly</p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Beer Man. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
