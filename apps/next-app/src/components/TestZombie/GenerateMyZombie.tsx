'use client'

import { Button } from '@nextui-org/react'
import { zombieContractTestConfig } from '../../config/zombieContractTestConfig'
import { useWriteContract } from 'wagmi'
import { useCallback } from 'react'

export const GenerateMyZombie = () => {
  const { writeContract } = useWriteContract()
  const generate = useCallback(async () => {
    await writeContract({
      ...zombieContractTestConfig,
      functionName: 'createRandomZombie',
      args: ['me me me'],
    })
  }, [writeContract])

  return (
    <>
      <Button onPress={generate}>Generate my zombie</Button>
    </>
  )
}
