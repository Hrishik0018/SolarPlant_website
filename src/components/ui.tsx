import {
  useRef, useState, useEffect, type ReactNode,
} from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/* ── Reveal on Scroll ─────────────────────────────────────────── */
export function Reveal({
  children, className = '', delay = 0, y = 30,
}: {
  children: ReactNode; className?: string; delay?: number; y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Split Text Reveal ────────────────────────────────────────── */
export function SplitText({
  text, className = '', delay = 0,
}: {
  text: string; className?: string; delay?: number;
}) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '120%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ delay: delay + i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}{i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── Section Heading ──────────────────────────────────────────── */
export function SectionHeading({
  eyebrow, title, subtitle, center = false, dark = false,
}: {
  eyebrow?: string; title: string; subtitle?: string; center?: boolean; dark?: boolean;
}) {
  return (
    <div className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {eyebrow && (
        <Reveal>
          <div className={`mb-4 eyebrow-tag ${dark ? 'eyebrow-dark' : 'eyebrow-light'}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className={`text-3xl font-bold leading-[1.15] tracking-tighter2 sm:text-4xl lg:text-[2.75rem] ${dark ? 'text-white' : 'text-navy-700'}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/70' : 'text-silver-600'} ${center ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ── Glass Card ───────────────────────────────────────────────── */
export function GlassCard({
  children, className = '', hover = true,
}: {
  children: ReactNode; className?: string; hover?: boolean;
}) {
  return (
    <div className={`glass-white rounded-2xl p-7 ${hover ? 'transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10' : ''} ${className}`}>
      {children}
    </div>
  );
}

/* ── Animated Counter ─────────────────────────────────────────── */
export function AnimatedCounter({
  value, suffix = '', prefix = '', label, decimals = 0,
}: {
  value: number; suffix?: string; prefix?: string; label: string; decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl font-bold tracking-tighter2 text-navy-700 lg:text-5xl">
        {prefix}{count.toFixed(decimals)}{suffix}
      </div>
      <div className="mt-2 text-sm text-silver-600">{label}</div>
    </div>
  );
}

/* ── Page Hero ────────────────────────────────────────────────── */
export function PageHero({
  eyebrow, title, subtitle, image,
}: {
  eyebrow?: string; title: string; subtitle?: string; image?: string;
}) {
  return (
    <section className="relative flex min-h-[55vh] items-center overflow-hidden pt-32">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700/90 via-navy-800/80 to-navy-900/70" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 bg-mesh-hero" />
      )}
      <div className="container-wide relative z-10 w-full">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <div className={`mb-5 eyebrow-tag ${image ? 'eyebrow-dark' : 'eyebrow-light'}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {eyebrow}
              </div>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h1 className={`text-4xl font-bold leading-[1.1] tracking-tighter2 sm:text-5xl lg:text-6xl ${image ? 'text-white' : 'text-navy-700'}`}>
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.2}>
              <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${image ? 'text-white/70' : 'text-silver-600'}`}>
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Content Section ──────────────────────────────────────────── */
export function ContentSection({
  children, className = '',
}: {
  children: ReactNode; className?: string;
}) {
  return (
    <section className={`section-padding relative ${className}`}>
      <div className="container-wide relative z-10">{children}</div>
    </section>
  );
}

/* ── CTA Section ──────────────────────────────────────────────── */
export function CTASection({
  title = 'Partner With Us',
  subtitle = 'Join us in powering a sustainable future.',
  to = '/contact',
  buttonLabel = 'Get in Touch',
}: {
  title?: string; subtitle?: string; to?: string; buttonLabel?: string;
}) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 via-navy-800 to-emerald-600 px-8 py-16 text-center shadow-2xl shadow-navy-700/20 lg:px-16 lg:py-24">
            <div className="absolute inset-0 bg-dots opacity-10" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-navy-400/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter2 text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                {subtitle}
              </p>
              <Link
                to={to}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy-700 transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
              >
                {buttonLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Stagger Container ────────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ── Energy Pulse Line ────────────────────────────────────────── */
export function EnergyPulseLine({ className = '' }: { className?: string }) {
  return <div className={`energy-line h-0.5 w-full ${className}`} />;
}

/* ── AuroraBg (mesh gradient blobs) ───────────────────────────── */
export function AuroraBg({ light = false }: { light?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute h-[600px] w-[600px] rounded-full opacity-60"
        style={{
          top: '-10%', left: '-5%',
          background: light
            ? 'radial-gradient(circle, rgba(46,139,87,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(46,139,87,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'float 9s ease-in-out infinite',
        }}
      />
      <div
        className="absolute h-[500px] w-[500px] rounded-full opacity-40"
        style={{
          top: '10%', right: '-10%',
          background: light
            ? 'radial-gradient(circle, rgba(11,45,91,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(11,45,91,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'float 12s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />
    </div>
  );
}
