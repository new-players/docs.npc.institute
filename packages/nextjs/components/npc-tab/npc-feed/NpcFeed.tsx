// import { useBoundStore } from "~~/store/store";

const NpcFeed = () => {
//   const selectedNFT = useBoundStore(state => state.selectedNFT);
//   const isNPCOnAQuest = useBoundStore(state => state.isNPCOnAQuest);

  return (
    <div className="w-full font-rubik flex flex-col max-h-[10rem] overflow-y-auto">
      {/* {selectedNFT && !isNPCOnAQuest && (
                <p className="text-xs md:text-base text-center text-gray-500">
                    {selectedNFT.name} has not embarked on a quest.
                </p>
            )} */}
      <p className="text-xs md:text-base text-center text-gray-500">Coming Soon...</p>
    </div>
  );
};

export default NpcFeed;
