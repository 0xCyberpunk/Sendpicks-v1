/*import { useMemo } from "react";
import { providers } from "ethers";
import { HttpTransport, PublicClient } from "viem"; // Correct the import statement
import { usePublicClient } from "wagmi"; // Correct the import statement

// Define a type for a Viem Transport
type ViemTransport = {
  type: string;
  transports: HttpTransport[];
};

export function publicClientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };

  // Use type assertions to ensure the correct types are used
  if (transport.type === "fallback") {
    return new providers.FallbackProvider(
      transport.transports.map(({ value }) => new providers.JsonRpcProvider(value?.url, network))
    );
  }

  return new providers.JsonRpcProvider(transport.url as string, network);
}

/** Hook to convert a viem Public Client to an ethers.js Provider. */
/*export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const publicClient = usePublicClient({ chainId });
  return useMemo(() => publicClientToProvider(publicClient), [publicClient]);
}
*/