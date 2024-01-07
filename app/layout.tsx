import type { Metadata } from 'next'
import { montserrat, poppins, poppinsMedium, poppinsBold, poppinsBlack } from "@/styles/fonts";
import '@/styles/globals.css';
import { cn } from "@/lib/utils";
import { Nav, Footer } from '@/components/layout';

export const metadata: Metadata = {
  metadataBase: new URL('https://med5.vercel.app'),
  title: {
    default: "Med5",
    template: "%s | Med5",
  },
  description: 'Get your health in order.',
  openGraph: {
    title: "Med5",
    description: 'Get your health in order.',
    url: 'https://med5.vercel.app',
    siteName: "Med5",
    locale: 'en_NG',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Med5',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(montserrat.variable, poppins.variable, poppinsMedium.variable, poppinsBold.variable, poppinsBlack.variable)}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
