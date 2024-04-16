import { ChatMessageItem } from "~~/hooks/useChatHistory";

interface Props {
  chatMessage: ChatMessageItem;
}

const ChatMessage = ({ chatMessage }: Props) => {
  const date = new Date(chatMessage.createdAt);
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <div
      className={`w-full flex gap-3 font-rubik p-2 border-1 rounded-lg ${
        chatMessage.role === "user" ? "bg-[#f5f5f5]" : "bg-[#fff6e8]"
      } mb-1`}
    >
      <span className={`text-xs font-semibold ${chatMessage.role === "user" ? "text-[#000000]" : "text-[#ffb024]"}`}>
        {chatMessage.role === "assistant" ? "NPC:" : "You:"}
      </span>
      <span className="text-xs w-full overflow-x-auto break-all md:break-normal text-left">{chatMessage.message}</span>
    </div>
  );
};

export default ChatMessage;
