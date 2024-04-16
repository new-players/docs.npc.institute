import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useNFTs } from "~~/hooks/useNFTs";

interface NFTCardProps {
  index: number;
  address: string;
}

// sample data
const SAMPLE_DATA = {
  name: "NPC Institute NFTs #0",
  description: "Sparked NPC",
  image: "https://uri.npc.institute/image/0",
  external_url: "https://npc.institute",
  background_color: "000000",
  animation_url: "https://uri.npc.institute/animation/0",
  attributes: {},
};

export default function NFTCard({ index, address, ...props }: NFTCardProps) {
  const { fetchNftMetadata } = useNFTs();

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
  const {
    data: nftData,
    isPending: nftLoading,
    error: nftError,
  } = useQuery({
    queryKey: ["nftMetadata", tokenURI],
    queryFn: () => fetchNftMetadata(tokenURI),
    enabled: Boolean(tokenURI),
    refetchInterval: false,
  });

  return (
    <div className="overflow-hidden relative w-full aspect-square rounded-2xl cursor-pointer border-[4px] border-solid border-[red]">
      <Link href={"/spark/123"}> {/* `/nfts/${tokenURI}` */}
        <>
          <Image src={SAMPLE_DATA.image} fill alt="NFT" quality={100} className="rounded-2xl" />
        </>
        <div className="absolute flex justify-end items-center px-[16px] bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.34)]">
          <p className="text-white justify-end text-lg font-rubik font-semibold truncate">{SAMPLE_DATA.name}</p>
        </div>
      </Link>
    </div>
  );
}
