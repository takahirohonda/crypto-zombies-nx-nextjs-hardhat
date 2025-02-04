'use client'

import { Button } from '@nextui-org/react'
import * as React from 'react'
import { useConnect } from 'wagmi'

export const WalletOptions = () => {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <Button
      key={connector.uid}
      onPress={() => connect({ connector })}
      color="success"
    >
      {connector.name}
    </Button>
  ))
}
