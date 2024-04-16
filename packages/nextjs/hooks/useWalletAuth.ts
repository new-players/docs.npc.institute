import useRestApi from "~~/hooks/useRestApi";

export const useWalletAuth = () => {
  const GENERATE_CHALLENGE_PATH = "/v1/auth/generate-challenge";

  const { post } = useRestApi();

  const generateChallenge = async (walletAddress): Promise<any> => {
    return post(GENERATE_CHALLENGE_PATH, { walletAddress }, {}, false);
  };

  return {
    generateChallenge,
  };
};
