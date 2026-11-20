import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import {
  BRAND,
  LEGAL_NAME,
  SUPPORT_EMAIL_MAILTO,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_TEL,
  SUPPORT_PHONE_DISPLAY,
  DATA_SHARING_CLAUSE,
  SAMPLE_MESSAGES,
} from '../lib/brand';

export const metadata: Metadata = {
  title: `Text Program | ${BRAND}`,
  description: `A summary of the ${BRAND} text messaging program for automotive industry employees, sent from a toll-free number.`,
};

const ROWS: [string, React.ReactNode][] = [
  ['Program Name', `${BRAND} Benefits Texts`],
  ['Sender', `${LEGAL_NAME}, doing business as ${BRAND}`],
  ['Use Case', 'Mixed: account notifications and promotional messages'],
  ['Message Types', 'Account: enrollment confirmations, benefits deadline reminders, verification codes. Promotional: new or updated employer benefits and plan guide features.'],
  ['Who Receives Messages', <>Current employees of participating automotive employers who enroll at <Link href="/enroll" className="underline" style={{ color: 'var(--color-deep-orange)' }}>our enrollment page</Link> with a company ID.</>],
  ['How to Opt In', <>The two optional, unchecked boxes on <Link href="/enroll" className="underline" style={{ color: 'var(--color-deep-orange)' }}>our enrollment page</Link>, then number confirmation at <Link href="/verify" className="underline" style={{ color: 'var(--color-deep-orange)' }}>/verify</Link>.</>],
  ['Frequency', 'Account notifications vary; promotional up to 4 msgs/month.'],
  ['Number Type', 'Toll-free number.'],
  ['Cost', 'Message and data rates may apply.'],
  ['Opt Out', 'Reply STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, or QUIT. One confirmation message is sent.'],
  ['Resubscribe', 'Reply START.'],
  ['Help', <>Reply HELP, email <a href={SUPPORT_EMAIL_MAILTO} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_EMAIL}</a>, or call <a href={SUPPORT_PHONE_TEL} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_PHONE_DISPLAY}</a>.</>],
  ['Consent', 'Not a condition of employment or of receiving benefits.'],
  ['Data Sharing', DATA_SHARING_CLAUSE],
];

export default function SmsSummaryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)', color: 'var(--color-deep-orange)' }}>
            <span>📱</span> Text Program Summary
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>
            {BRAND} Benefits Texts
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-slate)' }}>
            A one-screen summary of our SMS program for carrier and platform review.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {ROWS.map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-black/[0.015]' : ''}>
                    <td className="p-4 font-semibold align-top w-48 border-r" style={{ color: 'var(--color-ink)', borderColor: 'var(--color-chrome)' }}>{label}</td>
                    <td className="p-4 leading-relaxed" style={{ color: 'var(--color-slate)' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-graphite)' }}>Sample Messages</h2>
          <div className="space-y-3 mb-10">
            {SAMPLE_MESSAGES.map(sample => (
              <div key={sample.id} className="glass-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-deep-orange)' }}>{sample.type}</p>
                <p className="text-sm" style={{ color: 'var(--color-ink)' }}>{sample.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            <Link href="/sms-terms" className="text-sm font-semibold underline" style={{ color: 'var(--color-deep-orange)' }}>
              Full SMS Terms
            </Link>
            <Link href="/privacy" className="text-sm font-semibold underline" style={{ color: 'var(--color-deep-orange)' }}>
              Privacy Policy
            </Link>
            <Link href="/enroll" className="text-sm font-semibold underline" style={{ color: 'var(--color-deep-orange)' }}>
              Enrollment Page
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


