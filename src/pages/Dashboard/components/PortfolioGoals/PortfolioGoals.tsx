import type { PortfolioGoal } from '../../../../types/dashboard/portfolioGoal';
import { LossRatioGoal } from './LossRatioGoal';
import './PortfolioGoals.scss';
import { ProgressGoal } from './ProgressGoal';
import { RetentionGoal } from './RetentionGoal';

interface PortfolioGoalsProps {
  data: PortfolioGoal[];
}

export const PortfolioGoals = ({ data }: PortfolioGoalsProps) => {
  const lossRatio = data.find((g) => g.id === 'lossRatio');
  const retention = data.find((g) => g.id === 'retention');
  const progressGoals = data.filter((g) => g.type === 'progress');

  return (
    <section className="portfolio-goals">
      <h2 className="portfolio-goals__title">Portfolio goals</h2>

      <div className="portfolio-goals__list">
        {lossRatio && lossRatio.type === 'gauge' && (
          <LossRatioGoal goal={lossRatio} />
        )}

        {retention && retention.type === 'gauge' && (
          <RetentionGoal goal={retention} />
        )}

        {progressGoals.map((goal) => (
          <ProgressGoal key={goal.id} goal={goal} />
        ))}
      </div>
    </section>
  );
};