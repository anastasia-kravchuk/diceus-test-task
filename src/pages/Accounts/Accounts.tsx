import { useFetch } from '../../hooks/useFetch';
import type { AccountsData } from '../../types/accounts/accounts';
import { AccountDetails } from './components/AccountsDetails/AccountsDetails';

export const Accounts = () => {
  const data = useFetch<AccountsData>('/accounts.json');
  if (!data) return null;
  return (
    <AccountDetails data={data.accountDetails}/>
  );
};
