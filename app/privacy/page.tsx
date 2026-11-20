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
} from '../lib/brand';

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND}`,
  description: `Privacy Policy for ${BRAND}, an employer-sponsored benefits program for automotive industry employees.`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(100,116,139,0.18) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(100,116,139,0.1)', border: '1px solid rgba(100,116,139,0.3)', color: 'var(--color-slate)' }}>
            <span>🔐</span>
            Privacy Policy
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: 'var(--color-slate)' }}>Last Updated: November 20, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>1. Introduction</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              {BRAND} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated by {LEGAL_NAME}, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our employer-sponsored benefits program for automotive industry employees.
            </p>
            <p className="leading-relaxed mt-4" style={{ color: 'var(--color-slate)' }}>
              {BRAND} is a benefits program for automotive employers and their employees. It does not advertise or sell vehicle repair, maintenance or other automotive services. Only current employees of a participating automotive employer can enroll, using a company ID provided by their employer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>2. Information We Collect</h2>
            <p className="mb-3" style={{ color: 'var(--color-slate)' }}>When you enroll or use the program, we collect:</p>
            <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--color-slate)' }}>
              <li>Company ID</li>
              <li>Name</li>
              <li>Email address</li>
              <li>Mobile number</li>
              <li>Consent records (which SMS boxes you checked and when)</li>
              <li>Verification status</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--color-slate)' }}>
              <li>To confirm your enrollment and eligibility with your participating employer</li>
              <li>To send the account and promotional text messages you opt in to receive</li>
              <li>To provide the plan guide in the employee portal</li>
              <li>To respond to your inquiries and requests</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>4. What Your Employer Receives</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Your participating employer receives your enrollment status only (whether you have enrolled). Your employer does not receive the content of your text messages, your plan guide questions, or your verification code.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>5. No Sale of Data</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              We do not sell your personal information to third parties.
            </p>
            <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(234,88,12,0.06)', border: '1px solid rgba(234,88,12,0.2)' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
                {DATA_SHARING_CLAUSE}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>6. SMS Communications</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              {BRAND} sends account notifications (enrollment confirmations, benefits deadline reminders, verification codes) and promotional messages (new or updated employer benefits and plan guide features) from a toll-free number to employees who opt in. Account notifications vary; promotional up to 4 msgs/month. Message and data rates may apply. Reply <strong>STOP</strong> to opt out or <strong>HELP</strong> for help. See our{' '}
              <Link href="/sms-terms" className="underline" style={{ color: 'var(--color-deep-orange)' }}>SMS Terms</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>7. Retention</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              We retain your personal information for as long as you are enrolled and for a reasonable period afterward to comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>8. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--color-slate)' }}>
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> Opt out of SMS communications by replying STOP to any message</li>
            </ul>
            <p className="mt-4" style={{ color: 'var(--color-slate)' }}>
              To exercise these rights, contact us at <a href={SUPPORT_EMAIL_MAILTO} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_EMAIL}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>9. Children&apos;s Privacy</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              {BRAND} is not intended for individuals under the age of 18. We do not knowingly collect personal information from anyone under 18.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>10. Changes to This Policy</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              We may update this Privacy Policy from time to time. We will post the new Privacy Policy on this page and update the &quot;Last Updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>11. Contact Us</h2>
            <div className="glass-card p-6">
              <p className="mb-2" style={{ color: 'var(--color-slate)' }}><strong>{LEGAL_NAME}</strong></p>
              <p className="mb-2" style={{ color: 'var(--color-slate)' }}>{ADDRESS_FULL}</p>
              <p className="mb-2" style={{ color: 'var(--color-slate)' }}><strong>Email:</strong> <a href={SUPPORT_EMAIL_MAILTO} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_EMAIL}</a></p>
              <p style={{ color: 'var(--color-slate)' }}><strong>Phone:</strong> <a href={SUPPORT_PHONE_TEL} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_PHONE_DISPLAY}</a></p>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/terms" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-deep-orange)' }}>
              ← View Terms of Service
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
