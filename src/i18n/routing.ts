import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed' // Only /en will have a prefix, / will be Turkish by default
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
