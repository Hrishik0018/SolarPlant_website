import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Sparkles, Leaf, TrendingUp,
  MapPin, Play,
} from 'lucide-react';
import {
  Reveal, SectionHeading, SplitText,
  staggerContainer, staggerItem, AuroraBg, AnimatedCounter,
} from '@/components/ui';
import {
  globalStats, ecosystemCards, whyAnandionPillars,
  projectHighlights, investorHighlights, innovationAreas,
  mediaItems, partnerTypes,
} from '@/data/content';
import { LOGO_PATH } from '@/data/content';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <BusinessEcosystem />
      <WhyAnandion />
      <FeaturedProjects />
      <SustainabilitySection />
      <InnovationSection />
      <InvestorHighlights />
      <LatestNews />
      <GlobalPresence />
      <StrategicPartners />
      <FinalCTA />
    </>
  );
}

/* ── 1. HERO ───────────────────────────────────────────────────── */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-mesh-hero pt-32">
      <AuroraBg light />

      <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Solar energy farm"
          className="h-full w-full object-cover opacity-[0.06]"
        />
      </motion.div>

      <motion.div style={{ y: yText, opacity }} className="container-wide relative z-10">
        <div className="max-w-4xl">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-xs font-semibold text-emerald-600 backdrop-blur-sm">
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span className="uppercase tracking-widest2">Powering a Sustainable Future</span>
            </div>
          </Reveal>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tightest text-navy-700 sm:text-6xl lg:text-7xl">
            <SplitText text="Powering a" />
            <br />
            <span className="text-gradient-green"><SplitText text="Sustainable Future" delay={0.4} /></span>
          </h1>

          <Reveal delay={0.6}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-silver-600 sm:text-lg">
              Anandion Global is building the future of clean energy through renewable power, hydrogen, carbon markets, climate solutions, energy trading and sustainable infrastructure.
            </p>
          </Reveal>

          <Reveal delay={0.75}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/businesses/renewables"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-navy-700 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-navy-700/25"
              >
                <span className="relative z-10">Explore Our Businesses</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 translate-y-full bg-navy-800 transition-transform duration-300 group-hover:translate-y-0" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full border-2 border-emerald-500 bg-white/60 px-8 py-4 text-sm font-semibold text-emerald-600 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500 hover:text-white"
              >
                Partner With Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest2 text-silver-400">Scroll</span>
          <div className="flex h-9 w-5 justify-center rounded-full border-2 border-emerald-300 p-1">
            <motion.div
              className="h-1.5 w-1 rounded-full bg-emerald-500"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── 2. STATS BAR ──────────────────────────────────────────────── */
