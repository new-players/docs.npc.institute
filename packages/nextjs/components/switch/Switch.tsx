interface Props {
  checked?: boolean;
  onChange: () => void;
  firstOptionLabel: string;
  secondOptionLabel: string;
  disabled: boolean;
}

const Switch = ({ checked = true, onChange, firstOptionLabel, secondOptionLabel, disabled }: Props) => {
  return (
    <section
      className={`bg-black h-[3.5rem] rounded-md ${disabled ? "cursor-default" : "cursor-pointer"}`}
      onClick={() => {
        if (disabled) return;
        if (!disabled) {
          onChange();
        }
      }}
    >
      <div
        className={`relative flex w-[4.5rem] h-[3rem] border border-black rounded-md ${
          checked ? `justify-end ${disabled ? "bg-gray-100" : "bg-[#ffe8bc]"}` : "justify-start"
        } ${disabled ? "bg-gray-100" : "bg-[#FFA700] "}`}
      >
        <div className={`absolute w-full h-full flex ${checked ? "justify-start" : "justify-end"}`}>
          <section
            className={`flex items-center justify-center w-1/2 h-full text-[0.7rem] md:text-base font-rubik-mono-1 ${
              checked ? "hidden" : ""
            } ${disabled ? "text-gray-400" : "text-black"}`}
          >
            {firstOptionLabel}
          </section>
          <section
            className={`flex items-center justify-center w-1/2 h-full text-[0.7rem] md:text-base font-rubik-mono-1  ${
              !checked ? "hidden" : ""
            } ${disabled ? "text-gray-400" : "text-black"} `}
          >
            {secondOptionLabel}
          </section>
        </div>
        <span
          className={`h-[3rem] w-[2rem]  border-[2px] border-black rounded-md ${
            disabled ? "bg-gray-100 border-gray-300" : "bg-[#FFA700]"
          }`}
        ></span>
      </div>
    </section>
  );
};

export default Switch;
``;
