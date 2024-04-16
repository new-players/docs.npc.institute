import { useBoundStore } from "~~/store/store";

const FeedInteraction = () => {
  const isNPCOnAQuest = useBoundStore(state => state.isNPCOnAQuest);

  return (
    <section className="flex justify-center">
      {!isNPCOnAQuest && (
        <span className="h-[4rem] rounded-xl bg-black">
          <button
            className="btn btn-primary rounded-xl font-rubik-mono-1 text-[1rem] border-2 w-[8rem] h-[2.2rem] md:text-[1.3rem] md:w-[10rem] md:h-[3.2rem] text-black border-black "
            onClick={() => {}}
            type="button"
          >
            Deploy
          </button>
        </span>
      )}
    </section>
  );
};

export default FeedInteraction;
