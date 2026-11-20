import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import EnrollForm from './EnrollForm';
import { BRAND, SAMPLE_MESSAGES, FREQUENCY_LINE } from '../lib/brand';

export const metadata: Metadata = {
  title: `Enroll | ${BRAND}`,
  description: `Enroll in ${BRAND} using the company ID provided by your employer.`,
};

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(100,116,139,0.18) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-10 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)', color: 'var(--color-deep-orange)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-signal-orange)' }} />
            {BRAND}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>
            Enroll with your company ID
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-slate)' }}>
            Only current employees of a participating automotive employer can enroll. Use the company ID provided by your employer to get started.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-lg mx-auto px-6 py-6 relative" style={{ zIndex: 1 }}>
        <div className="glass-card p-8 md:p-10">
          <EnrollForm />
        </div>
      </section>

      {/* Sample messages */}
      <section className="max-w-3xl mx-auto px-6 py-16 pb-20 relative" style={{ zIndex: 1 }}>
        <h2 className="text-xl font-bold text-center mb-2" style={{ color: 'var(--color-graphite)' }}>Sample text messages</h2>
        <p className="text-sm text-center mb-8" style={{ color: 'var(--color-slate)' }}>{FREQUENCY_LINE}</p>
        <div className="space-y-3">
          {SAMPLE_MESSAGES.map(sample => (
            <div key={sample.id} className="glass-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-deep-orange)' }}>{sample.type}</p>
              <p className="text-sm" style={{ color: 'var(--color-ink)' }}>{sample.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
