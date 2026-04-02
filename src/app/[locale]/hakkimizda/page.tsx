import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'aboutPage'});
  
  return {
    title: t('title'),
    description: t('subtitle')
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('aboutPage');

  return (
    <main className="flex flex-col w-full text-secondary-900 bg-white">
      {/* Hero Section */}
      <section className="bg-primary-50 py-24 px-4 sm:px-6 lg:px-8 border-b border-primary-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 text-secondary-900 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 max-w-3xl mx-auto font-medium">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-secondary-900">
            {t('philosophy.title')}
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-secondary-600 leading-relaxed text-left md:text-center">
             <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary-600">
               {t('philosophy.p1')}
             </p>
             <p>{t('philosophy.p2')}</p>
          </div>
        </div>
      </section>

      {/* Founding Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative group">
                 <div className="absolute -inset-4 bg-primary-200/50 rounded-[3rem] blur-xl group-hover:bg-primary-300/50 transition-all duration-500" />
                 <div className="aspect-square bg-white overflow-hidden shadow-xl relative group-hover:scale-[1.01] transition-transform duration-500">
                    <div className="relative w-full h-full overflow-hidden">
                       <Image
                          src="/images/expert.jpg"
                          alt="Deniz Sinanoğlu"
                          fill
                          className="object-cover"
                       />
                    </div>
                 </div>
              </div>
             <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-secondary-900 flex items-center gap-4">
                  <span className="w-12 h-px bg-primary-400 hidden lg:block" />
                  {t('founding.title')}
                </h2>
                <div className="p-8 md:p-12 bg-white rounded-[2rem] shadow-xl border border-primary-100 relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl text-secondary-700 leading-relaxed italic relative z-10">
                    {t('founding.content')}
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif font-bold mb-8 text-secondary-900">{t('methods.title')}</h2>
            <p className="text-xl text-secondary-500 leading-relaxed">
              {t('methods.intro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {t.raw('methods.specialties').map((method: string, i: number) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-primary-100 shadow-sm hover:shadow-md hover:border-primary-300 transition-all group">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 font-bold text-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                  <span className="text-secondary-800 font-medium">{method}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-10 md:p-16 bg-primary-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4">
               <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M4.5 12.75l6 6 9-13.5" stroke="currentColor" strokeWidth="2" />
               </svg>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed font-light italic relative z-10">
              {t('methods.holistic')}
            </p>
          </div>
        </div>
      </section>

      {/* Workshops & Closing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary-50/30">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-serif font-bold mb-8 text-secondary-900">{t('workshops.title')}</h2>
           <p className="text-xl text-secondary-600 leading-relaxed mb-16">
              {t('workshops.content')}
           </p>
           <div className="h-px w-32 bg-primary-200 mx-auto mb-16" />
           <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
              {t('closing.content')}
           </p>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-primary-600 text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500 to-primary-600" />
        <div className="max-w-3xl mx-auto relative z-10">
           <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight">
              {t('cta.title')}
           </h2>
           <Link 
            href="/#contact" 
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-primary-600 rounded-full font-bold text-xl hover:bg-primary-50 hover:scale-105 shadow-2xl transition-all active:scale-95"
           >
              {t('cta.button')}
           </Link>
        </div>
      </section>
    </main>
  );
}
