'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { CircleCheckBig } from 'lucide-react';
import { BRAND } from '../lib/brand';

const STORAGE_KEY = 'verifyPhone';

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  const len = digits.length;
  if (len < 4) return digits;
  if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function VerifyInner() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [resendMessage, setResendMessage] = useState('');
  const [countdown, setCountdown] = useState(0);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const storedPhone = sessionStorage.getItem(STORAGE_KEY);
    if (storedPhone) {
      sessionStorage.removeItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from sessionStorage (external system) on mount, not component state
      setPhone(formatPhone(storedPhone));
    }
  }, []);

  useEffect(() => {
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  const startCountdown = () => {
    setCountdown(30);
    if (countdownRef.current) clearInterval(countdownRef.current);
    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          if (countdownRef.current) clearInterval(countdownRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (!digits) {
      setPhoneError('Enter your mobile number.');
      return;
    }
    if (digits.length < 10) {
      setPhoneError('Enter a valid 10-digit mobile number.');
      return;
    }
    setPhoneError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStep(2);
      startCountdown();
    }, 400);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = code.replace(/\D/g, '');
    if (!digits || digits.length < 6) {
      setCodeError('Enter the 6-digit code we sent you.');
      return;
    }
    setCodeError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStep(3);
    }, 400);
  };

  const handleResend = () => {
    if (countdown > 0) return;
    setResendMessage('A new code has been sent.');
    startCountdown();
  };

  const handleDifferentNumber = () => {
    setStep(1);
    setCode('');
    setCodeError('');
    setResendMessage('');
    if (countdownRef.current) clearInterval(countdownRef.current);
    setCountdown(0);
  };

  const inputClass =
    'w-full bg-[#F8FAFC] border-2 rounded-lg px-4 text-lg sm:text-xl font-bold tracking-wider text-center outline-none transition-colors';

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{ background: 'var(--color-light)' }}
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
        <div
          className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
          style={{ background: 'var(--color-signal-orange)' }}
        />

        {step === 1 && (
          <>
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--color-signal-orange)' }}
              >
                <CircleCheckBig size={48} color="white" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--color-graphite)', fontFamily: 'var(--font-heading)' }}>
                Validate your number.
              </h2>
            </div>
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  autoComplete="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={e => {
                    setPhone(formatPhone(e.target.value));
                    if (phoneError) setPhoneError('');
                  }}
                  className={inputClass}
                  style={{
                    borderColor: phoneError ? '#EF4444' : 'var(--color-chrome)',
                    color: 'var(--color-ink)',
                    height: '64px',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-signal-orange)')}
                  onBlur={e => (e.target.style.borderColor = phoneError ? '#EF4444' : 'var(--color-chrome)')}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-2 text-center font-medium">{phoneError}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full text-white font-semibold rounded-lg shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background: 'var(--color-deep-orange)',
                  padding: '16px 24px',
                  fontSize: '18px',
                  minHeight: '60px',
                  opacity: submitting ? 0.7 : 1,
                }}
                onMouseEnter={e => !submitting && (e.currentTarget.style.background = 'var(--color-deep-orange-hover)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-deep-orange)')}
              >
                Verify Number
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--color-signal-orange)' }}
              >
                <CircleCheckBig size={48} color="white" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-2" style={{ color: 'var(--color-graphite)', fontFamily: 'var(--font-heading)' }}>
                Enter your code.
              </h2>
              <p className="text-sm text-center mb-6" style={{ color: 'var(--color-slate)' }}>
                We sent a 6-digit code to {phone}.
              </p>
            </div>
            <form onSubmit={handleCodeSubmit} className="space-y-4">
              <div>
                <input
                  type="tel"
                  placeholder="Enter 6-digit code"
                  autoComplete="one-time-code"
                  inputMode="numeric"
                  value={code}
                  onChange={e => {
                    setCode(e.target.value.replace(/\D/g, '').slice(0, 6));
                    if (codeError) setCodeError('');
                  }}
                  className={inputClass}
                  style={{
                    borderColor: codeError ? '#EF4444' : 'var(--color-chrome)',
                    color: 'var(--color-ink)',
                    height: '64px',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-signal-orange)')}
                  onBlur={e => (e.target.style.borderColor = codeError ? '#EF4444' : 'var(--color-chrome)')}
                />
                {codeError && (
                  <p className="text-red-500 text-xs mt-2 text-center font-medium">{codeError}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full text-white font-semibold rounded-lg shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background: 'var(--color-deep-orange)',
                  padding: '16px 24px',
                  fontSize: '18px',
                  minHeight: '60px',
                  opacity: submitting ? 0.7 : 1,
                }}
                onMouseEnter={e => !submitting && (e.currentTarget.style.background = 'var(--color-deep-orange-hover)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-deep-orange)')}
              >
                Confirm Code
              </button>
            </form>
            <div className="flex flex-col items-center gap-2 mt-5 text-sm">
              <button
                type="button"
                onClick={handleResend}
                disabled={countdown > 0}
                className="font-medium underline disabled:no-underline disabled:cursor-not-allowed"
                style={{ color: countdown > 0 ? 'var(--color-slate)' : 'var(--color-deep-orange)' }}
              >
                {countdown > 0 ? `Resend code (${countdown}s)` : 'Resend code'}
              </button>
              {resendMessage && (
                <p className="text-xs" style={{ color: 'var(--color-slate)' }}>{resendMessage}</p>
              )}
              <button
                type="button"
                onClick={handleDifferentNumber}
                className="font-medium underline"
                style={{ color: 'var(--color-slate)' }}
              >
                Use a different number
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--color-signal-orange)' }}
              >
                <CircleCheckBig size={48} color="white" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-2" style={{ color: 'var(--color-graphite)', fontFamily: 'var(--font-heading)' }}>
                Number verified.
              </h2>
              <p className="text-sm text-center mb-6" style={{ color: 'var(--color-slate)' }}>
                You&apos;re all set. You can manage text preferences anytime by replying STOP or HELP.
              </p>
            </div>
            <button
              type="button"
              onClick={() => router.push('/portal')}
              className="w-full text-white font-semibold rounded-lg shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: 'var(--color-deep-orange)',
                padding: '16px 24px',
                fontSize: '18px',
                minHeight: '60px',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-deep-orange-hover)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-deep-orange)')}
            >
              Go to Employee Portal
            </button>
          </>
        )}

        <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--color-chrome)' }}>
          <p className="text-xs text-center" style={{ color: 'var(--color-slate)' }}>
            Secured by {BRAND}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyClient() {
  return <VerifyInner />;
}
