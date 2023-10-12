"use client"

import "@rainbow-me/rainbowkit/styles.css"

import { ReactNode } from "react"
import {
  connectorsForWallets,
  darkTheme,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import {
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets"
import { createConfig, WagmiConfig } from "wagmi"

import { chains, publicClient, webSocketPublicClient } from "@/config/networks"
import { siteConfig } from "@/config/site"
import { useColorMode } from "@/lib/state/color-mode"

const projectId = "cd2942269d4f3fdf8a44e3269c0758fd"

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ projectId, chains }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export function RainbowKit({ children }: { children: ReactNode }) {
  const [colorMode] = useColorMode()
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={colorMode == "dark" ? darkTheme() : lightTheme()}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
