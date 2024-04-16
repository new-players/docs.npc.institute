import useAxiosAuth from "~~/hooks/useAxiosAuth";
import { httpRequest } from "~~/utils/HttpRequestImpl";
import { axiosBaseConfig } from "~~/utils/axios-config";

const useRestApi = () => {
  const axiosAuth = useAxiosAuth();

  async function get(
    path: string,
    params: Record<string, any> = {},
    headers: Record<string, string> = {},
    isAuthenticated = false,
  ): Promise<any> {
    if (!isAuthenticated) {
      return httpRequest().processPromise(axiosBaseConfig.get(path, { headers, params }));
    }
    if (isAuthenticated) {
      return httpRequest().processPromise(axiosAuth.get(path, { headers, params }));
    }
  }

  async function post(
    path: string,
    data: Record<string, any> = {},
    headers: Record<string, string> = {},
    isAuthenticated = false,
  ): Promise<any> {
    if (!isAuthenticated) {
      return httpRequest().processPromise(axiosBaseConfig.post(path, data, { headers }));
    }
    if (isAuthenticated) {
      return httpRequest().processPromise(axiosAuth.post(path, data, { headers }));
    }
  }

  return {
    get,
    post,
  };
};

export default useRestApi;
