import { Suspense, useEffect, useState } from "react";
import NFTCard from "./NFTCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useNetwork } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useNFTs } from "~~/hooks/useNFTs";

export function NFTGrid({ address }: { address: string }) {
  const [activeTab, setActiveTab] = useState("NFT");
  const { getUserWalletNFTs } = useNFTs();
  const { chain } = useNetwork();
  const {
    isLoading: isAllNFTsDataLoading,
    data: allNFTsData,
    error: nftsError,
    fetchNextPage,
    refetch: refetchAllNFTsData,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    status,
  } = useInfiniteQuery({
    queryKey: ["allUserWalletNFTs", chain.id],
    initialPageParam: "0",
    refetchInterval: false, //for infinite loaders, or generally scrolling through pagination, you would preferrably not want to keep refreshing as data may change and thus messing up the order. Could be wrong, can change if otherwise needed
    getNextPageParam: (lastPage: any, pages: any[]) => {
      if (lastPage && lastPage?.pageKey) {
        return lastPage?.pageKey;
      } else {
        return false;
      }
    },
    queryFn: queryParams => getUserWalletNFTs(false, undefined, queryParams?.pageParam ?? undefined, chain.id),
  });

  useEffect(() => {
    console.log("allNFTsData: ", allNFTsData);
  }, [allNFTsData]);

  useEffect(() => {
    console.log("nftsError: ", nftsError);
  }, [nftsError]);

  const handleTabChange = newTab => {
    setActiveTab(newTab);
  };

  // get the total number of NFTs owned by the address
  const { data: totalNFTs } = useScaffoldContractRead({
    contractName: "NFT",
    functionName: "balanceOf",
    args: [address],
  });

  const nftCount = Number(totalNFTs);

  return (
    <Suspense fallback={null}>
      <div role="tablist" className="tabs tabs-bordered tabs-lg">
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="NFTs" checked />
        <div role="tabpanel" className="tab-content">
          <div className="h-[100%] grid gap-1 md:gap-4 grid-cols-2 lg:grid-cols-3 grid-rows-2 mb-6 z-[0] p-3 md:px-4 border-[3px] overflow-auto">
            {Array.from({ length: nftCount * 3 }, (_, index) => (
              <NFTCard key={(index % 3) + index / 3} index={index} address={address} />
            ))}
          </div>
        </div>
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="NPCs" />
        <div role="tabpanel" className="tab-content">
          Tab content 2
        </div>
      </div>
    </Suspense>
  );
}
