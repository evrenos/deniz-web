import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const t = await getTranslations({locale, namespace: 'therapistPage'});
  
  return {
    title: t(`items.${slug}.name`),
    description: t(`items.${slug}.role`)
  };
}

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = ['deniz-sinanoglu'];
  return routing.locales.flatMap((locale) => 
    slugs.map((slug) => ({ locale, slug }))
  );
}

export default async function TherapistDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  
  if (slug !== 'deniz-sinanoglu') {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations('therapistPage');
  const tNav = await getTranslations('nav');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": t(`items.${slug}.name`),
    "jobTitle": t(`items.${slug}.role`),
    "description": t(`items.${slug}.bio`),
    "url": `https://denizsinanoglu.com/${locale}/uzman/${slug}`,
    "sameAs": [
      "https://www.instagram.com/denizsinanoglu",
      "https://www.linkedin.com/in/denizsinanoglu"
    ]
  };

  return (
    <main className="flex flex-col w-full text-secondary-900 bg-white">
      <JsonLd data={jsonLd} />
      {/* Breadcrumbs */}
      <nav className="bg-primary-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-primary-100">
        <div className="max-w-7xl mx-auto flex items-center text-sm text-secondary-500 gap-2">
          <Link href="/" className="hover:text-primary-600">
            {tNav('home')}
          </Link>
          <span>/</span>
          <span className="text-secondary-900 font-medium">{t(`items.${slug}.name`)}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-primary-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-80 md:h-80 overflow-hidden shadow-xl shrink-0 relative aspect-square bg-white">
             <Image
                src="/images/expert.jpg"
                alt={t(`items.${slug}.name`)}
                fill
                className="object-cover"
             />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              {t(`items.${slug}.name`)}
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 font-medium">
              {t(`items.${slug}.role`)}
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-primary max-w-none text-secondary-700 leading-relaxed mb-16">
            <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-6">{t('about_title')}</h2>
            <p>{t(`items.${slug}.bio`)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-6">{t(`items.${slug}.specialties.title`)}</h3>
              <ul className="space-y-3">
                {t.raw(`items.${slug}.specialties.items`).map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-secondary-600">
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-6">{t(`items.${slug}.education.title`)}</h3>
              <ul className="space-y-4">
                {t.raw(`items.${slug}.education.items`).map((item: string, i: number) => (
                  <li key={i} className="flex flex-col gap-1 text-secondary-600">
                    <span className="font-semibold text-secondary-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-serif font-bold mb-8">{t('cta')}</h2>
           <Link 
            href="/#contact" 
            className="inline-flex items-center justify-center px-10 py-4 bg-primary-500 text-white rounded-full font-bold text-lg hover:bg-primary-600 transition-all active:scale-95"
           >
              {t('cta')}
           </Link>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
