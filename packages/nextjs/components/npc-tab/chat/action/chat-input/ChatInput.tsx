import React, { useCallback, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { useAccountInfo } from "~~/hooks/useAccountInfo";
// import { useChatInteract } from "~~/hooks/useChatInteract";
import PaperPlane from "~~/public/svgs/PaperPlane";
// import { useBoundStore } from "~~/store/store";

const ChatInput = () => {
//   const selectedNFT = useBoundStore(state => state.selectedNFT);
//   const chatHistory = useBoundStore(state => state.chatHistory);
//   const setChatHistory = useBoundStore(state => state.setChatHistory);
//   const setIsNewMessage = useBoundStore(state => state.setIsNewMessage);
  const queryClient = useQueryClient();
  // const { refetchPage } = queryClient.getQueryState('NPCChatHistory');
  const [messagePrompt, setMessagePrompt] = useState<string>("");
//   const { getChatInteract } = useChatInteract();
//   const { getUserAccountInfo } = useAccountInfo();
//   const sparkPoints = useBoundStore(state => state.sparkPoints);
//   const setSparkPoints = useBoundStore(state => state.setSparkPoints);
//   const NPCChatCost = useBoundStore(state => state.NPCChatCost);
  const [isSendingMessage, setIsSendingMessage] = useState(false);

//   const {
//     isLoading,
//     error: userDataError,
//     data: userData,
//     refetch: refetchUserData,
//   } = useQuery({
//     queryKey: ["userData"],
//     queryFn: () => getUserAccountInfo(),
//   });

//   useEffect(() => {
//     if (userData) {
//       setSparkPoints(userData.freeSparkPoints);
//     }
//   }, [userData]);

//   const sendMessage = useCallback(
//     async (promptMessage: string) => {
//       let tempHistory = [...chatHistory];
//       if (sparkPoints < NPCChatCost) {
//         toast.error("Insufficient Spark Points, you can come back tomorrow for more!");
//         setIsSendingMessage(false);
//         return;
//       }

//       if (promptMessage.length > 0 && tempHistory) {
//         tempHistory[0]?.data.unshift({ message: promptMessage, role: "user" });
//         setChatHistory(tempHistory);
//         setIsNewMessage(true);
//       }
//       try {
//         let tempHistory1 = [...chatHistory]; //we're creating another one because the tempHistory is not being updated
//         let res = await getChatInteract(selectedNFT?.contract_address, selectedNFT?.token_id, promptMessage);
//         tempHistory1[0]?.data.unshift({
//           message: res?.[0]?.message?.content,
//           role: res?.[0]?.message?.role,
//         });
//         setChatHistory(tempHistory1);
//         refetchUserData();
//         setIsNewMessage(true);
//         setIsSendingMessage(false);
//       } catch (error) {
//         console.log(error);
//         setIsSendingMessage(false);
//       }
//     },
//     [chatHistory, messagePrompt, selectedNFT],
//   );

//   const handleKeyDown = useCallback(
//     (event: React.KeyboardEvent<HTMLInputElement>) => {
//       if (event.key === "Enter") {
//         event.preventDefault();
//         setIsSendingMessage(true);
//         sendMessage(messagePrompt);
//         setMessagePrompt("");
//       }
//     },
//     [sendMessage, messagePrompt],
//   );

  return (
    <div className="w-full flex gap-3">
      {/* {selectedNFT && ( */}
        <input
          type="text"
          value={messagePrompt}
          onChange={e => setMessagePrompt(e.target.value)}
          className="text-xs md:text-sm w-full border rounded-lg border-black px-3"
        //   placeholder={`Say Something to ${selectedNFT.name ? selectedNFT.name : "This NPC"}...`}
        //   onKeyDown={handleKeyDown}
        />
      {/* )} */}

      <span className="h-[4rem] rounded-xl bg-black">
        <button
          className="btn btn-primary disabled:bg-gray-300 rounded-xl font-rubik-mono-1 text-[1rem] border-2 w-[4rem] h-[2.2rem] md:text-[1.3rem] md:w-[10rem] md:h-[3.2rem] text-black border-black "
          onClick={() => {
            // setIsSendingMessage(true);
            // sendMessage(messagePrompt);
            // setMessagePrompt("");
          }}
          type="button"
        //   disabled={isSendingMessage}
        >
          <PaperPlane className="w- h-8" />
        </button>
      </span>
    </div>
  );
};

export default ChatInput;
