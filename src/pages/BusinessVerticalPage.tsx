import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, Check, Play,
} from 'lucide-react';
import {
  Reveal, SectionHeading, CTASection,
  staggerContainer, staggerItem,
} from '@/components/ui';
import { getBusiness, processIconMap } from '@/data/content';

export default function BusinessVerticalPage() {
  const { slug } = useParams<{ slug: string }>();
  const business = slug ? getBusiness(slug) : undefined;

  if (!business) return <Navigate to="/" replace />;

  const Icon = business.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img src={business.heroImage} alt={business.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-700/90 via-navy-800/70 to-navy-900/40" />
        </div>
        <div className="container-wide relative z-10 w-full pb-14">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest2 text-emerald-300 backdrop-blur-sm">
              <Icon className="h-3.5 w-3.5" />
              Business Vertical
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tighter2 text-white sm:text-5xl lg:text-6xl">
              {business.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {business.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tighter2 text-navy-700 sm:text-3xl lg:text-4xl">
              Overview
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-[1.8] text-silver-600 sm:text-lg">
              {business.overview}
            </p>
          </Reveal>
          {business.whyMatters && (
            <Reveal delay={0.15}>
              <p className="mt-4 text-base leading-[1.8] text-silver-600 sm:text-lg">
                {business.whyMatters}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-silver-50">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-silver-200 bg-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest2 text-emerald-600">Our Vision</h3>
                <p className="mt-4 text-base leading-relaxed text-silver-700">{business.vision}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-silver-200 bg-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest2 text-emerald-600">Our Mission</h3>
                <p className="mt-4 text-base leading-relaxed text-silver-700">{business.mission}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we do"
            subtitle="Our full range of capabilities across this business vertical."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {business.capabilities.map((cap, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-300 hover:border-emerald-200 hover:shadow-lg hover:shadow-navy-700/5">
                  <h3 className="text-base font-bold text-navy-700">{cap.heading}</h3>
                  <ul className="mt-4 space-y-2">
                    {cap.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-silver-600">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Solar section (renewables only) */}
      {business.slug === 'renewables' && (
        <section className="section-padding bg-silver-50">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Featured Technology"
              title="Floating Solar"
              subtitle="Harnessing solar power on water bodies to maximize energy generation while conserving land and reducing evaporation."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="group overflow-hidden rounded-2xl border border-silver-200 bg-white transition-all duration-500 hover:shadow-xl hover:shadow-navy-700/10">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/38126749/pexels-photo-38126749.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Floating Solar"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-700/30 to-transparent" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="group flex h-64 flex-col items-center justify-center rounded-2xl border border-silver-200 bg-gradient-to-br from-navy-700 to-navy-800 p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-navy-700/10">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-400/40 bg-emerald-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-400 group-hover:bg-emerald-500/20">
                    <Play className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Floating Solar Video</h3>
                  <p className="mt-2 text-sm text-white/60">Video coming soon</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section-padding bg-silver-50">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Process"
            title="From concept to execution"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {business.process.map((step, i) => {
              const StepIcon = processIconMap[step.icon] || processIconMap.map;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="relative">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <StepIcon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-3xl font-bold text-silver-200">0{i + 1}</span>
                    </div>
                    <h3 className="text-base font-bold text-navy-700">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-silver-600">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Anandion advantage"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {business.whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10"
              >
                <div className="mb-4 text-4xl font-bold text-silver-200">0{i + 1}</div>
                <h3 className="text-base font-bold text-navy-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability (if present) */}
      {business.sustainability && (
        <section className="section-padding bg-silver-50">
          <div className="container-wide">
            <SectionHeading eyebrow="Sustainability" title={business.sustainability.heading} />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {business.sustainability.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-center gap-3 rounded-xl border border-silver-200 bg-white p-4">
                    <Check className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-silver-700">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Innovation (if present) */}
      {business.innovation && (
        <section className="section-padding">
          <div className="container-wide">
            <SectionHeading eyebrow="Innovation" title={business.innovation.heading} />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {business.innovation.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-center gap-3 rounded-xl border border-silver-200 bg-white p-4">
                    <Check className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-silver-700">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Safety (if present) */}
      {business.safety && (
        <section className="section-padding bg-silver-50">
          <div className="container-wide">
            <SectionHeading eyebrow="Safety" title={business.safety.heading} />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {business.safety.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-center gap-3 rounded-xl border border-silver-200 bg-white p-4">
                    <Check className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-silver-700">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other businesses */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Explore other businesses" />
          <div className="mt-10 flex flex-wrap gap-3">
            {OtherBusinessLinks(business.slug)}
          </div>
        </div>
      </section>

      <CTASection
        title={`Partner with ${business.name}`}
        subtitle="Get in touch to explore how we can collaborate on your clean energy needs."
        buttonLabel="Get in Touch"
      />
    </>
  );
}

function OtherBusinessLinks(currentSlug: string) {
  const slugs = ['renewables', 'carbon', 'climate', 'hydrogen', 'ev', 'trading', 'capital'];
  return slugs
    .filter((s) => s !== currentSlug)
    .map((s) => {
      const b = getBusiness(s);
      if (!b) return null;
      const Icon = b.icon;
      return (
        <Link
          key={s}
          to={`/businesses/${s}`}
          className="group inline-flex items-center gap-2 rounded-full border border-silver-200 bg-white px-5 py-2.5 text-sm font-medium text-navy-700 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600"
        >
          <Icon className="h-4 w-4" />
          {b.name}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      );
    });
}
