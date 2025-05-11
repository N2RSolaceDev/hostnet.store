export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Hostnet.wiki</h1>
        <nav>
          <a href="/wiki" className="text-blue-600 hover:underline">Wiki</a>
        </nav>
      </div>
    </header>
  );
}
