import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';
import { navItems } from '@/data/content';

const LOGO_PATH = '/assets/images/IMG_2441.PNG';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-700 text-white">
      <div className="absolute inset-0 bg-dots opacity-5" />
      <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-navy-400/10 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Top section */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <img src={LOGO_PATH} alt="Anandion Global" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              An integrated clean energy and climate enterprise building the future of renewable power, hydrogen, carbon markets, climate solutions, energy trading and sustainable infrastructure.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest2 text-emerald-400">Company</h4>
            <ul className="mt-5 space-y-3">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest2 text-emerald-400">Get in Touch</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                <span>Anandion Global Private Limited, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                <a href="mailto:hello@anandion.com" className="transition-colors hover:text-white">hello@anandion.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                <span>www.anandion.com</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-white"
            >
              Contact Us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Anandion Global. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/governance" className="text-xs text-white/40 transition-colors hover:text-white">Governance</Link>
            <Link to="/sustainability" className="text-xs text-white/40 transition-colors hover:text-white">CSR</Link>
            <a href="#" className="text-xs text-white/40 transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 transition-colors hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
