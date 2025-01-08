import './global.css'

import { Nav } from '../components/Nav/Nav'
import { NextUIProviderWrapper } from '../components/NextUIProviderWrapper/NextUIProviderWrapper'
import { WagmiProviderWrapper } from '../components/WagmiProviderWrapper/WagmiProviderWrapper'

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
          <WagmiProviderWrapper>
            <NextUIProviderWrapper>
              <Nav />
              {children}
            </NextUIProviderWrapper>
          </WagmiProviderWrapper>
        </div>
      </body>
    </html>
  )
}
