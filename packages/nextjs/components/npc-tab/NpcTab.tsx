import { useState } from "react";
import Chat from "./chat/Chat";
import ChatInput from "./chat/action/chat-input/ChatInput";
import Logging from "./history/action/Logging";
import NpcFeed from "./npc-feed/NpcFeed";
import LineTab, { Tab } from "~~/components/line-tab/LineTab";

const tabs = [
  {
    index: 1,
    label: "Chat",
  },
  {
    index: 2,
    label: "NPC Feed",
  },
  // {
  //     index: 3,
  //     label: "History"
  // }
];

export default function NpcTab() {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  return (
    <section className="flex flex-col gap-4 w-full">
      <LineTab
        activeTab={activeTab}
        tabs={tabs}
        handleChangeActiveTab={tab => {
          setActiveTab(tab);
        }}
      >
        {activeTab.label === "Chat" && <Chat />}
        {activeTab.label === "NPC Feed" && <NpcFeed />}
        {/* {activeTab.label === "History" && <History />} */}
      </LineTab>
      {/* Action */}
      {/* {activeTab.label === "Chat" &&  */} <ChatInput /> {/* } */}
      {/* {activeTab.label === "NPC Feed" && <FeedInteraction />} */}
      {activeTab.label === "History" && <Logging />}
    </section>
  );
}
