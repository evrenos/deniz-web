import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import ServiceCard from '@/components/ServiceCard';
import { Link } from '@/i18n/routing';

export default async function ServicesListingPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('servicesListing');
  const tHome = await getTranslations('HomePage.services');
  const tNav = await getTranslations('nav');

  const services = [
    { key: 'individual', slug: 'yetiskin-psikologu-canakkale' },
    { key: 'child', slug: 'cocuk-psikologu-canakkale' },
    { key: 'couple', slug: 'aile-danismanligi-canakkale' },
    { key: 'online', slug: 'ergen-psikologu-canakkale' },
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
          <span className="text-secondary-900 font-medium">{tNav('services')}</span>
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.key} href={`/hizmetler/${service.slug}`}>
                <ServiceCard 
                  title={tHome(`items.${service.key}.title`)}
                  description={tHome(`items.${service.key}.description`)}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
