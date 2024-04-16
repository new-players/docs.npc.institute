export interface Tab {
  index: number;
  label: string;
}

interface Props {
  tabs: Array<Tab>;
  activeTab: Tab;
  handleChangeActiveTab: (tab: Tab) => void;
  children: React.ReactNode;
}

const LineTab = ({ tabs, activeTab, handleChangeActiveTab, children }: Props) => {
  const applyStyle = (tab: Tab): string => {
    const tabCount = tabs.length;
    if (tabCount === 1) {
      if (tab.index === 1 && activeTab.index === 1) {
        return "border-black border-l-[1px] border-t-[1px] border-r-[1px] rounded-t-xl";
      }
    }

    if (tabCount === 2) {
      if ((tab.index === 1 && activeTab.index === 1) || (tab.index === 2 && activeTab.index === 2)) {
        return "border-black border-l-[1px] border-t-[1px] border-r-[1px] rounded-t-xl";
      }
      if ((tab.index === 2 && activeTab.index === 1) || (tab.index === 1 && activeTab.index === 2)) {
        return "border-black border-b-[1px]";
      }
    }
    if (tabCount === 3) {
      if (
        (tab.index === 1 && activeTab.index === 1) ||
        (tab.index === 2 && activeTab.index === 2) ||
        (tab.index === 3 && activeTab.index === 3)
      ) {
        return "border-black border-l-[1px] border-t-[1px] border-r-[1px] rounded-t-xl";
      }
      if (
        (tab.index === 2 && activeTab.index === 1) ||
        (tab.index === 1 && activeTab.index === 2) ||
        (tab.index === 3 && activeTab.index === 1) ||
        (tab.index === 1 && activeTab.index === 3) ||
        (tab.index === 3 && activeTab.index === 2) ||
        (tab.index === 2 && activeTab.index === 3)
      ) {
        return "border-black border-b-[1px]";
      }
    }

    return "";
  };

  return (
    <section className="w-full flex flex-col">
      <div className="w-full flex">
        {tabs.map((tab, index) => (
          <section
            className={`w-full text-sm text-center py-2 font-rubik cursor-pointer ${applyStyle(tab)}`}
            onClick={() => {
              handleChangeActiveTab(tab);
            }}
            key={`tab-${index}`}
          >
            {tab.label}
          </section>
        ))}
        {tabs.length === 1 && <div className="w-full border-black border-b-[1px]"></div>}
      </div>
      <div className="min-h-[5rem] border-black border-b-[1px] border-x-[1px] rounded-b-xl p-2 md:p-4">{children}</div>
    </section>
  );
};

export default LineTab;
