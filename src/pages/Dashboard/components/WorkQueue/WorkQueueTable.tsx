import type { WorkQueueItem } from '../../../../types/dashboard/workQueue';
import { WorkQueueRow } from './WorkQueueRow';

interface WorkQueueTableProps {
  items: WorkQueueItem[];
}

export const WorkQueueTable = ({ items }: WorkQueueTableProps) => {
  return (
    <table className="work-queue-table">
      <thead>
        <tr>
          <th>Originator</th>
          <th>Client / Line</th>
          <th>Type</th>
          <th>Status</th>
          <th>Created</th>
          <th />
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <WorkQueueRow
            key={item.id}
            item={item}
          />
        ))}
      </tbody>
    </table>
  );
};
