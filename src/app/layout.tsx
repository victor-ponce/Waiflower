import './globals.css'
import { Inter } from 'next/font/google'

<link
    rel="manifest"
    href="/manifest.json"
/>

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
