import {
  Leaf, Cpu, Users, Globe2, Droplets, Recycle,
  Scale, ShieldCheck, Sparkles, Handshake, HeartHandshake,
  TrendingUp, Building2, Layers, FileText, ClipboardCheck,
  type LucideIcon,
} from 'lucide-react';
import { PageHero, ContentSection, SectionHeading, Reveal, CTASection } from '@/components/ui';
import type { LongFormPageData, ContentBlock } from '@/data/pages';

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  cpu: Cpu,
  users: Users,
  globe: Globe2,
  droplets: Droplets,
  recycle: Recycle,
  scale: Scale,
  shield: ShieldCheck,
  sparkles: Sparkles,
  handshake: Handshake,
  heart: HeartHandshake,
  trending: TrendingUp,
  building: Building2,
  layers: Layers,
  file: FileText,
  clipboard: ClipboardCheck,
};

export default function LongFormPage({ data }: { data: LongFormPageData }) {
  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={data.subtitle}
        image={data.heroImage}
      />
      {data.sections.map((section, i) => (
        <BlockRenderer key={i} block={section} index={i} />
      ))}
    </>
  );
}

function BlockRenderer({ block, index }: { block: ContentBlock; index: number }) {
  const alt = index % 2 === 1;

  switch (block.type) {
    case 'text':
      return (
        <ContentSection className={alt ? 'bg-silver-50' : ''}>
          <div className="container-narrow">
            {block.heading && (
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tighter2 text-navy-700 sm:text-3xl lg:text-4xl">
                  {block.heading}
                </h2>
              </Reveal>
            )}
            {block.body && (
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-[1.8] text-silver-600 sm:text-lg">
                  {block.body}
                </p>
              </Reveal>
            )}
            {block.body2 && (
              <Reveal delay={0.15}>
                <p className="mt-4 text-base leading-[1.8] text-silver-600 sm:text-lg">
                  {block.body2}
                </p>
              </Reveal>
            )}
          </div>
        </ContentSection>
      );

    case 'stats':
      return (
        <ContentSection className={alt ? 'bg-silver-50' : ''}>
          {block.heading && (
            <Reveal className="mb-12">
              <SectionHeading title={block.heading} />
            </Reveal>
          )}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {block.stats?.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card-white rounded-2xl p-6 text-center">
                  <div className="font-display text-3xl font-bold text-emerald-600 lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-silver-600">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </ContentSection>
      );

    case 'features':
      return (
        <ContentSection className={alt ? 'bg-silver-50' : ''}>
          {block.heading && (
            <Reveal className="mb-4">
              <SectionHeading title={block.heading} subtitle={block.body} />
            </Reveal>
          )}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {block.items?.map((item, i) => {
              const Icon = item.icon ? iconMap[item.icon] : Leaf;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-500 group-hover:bg-navy-700 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-700">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-silver-600">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </ContentSection>
      );

    case 'list':
      return (
        <ContentSection className={alt ? 'bg-silver-50' : ''}>
          {block.heading && (
            <Reveal className="mb-4">
              <SectionHeading title={block.heading} subtitle={block.body} />
            </Reveal>
          )}
          <div className="mt-12 space-y-8">
            {block.listItems?.map((group, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-silver-200 bg-white p-7">
                  <h3 className="mb-4 text-lg font-bold text-navy-700">{group.heading}</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm text-silver-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </ContentSection>
      );

    case 'cta':
      return (
        <CTASection
          title={block.heading}
          subtitle={block.body}
        />
      );

    default:
      return null;
  }
}
