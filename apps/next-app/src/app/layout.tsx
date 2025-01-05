import './global.css'

import { Nav } from '../components/Nav/Nav'
import { NextUIProviderWrapper } from '../components/NextUIProviderWrapper/NextUIProviderWrapper'

export const metadata = {
  title: 'CryptoZombies',
  description: 'UI for CryptoZombies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <div className="flex justify-center container min-h-screen">
          <NextUIProviderWrapper>
            <Nav />
            {children}
          </NextUIProviderWrapper>
        </div>
      </body>
    </html>
  )
}
