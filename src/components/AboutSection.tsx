import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function AboutSection() {
  const t = useTranslations('HomePage.about');

  return (
    <section className="py-24 bg-primary-100/50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/5] bg-primary-200 shadow-2xl">
              {/* This is a placeholder for the actual image. 
                  In a real scenario, we'd use next/image with a real source. */}
              <div className="absolute inset-0 flex items-center justify-center text-primary-400">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary-300 blur-3xl -z-10 opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary-400 blur-3xl -z-10 opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-primary-300 rounded-bl-3xl" />
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
