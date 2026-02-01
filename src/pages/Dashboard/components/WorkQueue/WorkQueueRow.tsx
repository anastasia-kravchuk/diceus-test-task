import { ActionButton } from '../../../../components/ActionButton/ActionButton';
import { Avatar } from '../../../../components/Avatar/Avatar';
import type { WorkQueueItem } from '../../../../types/dashboard/workQueue';
import { formatDate } from '../../../../utils/formatDate';

interface WorkQueueRowProps {
  item: WorkQueueItem;
}

export const WorkQueueRow = ({ item }: WorkQueueRowProps) => {
  return (
    <tr className="work-queue-row">
      <td>
        <div className="originator">
          <Avatar
            text={item.originator.initials}
            width="35px"
            height="35px"
            fontSize="14px"
            fontWeight="200"
          />
          {item.originator.name}
        </div>
      </td>

      <td>
        <div className="work-queue-row__client-line">
          <div>{item.client}</div>
          <small className="work-queue-row__line">{item.line}</small>
        </div>
      </td>

      <td>{item.type}</td>

      <td>
        <span
          className={`status status--${item.status.replace(' ', '-').toLowerCase()}`}
        >
          {item.status}
        </span>
      </td>

      <td>{formatDate(item.createdAt)}</td>

      <td className="actions">
        <ActionButton />
      </td>
    </tr>
  );
};
