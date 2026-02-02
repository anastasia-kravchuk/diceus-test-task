import type { Account } from '../../../../types/dashboard/myAccount';
import { AccountsRow } from './AccountsRow';

interface AccountsTableProps {
  items: Account[];
}

export const AccountsTable = ({ items }: AccountsTableProps) => {
  return (
    <table className="accounts-table">
      <thead>
        <tr>
          <th>Account name/type</th>
          <th>Line</th>
          <th>Broker</th>
          <th>Renewal date</th>
          <th>Premium</th>
          <th>Rated premium</th>
          <th>Loss ratio</th>
          <th>Appetite</th>
          <th>Status</th>
          <th>Triage</th>
          <th>Winnability</th>
          <th />
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <AccountsRow
            key={item.id}
            item={item}
          />
        ))}
      </tbody>
    </table>
  );
};
