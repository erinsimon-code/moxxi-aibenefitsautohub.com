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
  REQUIRED_STATEMENT,
} from '../lib/brand';

export const metadata: Metadata = {
  title: `Terms of Service | ${BRAND}`,
  description: `Terms of Service for ${BRAND}, an employer-sponsored benefits program for automotive industry employees.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(100,116,139,0.18) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(100,116,139,0.1)', border: '1px solid rgba(100,116,139,0.3)', color: 'var(--color-slate)' }}>
            <span>📋</span>
            Terms of Service
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: 'var(--color-slate)' }}>Last Updated: November 20, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>1. Acceptance of Terms</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              By accessing or using {BRAND} (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>2. Eligibility</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              The Service is available only to current employees of a participating automotive employer, using a company ID provided by their employer, who are at least 18 years old. The Service is never open to the general public.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>3. Description of Service</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              {REQUIRED_STATEMENT} {BRAND} provides text reminders about benefits dates and tasks, and a plain-language plan guide, for an employer&apos;s own benefit plans.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>4. Educational Nature of the Plan Guide</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              The plan guide is educational only. It does not make enrollment decisions and is not medical, legal, tax or financial advice. Contact your HR team for plan specifics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>5. SMS Communications</h2>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--color-slate)' }}>
              By providing your phone number and checking an SMS opt-in box on our enrollment page, you expressly consent to receive <strong>account notifications</strong> (enrollment confirmations, benefits deadline reminders, verification codes) and/or <strong>promotional messages</strong> (new or updated employer benefits and plan guide features) from {BRAND}, sent from a toll-free number, depending on which box or boxes you check.
            </p>
            <div className="p-4 rounded-xl" style={{ background: 'rgba(100,116,139,0.06)', border: '1px solid rgba(100,116,139,0.2)' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-ink)' }}>Important SMS Disclosures:</p>
              <ul className="text-sm space-y-1" style={{ color: 'var(--color-ink)' }}>
                <li>• <strong>Message and data rates may apply.</strong></li>
                <li>• Account notifications vary; promotional up to 4 msgs/month.</li>
                <li>• To opt out at any time, reply <strong>STOP</strong>, <strong>STOPALL</strong>, <strong>UNSUBSCRIBE</strong>, <strong>CANCEL</strong>, <strong>END</strong>, or <strong>QUIT</strong>.</li>
                <li>• For help, reply <strong>HELP</strong> or contact <a href={SUPPORT_EMAIL_MAILTO} className="underline">{SUPPORT_EMAIL}</a>.</li>
                <li>• Consent is not a condition of employment or of receiving benefits.</li>
                <li>• {DATA_SHARING_CLAUSE}</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>6. Acceptable Use</h2>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--color-slate)' }}>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--color-slate)' }}>
              <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Submit false or misleading information, including about your employment or company ID</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>7. Disclaimer of Warranties</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. {LEGAL_NAME.toUpperCase()} DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>8. Limitation of Liability</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {LEGAL_NAME.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>9. Privacy</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Your use of the Service is also governed by our <Link href="/privacy" className="underline" style={{ color: 'var(--color-deep-orange)' }}>Privacy Policy</Link>, which is incorporated into these Terms by reference.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>10. Termination</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              We reserve the right to suspend or terminate your access to the Service at any time for violation of these Terms, loss of eligibility (such as leaving your participating employer), or for any other reason at our discretion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>11. Changes to Terms</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              We may update these Terms from time to time. We will post the new Terms on this page and update the &quot;Last Updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>12. Governing Law</h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-graphite)' }}>13. Contact Us</h2>
            <div className="glass-card p-6">
              <p className="mb-2" style={{ color: 'var(--color-slate)' }}><strong>Email:</strong> <a href={SUPPORT_EMAIL_MAILTO} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_EMAIL}</a></p>
              <p className="mb-2" style={{ color: 'var(--color-slate)' }}><strong>Phone:</strong> <a href={SUPPORT_PHONE_TEL} className="underline" style={{ color: 'var(--color-deep-orange)' }}>{SUPPORT_PHONE_DISPLAY}</a></p>
              <p style={{ color: 'var(--color-slate)' }}><strong>Address:</strong> {ADDRESS_FULL}</p>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/privacy" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-deep-orange)' }}>
              ← View Privacy Policy
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
