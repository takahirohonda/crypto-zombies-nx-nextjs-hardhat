'use client'

import { Button, useDisclosure } from '@nextui-org/react'
import { WalletConnectModal } from './WalletConnectButton/WalletConnectModal'
import { useAccount, useDisconnect } from 'wagmi'
import { formatAddress } from './WalletConnectButton/formatAddress'
import { useEffect, useState } from 'react'

export const WalletConnectButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  // Prevent SSR issues by ensuring client-side rendering
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <Button
        onPress={isConnected ? () => disconnect() : onOpen}
        color="danger"
      >
        {isClient
          ? isConnected
            ? formatAddress(address as string)
            : 'Connect to wallet'
          : 'Connect to wallet'}
      </Button>
      <WalletConnectModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
