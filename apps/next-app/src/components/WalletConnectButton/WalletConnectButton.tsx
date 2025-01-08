'use client'

import { Button, useDisclosure } from '@nextui-org/react'
import { WalletConnectModal } from './WalletConnectButton/WalletConnectModal'
import { useAccount, useDisconnect } from 'wagmi'
import { formatAddress } from './WalletConnectButton/formatAddress'

export const WalletConnectButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  return (
    <>
      <Button onPress={isConnected ? () => disconnect() : onOpen}>
        {isConnected ? formatAddress(address as string) : 'Connect to wallet'}
      </Button>
      <WalletConnectModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
