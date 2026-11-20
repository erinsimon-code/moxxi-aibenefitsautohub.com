'use client';

import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BRAND, TAGLINE, POSITIONING_STATEMENT, REQUIRED_STATEMENT, SAMPLE_MESSAGES, FREQUENCY_LINE } from './lib/brand';

const HOW_IT_WORKS = [
  { num: '1', title: 'Your employer joins and gives you a company ID', desc: 'Participating dealerships, collision centers, parts distributors and manufacturers enroll in the program and issue a company ID to their employees.' },
  { num: '2', title: 'You enroll and choose optional text reminders', desc: 'Enroll with your company ID, then choose whether to receive optional account and promotional text reminders.' },
  { num: '3', title: 'You get benefits reminders and use the plan guide', desc: 'Receive reminders about benefits dates and tasks, and use the plain-language plan guide in the employee portal.' },
];

const ROLE_CARDS = [
  { icon: '🔧', title: 'Technicians', desc: 'Benefits reminders that fit shop floor and service bay schedules.' },
  { icon: '🧾', title: 'Service Advisors', desc: 'Stay on top of enrollment windows between customer appointments.' },
  { icon: '🤝', title: 'Sales Staff', desc: 'Benefits guidance that works around variable shifts and showroom hours.' },
  { icon: '📦', title: 'Parts & Warehouse', desc: 'Plan guide answers for teams working flat-rate and warehouse schedules.' },
  { icon: '🚘', title: 'Body Shop Crews', desc: 'Reminders about safety equipment and tool programs for collision center teams.' },
  { icon: '🗂️', title: 'Office Staff', desc: 'Support for multi-location dealer group HR and administrative teams.' },
];

const BENEFITS_TOPICS = [
  { title: 'Open enrollment', desc: 'Know when your employer\u2019s enrollment window opens and closes.' },
  { title: 'New-hire enrollment', desc: 'Understand your enrollment window as a new employee.' },
  { title: 'FSA/HSA receipts and deadlines', desc: 'Reminders to submit receipts before your plan\u2019s deadline.' },
  { title: 'Disability coverage', desc: 'Plain-language explanations of your employer\u2019s disability coverage.' },
  { title: 'Life-event check-ins', desc: 'Guidance on updating benefits after a qualifying life event.' },
  { title: 'Safety equipment & tool programs', desc: 'Information about your employer\u2019s safety equipment and tool programs.' },
  { title: 'Certification reimbursement', desc: 'Details on reimbursement for certification exam fees, like ASE exams.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* BACKGROUND GRADIENT BLOBS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, rgba(234,88,12,0.08) 50%, transparent 70%)' }} />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(100,116,139,0.18) 0%, rgba(100,116,139,0.08) 50%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.12) 0%, rgba(100,116,139,0.08) 50%, transparent 70%)' }} />
      </div>

      {/* NAVIGATION */}
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)', color: 'var(--color-deep-orange)' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-signal-orange)' }} />
              Employer-Sponsored Benefits for the Auto Industry
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6" style={{ color: 'var(--color-graphite)' }}>
              <span className="gradient-text-orange">{TAGLINE}</span>
            </h1>

            <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-slate)' }}>
              {POSITIONING_STATEMENT}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/enroll"
                className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all"
                style={{ background: 'var(--color-deep-orange)' }}>
                Enroll with your company ID
              </Link>
              <Link href="/benefits"
                className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
                See the benefits guide
              </Link>
            </div>
          </div>

          {/* AT A GLANCE */}
          <div className="glass-card p-8 md:p-10 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-graphite)' }}>At a glance</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-deep-orange)' }}>What it is</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                  {BRAND} is an employer-sponsored benefits program for automotive industry employees, operated by Benefits AI LLC.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-deep-orange)' }}>Who it&apos;s for</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                  Current employees of participating dealerships, collision centers, parts distributors and auto manufacturers. Never open to the general public.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-deep-orange)' }}>How to enroll</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                  Enroll using the company ID provided by your employer, then choose whether to receive optional text reminders.
                </p>
              </div>
            </div>
            <div className="border-t pt-6" style={{ borderColor: 'var(--color-chrome)' }}>
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--color-slate)' }}>
                {REQUIRED_STATEMENT}
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <Link href="/about" className="underline" style={{ color: 'var(--color-deep-orange)' }}>Learn more about us</Link>
                <Link href="/sms" className="underline" style={{ color: 'var(--color-deep-orange)' }}>View our text program</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>How it works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="glass-card p-6 h-full">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4"
                    style={{ background: 'var(--color-signal-orange)' }}>
                    {step.num}
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--color-graphite)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* BUILT FOR THE AUTO WORKFORCE */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>Built for the auto workforce</h2>
            <p className="text-lg" style={{ color: 'var(--color-slate)' }}>Benefits support that fits every role on the floor and in the office.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLE_CARDS.map(role => (
              <div key={role.title} className="glass-card p-6">
                <div className="text-3xl mb-4">{role.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-graphite)' }}>{role.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS TOPICS GRID */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>Benefits topics we help with</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS_TOPICS.map(topic => (
              <div key={topic.title} className="glass-card p-6">
                <div className="w-8 h-1 rounded-full mb-4" style={{ background: 'var(--color-signal-orange)' }} />
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-graphite)' }}>{topic.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE MESSAGES */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>Sample text messages</h2>
            <p className="text-lg" style={{ color: 'var(--color-slate)' }}>{FREQUENCY_LINE}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {SAMPLE_MESSAGES.map(sample => (
              <div key={sample.id} className="glass-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-deep-orange)' }}>{sample.type}</p>
                <p className="text-sm" style={{ color: 'var(--color-ink)' }}>{sample.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIRED STATEMENT */}
      <section className="py-10 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium" style={{ color: 'var(--color-slate)' }}>{REQUIRED_STATEMENT}</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 30%, #f8fafc 60%, #f1f5f9 100%)' }}>
            <div className="absolute top-0 left-0 w-64 h-64 blob opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 blob opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(100,116,139,0.18) 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-graphite)' }}>
                Ready to enroll in
                <br />your workplace benefits?
              </h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                Enroll with the company ID provided by your employer, and choose whether to receive optional text reminders.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/enroll"
                  className="px-10 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all"
                  style={{ background: 'var(--color-deep-orange)' }}>
                  Enroll with your company ID
                </Link>
                <Link href="/plan-guide"
                  className="px-10 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
                  Explore the plan guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

