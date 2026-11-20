// Shared brand constants for AI Benefits Auto Hub.
// Every page, form, footer and legal page must import from this file.
// Never hardcode the name, phone, email or address anywhere else.

export const BRAND = 'AI Benefits Auto Hub';
export const DOMAIN = 'aibenefitsautohub.com';
export const LEGAL_NAME = 'Benefits AI LLC';

export const ADDRESS_LINE1 = '3 Germay Dr';
export const ADDRESS_LINE2 = 'Wilmington, DE 19804, United States';
export const ADDRESS_FULL = `${ADDRESS_LINE1}, ${ADDRESS_LINE2}`;

export const SUPPORT_PHONE_DISPLAY = '(302) 208-0220';
export const SUPPORT_PHONE_TEL = 'tel:+13022080220';

export const SUPPORT_EMAIL = 'support@aibenefitsautohub.com';
export const SUPPORT_EMAIL_MAILTO = `mailto:${SUPPORT_EMAIL}`;

export const TAGLINE = 'Benefits built for the people who keep the auto industry moving.';

export const POSITIONING_STATEMENT =
  'AI Benefits Auto Hub is an employer-sponsored benefits program for automotive industry employees. Dealerships, collision centers, parts distributors and auto manufacturers use it to help their enrolled employees understand and use their workplace benefits, through text reminders about benefits dates and tasks and a plain-language plan guide. Only current employees of a participating automotive employer can enroll, using a company ID provided by their employer. The program is never open to the general public.';

export const REQUIRED_STATEMENT =
  'AI Benefits Auto Hub is a benefits program for automotive employers and their employees. It does not advertise or sell vehicle repair, maintenance or other automotive services.';

export const AI_DISCLAIMER =
  'The plan guide is educational only. It does not make enrollment decisions and is not medical, legal, tax or financial advice. Contact your HR team for plan specifics.';

export const DATA_SHARING_CLAUSE =
  'No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties. All the above categories exclude text messaging originator opt-in data and consent.';

export const NO_MOBILE_SHARING_SHORT =
  'No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes.';

export const FREQUENCY_LINE = 'Account notifications vary; promotional up to 4 msgs/month.';

export const ACCOUNT_CONSENT_TEXT =
  'By checking this box, I agree to receive recurring account text messages from AI Benefits Auto Hub (Benefits AI LLC) at the number provided, including enrollment confirmations, benefits deadline reminders and verification codes. Message frequency varies. Message and data rates may apply. Reply HELP for help, STOP to opt out. Consent is not a condition of employment or of receiving benefits. Messages are sent from a toll-free number. See our SMS Terms and Privacy Policy.';

export const PROMOTIONAL_CONSENT_TEXT =
  'By checking this box, I agree to receive recurring promotional text messages from AI Benefits Auto Hub (Benefits AI LLC) at the number provided about new or updated benefits offered by my employer and plan guide features. Up to 4 msgs/month. Message and data rates may apply. Reply HELP for help, STOP to opt out. Consent is not a condition of employment or of receiving benefits. See our SMS Terms and Privacy Policy.';

export const TERMS_CONSENT_TEXT = 'I agree to the Terms of Service and Privacy Policy.';

export type SampleMessage = {
  id: number;
  type: 'Account' | 'Promotional';
  text: string;
};

export const SAMPLE_MESSAGES: SampleMessage[] = [
  {
    id: 1,
    type: 'Account',
    text: "AI Benefits Auto Hub: You're enrolled in benefits reminders from your employer. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.",
  },
  {
    id: 2,
    type: 'Account',
    text: 'AI Benefits Auto Hub: Open enrollment for your dealership benefits closes Fri 12/5. Review your options at aibenefitsautohub.com/portal. Reply STOP to opt out.',
  },
  {
    id: 3,
    type: 'Account',
    text: 'AI Benefits Auto Hub: Reminder: submit your 2026 FSA receipts by 3/31. Details at aibenefitsautohub.com/portal. Reply STOP to opt out.',
  },
  {
    id: 4,
    type: 'Account',
    text: 'AI Benefits Auto Hub: Your verification code is 731405. Enter it at aibenefitsautohub.com/verify to confirm your number. Reply HELP for help, STOP to opt out.',
  },
  {
    id: 5,
    type: 'Promotional',
    text: 'AI Benefits Auto Hub: New this year: your employer now reimburses ASE certification exam fees. Learn how to claim it at aibenefitsautohub.com/portal. Reply STOP to opt out.',
  },
  {
    id: 6,
    type: 'Promotional',
    text: 'AI Benefits Auto Hub: Questions about your coverage? Try the plan guide at aibenefitsautohub.com/portal. Reply STOP to opt out.',
  },
];
