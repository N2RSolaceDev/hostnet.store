import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostnet.wiki – Developer Encyclopedia",
  description: "Tech knowledge hub for developers, coders, and learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 antialiased">{children}</body>
    </html>
  );
}
