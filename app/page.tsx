export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Hostnet.wiki</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          The ultimate encyclopedia for developers, coders, and tech enthusiasts. Learn, share, and grow.
        </p>
        <a
          href="/wiki"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Explore Articles
        </a>
      </section>

      {/* Example Ad Unit */}
      <div className="flex justify-center my-6">
        <div className="w-full max-w-md h-24 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
          [Ad Placeholder - Insert AdSense Here]
        </div>
      </div>

      <Footer />
    </main>
  );
}
