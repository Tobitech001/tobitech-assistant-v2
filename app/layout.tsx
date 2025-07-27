export const metadata = {
  title: 'TOBI TECH Assistant',
  description: 'Your personal AI assistant for automation and content posting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
