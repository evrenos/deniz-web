import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'serviceDetails'});
  
  return {
    title: t('title'),
    description: t('subtitle')
  };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('serviceDetails');
  const tNav = await getTranslations('nav');

  const sections = [
    { id: 'individual', key: 'individual' },
    { id: 'child', key: 'child' },
    { id: 'couple', key: 'couple' },
    { id: 'online', key: 'online' },
  ];

  return (
    <main className="flex flex-col w-full text-secondary-900 bg-white">
      {/* Breadcrumbs */}
      <nav className="bg-primary-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-primary-100">
        <div className="max-w-7xl mx-auto flex items-center text-sm text-secondary-500 gap-2">
          <Link href="/" className="hover:text-primary-600">
            {tNav('home')}
          </Link>
          <span>/</span>
          <Link href="/hizmetler" className="hover:text-primary-600">
            {tNav('services')}
          </Link>
          <span>/</span>
          <span className="text-secondary-900 font-medium">{t('title')}</span>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Service Sections */}
      {sections.map((section, index) => (
        <section 
          key={section.id} 
          id={section.id} 
          className={`py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24 ${index % 2 === 1 ? 'bg-primary-50/30' : 'bg-white'}`}
        >
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xl">
                  0{index + 1}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900">
                  {t(`${section.key}.title`)}
                </h2>
             </div>
             <div className="space-y-6 text-lg text-secondary-600 leading-relaxed">
               <p className="border-l-4 border-primary-200 pl-6 py-2 bg-primary-50/50 rounded-r-2xl">
                 {t(`${section.key}.p1`)}
               </p>
               <p className="pl-7">
                 {t(`${section.key}.p2`)}
               </p>
             </div>

             <div className="mt-12">
               <Link 
                href="/#contact" 
                className="inline-flex items-center text-primary-600 font-bold hover:gap-2 transition-all group"
               >
                 Randevu Al
                 <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </Link>
             </div>
          </div>
        </section>
      ))}
    </main>
  );
}
