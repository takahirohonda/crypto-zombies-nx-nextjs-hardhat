'use client'

import { BrandHeader } from './BrandHeader'
import { WalletConnectButton } from '../WalletConnectButton/WalletConnectButton'

export const Nav = () => {
  return (
    <nav className="flex h-[78px] justify-between items-center ">
      <div className="flex items-center gap-[16px]">
        <BrandHeader text="CryptoZombie" />
        <a href="/">Home</a>
      </div>
      <div className="flex">
        <WalletConnectButton />
      </div>
    </nav>
  )
}
