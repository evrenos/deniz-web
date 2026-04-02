import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export default async function BlogListingPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('HomePage.blog');
  const tNav = await getTranslations('nav');

  const articles = [
    { key: 'kaygi-ile-basa-cikma-yollari' },
    { key: 'daha-iyi-bir-uyku-icin-oneriler' },
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
          <span className="text-secondary-900 font-medium">{tNav('blog')}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                href={`/blog/${article.key}`} 
                key={article.key}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-primary-100 hover:border-primary-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[16/9] bg-primary-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-primary-600 font-semibold text-sm mb-3 block uppercase tracking-wider">
                    {t(`items.${article.key}.date`)}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {t(`items.${article.key}.title`)}
                  </h3>
                  <p className="text-secondary-500 line-clamp-3 leading-relaxed text-sm">
                    {t(`items.${article.key}.description`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
