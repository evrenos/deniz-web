import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import { Link } from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const t = await getTranslations({locale, namespace: 'servicePage'});
  
  return {
    title: t(`items.${slug}.title`),
    description: t(`items.${slug}.description`)
  };
}
export async function generateStaticParams() {
  const slugs = [
    'cocuk-psikologu-canakkale',
    'ergen-psikologu-canakkale',
    'yetiskin-psikologu-canakkale',
    'aile-danismanligi-canakkale'
  ];
  
  return routing.locales.flatMap((locale) => 
    slugs.map((slug) => ({ locale, slug }))
  );
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  
  const validSlugs = [
    'cocuk-psikologu-canakkale',
    'ergen-psikologu-canakkale',
    'yetiskin-psikologu-canakkale',
    'aile-danismanligi-canakkale'
  ];

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations('servicePage');

  return (
    <main className="flex flex-col w-full">
      {/* Breadcrumbs */}
      <nav className="bg-primary-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-primary-100">
        <div className="max-w-7xl mx-auto flex items-center text-sm text-secondary-500 gap-2">
          <Link href="/" className="hover:text-primary-600">
            {useTranslations('nav')('home')}
          </Link>
          <span>/</span>
          <Link href="/hizmetler" className="hover:text-primary-600">
            {useTranslations('nav')('services')}
          </Link>
          <span>/</span>
          <span className="text-secondary-900 font-medium">{t(`items.${slug}.title`)}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-secondary-900 font-bold mb-8 leading-tight">
            {t(`items.${slug}.title`)}
          </h1>
          <p className="text-xl md:text-2xl text-secondary-500 leading-relaxed max-w-3xl mx-auto">
            {t(`items.${slug}.description`)}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-primary-50/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-primary-100">
          <div className="prose prose-lg prose-primary max-w-none text-secondary-700 leading-loose">
             <p>{t(`items.${slug}.content`)}</p>
             {/* Additional SEO content can be added here later */}
          </div>
          <div className="mt-12 pt-8 border-t border-primary-100 flex justify-center">
             <Link 
              href="/#contact" 
              className="px-10 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 shadow-lg active:scale-95 transition-all"
             >
                {t('cta')}
             </Link>
          </div>
        </div>
      </section>

      <FaqSection />
      <ContactSection />
    </main>
  );
}
