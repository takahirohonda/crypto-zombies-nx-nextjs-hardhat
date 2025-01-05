'use client'

import { Button } from '@nextui-org/react'
import { BrandHeader } from './BrandHeader'

export const Nav = () => {
  return (
    <nav className="flex h-[78px] justify-between items-center ">
      <div className="flex items-center gap-[16px]">
        <BrandHeader text="CryptoZombie" />
        <a href="/">Home</a>
      </div>
      <div className="flex">
        <Button onPress={() => alert('hello world')}>Connect to wallet</Button>
      </div>
    </nav>
  )
}
