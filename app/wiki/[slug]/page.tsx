import { getWikiBySlug } from '@/lib/markdown';
import ArticleRenderer from '@/components/ArticleRenderer';

export default async function WikiArticle({ params }: { params: { slug: string } }) {
  const { metadata, content } = await getWikiBySlug(params.slug);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{metadata.title}</h1>
        <p className="text-sm text-gray-500 mb-6">Published on {metadata.date}</p>
        <ArticleRenderer content={content} />
      </article>

      {/* Ad Placement in article */}
      <div className="flex justify-center my-6">
        <div className="w-full max-w-md h-24 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
          [Ad Placeholder - In-Article Ad]
        </div>
      </div>

      <Footer />
    </main>
  );
}
