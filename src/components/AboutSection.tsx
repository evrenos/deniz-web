import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('HomePage.about');

  return (
    <section className="py-24 bg-primary-100/50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative group">
            <div className="relative z-10 overflow-hidden aspect-square bg-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/expert.jpg"
                  alt={t('name')}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-200 text-primary-800 text-sm font-semibold tracking-wide uppercase mb-6">
              {t('title')}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 font-bold mb-4">
              {t('name')}
            </h2>
            <h3 className="text-xl md:text-2xl text-primary-600 font-medium mb-8">
              {t('role')}
            </h3>
            <p className="text-lg md:text-xl text-secondary-500 mb-10 leading-relaxed italic border-l-4 border-primary-300 pl-6">
              "{t('description')}"
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-secondary-900 text-white font-medium hover:bg-secondary-800 transition-all shadow-md active:scale-95"
              >
                {t('cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
