import type { WorkQueue as WorkQueueType} from "../../../../types/dashboard/workQueue";
import { WorkQueueTable } from "./WorkQueueTable";
import { WorkQueueTabs } from "./WorkQueueTabs";
import './WorkQueue.scss';

interface WorkQueueProps {
  data: WorkQueueType;
}

export const WorkQueue = ({ data }: WorkQueueProps) => {
  return (
    <section
      className="work-queue"
    >
      <header className="work-queue__header">
        <h2 className="work-queue__title">Work Queue</h2>
        <WorkQueueTabs tabs={data.tabs} />
      </header>

      <WorkQueueTable items={data.items} />
    </section>
  );
};
