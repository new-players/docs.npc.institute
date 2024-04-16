import SparkLightning from "~~/public/svgs/SparkLightning";
// import { useBoundStore } from "~~/store/store";

const SparkBalance = () => {
//   const sparkPoints = useBoundStore(state => state.sparkPoints);

  return (
    <div className="flex items-center font-rubik">
      <span className="text-black font-semibold text-sm md:text-base">50</span>
      <span className="relative ">
        <SparkLightning className="w-[1.5rem] h-[1.5rem]" />
      </span>
    </div>
  );
};

export default SparkBalance;
