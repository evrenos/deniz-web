import { useTranslations } from 'next-intl';

export default function ApproachSection() {
  const t = useTranslations('HomePage.approach');

  const steps = [
    { key: 'step1', number: '01' },
    { key: 'step2', number: '02' },
    { key: 'step3', number: '03' },
  ];

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            {t('title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 font-bold">
            {t('subtitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary-100 -z-10 -translate-y-1/2" />
          
          {steps.map((step) => (
            <div key={step.key} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary-50 border-2 border-primary-200 flex items-center justify-center text-primary-600 text-2xl font-bold mb-6 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300 shadow-md">
                {step.number}
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                {t(`items.${step.key}.title`)}
              </h3>
              <p className="text-secondary-500 leading-relaxed max-w-xs mx-auto">
                {t(`items.${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
