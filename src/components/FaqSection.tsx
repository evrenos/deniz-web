import { useTranslations } from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('HomePage.faq');

  const faqItems = [
    { key: 'q1' },
    { key: 'q2' },
    { key: 'q3' },
  ];

  return (
    <section className="py-24 bg-primary-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 font-bold mb-12 text-center">
          {t('title')}
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details 
              key={item.key} 
              className="group bg-white rounded-2xl border border-primary-100 shadow-sm overflow-hidden transition-all duration-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-xl font-semibold text-secondary-900 pr-8">
                  {t(`items.${item.key}.question`)}
                </h3>
                <span className="text-primary-600 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-secondary-500 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                {t(`items.${item.key}.answer`)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
