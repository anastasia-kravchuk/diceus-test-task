import { CircleAlert } from 'lucide-react';
import type { NeedsAttention as NeedsAttentionType } from '../../../../types/accounts/needsAttention';
import './NeedsAttention.scss';
import { AttentionItem } from './AttentionItem';

interface NeedsAttentionProps {
  data: NeedsAttentionType[];
}

export const NeedsAttention = ({ data }: NeedsAttentionProps) => {
  return (
    <section className="attention">
      <div className="attention__label-wrapper">
        <CircleAlert className="attention__icon" />
        <h3 className="attention__label">Needs Attention</h3>
      </div>

      <div className="attention__content">
        {data.map((item) => (
          <AttentionItem
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};
