import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, TrendingUp } from 'lucide-react';
import { Reveal, AuroraBg } from '@/components/ui';
import { contactEmails } from '@/data/content';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', enquiry: 'General Enquiry', message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `${form.enquiry} — ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nEnquiry Type: ${form.enquiry}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:hello@anandion.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const contactCards = [
    { icon: Mail,   title: 'Business Development', email: contactEmails.business },
    { icon: TrendingUp, title: 'Investor Relations', email: contactEmails.investors },
    { icon: Mail,   title: 'Media Relations',       email: contactEmails.media },
    { icon: Mail,   title: 'Careers',               email: contactEmails.careers },
    { icon: Mail,   title: 'Partnerships',          email: contactEmails.partnerships },
    { icon: Mail,   title: 'General Enquiries',     email: contactEmails.general },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-center overflow-hidden pt-32 bg-mesh-hero">
        <AuroraBg light />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-5 eyebrow-tag eyebrow-light">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Get in Touch
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tighter2 text-navy-700 sm:text-5xl lg:text-6xl">
                Let's build a <span className="text-gradient-green">sustainable future</span> together
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver-600 sm:text-lg">
                Whether you are exploring a business partnership, seeking project collaboration, looking for investment opportunities, interested in joining our team or simply wishing to learn more about our organization, we welcome the opportunity to connect with you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="glass-white rounded-3xl p-8 lg:p-10">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                      >
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-navy-700">Message Sent!</h3>
                        <p className="mt-2 max-w-sm text-sm text-silver-600">
                          Thank you for reaching out. Our team will get back to you within 48 hours.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setForm({ name: '', email: '', company: '', enquiry: 'General Enquiry', message: '' });
                          }}
                          className="mt-6 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <div className="grid gap-5 sm:grid-cols-2">
                          <Field label="Full Name" type="text" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                          <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                        </div>
                        <Field label="Company / Organization" type="text" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                        <div>
                          <label className="mb-2 block text-sm font-medium text-navy-700">Enquiry Type</label>
                          <select
                            value={form.enquiry}
                            onChange={(e) => setForm({ ...form, enquiry: e.target.value })}
                            className="w-full rounded-xl border border-silver-200 bg-white px-4 py-3 text-sm text-navy-700 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          >
                            <option>General Enquiry</option>
                            <option>Business Partnership</option>
                            <option>Investor Relations</option>
                            <option>Media & Press</option>
                            <option>Careers</option>
                            <option>Sustainability</option>
                          </select>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-navy-700">Message</label>
                          <textarea
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full resize-none rounded-xl border border-silver-200 bg-white px-4 py-3 text-sm text-navy-700 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                            placeholder="Tell us about your enquiry..."
                          />
                        </div>
                        <button
                          type="submit"
                          className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-navy-700 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-700/25 sm:w-auto"
                        >
                          Send Message
                          <Send className="h-4 w-4" />
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <Reveal delay={0.1}>
                <div className="space-y-5">
                  <div className="rounded-2xl border border-silver-200 bg-white p-6">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-700">Registered Office</h3>
                    <p className="mt-1.5 text-sm text-silver-600">Anandion Global Private Limited</p>
                    <p className="text-sm text-silver-600">Uttar Pradesh, India</p>
                  </div>

                  <div className="rounded-2xl border border-silver-200 bg-white p-6">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-700">Email Contacts</h3>
                    <div className="mt-3 space-y-2">
                      {contactCards.map((card, i) => (
                        <div key={i}>
                          <span className="text-xs text-silver-400">{card.title}</span>
                          <a href={`mailto:${card.email}`} className="block text-sm text-emerald-600 hover:text-emerald-700">
                            {card.email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-silver-200 bg-white p-6">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-700">Website</h3>
                    <p className="mt-1.5 text-sm text-silver-600">www.anandion.com</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, type, value, onChange, required,
}: {
  label: string; type: string; value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-navy-700">
        {label}{required && <span className="text-emerald-600"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-silver-200 bg-white px-4 py-3 text-sm text-navy-700 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
      />
    </div>
  );
}


