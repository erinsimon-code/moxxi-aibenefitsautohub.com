import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import {
  BRAND,
  LEGAL_NAME,
  ADDRESS_FULL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_TEL,
  SUPPORT_EMAIL,
  SUPPORT_EMAIL_MAILTO,
  POSITIONING_STATEMENT,
  REQUIRED_STATEMENT,
} from '../lib/brand';

export const metadata: Metadata = {
  title: `About | ${BRAND}`,
  description: `Learn about ${BRAND}, an employer-sponsored benefits program for automotive industry employees operated by ${LEGAL_NAME}.`,
};

export default function AboutPage() {
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
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-graphite)' }}>
            Benefits support for the
            <br /><span className="gradient-text-orange">auto industry workforce.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-slate)' }}>
            {POSITIONING_STATEMENT}
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--color-graphite)' }}>
                <span style={{ color: 'var(--color-signal-orange)' }}>✓</span> What {BRAND} IS
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: 'var(--color-signal-orange)' }}>•</span>
                  <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>An employer-sponsored benefits program for automotive industry employees, operated by {LEGAL_NAME}.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: 'var(--color-signal-orange)' }}>•</span>
                  <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>A plain-language plan guide to help employees understand their employer&apos;s own benefits.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: 'var(--color-signal-orange)' }}>•</span>
                  <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>Optional text reminders about benefits dates and tasks, available only to enrolled employees.</p>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--color-graphite)' }}>
                <span className="text-red-500">✕</span> What {BRAND} IS NOT
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>Open to the general public — only current employees of a participating automotive employer may enroll, using a company ID.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>A seller of automotive services — {REQUIRED_STATEMENT}</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>A decision-maker — the plan guide is educational only and does not make enrollment decisions.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>A seller of your data — no mobile information is shared with or sold to third parties for marketing purposes.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What AI means */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10">
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-graphite)' }}>What &quot;AI&quot; means here</h2>
            <p className="leading-relaxed text-center max-w-2xl mx-auto" style={{ color: 'var(--color-slate)' }}>
              The &quot;AI&quot; in {BRAND} refers to the plan guide available in the employee portal after enrollment — a plain-language tool that answers questions about your employer&apos;s own benefit plans. It does not make enrollment decisions and is not medical, legal, tax or financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Who it&apos;s for</h2>
          <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
            Technicians, service advisors, sales staff, parts and warehouse teams, body shop crews and office staff at participating dealerships, collision centers, parts distributors and auto manufacturers. Only current employees of a participating automotive employer can enroll, using a company ID provided by their employer.
          </p>
        </div>
      </section>

      {/* Required statement */}
      <section className="py-10 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium" style={{ color: 'var(--color-slate)' }}>{REQUIRED_STATEMENT}</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-graphite)' }}>Contact</h2>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-slate)' }}>Legal Name</p>
                <p className="font-medium" style={{ color: 'var(--color-ink)' }}>{LEGAL_NAME}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-slate)' }}>Address</p>
                <p className="font-medium" style={{ color: 'var(--color-ink)' }}>{ADDRESS_FULL}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-slate)' }}>Phone</p>
                <a href={SUPPORT_PHONE_TEL} className="font-medium hover:underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_PHONE_DISPLAY}</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-slate)' }}>Email</p>
                <a href={SUPPORT_EMAIL_MAILTO} className="font-medium hover:underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_EMAIL}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>Ready to enroll?</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-slate)' }}>
            Enroll with the company ID provided by your employer, or read the benefits guide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/enroll"
              className="px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
              style={{ background: 'var(--color-deep-orange)' }}>
              Enroll with your company ID
            </Link>
            <Link href="/benefits"
              className="px-8 py-4 text-sm font-semibold text-gray-700 rounded-2xl glass-button">
              Read the benefits guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
