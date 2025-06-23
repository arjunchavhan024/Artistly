import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Artistly - Connect with Talented Performers',
  description: 'Discover and book talented artists for your events. From singers to dancers, speakers to DJs - find the perfect performer for your next event.',
  keywords: 'artist booking, performers, events, singers, dancers, speakers, DJs',
  authors: [{ name: 'Artistly Team' }],
  openGraph: {
    title: 'Artistly - Connect with Talented Performers',
    description: 'Discover and book talented artists for your events.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}