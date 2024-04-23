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

export interface UserWalletNftParams {
  walletAddress: string;
  featuredNftsRequired: boolean;
  limit: number;
  cursor: string;
  contractAddress?: string;
  pageParam: any;
}

export const useNFTs = (tokenURI: string) => {
  const { get } = useRestApi();
  const { chain } = useNetwork();
  const { address } = useAccount();
  const GET_WALLET_NFTS_PATH = "/v1/nft/wallet/all";

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

  const getUserWalletNFTs = async (
    featuredNftsRequired: boolean,
    limit: number = 20,
    pageParam: string = "0",
    chainId: number,
    contract_address: string = contractAddress,
  ): Promise<any> => {
    console.log("fetching wallets: ");
    if (chainId && address) {
      const headers: Record<string, string> = { chainId: String(chainId) };
      const params: UserWalletNftParams = {
        walletAddress: address,
        featuredNftsRequired: false,
        limit,
        cursor: pageParam,
        pageParam,
      };
      if (contractAddress !== "" || contract_address !== "") {
        params.contractAddress = contract_address;
      }
      let res = await get(GET_WALLET_NFTS_PATH, params, headers);
      console.log("res: ", res);
      return res;
    } else {
      return {
        nfts: [],
        totalCount: 0,
        pageKey: "",
      };
    }
  };

  const fetchNftMetadata = async (tokenURI: string) => {
    const res = await fetch(tokenURI);
    let rawData;

    try {
      rawData = (await res.json()) as Record<string, unknown>;
      return rawData;
    } catch (error) {
      console.log("Error getting data: ", error);
    }
  };

  return { fetchNftMetadata, getUserWalletNFTs };
};
