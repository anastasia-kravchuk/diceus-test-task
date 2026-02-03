import { useFetch } from '../../hooks/useFetch';
import type { DashboardData } from '../../types/dashboard/dashdoard';
import { MarketIntelligence } from './components/MarketIntelligence/MarketIntelligence';
import { MyAccounts } from './components/MyAccounts/MyAccounts';
import { PortfolioGoals } from './components/PortfolioGoals/PortfolioGoals';
import { QuickActions } from './components/QuickActions/QuickActions';
import { WorkQueue } from './components/WorkQueue/WorkQueue';
import './Dashboard.scss';

export const Dashboard = () => {
  const data = useFetch<DashboardData>('/dashboard.json');
  if (!data) return null;

  return (
    <section className="dashboard">
      <div className="dashboard__grid">
        <div className="dashboard__work-queue">
          <WorkQueue data={data.workQueue} />
        </div>

        <div className="dashboard__portfolio">
          <PortfolioGoals data={data.portfolioGoals} />
        </div>

        <div className="dashboard__right-side">
          <div className="dashboard__quick">
            <QuickActions data={data.quickActions} />
          </div>

          <div className="dashboard__market">
            <MarketIntelligence data={data.marketIntelligence} />
          </div>
        </div>
      </div>

      <MyAccounts data={data.myAccounts} />
    </section>
  );
};
