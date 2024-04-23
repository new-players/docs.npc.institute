import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useNFTs } from "~~/hooks/useNFTs";
import SparkLightning from "~~/public/svgs/SparkLightning";

interface NFTCardProps {
  key: number;
  nftData: unknown;
  loading: boolean;
}

export default function NFTCard({ key, index, nftData, loading, ...props }: unknown) {
  return (
    <div className="overflow-hidden relative w-full aspect-square rounded-2xl cursor-pointer  bg-[rgba(0,0,0,0.2)]">
      {!loading ? (
        nftData && (
          <Link href={`/spark/${index}`}>
            {/* `/nfts/${tokenURI}` */}
            <>
              <Image src={nftData?.image} fill alt="NFT" quality={100} className="rounded-2xl" />
            </>
            <div className="absolute flex justify-end items-center px-[16px] bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.34)]">
              <p className="text-white justify-end text-lg font-rubik font-semibold truncate">{nftData?.name}</p>
            </div>
          </Link>
        )
      ) : (
        <>
          <div
            role="status"
            className="flex items-center justify-center w-full h-full bg-[white]/30 rounded-lg animate-pulse "
          >
            <SparkLightning className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem]" />
            <span className="sr-only">Loading...</span>
          </div>
        </>
      )}
    </div>
  );
}
