import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/routing';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const t = await getTranslations({locale, namespace: 'HomePage'});
  
  return {
    title: t(`blog.items.${slug}.title`),
    description: t(`blog.items.${slug}.description`)
  };
}

export async function generateStaticParams() {
  const slugs = [
    'kaygi-ile-basa-cikma-yollari',
    'daha-iyi-bir-uyku-icin-oneriler'
  ];
  
  return routing.locales.flatMap((locale) => 
    slugs.map((slug) => ({ locale, slug }))
  );
}

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  
  const validSlugs = [
    'kaygi-ile-basa-cikma-yollari',
    'daha-iyi-bir-uyku-icin-oneriler'
  ];

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations('HomePage.blog');
  const tNav = await getTranslations('nav');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t(`items.${slug}.title`),
    "description": t(`items.${slug}.description`),
    "author": {
      "@type": "Person",
      "name": "Deniz Sinanoğlu"
    },
    "datePublished": t(`items.${slug}.date`),
    "url": `https://denizsinanoglu.com/${locale}/blog/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://denizsinanoglu.com/${locale}/blog/${slug}`
    }
  };

  return (
    <main className="flex flex-col w-full text-secondary-900 bg-white">
      <JsonLd data={jsonLd} />
      {/* Breadcrumbs */}
      <nav className="bg-primary-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-primary-100">
        <div className="max-w-4xl mx-auto flex items-center text-sm text-secondary-500 gap-2">
          <Link href="/" className="hover:text-primary-600">
            {tNav('home')}
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary-600">
            {tNav('blog')}
          </Link>
          <span>/</span>
          <span className="text-secondary-900 font-medium line-clamp-1">{t(`items.${slug}.title`)}</span>
        </div>
      </nav>

      {/* Article Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            {t(`items.${slug}.date`)}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-secondary-900 font-bold mb-8 leading-tight">
            {t(`items.${slug}.title`)}
          </h1>
          <p className="text-xl md:text-2xl text-secondary-500 leading-relaxed max-w-3xl mx-auto mb-12">
            {t(`items.${slug}.description`)}
          </p>
          <div className="w-full aspect-[21/9] bg-primary-100 rounded-[3rem] overflow-hidden relative">
            {/* Featured Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-primary-300">
                 <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg prose-primary text-secondary-700 leading-loose">
          <p className="text-lg mb-8">{t(`items.${slug}.content`)}</p>
          {/* Detailed blog content would go here */}
          <div className="p-8 bg-primary-50 rounded-3xl border border-primary-100 my-12">
            <h4 className="text-xl font-bold mb-4 font-serif">{t('summary_title')}</h4>
            <p className="text-secondary-600 italic">
               {t('summary_disclaimer')}
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
