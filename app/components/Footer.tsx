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
  AI_DISCLAIMER,
} from '../lib/brand';

export default function Footer() {
  const firstSentence = POSITIONING_STATEMENT.split('. ')[0] + '.';

  return (
    <footer className="text-white py-12" style={{ background: 'var(--color-graphite)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-4">{BRAND}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {firstSentence}
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mt-4">
              {REQUIRED_STATEMENT}
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mt-4">
              {AI_DISCLAIMER}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Program</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/benefits" className="hover:text-white transition-colors">Benefits Guide</Link></li>
              <li><Link href="/plan-guide" className="hover:text-white transition-colors">Plan Guide</Link></li>
              <li><Link href="/enroll" className="hover:text-white transition-colors">Enroll</Link></li>
              <li><Link href="/portal" className="hover:text-white transition-colors">Employee Portal</Link></li>
              <li><Link href="/sms" className="hover:text-white transition-colors">Text Program</Link></li>
              <li><Link href="/verify" className="hover:text-white transition-colors">Verify Your Number</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sms-terms" className="hover:text-white transition-colors">SMS Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href={SUPPORT_PHONE_TEL} className="hover:text-white transition-colors">{SUPPORT_PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href={SUPPORT_EMAIL_MAILTO} className="hover:text-white transition-colors">{SUPPORT_EMAIL}</a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{ADDRESS_FULL}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 {LEGAL_NAME}. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sms-terms" className="hover:text-white transition-colors">SMS Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

