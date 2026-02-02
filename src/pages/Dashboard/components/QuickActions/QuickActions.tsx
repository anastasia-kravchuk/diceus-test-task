import type { QuickAction } from '../../../../types/dashboard/quickAction';
import { QuickActionButton } from './QuickActionButton';
import './QuickActions.scss';

interface QuickActionsProps {
  data: QuickAction[];
}

export const QuickActions = ({ data }: QuickActionsProps) => {
  return (
    <section className="quick-actions">
      <h2 className="quick-actions__title">Quick actions</h2>
      <div className="quick-actions__buttons">
        {data.map((item) => (
          <QuickActionButton
            button={item}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};
