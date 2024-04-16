import { HttpRequestException } from "./HttpRequestException";
import { axiosBaseConfig } from "./axios-config";
import { AxiosError, AxiosResponse } from "axios";

export type ApiListener = (response: AxiosError<any>) => void;

export function httpRequest() {
  let listener: ApiListener = () => {};

  function setListener(newListener: ApiListener) {
    listener = newListener;
  }

  function getBaseUrl(): string {
    return String(axiosBaseConfig.defaults.baseURL);
  }

  async function processPromise(promise: Promise<AxiosResponse>): Promise<any> {
    return new Promise((resolve, reject) => {
      promise
        .then(response => resolve(response.data))
        .catch((error: AxiosError<any>) => {
          if (error.response && error.response.status > 400) {
            listener(error);
          }

          if (error.response) {
            const data = error.response.data;
            if (
              typeof data === "object" &&
              Object.prototype.hasOwnProperty.call(data, "code") &&
              Object.prototype.hasOwnProperty.call(data, "data")
            ) {
              reject(new HttpRequestException(data.data, data.code, error.message));
              return;
            }
          }

          reject(error);
        });
    });
  }

  return {
    setListener,
    getBaseUrl,
    processPromise,
  };
}
