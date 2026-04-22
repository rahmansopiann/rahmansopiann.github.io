import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Search as SearchIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../lib/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center',
        isScrolled ? 'frosted-glass border-b border-glass-border' : 'bg-black/50 backdrop-blur-[10px] border-b border-glass-border'
      )}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-extrabold tracking-tighter text-accent uppercase">
          RAHMAN<span className="text-white"> SOPIAN</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                link.name === 'Projects' ? 'text-accent opacity-100' : 'text-white/70'
              )}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="text-sm font-bold px-3 py-1 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            {language === 'en' ? 'ID' : 'EN'}
          </button>
          <a
            href="https://github.com/rahmansopiann"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all transform hover:scale-105"
          >
            <Github size={18} />
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 z-[-1]"
          >
            <div className="container mx-auto px-10 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'id' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className="text-xl font-medium hover:text-accent transition-colors text-left"
              >
                {language === 'en' ? 'Indonesian (ID)' : 'English (EN)'}
              </button>
              <a
                href="https://github.com/rahmansopiann"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-lg font-bold"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
