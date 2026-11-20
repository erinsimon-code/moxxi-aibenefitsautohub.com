import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import ContactForm from './ContactForm';
import {
  BRAND,
  LEGAL_NAME,
  ADDRESS_FULL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_TEL,
  SUPPORT_EMAIL,
  SUPPORT_EMAIL_MAILTO,
} from '../lib/brand';

export const metadata: Metadata = {
  title: `Contact | ${BRAND}`,
  description: `Contact ${BRAND} for questions about enrollment, the plan guide, or our text program.`,
};

export default function ContactPage() {
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
      <section className="pt-32 pb-12 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)', color: 'var(--color-deep-orange)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-signal-orange)' }} />
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>
            Get in touch
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-slate)' }}>
            Questions about enrollment, the plan guide, or our text program? We typically respond within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">

          {/* Contact details */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--color-graphite)' }}>Contact Details</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-slate)' }}>Legal Name</p>
                  <p className="font-medium" style={{ color: 'var(--color-ink)' }}>{LEGAL_NAME}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-slate)' }}>Address</p>
                  <p className="font-medium" style={{ color: 'var(--color-ink)' }}>{ADDRESS_FULL}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-slate)' }}>Phone</p>
                  <a href={SUPPORT_PHONE_TEL} className="font-medium hover:underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_PHONE_DISPLAY}</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-slate)' }}>Email</p>
                  <a href={SUPPORT_EMAIL_MAILTO} className="font-medium hover:underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_EMAIL}</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-slate)' }}>Hours</p>
                  <p className="font-medium" style={{ color: 'var(--color-ink)' }}>Mon–Fri, 9 AM–5 PM ET</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: 'rgba(234,88,12,0.06)', border: '1px solid rgba(234,88,12,0.2)' }}>
              <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-graphite)' }}>Text Message Help</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
                Reply <strong>STOP</strong> to opt out, <strong>START</strong> to resubscribe, <strong>HELP</strong> for help. Account notifications vary; promotional up to 4 msgs/month. Message and data rates may apply. Consent is not a condition of employment or of receiving benefits. See our{' '}
                <Link href="/sms-terms" className="underline">SMS Terms</Link>.
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />

        </div>
      </section>

      <Footer />
    </div>
  );
}
