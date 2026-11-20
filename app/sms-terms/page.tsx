import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import {
  BRAND,
  LEGAL_NAME,
  ADDRESS_FULL,
  SUPPORT_EMAIL_MAILTO,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_TEL,
  SUPPORT_PHONE_DISPLAY,
  DATA_SHARING_CLAUSE,
  SAMPLE_MESSAGES,
} from '../lib/brand';

export const metadata: Metadata = {
  title: `SMS Terms | ${BRAND}`,
  description: `Full SMS Terms for the ${BRAND} text messaging program, sent from a toll-free number.`,
};

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)', color: 'var(--color-deep-orange)' }}>
            <span>📱</span>
            SMS Terms
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>SMS Terms</h1>
          <p className="text-lg" style={{ color: 'var(--color-slate)' }}>Last Updated: November 20, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Program Description</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              <strong>{BRAND} Benefits Texts</strong> is a text messaging program operated by {LEGAL_NAME}, sent from a toll-free number. The program sends account notifications (enrollment confirmations, benefits deadline reminders, verification codes) and promotional messages (new or updated employer benefits and plan guide features) to current employees of participating automotive employers who enroll with a company ID.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Message Types</h2>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--color-slate)' }}>This program sends two types of messages, depending on which boxes you check at enrollment:</p>
            <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--color-slate)' }}>
              <li><strong>Account:</strong> enrollment confirmations, benefits deadline reminders, and verification codes.</li>
              <li><strong>Promotional:</strong> new or updated employer benefits and plan guide features.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Who Receives Messages</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Only current employees of a participating automotive employer who enroll at our <Link href="/enroll" className="underline" style={{ color: 'var(--color-deep-orange)' }}>enrollment page</Link> using a company ID provided by their employer. This program is never open to the general public.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>How to Opt In</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              You opt in by checking one or both of the two optional, unchecked SMS checkboxes on our <Link href="/enroll" className="underline" style={{ color: 'var(--color-deep-orange)' }}>enrollment page</Link>, then confirming your number at <Link href="/verify" className="underline" style={{ color: 'var(--color-deep-orange)' }}>/verify</Link>. Each checkbox is optional — you choose which, if any, to check. Consent to receive text messages is not a condition of employment or of receiving benefits.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Frequency</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Account notifications vary; promotional up to 4 msgs/month.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Number Type</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Messages are sent from a toll-free number.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Rates and Carrier Liability</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Message and data rates may apply depending on your mobile carrier and plan. {LEGAL_NAME} is not liable for delayed or undelivered messages, or for carrier-related issues, including message delays or failures due to factors outside our control. Carriers are not liable for delayed or undelivered messages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Opt Out</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Reply <strong>STOP</strong>, <strong>STOPALL</strong>, <strong>UNSUBSCRIBE</strong>, <strong>CANCEL</strong>, <strong>END</strong>, or <strong>QUIT</strong> to any message to opt out. One confirmation message will be sent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Resubscribe</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Reply <strong>START</strong> to resubscribe after opting out.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Help</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Reply <strong>HELP</strong> to any message, email <a href={SUPPORT_EMAIL_MAILTO} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_EMAIL}</a>, or call <a href={SUPPORT_PHONE_TEL} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_PHONE_DISPLAY}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Consent</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Consent to receive text messages is not a condition of employment or of receiving benefits.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Data Sharing</h2>
            <div className="p-4 rounded-xl" style={{ background: 'rgba(234,88,12,0.06)', border: '1px solid rgba(234,88,12,0.2)' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
                {DATA_SHARING_CLAUSE} Your phone number and SMS opt-in status are used solely to deliver the text messages described in these Terms and our{' '}
                <Link href="/privacy" className="underline" style={{ color: 'var(--color-deep-orange)' }}>Privacy Policy</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Sample Messages</h2>
            <div className="space-y-3">
              {SAMPLE_MESSAGES.map(sample => (
                <div key={sample.id} className="glass-card p-4">
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-deep-orange)' }}>{sample.type}</p>
                  <p className="text-sm" style={{ color: 'var(--color-ink)' }}>{sample.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Contact</h2>
            <div className="glass-card p-6">
              <p className="mb-2" style={{ color: 'var(--color-slate)' }}><strong>{LEGAL_NAME}</strong></p>
              <p className="mb-2" style={{ color: 'var(--color-slate)' }}>{ADDRESS_FULL}</p>
              <p className="mb-2" style={{ color: 'var(--color-slate)' }}><strong>Email:</strong> <a href={SUPPORT_EMAIL_MAILTO} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_EMAIL}</a></p>
              <p style={{ color: 'var(--color-slate)' }}><strong>Phone:</strong> <a href={SUPPORT_PHONE_TEL} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_PHONE_DISPLAY}</a></p>
            </div>
          </div>

          <div className="pt-4 flex gap-6 flex-wrap">
            <Link href="/privacy" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-deep-orange)' }}>
              ← Privacy Policy
            </Link>
            <Link href="/terms" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-deep-orange)' }}>
              Terms of Service →
            </Link>
            <Link href="/sms" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-deep-orange)' }}>
              Text Program Summary →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
