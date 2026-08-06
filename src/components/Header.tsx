import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { navItems } from '@/data/content';

const LOGO_PATH = '/assets/images/IMG_2441.PNG';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to.split('#')[0]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-silver-200 bg-white/90 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className={`container-wide flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
          <Link to="/" className="flex items-center" aria-label="Anandion Global home">
            <img src={LOGO_PATH} alt="Anandion Global" className="h-9 w-auto object-contain sm:h-11" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setMegaOpen(item.label)}
                onMouseLeave={() => setMegaOpen(null)}
              >
                <Link
                  to={item.to}
                  className={`relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(item.to) ? 'text-emerald-600' : 'text-navy-700 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${megaOpen === item.label ? 'rotate-180' : ''}`} />
                  )}
                  {isActive(item.to) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-emerald-50"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Mega menu */}
                {item.children && megaOpen === item.label && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-full pt-3"
                    >
                      <div className="w-80 overflow-hidden rounded-2xl border border-silver-200 bg-white/95 p-2 shadow-xl shadow-navy-700/10 backdrop-blur-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="group flex items-start justify-between rounded-xl px-4 py-3 text-sm transition-colors hover:bg-emerald-50"
                          >
                            <div>
                              <div className="font-medium text-navy-700 group-hover:text-emerald-600">{child.label}</div>
                              {child.desc && <div className="mt-0.5 text-xs text-silver-500">{child.desc}</div>}
                            </div>
                            <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-500 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <span className="relative z-10">Partner With Us</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 -z-0 translate-y-full bg-emerald-600 transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>

          <button
            className="text-navy-700 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto border-l border-silver-200 bg-white/95 backdrop-blur-xl"
            >
              <div className="flex h-20 items-center justify-between px-5">
                <img src={LOGO_PATH} alt="Anandion Global" className="h-8 w-auto" />
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6 text-navy-700" />
                </button>
              </div>
              <nav className="px-3 py-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="mb-1"
                  >
                    <Link
                      to={item.to}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                        isActive(item.to) ? 'bg-emerald-50 text-emerald-600' : 'text-navy-700 hover:bg-emerald-50/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 border-l border-silver-200 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block rounded-lg px-4 py-2.5 text-sm text-silver-600 hover:bg-emerald-50/50 hover:text-emerald-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <Link
                  to="/contact"
                  className="mt-4 block rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Partner With Us
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
