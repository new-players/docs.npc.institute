import { Suspense } from 'react'
import NFTCard from './NFTCard'
import { useScaffoldContractRead } from '~~/hooks/scaffold-eth'

export function NFTGrid({address} : {address: string}) {

    // get the total number of NFTs owned by the address
  const { data: totalNFTs } = useScaffoldContractRead({
    contractName: "NFT",
    functionName: "balanceOf",
    args: [address],
    });

    const nftCount = Number(totalNFTs);

    return (
    <Suspense fallback={null}>
        {Array.from({ length: nftCount }, (_, index) => (
            <NFTCard
                key={index}
                index={index}
                address={address}
            />
        ))}
    </Suspense>
  )
}