function StatsBar() {
  return (
    <section className="border-b border-silver-200 bg-white py-16">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {globalStats.map((stat, i) => {
            const num = parseFloat(stat.value);
            const decimals = stat.value.includes('.') ? 1 : 0;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <AnimatedCounter
                    value={num}
                    suffix={stat.suffix || ''}
                    label={stat.label}
                    decimals={decimals}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── 3. ABOUT ANANDION ─────────────────────────────────────────── */
function AboutSection() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Welcome to Anandion Global"
              title="Engineering a Sustainable Tomorrow"
              subtitle="Energy has always shaped civilization. Today, it is shaping humanity's future. Population growth, urbanization, industrial expansion and digital transformation continue to increase global energy demand. At the same time, climate change demands a decisive shift towards cleaner, smarter and more resilient energy systems."
            />
            <Reveal delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-silver-600">
                Meeting these challenges requires more than individual technologies. It requires integrated thinking. It requires innovation. It requires responsible leadership. That is why Anandion Global was established. We are creating a diversified clean energy platform that combines renewable energy development, climate finance, carbon markets, green hydrogen, electric mobility infrastructure and intelligent energy trading under one globally integrated enterprise. Our objective is not simply to participate in the energy transition. Our objective is to help lead it.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Learn more about us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Clean energy"
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-700/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── 4. BUSINESS ECOSYSTEM ─────────────────────────────────────── */
function BusinessEcosystem() {
  return (
    <section className="section-padding bg-silver-50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Business Ecosystem"
          title="Seven verticals. One integrated platform."
          subtitle="Our businesses work together to create a holistic platform for clean energy and climate leadership."
          center
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {ecosystemCards.map((biz) => {
            const Icon = biz.icon;
            return (
              <motion.div key={biz.slug} variants={staggerItem}>
                <Link
                  to={`/businesses/${biz.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-500 group-hover:bg-navy-700 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-700 group-hover:text-emerald-600">{biz.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-600">{biz.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ── 5. WHY ANANDION ───────────────────────────────────────────── */
function WhyAnandion() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Anandion Global"
          title="Integrated solutions for a complex energy landscape"
          subtitle="Rather than offering isolated services, Anandion Global delivers end-to-end solutions spanning project development, financing, implementation and long-term operational support."
          center
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyAnandionPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-white transition-all duration-500 group-hover:bg-emerald-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-700">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-600">{p.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── 6. FEATURED PROJECTS ──────────────────────────────────────── */
function FeaturedProjects() {
  return (
    <section className="section-padding bg-silver-50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Building tomorrow's energy infrastructure today"
          subtitle="From utility-scale solar parks to green hydrogen facilities, afforestation to EV charging networks — our projects are tangible expressions of our vision."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((project, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-silver-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-700/10">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-700/60 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-emerald-600 backdrop-blur-sm">
                    {project.type}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="mb-1 inline-flex rounded-full bg-emerald-500/90 px-3 py-0.5 text-xs font-semibold text-white">
                      {project.capacity}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-navy-700">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver-600">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-navy-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-700/25"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 7. SUSTAINABILITY ─────────────────────────────────────────── */
function SustainabilitySection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-navy-700 via-navy-800 to-emerald-700 text-white">
      <div className="absolute inset-0 bg-dots opacity-5" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-navy-400/10 blur-3xl" />

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Sustainability"
          title="Sustainability Is Our Foundation"
          subtitle="Sustainability is not a department within Anandion Global. It is the foundation upon which the Company is built. Every investment decision, every partnership and every innovation is guided by our commitment to creating long-term environmental, economic and social value."
          center
          dark
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: Leaf,      title: 'Environmental', desc: 'Renewable energy, carbon reduction, resource efficiency, circular economy, biodiversity and water stewardship.' },
            { icon: Sparkles,  title: 'Social',        desc: 'Health and safety, diversity and inclusion, human rights, community development and employee development.' },
            { icon: TrendingUp, title: 'Governance',   desc: 'Ethical leadership, board accountability, compliance, risk management and responsible supply chains.' },
          ].map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:border-emerald-400/30 hover:bg-white/10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 transition-all duration-500 group-hover:bg-emerald-500/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              to="/sustainability"
              className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-300 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white"
            >
              Explore our sustainability commitments
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 8. INNOVATION ─────────────────────────────────────────────── */
function InnovationSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Innovation"
          title="Innovation that powers the future"
          subtitle="Innovation is not confined to research laboratories—it is embedded throughout our business model. We invest in innovation that creates measurable commercial, environmental and social value."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {innovationAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-500 group-hover:bg-navy-700 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-700">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-600">{area.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── 9. INVESTOR HIGHLIGHTS ────────────────────────────────────── */
function InvestorHighlights() {
  return (
    <section className="section-padding bg-silver-50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Investor Highlights"
          title="Why invest in Anandion Global?"
          subtitle="The global transition toward a low-carbon economy is reshaping industries and unlocking unprecedented opportunities for long-term value creation."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {investorHighlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-white transition-all duration-500 group-hover:bg-emerald-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-700">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-600">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              to="/investors"
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-navy-700 px-7 py-3.5 text-sm font-semibold text-navy-700 transition-all duration-300 hover:bg-navy-700 hover:text-white"
            >
              Investor Relations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 10. GLOBAL PRESENCE ───────────────────────────────────────── */
function GlobalPresence() {
  const regions = [
    { name: 'Asia',     desc: 'Headquartered in India with operations across the region.' },
    { name: 'Europe',   desc: 'Strategic partnerships and market development.' },
    { name: 'Middle East', desc: 'Collaboration on sustainable infrastructure.' },
    { name: 'Africa',   desc: 'Clean energy access and climate resilience.' },
    { name: 'Americas', desc: 'Technology partnerships and investment.' },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Global Presence"
          title="A global enterprise with local expertise"
          subtitle="Although proudly headquartered in India, Anandion Global has been established with a global outlook. We are committed to developing strategic partnerships across Asia, Europe, the Middle East, Africa and the Americas."
          center
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {regions.map((region, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group rounded-2xl border border-silver-200 bg-white p-6 text-center transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-500 group-hover:bg-navy-700 group-hover:text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-navy-700">{region.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-silver-500">{region.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 11. STRATEGIC PARTNERS ────────────────────────────────────── */
function StrategicPartners() {
  return (
    <section className="section-padding bg-silver-50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Strategic Partners"
          title="Collaboration that accelerates progress"
          subtitle="Meaningful progress requires collaboration. We work alongside governments, corporations, research institutions, financial institutions and technology leaders to accelerate sustainable development."
          center
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {partnerTypes.map((partner, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-full border border-silver-200 bg-white px-6 py-3 text-sm font-medium text-navy-700 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600">
                {partner}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 12. LATEST NEWS ───────────────────────────────────────────── */
function LatestNews() {
  return (
    <section className="relative section-padding overflow-hidden bg-navy-800">
      {/* Video background placeholder */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="/videos/media-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800/85 via-navy-800/75 to-navy-900/85" />

      {/* Centered placeholder indicator (remove once real MP4 is in place) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm">
          <Play className="h-8 w-8 text-white/70" />
        </div>
        <p className="mt-4 text-sm font-medium text-white/60">Media Background Video Placeholder</p>
        <p className="mt-1 text-xs text-white/40">This will be replaced with the final MP4.</p>
      </div>

      {/* Content */}
      <div className="container-wide relative z-20">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 lg:flex-row">
          <SectionHeading
            eyebrow="Latest News"
            title="Media Centre"
            subtitle="Stay informed about Anandion Global's latest developments."
            dark
          />
          <Reveal delay={0.2}>
            <Link
              to="/media"
              className="group inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              View all news
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mediaItems.slice(0, 3).map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group h-full rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md transition-all duration-500 hover:border-emerald-400/40 hover:bg-white/15 hover:shadow-xl hover:shadow-black/30">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                    {item.category}
                  </span>
                  <span className="text-xs text-white/50">{item.date}</span>
                </div>
                <h3 className="text-base font-bold leading-snug text-white group-hover:text-emerald-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 13. FINAL CTA ─────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 via-navy-800 to-emerald-600 px-8 py-16 text-center shadow-2xl shadow-navy-700/20 lg:px-16 lg:py-24">
            <div className="absolute inset-0 bg-dots opacity-10" />
            <div className="absolute -right-20 -top-20 h-64 w-64 animate-float rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 animate-float-slow rounded-full bg-navy-400/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <img src={LOGO_PATH} alt="Anandion Global" className="mx-auto mb-8 h-14 w-auto brightness-0 invert" />
              <h2 className="text-3xl font-bold leading-tight tracking-tighter2 text-white sm:text-4xl lg:text-5xl">
                Power the future with us
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                Whether you are a utility seeking clean power, a corporation pursuing net-zero, or an investor looking for impact — there is a role for you in the clean energy transition.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy-700 transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
