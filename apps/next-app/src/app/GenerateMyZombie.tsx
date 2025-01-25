'use client'

import { Button } from '@nextui-org/react'
import { zombieContractTestConfig } from '../config/zombieContractTestConfig'
import { useWriteContract } from 'wagmi'
import { useCallback, useEffect } from 'react'
import { watchNewZombieEvent } from '../utils/watchGenerateZombieEvent'

export const GenerateMyZombie = () => {
  const { data, writeContract } = useWriteContract()
  const generate = useCallback(async () => {
    await writeContract({
      ...zombieContractTestConfig,
      functionName: 'createRamdomZombie',
      args: ['me me me'],
    })
  }, [writeContract])

  useEffect(() => {
    watchNewZombieEvent()
  }, [])
  return (
    <>
      <Button onPress={generate}>Generate my zombie</Button>
    </>
  )
}
