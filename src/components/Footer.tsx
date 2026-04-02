export default function Footer() {
  return (
    <footer className="bg-slate-50/50 py-16 border-t border-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            { id: 'instagram', icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
            { id: 'facebook', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
            { id: 'twitter', icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> }
          ].map((social) => (
            <a
              key={social.id}
              href="#"
              className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 hover:text-primary-600 hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                {social.icon}
              </svg>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-secondary-400 font-medium tracking-tight">
          <p>
            Koridor Psikoloji &copy; 2026. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
