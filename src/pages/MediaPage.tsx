import { PageHero, ContentSection, Reveal } from '@/components/ui';
import { mediaItems, contactEmails } from '@/data/content';
import { ArrowUpRight, Newspaper } from 'lucide-react';

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title="Latest News & Press Releases"
        subtitle="Connecting with the World Through Transparency, Innovation and Collaboration. Stay informed about Anandion Global's latest developments."
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <ContentSection>
        <div className="grid gap-6 md:grid-cols-2">
          {mediaItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="group rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-navy-700/10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                    <Newspaper className="h-3 w-3" />
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-navy-700 group-hover:text-emerald-600">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-600">{item.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
                >
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      <ContentSection className="bg-silver-50">
        <div className="rounded-3xl border border-silver-200 bg-white p-10 text-center lg:p-14">
          <h2 className="text-2xl font-bold tracking-tighter2 text-navy-700 sm:text-3xl">
            Media Inquiries
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-silver-600 sm:text-base">
            Journalists and media professionals seeking information, interviews or official comments are encouraged to contact our Corporate Communications team.
          </p>
          <a
            href={`mailto:${contactEmails.media}`}
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-navy-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-700/25"
          >
            {contactEmails.media}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </ContentSection>
    </>
  );
}
