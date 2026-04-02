import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ApproachSection from '@/components/ApproachSection';
import FaqSection from '@/components/FaqSection';
import BlogHighlights from '@/components/BlogHighlights';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'HomePage'});
  
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Deniz Sinanoğlu",
    "image": "https://denizsinanoglu.com/logo.png",
    "@id": "https://denizsinanoglu.com",
    "url": "https://denizsinanoglu.com",
    "telephone": "+902861234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İsmetpaşa Mah. Atatürk Cad. No:123",
      "addressLocality": "Çanakkale",
      "postalCode": "17100",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.1453,
      "longitude": 26.4052
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/denizsinanoglu",
      "https://www.linkedin.com/in/denizsinanoglu"
    ]
  };

  return (
    <main className="flex flex-col w-full">
      <JsonLd data={jsonLd} />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ApproachSection />
      <FaqSection />
      <BlogHighlights />
      <ContactSection />
    </main>
  );
}
