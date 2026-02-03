import type { ProgressGoal as ProgressGoalType } from '../../../../types/dashboard/portfolioGoal';
import { formatMoney } from '../../../../utils/formatMoney';

export const ProgressGoal = ({ goal }: { goal: ProgressGoalType }) => {
  const percent = Math.round((goal.current / goal.target) * 100);

  return (
    <div
      className={`portfolio-goal portfolio-goal--progress portfolio-goal--${goal.id}`}
    >
      <span className="portfolio-goal__label">{goal.label}</span>

      <div className="portfolio-goal__progress-wrapper">
        <div className="portfolio-goal__progress">
          <div
            className="portfolio-goal__progress-fill"
            style={{ width: `${percent}%` }}
          >
            <p className='portfolio-goal__current'>{formatMoney(goal.current)}</p>
          </div>
        </div>
        <span className="portfolio-goal__progress-target">
          {formatMoney(goal.target)}
        </span>
      </div>

      <div className="portfolio-goal__percentage">{percent}%</div>
    </div>
  );
};
