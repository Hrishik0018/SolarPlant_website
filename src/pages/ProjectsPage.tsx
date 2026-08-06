import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero, ContentSection, SectionHeading, Reveal, CTASection } from '@/components/ui';
import { projectHighlights } from '@/data/content';

const types = ['All', 'Renewables', 'Hydrogen', 'Carbon', 'EV'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projectHighlights : projectHighlights.filter((p) =>
    p.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Building Tomorrow's Energy Infrastructure Today"
        subtitle="Every project we develop represents an opportunity to accelerate the global energy transition, strengthen economies, empower communities and deliver long-term value for our stakeholders."
        image="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <ContentSection>
        {/* Filter */}
        <div className="mb-12 flex flex-wrap gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === type
                  ? 'bg-navy-700 text-white'
                  : 'border border-silver-200 text-navy-700 hover:bg-silver-50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={`${project.name}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
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
                </div>
                <div className="p-5">
                  <div className="mb-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    {project.capacity}
                  </div>
                  <h3 className="text-base font-bold text-navy-700">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-600">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ContentSection>

      <ContentSection className="bg-silver-50">
        <SectionHeading
          eyebrow="Innovation"
          title="Innovation powers our projects"
          subtitle="Innovation is not confined to research laboratories—it is embedded throughout our business model. We invest in innovation that creates measurable commercial, environmental and social value."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Artificial Intelligence', desc: 'AI for renewable energy forecasting, equipment diagnostics, market analytics and asset optimization.' },
            { title: 'Digital Transformation', desc: 'IoT, cloud computing, big data analytics, digital twins and predictive maintenance.' },
            { title: 'Research & Development', desc: 'Green hydrogen, carbon capture, advanced battery storage, sustainable fuels and climate analytics.' },
            { title: 'Innovation Partnerships', desc: 'Collaboration with universities, research institutions, technology companies and start-ups.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10">
                <h3 className="text-base font-bold text-navy-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-600">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      <CTASection
        title="Want to learn more about our projects?"
        subtitle="Our team is ready to discuss how we can collaborate on your next clean energy project."
      />
    </>
  );
}
