import { Link } from 'react-router-dom';
import type { NeedsAttention } from '../../../../types/accounts/needsAttention';
import { MoveRight } from 'lucide-react';

interface AttentionItemProps {
  item: NeedsAttention;
}

export const AttentionItem = ({ item }: AttentionItemProps) => {
  return (
    <div className="attention-item">
      <p className="attention-item__label">{item.label}</p>
      <p className="attention-item__status">{item.status}</p>
      <div className="attention-item__link">
        
      </div>
      <Link 
        to={item.actionUrl}
        className='attention-item__link'
      >
          {item.actionLabel}
          <MoveRight className='attention-item__arrow'/>
      </Link>
    </div>
  );
};
