import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import { BRAND, AI_DISCLAIMER } from '../lib/brand';

export const metadata: Metadata = {
  title: `Plan Guide | ${BRAND}`,
  description: `The ${BRAND} plan guide gives plain-language answers about your employer's own benefit plans, available in the employee portal after enrollment.`,
};

const EXAMPLE_QUESTIONS = [
  'What\u2019s the difference between an FSA and an HSA?',
  'Does my employer reimburse ASE exam fees?',
  'When does open enrollment close this year?',
  'What happens to my benefits if I have a new child?',
  'Does my employer offer a tool or safety equipment program?',
  'How do I check whether I\u2019m enrolled in disability coverage?',
];

export default function PlanGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)', color: 'var(--color-deep-orange)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-signal-orange)' }} />
            Plan Guide
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-graphite)' }}>
            Plain-language answers
            <br /><span className="gradient-text-orange">about your own benefits.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-slate)' }}>
            The plan guide gives plain-language answers about your employer&apos;s own benefit plans. It&apos;s available in the employee portal after you enroll.
          </p>
        </div>
      </section>

      {/* Example questions */}
      <section className="py-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--color-graphite)' }}>Example questions you can ask</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {EXAMPLE_QUESTIONS.map(q => (
              <div key={q} className="glass-card p-5">
                <p className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>&quot;{q}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI disclaimer */}
      <section className="py-10 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 text-center">
            <p className="text-sm" style={{ color: 'var(--color-slate)' }}>{AI_DISCLAIMER}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Access the plan guide</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-slate)' }}>
            Sign in to the employee portal to use the plan guide, or enroll with your company ID to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portal"
              className="px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
              style={{ background: 'var(--color-deep-orange)' }}>
              Go to the Employee Portal
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
