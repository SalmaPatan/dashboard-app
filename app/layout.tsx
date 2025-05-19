import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'DevNexus Dashboard',
  description: 'Your custom dashboard for tracking everything that matters.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
