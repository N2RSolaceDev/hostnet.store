import { getWikiSlugs } from '@/lib/markdown';

export default async function WikiList() {
  const slugs = getWikiSlugs();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">All Articles</h1>
        <ul className="space-y-4">
          {slugs.map((slug) => {
            // Load frontmatter dynamically
            const content = require(`@/content/wiki/${slug}.md`).default;
            return (
              <li key={slug}>
                <a href={`/wiki/${slug}`} className="block p-4 border rounded-md hover:bg-gray-100">
                  {content.metadata.title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
