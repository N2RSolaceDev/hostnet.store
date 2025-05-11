export default function ArticleRenderer({ content }: { content: string }) {
  return (
    <div
      className="prose max-w-none prose-a:text-blue-600 hover:prose-a:underline"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
