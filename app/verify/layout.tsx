import type { Metadata } from 'next';
import { BRAND } from '../lib/brand';

export const metadata: Metadata = {
  title: `Verify Your Number | ${BRAND}`,
  description: `Verify your mobile number for ${BRAND} text messages.`,
};

export default function VerifyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
