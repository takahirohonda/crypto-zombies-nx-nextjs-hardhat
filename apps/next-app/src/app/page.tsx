'use client'

import Image from 'next/image'
import { GenerateMyZombie } from '../components/TestZombie/GenerateMyZombie'
import { MyZombie } from '../components/TestZombie/MyZombie'
import { Counter } from '../components/TestingContract/Counter'
import { Level } from '../components/TestingContract/Level'
import { Character } from '../components/TestingContract/Character'

export default function Index() {
  return (
    <div className="flex">
      <div>
        <h1>CryptoZombie Playground</h1>
        <Image
          src="/img/zombie-192×287.png"
          width={192}
          height={287}
          alt="zombie pic"
          priority
        />
      </div>
      <div className="flex flex-col">
        <GenerateMyZombie />
        <p>hello</p>
        <MyZombie />
        {/* <Counter />
        <Level />
        <Character /> */}
      </div>
    </div>
  )
}
