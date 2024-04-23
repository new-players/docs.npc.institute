import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useNetwork } from "wagmi";
import LoadingSpinner from "~~/components/loading-spinner/LoadingSpinner";
import NpcTab from "~~/components/npc-tab/NpcTab";
import SparkBalance from "~~/components/sparks-balance/SparksBalance";
import Switch from "~~/components/switch/Switch";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useNFTs } from "~~/hooks/useNFTs";
import { useNPCs } from "~~/hooks/useNPCs";
import ChevronLeft from "~~/public/svgs/ChevronLeft";
import Lock from "~~/public/svgs/Lock";
import SparkLightning from "~~/public/svgs/SparkLightning";

function Spark({ tokenId }: Props) {
  const { chain } = useNetwork();
  const { fetchNPCMetadata } = useNPCs();
  const [selectedPreviewData, setSelectedPreviewData] = useState({
    gif: "",
  });
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [loaders, setLoaders] = useState<Loaders>({
    isPreviewing: false,
    isFreezing: false,
    isSparking: false,
    isLoadingImage: false,
  });
  const [isGenerationTypeChecked, setIsGenerationTypeChecked] = useState(false);

  const { fetchNftMetadata } = useNFTs();

  const { data: tokenURI } = useScaffoldContractRead({
    contractName: "NFT",
    functionName: "tokenURI",
    args: [tokenId],
  });

  const {
    data: selectedNFT,
    isPending: nftLoading,
    error: nftError,
  } = useQuery({
    queryKey: ["nftMetadata", tokenURI],
    queryFn: () => fetchNftMetadata(tokenURI),
    enabled: Boolean(tokenURI),
    refetchInterval: false,
  });

  const {
    data: nftMetaData,
    isPending: nftMetaDataLoading,
    error: nftMetaDataError,
  } = useQuery({
    queryKey: ["npcMetadata", tokenURI],
    queryFn: () => fetchNPCMetadata(tokenId, chain.id),
    enabled: Boolean(tokenId),
    refetchOnWindowFocus: true,
    refetchOnMount: "always",
  });

  const generationTypeCheckHandler = () => {
    if (!isGenerationTypeChecked) {
      // toast.info("Switched to 3D Generation Output");
    } else {
      // toast.info("Switched to 2D Generation Output");
    }
    setIsGenerationTypeChecked(!isGenerationTypeChecked);
  };

  const handleCheckFreezingStatus = () => {
    if (selectedNFT && selectedNFT?.isMetadataFreezed) {
      return "Metadata is Frozen";
    }
    // if (selectedNFT && !selectedNFT.isMetadataFreezed && selectedPreviewData.gif === "") {
    //     return "No New Preview";
    // }
    // if (selectedNFT && !selectedNFT.isMetadataFreezed && selectedPreviewData.gif !== "") {
    //     return "Freeze Metadata";
    // }
  };

  const handleCheckIsFreezingEnabled = () => {
    // if (selectedPreviewData.gif === "") {
    //     return false;
    // }
    if (!selectedNFT?.gif) {
      return true;
    }
  };

  return (
    <div className="flex justify-center h-[100dvh]">
      <div className="max-w-[600px] w-full px-2 md:px-5 flex">
        <div className="card my-5 bg-base-100 shadow-xl min-h-[800px] w-full pt-[3rem] px-2 md:px-5">
          <section className="w-full gap-1">
            <div className="w-full flex justify-between items-center">
              <section className="flex items-center gap-2">
                <span
                  className="cursor-pointer"
                  // insert here link to navigate back
                >
                  <ChevronLeft className={"w-5 h-5 md:w-8 md:h-8 text-gray-500"} />
                </span>
                <p className="font-rubik text-[1rem] md:text-[2rem] font-semibold">
                  {selectedNFT?.name ? selectedNFT?.name : "No NFT Name Metadata"}
                </p>
              </section>
              <section className="pr-2">
                <SparkBalance />
              </section>
            </div>
            <div className="w-full flex flex-col gap-4">
              <section className="w-full">
                <div className="relative aspect-square w-full h-full rounded-lg">
                  {/* {isLoadingPreview && (
                <section className="absolute flex w-full h-full justify-center items-center z-[100]">
                  <section className="flex w-full h-full justify-center bg-white/30 items-center z-[100]">
                    <LoadingSpinner />
                  </section>
                </section>
              )} */}
                  {selectedNFT && selectedNFT?.isMetadataFreezed && (
                    <span className="absolute flex gap-2  p-4 top-[8] left-[8] z-[100]">
                      <div className="h-[3.5rem] rounded-xl bg-black">
                        <div className="tooltip" data-tip={handleCheckFreezingStatus()}>
                          <button
                            className="flex justify-center btn aspect-square btn-primary !p-2  disabled:bg-gray-300 rounded-xl  md:text-base font-rubik-mono-1 border-2 font-normal"
                            disabled={true}
                          >
                            <Lock className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </span>
                  )}
                  <span className="absolute flex gap-2  p-4 top-[8] left-[8] z-[100]">
                    {!isLoadingPreview && selectedNFT && (
                      <>
                        {selectedNFT && !selectedNFT?.isMetadataFreezed && selectedNFT?.token_type === "ERC721" && (
                          <section className="flex gap-2 items-center">
                            <div className="h-[3.5rem] rounded-xl bg-black">
                              <div className="tooltip" data-tip="Preview NPC Generation">
                                <button
                                  className="btn !p-2 btn-primary disabled:bg-gray-300 rounded-xl text-[0.7rem] md:text-base font-rubik-mono-1 border-2 font-normal"
                                  onClick={() => {
                                    setModalState({
                                      ...modalState,
                                      openPreviewingModal: true,
                                    });
                                    setLoaders({
                                      ...loaders,
                                      isPreviewing: true,
                                    });
                                  }}
                                  disabled={loaders.isPreviewing}
                                >
                                  {loaders.isPreviewing ? (
                                    <>
                                      <LoadingSpinner className="w-6 h-6" />
                                    </>
                                  ) : (
                                    <>
                                      {/* {previewingCost} uncomment as this is sample*/} 30
                                      <SparkLightning className="w-3 h-3 md:w-4 md:h-4 -ml-1" />
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="tooltip" data-tip="Switch Generation Output Type">
                              <Switch
                                checked={isGenerationTypeChecked}
                                onChange={generationTypeCheckHandler}
                                firstOptionLabel="2D"
                                secondOptionLabel="3D"
                                disabled={loaders.isPreviewing}
                              />
                            </div>
                          </section>
                        )}
                        {selectedNFT && selectedNFT?.isSparked && (
                          <div className="h-[3.5rem] rounded-xl bg-black">
                            <div className="tooltip" data-tip={handleCheckFreezingStatus()}>
                              <button
                                className="flex justify-center btn aspect-square btn-primary !p-2 disabled:bg-gray-300 rounded-xl  md:text-base font-rubik-mono-1 border-2 font-normal"
                                onClick={() => {
                                  setModalState({
                                    ...modalState,
                                    openFreezingMetadataModal: true,
                                  });
                                  setLoaders({
                                    ...loaders,
                                    isFreezing: true,
                                  });
                                }}
                                disabled={!handleCheckIsFreezingEnabled() || loaders.isFreezing}
                              >
                                {loaders.isFreezing ? (
                                  <>
                                    <LoadingSpinner className="w-6 h-6" />
                                  </>
                                ) : (
                                  <>
                                    <Lock className="w-5 h-5" />
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </span>

                  <>
                    {(selectedNFT && selectedNFT?.image) || (selectedPreviewData && selectedPreviewData.gif) ? (
                      <>
                        <Image
                          src={selectedPreviewData.gif !== "" ? selectedPreviewData.gif : selectedNFT?.image}
                          fill
                          alt="NFT"
                          quality={100}
                          className={`rounded-2xl z-[0]`}
                          unoptimized={selectedNFT?.isMetadataFreezed}
                        />
                      </>
                    ) : (
                      <div className="flex aspect-square w-full h-full rounded-lg items-center justify-center mb-4 bg-gray-300 ">
                        <SparkLightning className="w-10 h-10" />
                      </div>
                    )}
                  </>
                </div>
              </section>

              {/* {selectedNFT && !selectedNFT.isSparked && (
            <SparkingTab
              detailsData={{
                description: NFTData.description,
                background_color: NFTData.background_color,
              }}
            />
          )} */}

              <section className="flex justify-center">
                {selectedNFT && selectedNFT?.token_type == "ERC1155" && (
                  <p className="font-rubik">Sparking is not yet available for this NFT type.</p>
                )}
                {/* {selectedNFT && selectedNFT.isSparked && <NpcTab />} */}
                <NpcTab />
                {selectedNFT && !selectedNFT?.isSparked && selectedNFT?.token_type === "ERC721" && (
                  <span className="h-[4rem] rounded-xl bg-black">
                    <button
                      className="btn disabled:bg-gray-300 disabled:text-bac btn-primary rounded-xl font-rubik-mono-1 text-[1rem] border-2 w-[8rem] h-[2.2rem] md:text-[1.3rem] md:w-[10rem] md:h-[3.2rem] text-black border-black "
                      onClick={() => {
                        setModalState({
                          ...modalState,
                          openSparkingModal: true,
                        });
                        setLoaders({
                          ...loaders,
                          isSparking: true,
                        });
                      }}
                      type="button"
                      disabled={
                        !mint ||
                        isMintLoading ||
                        isMintStarted ||
                        (selectedNFT && selectedNFT?.isSparked) ||
                        loaders.isSparking
                      }
                    >
                      {isMintLoading || isMintStarted || loaders.isSparking ? (
                        "MINTING"
                      ) : (
                        <>
                          <SparkLightning className={`w-4 h-8`} /> SPARK
                        </>
                      )}
                    </button>
                  </span>
                )}
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async context => {
  return {
    props: {
      tokenId: context.params.tokenId,
    },
  };
};

export default Spark;
