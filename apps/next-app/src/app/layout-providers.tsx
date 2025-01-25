'use client'

import { Nav } from '../components/Nav/Nav'
import { NextUIProviderWrapper } from '../components/NextUIProviderWrapper/NextUIProviderWrapper'
import { WagmiProviderWrapper } from '../components/WagmiProviderWrapper/WagmiProviderWrapper'

// in progress solution for
// [StorageManagerWeb: getPersistedChannelConfig()] Can't find existing channel config ReferenceError: localStorage is not defined
// not in use, and doesn't work, but keep it till I figure out the fix.
export const LayoutProviders = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <WagmiProviderWrapper>
      <NextUIProviderWrapper>
        <Nav />
        {children}
      </NextUIProviderWrapper>
    </WagmiProviderWrapper>
  )
}
