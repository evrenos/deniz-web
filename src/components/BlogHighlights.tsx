import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function BlogHighlights() {
  const t = useTranslations('HomePage.blog');

  const articles = [
    { key: 'kaygi-ile-basa-cikma-yollari' },
    { key: 'daha-iyi-bir-uyku-icin-oneriler' },
  ];

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-secondary-500">
              {t('subtitle')}
            </p>
          </div>
          <Link 
            href="/blog" 
            className="px-8 py-3 rounded-full border-2 border-primary-200 text-primary-900 font-semibold hover:bg-primary-50 transition-all"
          >
            {t('cta')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link 
              href={`/blog/${article.key}`} 
              key={article.key}
              className="group flex flex-col bg-primary-50/50 rounded-3xl overflow-hidden border border-primary-100/50 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-primary-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <span className="text-primary-600 font-semibold text-sm mb-3 block uppercase tracking-wider">
                  {t(`items.${article.key}.date`)}
                </span>
                <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {t(`items.${article.key}.title`)}
                </h3>
                <p className="text-secondary-500 line-clamp-2 leading-relaxed">
                  {t(`items.${article.key}.description`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
