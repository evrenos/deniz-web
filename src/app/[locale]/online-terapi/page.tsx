import { setRequestLocale, getTranslations } from 'next-intl/server';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import { Link } from '@/i18n/routing';

export default async function OnlineTherapyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('onlineTherapyPage');
  const tNav = await getTranslations('nav');

  const benefits = [
    { key: 'item1', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
    { key: 'item2', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { key: 'item3', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  ];

  return (
    <main className="flex flex-col w-full text-secondary-900">
      {/* Breadcrumbs */}
      <nav className="bg-primary-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-primary-100">
        <div className="max-w-7xl mx-auto flex items-center text-sm text-secondary-500 gap-2">
          <Link href="/" className="hover:text-primary-600">
            {tNav('home')}
          </Link>
          <span>/</span>
          <span className="text-secondary-900 font-medium">{tNav('online')}</span>
        </div>
      </nav>

      <section className="bg-primary-50 py-24 px-4 sm:px-6 lg:px-8 border-b border-primary-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-lg md:text-xl text-secondary-600 leading-relaxed italic">
            "{t('intro')}"
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{t('benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.key} className="p-8 rounded-3xl bg-primary-50/50 border border-primary-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-600 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t(`benefits.${benefit.key}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <ContactSection />
    </main>
  );
}
