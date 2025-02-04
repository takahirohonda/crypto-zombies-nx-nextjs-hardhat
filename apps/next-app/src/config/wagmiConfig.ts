import { http, createConfig } from 'wagmi'
import { hardhat, mainnet, sepolia } from 'wagmi/chains'
import { injected, metaMask, safe } from 'wagmi/connectors'

// Declaration merging - https://wagmi.sh/react/typescript
declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig
  }
}

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, hardhat],
  connectors: [
    // https://wagmi.sh/react/api/connectors/injected
    injected(),
    metaMask(),
    // https://wagmi.sh/react/api/connectors/safe
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [hardhat.id]: http('http://127.0.0.1:8545'),
  },
})

// Defining config per net is probably better.
// This doesn't need declaration merging.
export const mainnetConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
})

export const sepoliaConfig = createConfig({
  chains: [sepolia],
  transports: { [sepolia.id]: http() },
})
