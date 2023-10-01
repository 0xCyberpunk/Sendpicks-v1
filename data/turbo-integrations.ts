export const integrationCategories = [
  "general",
  "protocols",
  "services",
] as const

interface TurboIntegration {
  name: string
  href: string
  url: string
  description: string
  imgLight: string
  imgDark: string
  category: (typeof integrationCategories)[number]
}

export const turboIntegrations = {
  siwe: {
    name: "SIWE",
    href: "/integration/sign-in-with-ethereum",
    url: "https://login.xyz/",
    description:
      "Sign-In with Ethereum is Web3 authentication using an Ethereum account.",
    category: "general",
    imgLight: "/integrations/siwe.svg",
    imgDark: "/integrations/siwe.svg",
  },
  erc20: {
    name: "ERC20",
    href: "/integration/erc20",
    url: "https://eips.ethereum.org/EIPS/eip-20",
    description: "ERC20 is a standard for fungible tokens on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc20.png",
    imgDark: "/integrations/erc20.png",
  },
} as const
