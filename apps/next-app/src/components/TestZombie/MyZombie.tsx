'use client'

import { useReadContract } from 'wagmi'
import { zombieContractTestConfig } from '../../config/zombieContractTestConfig'
import { useEffect, useState } from 'react'

export const MyZombie = () => {
  const [zombie, setZombie] = useState<{ name: string; dna: bigint }>()
  const {
    data: zombieData,
    isLoading,
    isError,
    error,
  } = useReadContract({
    ...zombieContractTestConfig,
    functionName: 'getZombieBySender',
  })

  const { data: owner } = useReadContract({
    ...zombieContractTestConfig,
    functionName: 'getZombieOwnerById',
    args: [BigInt(0)], // pass the zombie ID here
  })

  const { data: zombieCount } = useReadContract({
    ...zombieContractTestConfig,
    functionName: 'getZombieCountByOwner',
    args: ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'], // pass the address here
  })

  const { data: senderAddress } = useReadContract({
    ...zombieContractTestConfig,
    functionName: 'getCurrentMsgSenderValue',
  })

  const { data: counterForCheck } = useReadContract({
    ...zombieContractTestConfig,
    functionName: 'getNumberForTesting',
  })

  useEffect(() => {
    console.log(`checking zombieData: ${zombieData}`)
    console.log(`checking isLoading: ${isLoading}`)
    console.log(`checking isError: ${isError}`)
    console.log(`checking error: ${error?.message}`)
    console.log(error)
    if (zombieData) {
      setZombie(zombieData)
    }
  }, [error, isError, isLoading, zombieData])

  useEffect(() => {
    console.log(`checking owner: ${owner}`)
    console.log(`checking zombieCount: ${zombieCount}`)
    console.log(`checking sender.address: ${senderAddress}`)
    console.log(`checking getNumberForTesting: ${counterForCheck}`)
  }, [counterForCheck, owner, senderAddress, zombieCount])

  return (
    <>
      <p>MyZombie component</p>
      <p>Checking data from the chain: {JSON.stringify(zombieData)}</p>
      {zombie && <div>MyZombieData: {JSON.stringify(zombie)}</div>}
    </>
  )
}
