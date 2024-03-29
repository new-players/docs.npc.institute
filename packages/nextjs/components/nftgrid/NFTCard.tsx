import React from 'react';
import { useScaffoldContractRead } from '~~/hooks/scaffold-eth'


interface NFTCardProps {
    index: Number;
    address: string;
}

export default function NFTCard({ index, address, ...props }: NFTCardProps) {

    // get tokenid of NFT
    const { data: tokenid } = useScaffoldContractRead({
        contractName: "NFT",
        functionName: "tokenOfOwnerByIndex",
        args: [address, BigInt(index.toString())],
    });

    // get NFT Token URI
    const { data: tokenURI } = useScaffoldContractRead({
        contractName: "NFT",
        functionName: "tokenURI",
        args: [tokenid],
    });

    // get NFT metadata from tokenURI


    return (
        <div>
            <h1>NFTCard</h1>
            <p>ID: {tokenid?.toString()}</p>
            <p>URI: {tokenURI}</p>
        </div>
    )

}
