import { Beer, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Beer className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold tracking-tight">
              Beer <span className="text-amber-500">Man</span>
            </span>
          </div>

          <p className="text-xs text-gray-600 tracking-wide">Drink responsibly</p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-amber-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-amber-500 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Beer Man. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
