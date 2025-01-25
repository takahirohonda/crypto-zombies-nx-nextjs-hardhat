'use client'

import { useReadContract } from 'wagmi'
import { zombieContractTestConfig } from '../config/zombieContractTestConfig'

export const MyZombie = () => {
  const { data: zombie } = useReadContract({
    ...zombieContractTestConfig,
    functionName: 'getZombieBySender',
    args: [],
  })

  return <>{zombie && <div>MyZombieData: {JSON.stringify(zombie)}</div>}</>
}
