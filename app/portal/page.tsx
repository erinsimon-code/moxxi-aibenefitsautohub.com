import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { BRAND, AI_DISCLAIMER } from '../lib/brand';
import PortalSignIn from './PortalSignIn';

export const metadata: Metadata = {
  title: `Employee Portal | ${BRAND}`,
  description: `Sign in to the ${BRAND} employee portal with your company ID and mobile number to see your benefits dates and use the plan guide.`,
};

export default function PortalPage() {
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
      <section className="pt-32 pb-10 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)', color: 'var(--color-deep-orange)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-signal-orange)' }} />
            Employee Portal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-graphite)' }}>
            Employee Portal
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-slate)' }}>
            Enrolled employees sign in with their company ID and mobile number to see their benefits dates and use the plan guide.
          </p>
        </div>
      </section>

      {/* Sign-in card */}
      <section className="max-w-lg mx-auto px-6 py-6 pb-10 relative" style={{ zIndex: 1 }}>
        <PortalSignIn />
      </section>

      {/* AI disclaimer */}
      <section className="pb-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-center" style={{ color: 'var(--color-slate)' }}>{AI_DISCLAIMER}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
