'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactSection() {
  const t = useTranslations('HomePage.contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-primary-100/30 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 font-bold mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-secondary-500 mb-12">
              {t('subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 mb-1">Adres</h4>
                  <p className="text-secondary-500">{t('info.address')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 mb-1">Telefon</h4>
                  <p className="text-secondary-500">{t('info.phone')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 mb-1">E-posta</h4>
                  <p className="text-secondary-500">{t('info.email')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-primary-100">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">{t('form.success')}</h3>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-primary-600 font-semibold hover:underline"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">{t('form.name')}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-4 bg-primary-50 border border-primary-100 rounded-2xl focus:ring-2 focus:ring-primary-400 focus:bg-white outline-none transition-all placeholder:text-secondary-300"
                    placeholder="Deniz Yılmaz"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">{t('form.email')}</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-5 py-4 bg-primary-50 border border-primary-100 rounded-2xl focus:ring-2 focus:ring-primary-400 focus:bg-white outline-none transition-all placeholder:text-secondary-300"
                      placeholder="deniz@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">{t('form.phone')}</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-5 py-4 bg-primary-50 border border-primary-100 rounded-2xl focus:ring-2 focus:ring-primary-400 focus:bg-white outline-none transition-all placeholder:text-secondary-300"
                      placeholder="05..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">{t('form.message')}</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-5 py-4 bg-primary-50 border border-primary-100 rounded-2xl focus:ring-2 focus:ring-primary-400 focus:bg-white outline-none transition-all placeholder:text-secondary-300 resize-none"
                    placeholder="Nasıl yardımcı olabiliriz?"
                  />
                </div>
                <button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className="w-full py-4 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 hover:shadow-lg active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? '...' : t('form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
