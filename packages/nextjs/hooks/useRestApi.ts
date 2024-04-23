import { httpRequest } from "~~/utils/HttpRequestImpl";
import { axiosBaseConfig } from "~~/utils/axios-config";

const useRestApi = () => {
  async function get(
    path: string,
    params: Record<string, any> = {},
    headers: Record<string, string> = {},
  ): Promise<any> {
    return httpRequest().processPromise(axiosBaseConfig.get(path, { headers, params }));
  }

  async function post(
    path: string,
    data: Record<string, any> = {},
    headers: Record<string, string> = {},
  ): Promise<any> {
    return httpRequest().processPromise(axiosBaseConfig.post(path, data, { headers }));
  }

  return {
    get,
    post,
  };
};

export default useRestApi;
