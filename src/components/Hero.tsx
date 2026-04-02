import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Hero() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-primary-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-secondary-900 font-bold mb-6 tracking-tight leading-tight">
          {t('title')}
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-secondary-500 mb-10 font-normal leading-relaxed">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            {t('hero.cta')}
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-200 text-lg font-medium rounded-full text-primary-900 bg-transparent hover:bg-primary-100 transition-all active:scale-95"
          >
            {useTranslations('nav')('services')}
          </Link>
        </div>
      </div>
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/30 blur-3xl -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-300/20 blur-3xl -z-10 rounded-full" />
    </section>
  );
}
