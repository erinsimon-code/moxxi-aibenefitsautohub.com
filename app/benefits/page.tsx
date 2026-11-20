import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import { BRAND } from '../lib/brand';

export const metadata: Metadata = {
  title: `Benefits Guide | ${BRAND}`,
  description: `A plain-language benefits guide for automotive industry employees covering enrollment, FSA/HSA, disability coverage, life events and more.`,
};

const TOPICS = [
  {
    icon: '📝',
    title: 'Open enrollment',
    desc: 'The window each year when you can review and change your elections under your employer\u2019s benefit plans.',
  },
  {
    icon: '🆕',
    title: 'New-hire enrollment',
    desc: 'The window after you are hired when you can enroll in your employer\u2019s benefit plans for the first time.',
  },
  {
    icon: '💳',
    title: 'FSA vs HSA',
    desc: 'Flexible Spending Accounts and Health Savings Accounts work differently. Your plain-language plan guide can explain how your employer\u2019s accounts work and when receipts are due.',
  },
  {
    icon: '🛡️',
    title: 'Disability coverage',
    desc: 'Short-term and long-term disability coverage offered under your employer\u2019s plan, and how to learn whether you are enrolled.',
  },
  {
    icon: '👪',
    title: 'Life events',
    desc: 'Getting married, having a child, or other qualifying life events may let you update your benefits outside the normal enrollment window.',
  },
  {
    icon: '🦺',
    title: 'Safety equipment & tool programs',
    desc: 'Many employers offer programs that help cover safety equipment or tools used on the job. Check with HR about what your employer offers.',
  },
  {
    icon: '🎓',
    title: 'Certification reimbursement',
    desc: 'Some employers reimburse fees for industry certifications, such as ASE exams. Ask your HR team whether your employer offers this.',
  },
];

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(100,116,139,0.18) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)', color: 'var(--color-deep-orange)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-signal-orange)' }} />
            Benefits Guide
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-graphite)' }}>
            Plain-language benefits
            <br /><span className="gradient-text-orange">for the auto workforce.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-slate)' }}>
            General explanations of common workplace benefits topics. Your own plan details come from your employer.
          </p>
        </div>
      </section>

      {/* Topics grid */}
      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {TOPICS.map(topic => (
              <div key={topic.title} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{topic.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-graphite)' }}>{topic.title}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-slate)' }}>{topic.desc}</p>
                    <p className="text-xs italic" style={{ color: 'var(--color-slate)' }}>Ask your HR team how this works under your employer&apos;s plan.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Want more detail?</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-slate)' }}>
            Use the plan guide for your employer&apos;s own plan details, or enroll to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/plan-guide"
              className="px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
              style={{ background: 'var(--color-deep-orange)' }}>
              Explore the plan guide
            </Link>
            <Link href="/enroll"
              className="px-8 py-4 text-sm font-semibold text-gray-700 rounded-2xl glass-button">
              Enroll with your company ID
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
