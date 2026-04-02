import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Inter, Merriweather } from 'next/font/google';
import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Deniz Sinanoğlu - Çanakkale',
    default: 'Psikolog Deniz Sinanoğlu | Çanakkale Psikolojik Danışmanlık',
  },
  description: 'Çanakkale’de profesyonel psikolojik danışmanlık. Çocuk, ergen ve yetişkin terapisi. Online terapi seçenekleri ile yanınızdayız.',
  keywords: ['Psikolog', 'Çanakkale', 'Deniz Sinanoğlu', 'Terapi', 'Aile Danışmanlığı', 'Online Terapi'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${merriweather.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
