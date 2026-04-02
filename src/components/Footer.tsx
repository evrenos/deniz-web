export default function Footer() {
  return (
    <footer className="bg-primary-50 py-12 border-t border-primary-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-secondary-500">
        <p>&copy; {new Date().getFullYear()} Deniz Sinanoğlu. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
