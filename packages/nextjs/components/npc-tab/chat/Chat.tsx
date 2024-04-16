import React, { useCallback, useEffect, useRef, useState } from "react";
import ChatMessage from "./chat-message/ChatMessage";
import { useInfiniteQuery } from "@tanstack/react-query";
import _ from "lodash";
// import { toast } from "react-toastify";
// import { useChatHistory } from "~~/hooks/useChatHistory";
// import { useBoundStore } from "~~/store/store";

const Chat = () => {
//   const selectedNFT = useBoundStore(state => state.selectedNFT);
//   const chatHistory = useBoundStore(state => state.chatHistory);
//   const setChatHistory = useBoundStore(state => state.setChatHistory);
//   const isNewMessage = useBoundStore(state => state.isNewMessage);
//   const setIsNewMessage = useBoundStore(state => state.setIsNewMessage);
//   const [didNotScrollBottom, setDidNotScrollBottom] = useState(true); // for initial load to scroll to bottom
//   const [prevScrollTop, setPrevScrollTop] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalChat, setTotalChat] = useState(0);
//   const { getChatHistory } = useChatHistory();
//   const chatListRef = useRef(null);

//   const {
//     isLoading: isChatListDataLoading,
//     error: chatListDataError,
//     data: chatListData,
//     refetch,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     isFetchingNextPage,
//     status,
//   } = useInfiniteQuery({
//     queryKey: ["NPCChatHistory", selectedNFT?.token_id],
//     initialPageParam: 1,
//     enabled: selectedNFT !== null && selectedNFT?.token_id !== null,
//     refetchInterval: false,
//     queryFn: ({ pageParam = 1 }) => {
//       setCurrentPage(pageParam);
//       return getChatHistory(selectedNFT.contract_address, selectedNFT.token_id, pageParam); //get pageParam
//     },
//     getNextPageParam: (lastPage: any, pages: any[]) => {
//       if (lastPage) {
//         return currentPage + 1;
//       }
//       return undefined;
//     },
//     getPreviousPageParam: (firstPage: any) => {
//       if (firstPage && firstPage?.pageParam > 1) {
//         return firstPage.pageParam - 1;
//       }
//       return undefined;
//     },
//   });

//   const calculateChatItems = useCallback(() => {
//     if (chatListData && chatListData?.pages?.length > 0) {
//       const rows = chatListData?.pages?.length;
//       let totalCount = 0;
//       for (let i = 0; i < rows; i++) {
//         totalCount += chatListData?.pages[i]?.data?.length;
//       }
//       return totalCount;
//     } else {
//       return 0;
//     }
//   }, [chatListData]);

//   useEffect(() => {
//     if (chatListDataError) {
//       toast.error("There was an error fetching chat data");
//     }
//   }, [chatListDataError]);

//   useEffect(() => {
//     // Scroll to the bottom only once, after initial data is loaded
//     if (
//       chatHistory &&
//       chatHistory?.length > 0 &&
//       !isFetching &&
//       !isFetchingNextPage &&
//       chatListRef.current &&
//       (didNotScrollBottom || isNewMessage) //if scrolled down already wont scroll down again (from initial loading) UNLESS if the message is new
//     ) {
//       setDidNotScrollBottom(false);
//       setIsNewMessage(false);
//       chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
//     }
//   }, [chatHistory, isFetching, isFetchingNextPage]);

//   useEffect(() => {
//     setChatHistory(chatListData?.pages);
//   }, [chatListData]);

//   const handleScroll = _.throttle(async event => {
//     const { scrollTop, scrollHeight, clientHeight } = event.target;
//     // adding this so it only registers scrolling up motion, and not scrolling down when in threshold
//     if (scrollTop < prevScrollTop) {
//       // Trigger next page when scrolling up near the top
//       if (scrollTop <= 10) {
//         if (
//           chatHistory &&
//           hasNextPage &&
//           !isFetchingNextPage &&
//           chatHistory[0] &&
//           calculateChatItems() < chatHistory[0]?.totalCount &&
//           chatHistory[chatHistory?.length - 1]?.data.length > 0
//         ) {
//           await fetchNextPage();
//           if (chatListRef.current) {
//             chatListRef.current.scrollTo({
//               top: clientHeight + 30, //adjust this value to adjust scrollbar offset to fetch
//               behavior: "smooth",
//             });
//           }
//         }
//       }
//     }
//     setPrevScrollTop(scrollTop);
//   }, 300);

  return (
    <div
    //   ref={chatListRef}
      className="w-full font-rubik flex flex-col pr-1 max-h-[10rem] overflow-y-auto"
    //   onScroll={handleScroll}
    >
      {/* {selectedNFT && ( */}
        <>
          {/* {(isChatListDataLoading || isFetching || isFetchingNextPage) && (
            <p className="text-xs md:text-base text-center text-gray-500">Loading...</p>
          )} */}

          {/* {!isChatListDataLoading && chatHistory && chatHistory[0]?.totalCount === 0 && (
            <p className="text-xs md:text-base text-center text-gray-500">
              This is the Start of your conversation with {selectedNFT.name}
            </p>
          )} */}

          {/* {chatHistory &&
            chatHistory?.length > 0 &&
            chatHistory
              ?.slice()
              ?.reverse()
              ?.map((group, i) => (
                <React.Fragment key={i}>
                  {group?.data
                    ?.slice()
                    ?.reverse()
                    ?.map((chat, index) => (
                      <ChatMessage key={index} chatMessage={chat} />
                    ))}
                </React.Fragment>
              ))} */}
        </>
      {/* )} */}
    </div>
  );
};

export default Chat;
