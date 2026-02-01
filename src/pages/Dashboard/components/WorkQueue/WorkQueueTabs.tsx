import type { WorkQueueTab } from "../../../../types/dashboard/workQueue";

interface WorkQueueTabsProps {
  tabs: WorkQueueTab[];
}

export const WorkQueueTabs = ({ tabs }: WorkQueueTabsProps) => {
  return (
    <div className="work-queue-tabs">
      {tabs.map((tab, index )=> (
        <button
          key={tab.id}
          className={`work-queue-tab work-queue-tab--${index}`}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
};