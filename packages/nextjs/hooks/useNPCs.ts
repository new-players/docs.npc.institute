import useRestApi from "./useRestApi";
import axios from "axios";
import { Position } from "reactflow";
import { useAccount, useNetwork } from "wagmi";

/**
 * useNFTs hook
 *
 * @param {string} tokenURI - Relative path to the JSON file in the public folder
 * @returns {Object} - Loaded JSON data and a loading state
 */

export interface NFT {
  image: string;
  animation_url: string;
  external_url: string;
  background_color: string;
  name: string;
  description: string;
  attributes: Attr[];
  contract_address: string;
  token_id: number;
  isSparked: boolean;
  isMetadataFreezed: boolean;
  gif: string;
  video: string;
  token_type: "ERC721" | "ERC1155";
}

export interface NFTMetadataParams {
  contractAddress: string;
  tokenId: string;
  // refreshTokenMetadata: boolean;
}

export interface Attr {
  is_base_item: boolean;
  value: string;
  trait_type: string;
}

export const useNPCs = (tokenURI: string) => {
  const { get } = useRestApi();
  const { chain } = useNetwork();
  const { address } = useAccount();

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
  const sparkAPIKey = process.env.NEXT_PUBLIC_SPARK_API_KEY;

  const GET_WALLET_NPCS_PATH = "/v1/sdk/npc/all";
  const GET_NPC_METADATA_PATH = "/v1/sdk/npc";

  const fetchAllNPCs = async (chainId?: string, contract_address?: string) => {
    const params = {
      walletAddress: address,
      featuredNpcsRequired: false,
      contractAddress: contractAddress,
    };
    const headers = { chainId: chainId, "spark-api-key": sparkAPIKey };
    const res = await get(GET_WALLET_NPCS_PATH, params, headers);
    return res;
  };

  const fetchNPCMetadata = async (tokenId: string, chainId: number): Promise<NFT> => {
    if (chainId && address) {
      const headers: Record<string, string> = { chainId: String(chainId), "spark-api-key": sparkAPIKey };
      const params: NFTMetadataParams = {
        contractAddress: contractAddress,
        tokenId: tokenId,
        walletAddress: address,
        refreshTokenMetadata: true,
      };

      return await get(GET_NPC_METADATA_PATH, params, headers);
    }
  };

  return { fetchAllNPCs, fetchNPCMetadata };
};
