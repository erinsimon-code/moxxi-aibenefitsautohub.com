'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General question',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'var(--color-signal-orange)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-graphite)' }}>Message received</h2>
        <p className="leading-relaxed" style={{ color: 'var(--color-slate)' }}>
          Thanks, <strong>{formData.name}</strong>! We&apos;ve received your message and will respond to <strong>{formData.email}</strong> within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
      <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-graphite)' }}>Send a Message</h2>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>Name *</label>
        <input type="text" name="name" required value={formData.name} onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl text-sm focus:ring-2 focus:border-transparent"
          style={{ borderColor: 'var(--color-chrome)' }} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>Email *</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl text-sm focus:ring-2 focus:border-transparent"
          style={{ borderColor: 'var(--color-chrome)' }} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>Topic *</label>
        <select name="topic" required value={formData.topic} onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl text-sm bg-white focus:ring-2 focus:border-transparent"
          style={{ borderColor: 'var(--color-chrome)' }}>
          <option>General question</option>
          <option>Text message (SMS) help</option>
          <option>Privacy request</option>
          <option>Employer enrollment</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-ink)' }}>Message *</label>
        <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl text-sm resize-none focus:ring-2 focus:border-transparent"
          style={{ borderColor: 'var(--color-chrome)' }}
          placeholder="How can we help?" />
      </div>

      <button type="submit"
        className="w-full py-4 text-sm font-semibold text-white rounded-2xl shadow-lg transition-all hover:opacity-90"
        style={{ background: 'var(--color-deep-orange)' }}>
        Send Message
      </button>
    </form>
  );
}
