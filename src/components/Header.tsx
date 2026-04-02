import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className="w-full border-b border-primary-200 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-serif text-primary-900 font-semibold tracking-tight">
              Deniz Sinanoğlu
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-secondary-900 hover:text-primary-600 transition-colors">
              {t('home')}
            </Link>
            <Link href="/hakkimizda" className="text-secondary-900 hover:text-primary-600 transition-colors">
              {t('about')}
            </Link>
            <Link href="/hizmetler" className="text-secondary-900 hover:text-primary-600 transition-colors">
              {t('services')}
            </Link>
            <Link href="/online-terapi" className="text-secondary-900 hover:text-primary-600 transition-colors">
              {t('online')}
            </Link>
            <Link href="/#contact" className="text-secondary-900 hover:text-primary-600 transition-colors">
              {t('contact')}
            </Link>
          </nav>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <Link href="/" locale="tr" className="text-xs font-bold px-2 py-1 rounded bg-primary-100 hover:bg-primary-200 transition-colors">TR</Link>
              <Link href="/" locale="en" className="text-xs font-bold px-2 py-1 rounded bg-primary-100 hover:bg-primary-200 transition-colors">EN</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
