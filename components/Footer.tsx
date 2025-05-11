export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Hostnet.wiki – A developer encyclopedia.</p>
        <p className="mt-2">
          <a href="/privacy" className="hover:underline">Privacy Policy</a> ·{' '}
          <a href="/contact" className="hover:underline">Contact</a>
        </p>
      </div>
    </footer>
  );
}
