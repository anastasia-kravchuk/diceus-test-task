import type { Account } from '../../../../types/dashboard/myAccount';
import { AccountsFilters } from './AccountsFilters';
import { AccountsTable } from './AccountsTable';
import './MyAccounts.scss';

interface MyAccountsProps {
  data: Account[];
}

export const MyAccounts = ({ data }: MyAccountsProps) => {
  return (
    <section className="accounts">
      <header className="accounts__header">
        <h2 className="accounts__title">My accounts</h2>
        <AccountsFilters />
      </header>
      <div className="table-wrapper">
        <AccountsTable items={data} />
      </div>
    </section>
  );
};
