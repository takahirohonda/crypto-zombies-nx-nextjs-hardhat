import { watchContractEvent } from '@wagmi/core'
import { wagmiConfig } from '../config/wagmiConfig'
import { zombieContractTestConfig } from '../config/zombieContractTestConfig'

export const watchNewZombieEvent = watchContractEvent(wagmiConfig, {
  ...zombieContractTestConfig,
  eventName: 'NewZombie',
  onLogs(logs) {
    console.log('NewZombie')
    console.log(logs)
  },
})
