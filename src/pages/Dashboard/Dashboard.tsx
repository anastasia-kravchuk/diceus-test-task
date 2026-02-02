import { useFetch } from '../../hooks/useFetch';
import type { DashboardData } from '../../types/dashboard/dashdoard';
import { MarketIntelligence } from './components/MarketIntelligence';
import { MyAccounts } from './components/MyAccounts';
import { PortfolioGoals } from './components/PortfolioGoals/PortfolioGoals';
import { QuickActions } from './components/QuickActions/QuickActions';
import { WorkQueue } from './components/WorkQueue/WorkQueue';

export const Dashboard = () => {
  const data = useFetch<DashboardData>('/dashboard.json');
  if (!data) {
    return <p>Something went wrong</p>;
  }
  
  return (
    <>
      <WorkQueue data={data.workQueue} />
      <PortfolioGoals data={data.portfolioGoals} />
      <QuickActions data={data.quickActions} />
      <MarketIntelligence data={data.marketIntelligence} />
      <MyAccounts data={data.myAccounts} />
    </>
  );
};
