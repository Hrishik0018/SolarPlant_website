import { PageHero, ContentSection, SectionHeading, Reveal, CTASection } from '@/components/ui';
import { careerOpenings, contactEmails } from '@/data/content';
import {
  Leaf, TrendingUp, Users, ShieldCheck, Globe2, Cpu,
  ArrowUpRight, MapPin, Briefcase,
} from 'lucide-react';

const benefits = [
  { icon: Leaf,       title: 'Purpose-Driven Work',      desc: 'Every role contributes to the clean energy transition and a sustainable future. Every contribution matters, every innovation counts, every career creates impact.' },
  { icon: TrendingUp, title: 'Learning and Development',  desc: 'Technical training, leadership development, digital skills, sustainability education, innovation workshops and professional certifications.' },
  { icon: Cpu,        title: 'Innovation Starts with People', desc: 'We encourage every employee to contribute ideas that improve operational efficiency, sustainability, safety, technology and environmental performance.' },
  { icon: Users,      title: 'Diversity, Equity and Inclusion', desc: 'We believe great organizations reflect the diversity of the communities they serve. Diverse teams strengthen creativity, collaboration and innovation.' },
  { icon: ShieldCheck, title: 'Health, Safety and Wellbeing', desc: 'Nothing is more important than the health and safety of our people. Every employee has the right to return home safely every day.' },
  { icon: Globe2,     title: 'A Global Career with Purpose', desc: 'As Anandion Global expands internationally, our employees have opportunities to collaborate across multiple countries and cultures.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the Future. Build Your Career."
        subtitle="At Anandion Global, we believe that the future of sustainable energy will be shaped by extraordinary people with bold ideas, diverse perspectives and an unwavering commitment to innovation."
        image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Intro */}
      <ContentSection>
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tighter2 text-navy-700 sm:text-3xl lg:text-4xl">
              Build the Future of Energy
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-[1.8] text-silver-600 sm:text-lg">
              While technology powers the energy transition, it is talented individuals who transform vision into reality. Our people are the driving force behind every renewable energy project, every climate solution, every hydrogen innovation, every carbon market initiative and every investment that contributes to a cleaner and more sustainable world. As a global enterprise operating across renewable energy, carbon markets, climate solutions, green hydrogen, EV infrastructure, energy trading and climate finance, we offer more than employment—we offer the opportunity to become part of one of the world's most exciting industries.
            </p>
          </Reveal>
        </div>
      </ContentSection>

      {/* Benefits */}
      <ContentSection className="bg-silver-50">
        <SectionHeading
          eyebrow="Why Join Us"
          title="Why choose Anandion Global?"
          subtitle="When you join Anandion Global, you become part of a purpose-driven organization committed to innovation, integrity and long-term excellence."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-500 group-hover:bg-navy-700 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-700">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-600">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </ContentSection>

      {/* Open positions */}
      <ContentSection>
        <SectionHeading
          eyebrow="Current Openings"
          title="Open positions"
          subtitle="Explore current opportunities across our business verticals."
        />
        <div className="mt-12 space-y-3">
          {careerOpenings.map((job, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-silver-200 bg-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-lg hover:shadow-navy-700/5 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-base font-bold text-navy-700 group-hover:text-emerald-600">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-silver-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-emerald-500" />
                      {job.team}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                      {job.location}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-medium text-emerald-600">
                      {job.type}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:${contactEmails.careers}`}
                  className="inline-flex items-center gap-2 rounded-full border border-silver-200 px-5 py-2.5 text-sm font-medium text-navy-700 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Apply
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      <CTASection
        title="Don't see the right role?"
        subtitle="Send us your resume and we will reach out when a matching opportunity opens up."
        buttonLabel="Send Your Resume"
      />
    </>
  );
}
