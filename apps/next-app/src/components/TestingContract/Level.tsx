import { watchContractEvent } from '@wagmi/core'
import { useEffect, useState } from 'react'
import { levelAbi } from './levelAbi'

import { Button } from '@nextui-org/react'
import { useAccount } from 'wagmi'
import { useReadContract, useWriteContract } from 'wagmi'
import { wagmiConfig } from '../../config/wagmiConfig'
import { LEVEL_CONTRACT_ADDRESS } from '../../const'

export const Level = () => {
  const { data: hash, writeContract } = useWriteContract()
  const { address } = useAccount()
  const incrementLevel = async () => {
    try {
      const tx = await writeContract({
        address: LEVEL_CONTRACT_ADDRESS,
        abi: levelAbi,
        functionName: 'incrementPlayerLevel',
      })
      console.log('Transaction sent:', tx)
      await (tx as any)?.wait() // Ensure transaction is confirmed
      console.log('Transaction confirmed.')
    } catch (error) {
      console.error('Error incrementing level:', error)
    }
  }

  const { data } = useReadContract({
    address: LEVEL_CONTRACT_ADDRESS,
    abi: levelAbi,
    functionName: 'getPlayerLevel',
    account: address,
  })

  const [level, setLevel] = useState('')

  useEffect(() => {
    setLevel(data?.toString() ?? '')
    const unwatch = watchContractEvent(wagmiConfig, {
      address: LEVEL_CONTRACT_ADDRESS,
      abi: levelAbi,
      eventName: 'IncrementLevel',
      onLogs(logs) {
        console.log('New logs!', logs)

        console.log(`checking logs[0].args.level: ${logs[0].args.level}`)
        const newLevel = logs[0].args.level
        setLevel(newLevel?.toString() ?? '')
      },
    })
    return () => unwatch()
  }, [])

  return (
    <div className="flex gap-[16px]">
      <Button onPress={incrementLevel}>Increment Level</Button>
      <p>Current Level: {level?.toString()}</p>
    </div>
  )
}
