import { Suspense, useEffect, useMemo, useState } from "react";
import NFTCard from "./NFTCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useNetwork } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useNFTs } from "~~/hooks/useNFTs";
import { useNPCs } from "~~/hooks/useNPCs";
import SparkLightning from "~~/public/svgs/SparkLightning";

function NFTDataCleaner({ key, index, address }) {
  const { fetchNftMetadata } = useNFTs();

  const { data: tokenid } = useScaffoldContractRead({
    contractName: "NFT",
    functionName: "tokenOfOwnerByIndex",
    args: [address, BigInt(index.toString())],
  });

  const { data: tokenURI } = useScaffoldContractRead({
    contractName: "NFT",
    functionName: "tokenURI",
    args: [tokenid],
  });

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
    <NFTCard key={index} address={address} index={index} nftData={nftData} loading={nftLoading} error={nftError} />
  );
}

export function NFTGrid({ address }: { address: string }) {
  const [activeTab, setActiveTab] = useState("NFT");
  const [queries, setQueries] = useState([]);
  const { chain } = useNetwork();
  const { fetchAllNPCs } = useNPCs();
  const { fetchNftMetadata } = useNFTs();

  const handleTabChange = newTab => {
    setActiveTab(newTab);
  };

  // get the total number of NFTs owned by the address
  const { data: totalNFTs } = useScaffoldContractRead({
    contractName: "NFT",
    functionName: "balanceOf",
    args: [address],
  });

  const {
    data: allNpcs,
    isPending: npcLoading,
    error: npcError,
  } = useQuery({
    queryKey: ["allNpcs", chain.id],
    queryFn: () => fetchAllNPCs(chain.id),
    // enabled: Boolean(),
    refetchInterval: false,
  });

  const nftCount = Number(totalNFTs);

  useEffect(() => {
    if (totalNFTs) {
      const tempArray = [];
      for (let i = 0; i < totalNFTs; i++) {}
      setQueries(tempArray);
    }
  }, [address, totalNFTs]);

  return (
    <Suspense fallback={null}>
      <div role="tablist" className="tabs tabs-bordered tabs-lg">
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="NFTs" checked />
        <div role="tabpanel" className="tab-content">
          { (nftCount === 0) ?
            <div className="m-5">
              <div className="flex flex-col items-center bg-gray-100 p-5 rounded-lg">
                  <SparkLightning className="w-[2rem] md:w-[3rem]" />
                  <p className="font-rubik">No NFTs Found</p>
              </div>
            </div>
          :
          <div className="h-[100%] grid gap-1 md:gap-4 grid-cols-2 lg:grid-cols-3 grid-rows-2 mb-6 z-[0] p-3 md:px-4 border-[3px] overflow-auto">
            {Array.from({ length: nftCount }, (_, index) => {
              return <NFTDataCleaner key={index} index={index} address={address} />;
            })}
          </div>

          }
        </div>
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="NPCs" />
        <div role="tabpanel" className="tab-content">
          
          {
          allNpcs?.totalCount === 0 || !allNpcs ? (
            <div className="m-5">
            <div className="w-full flex flex-col items-center bg-gray-100 p-5 rounded-lg">
              <SparkLightning className="w-[2rem] md:w-[3rem]" />
              <p className="font-rubik">No NPCs Found</p>
            </div>
            </div>
          ) : (
            <div
              className="h-[100%] grid gap-1 md:gap-4 grid-cols-2 lg:grid-cols-3 grid-rows-2 mb-6 z-[0] p-3 md:px-4 border-[3px] overflow-auto"
            >
            {allNpcs?.npcs?.map((data, index) => (
                <NFTCard key={index} index={index} nftData={data} />
              ))}
            </div>
              )
            }
        </div>
      </div>
    </Suspense>
  );
}
