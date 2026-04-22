import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-24 bg-page-bg border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 block">{t.footer.ready}</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
              {t.footer.letsBuild} <br /> <span className="text-accent italic">{t.footer.somethingGreat}</span>
            </h2>
            <p className="text-white/60 mb-10 max-w-md leading-relaxed text-lg">
              {t.footer.description}
            </p>
            <a 
              href="mailto:rahmansopian6@gmail.com" 
              className="text-2xl md:text-3xl font-display font-medium hover:text-accent transition-colors flex items-center gap-4 group"
            >
              rahmansopian6@gmail.com
              <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">{t.footer.socials}</h4>
                <div className="flex flex-col gap-4 text-sm font-medium">
                  <a href="#" className="hover:text-accent transition-colors flex items-center gap-2">Github</a>
                  <a href="#" className="hover:text-accent transition-colors flex items-center gap-2">LinkedIn</a>
                  <a href="#" className="hover:text-accent transition-colors flex items-center gap-2">Instagram</a>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">{t.footer.site}</h4>
                <div className="flex flex-col gap-4 text-sm font-medium">
                  <a href="#" className="hover:text-accent transition-colors">{t.nav.home}</a>
                  <a href="#projects" className="hover:text-accent transition-colors">{t.nav.projects}</a>
                  <a href="#skills" className="hover:text-accent transition-colors">{t.nav.skills}</a>
                </div>
              </div>
            </div>
            
            <div className="frosted-card px-8 py-6 flex items-center justify-between">
              <span className="text-sm font-medium">{t.footer.available}</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">{t.footer.onlineNow}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/40 italic">
            &copy; {currentYear} Rahman Sopian. {t.footer.rights}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Mail size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
