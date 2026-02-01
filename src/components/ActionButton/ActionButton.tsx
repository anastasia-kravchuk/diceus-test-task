import { EllipsisVertical } from 'lucide-react';
import './ActionButton.scss';

interface RowActionsButtonProps {
  onClick?: () => void;
}

export const ActionButton = ({ onClick }: RowActionsButtonProps) => {
  return (
    <button
      type="button"
      className="row-actions"
      aria-label="Open row actions"
      onClick={onClick}
    >
      <EllipsisVertical size={16}/>
    </button>
  );
};
