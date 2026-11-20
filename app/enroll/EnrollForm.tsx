'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ACCOUNT_CONSENT_TEXT,
  PROMOTIONAL_CONSENT_TEXT,
  SUPPORT_EMAIL_MAILTO,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_TEL,
  SUPPORT_PHONE_DISPLAY,
} from '../lib/brand';

export default function EnrollForm() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    companyId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accountOptIn: false,
    promotionalOptIn: false,
    termsAccepted: false,
  });

  const smsRequiresPhone = formData.accountOptIn || formData.promotionalOptIn;

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    const len = digits.length;
    if (len < 4) return digits;
    if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    if (name === 'phone') {
      const formatted = formatPhone(value);
      setFormData(prev => ({ ...prev, phone: formatted }));
      if (formatted.replace(/\D/g, '').length === 10) {
        setPhoneError('');
      }
      return;
    }
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
    if (name === 'accountOptIn' || name === 'promotionalOptIn') {
      setPhoneError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = formData.phone.replace(/\D/g, '');
    const hasValidPhone = digits.length === 10;

    if (smsRequiresPhone && !hasValidPhone) {
      setPhoneError('Enter a valid 10-digit mobile number to receive text messages.');
      return;
    }

    setPhoneError('');

    if (smsRequiresPhone && hasValidPhone) {
      sessionStorage.setItem('verifyPhone', digits);
      router.push('/verify');
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'var(--color-signal-orange)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--color-graphite)' }}>You&apos;re enrolled</h2>
        <p className="text-lg mb-6 max-w-md mx-auto" style={{ color: 'var(--color-slate)' }}>
          Thanks, <strong>{formData.firstName}</strong>! Your enrollment has been received.
        </p>
        <div className="p-6 rounded-2xl text-left mb-8" style={{ background: 'rgba(234,88,12,0.08)', border: '1px solid rgba(234,88,12,0.25)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
            We&apos;ll send updates to <strong>{formData.email}</strong>.
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-ink)' }}>
            Questions? <a href={SUPPORT_EMAIL_MAILTO} className="underline">{SUPPORT_EMAIL}</a> or <a href={SUPPORT_PHONE_TEL} className="underline">{SUPPORT_PHONE_DISPLAY}</a>
          </p>
        </div>
        <Link href="/"
          className="inline-block px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
          style={{ background: 'var(--color-deep-orange)' }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="companyId" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>Company ID *</label>
        <input type="text" id="companyId" name="companyId" required value={formData.companyId} onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent text-sm"
          style={{ borderColor: 'var(--color-chrome)' }}
          placeholder="Company ID provided by your employer" />
      </div>

      <div>
        <label htmlFor="firstName" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>First Name *</label>
        <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent text-sm"
          style={{ borderColor: 'var(--color-chrome)' }} />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>Last Name *</label>
        <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent text-sm"
          style={{ borderColor: 'var(--color-chrome)' }} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>Email *</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent text-sm"
          style={{ borderColor: 'var(--color-chrome)' }} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>
          Mobile Number {smsRequiresPhone ? <span className="text-red-500">*</span> : '(Optional)'}
        </label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
          inputMode="numeric"
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent text-sm ${
            phoneError ? 'border-red-300 bg-red-50' : ''
          }`}
          style={!phoneError ? { borderColor: 'var(--color-chrome)' } : undefined}
          placeholder="(XXX) XXX-XXXX" />
        {phoneError && (
          <p className="text-red-500 text-xs mt-1.5 font-medium">{phoneError}</p>
        )}
      </div>

      {/* Account notifications SMS opt-in */}
      <div className="p-4 rounded-xl border" style={{ borderColor: 'var(--color-chrome)', background: 'var(--color-light)' }}>
        <div className="flex items-start gap-3">
          <input type="checkbox" id="accountOptIn" name="accountOptIn" checked={formData.accountOptIn}
            onChange={handleChange}
            className="mt-1 h-4 w-4 flex-shrink-0 rounded" />
          <label htmlFor="accountOptIn" className="text-xs leading-relaxed" style={{ color: 'var(--color-slate)' }}>
            {ACCOUNT_CONSENT_TEXT.split('See our')[0]}See our{' '}
            <Link href="/sms-terms" className="underline" style={{ color: 'var(--color-deep-orange)' }}>SMS Terms</Link>
            {' '}and{' '}
            <Link href="/privacy" className="underline" style={{ color: 'var(--color-deep-orange)' }}>Privacy Policy</Link>.
          </label>
        </div>
      </div>

      {/* Promotional SMS opt-in */}
      <div className="p-4 rounded-xl border" style={{ borderColor: 'var(--color-chrome)', background: 'var(--color-light)' }}>
        <div className="flex items-start gap-3">
          <input type="checkbox" id="promotionalOptIn" name="promotionalOptIn" checked={formData.promotionalOptIn}
            onChange={handleChange}
            className="mt-1 h-4 w-4 flex-shrink-0 rounded" />
          <label htmlFor="promotionalOptIn" className="text-xs leading-relaxed" style={{ color: 'var(--color-slate)' }}>
            {PROMOTIONAL_CONSENT_TEXT.split('See our')[0]}See our{' '}
            <Link href="/sms-terms" className="underline" style={{ color: 'var(--color-deep-orange)' }}>SMS Terms</Link>
            {' '}and{' '}
            <Link href="/privacy" className="underline" style={{ color: 'var(--color-deep-orange)' }}>Privacy Policy</Link>.
          </label>
        </div>
      </div>

      <p className="text-xs" style={{ color: 'var(--color-slate)' }}>
        No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes.
      </p>

      {/* Terms */}
      <div className="p-4 rounded-xl border" style={{ borderColor: 'var(--color-chrome)', background: 'var(--color-light)' }}>
        <div className="flex items-start gap-3">
          <input type="checkbox" id="termsAccepted" name="termsAccepted" required checked={formData.termsAccepted}
            onChange={handleChange}
            className="mt-1 h-4 w-4 flex-shrink-0 rounded" />
          <label htmlFor="termsAccepted" className="text-xs leading-relaxed" style={{ color: 'var(--color-slate)' }}>
            I agree to the{' '}
            <Link href="/terms" className="underline" style={{ color: 'var(--color-deep-orange)' }}>Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="underline" style={{ color: 'var(--color-deep-orange)' }}>Privacy Policy</Link>. *
          </label>
        </div>
      </div>

      <button type="submit"
        className="w-full py-4 text-sm font-semibold text-white rounded-2xl shadow-lg transition-all hover:opacity-90"
        style={{ background: 'var(--color-deep-orange)' }}>
        Enroll
      </button>
    </form>
  );
}
