'use client';

import { useState } from 'react';

export default function PortalSignIn() {
  const [submitted, setSubmitted] = useState(false);
  const [companyId, setCompanyId] = useState('');
  const [mobile, setMobile] = useState('');

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    const len = digits.length;
    if (len < 4) return digits;
    if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <p className="font-medium" style={{ color: 'var(--color-ink)' }}>
          Portal access is provided through your employer. Contact your HR team.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
      <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-graphite)' }}>Sign In</h2>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>Company ID</label>
        <input type="text" value={companyId} onChange={e => setCompanyId(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2"
          style={{ borderColor: 'var(--color-chrome)' }}
          placeholder="Company ID" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>Mobile Number</label>
        <input type="tel" value={mobile} onChange={e => setMobile(formatPhone(e.target.value))}
          className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2"
          style={{ borderColor: 'var(--color-chrome)' }}
          placeholder="(XXX) XXX-XXXX" />
      </div>

      <button type="submit"
        className="w-full py-4 text-sm font-semibold text-white rounded-2xl shadow-lg transition-all hover:opacity-90"
        style={{ background: 'var(--color-deep-orange)' }}>
        Sign in
      </button>
    </form>
  );
}
