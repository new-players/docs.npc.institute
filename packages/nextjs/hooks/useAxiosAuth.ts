"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { axiosBaseConfig } from "~~/utils/axios-config";

const useAxiosAuth = () => {
  const PATH_REFRESH_TOKEN = "/v1/auth/generate-auth-token";

  // const { data: session, update } = useSession();

  const [counter, setCounter] = useState(0); // Counter state

  // const refreshToken = async () => {
  //   setCounter(prevCounter => prevCounter + 1); // Increment counter

  //   const response = await axiosBaseConfig.post(PATH_REFRESH_TOKEN, {
  //     refreshToken: session?.user.refreshToken,
  //   });

  //   if (response.status === 201) {
  //     const { data: sessionObject } = response;
  //     await update({
  //       ...session,
  //       user: {
  //         ...session.user,
  //         authToken: sessionObject.authToken,
  //         refreshToken: sessionObject.refreshToken,
  //       },
  //     });
  //   }
  // };

  useEffect(() => {
    if (counter >= 5) {
      signOut();
    }
  }, [counter]);

  // useEffect(() => {
  //   const requestIntercept = axiosBaseConfig.interceptors.request.use(
  //     config => {
  //       if (!config.headers["Authorization"]) {
  //         config.headers["Authorization"] = `Bearer ${session?.user.authToken}`;
  //       }
  //       return config;
  //     },
  //     error => Promise.reject(error),
  //   );

  //   const responseIntercept = axiosBaseConfig.interceptors.response.use(
  //     response => response,
  //     async error => {
  //       const prevRequest = error.config;
  //       if (error.response.status === 401 && !prevRequest.sent) {
  //         prevRequest.sent = true;
  //         await refreshToken();
  //         prevRequest.headers["Authorization"] = `Bearer ${session?.user.authToken}`;
  //         return axiosBaseConfig(prevRequest);
  //       }
  //       return Promise.reject(error);
  //     },
  //   );

  //   return () => {
  //     axiosBaseConfig.interceptors.request.eject(requestIntercept);
  //     axiosBaseConfig.interceptors.response.eject(responseIntercept);
  //   };
  // }, [session]);

  return axiosBaseConfig;
};

export default useAxiosAuth;
