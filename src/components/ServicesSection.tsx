import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const t = useTranslations('HomePage.services');

  const services = [
    { key: 'individual', slug: 'yetiskin-psikologu-canakkale' },
    { key: 'child', slug: 'cocuk-psikologu-canakkale' },
    { key: 'couple', slug: 'aile-danismanligi-canakkale' },
    { key: 'online', slug: 'ergen-psikologu-canakkale' },
  ];

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link key={service.key} href={`/hizmetler/${service.slug}`}>
              <ServiceCard 
                title={t(`items.${service.key}.title`)}
                description={t(`items.${service.key}.description`)}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
