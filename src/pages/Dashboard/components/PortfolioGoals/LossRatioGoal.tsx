import type { GaugeGoal } from '../../../../types/dashboard/portfolioGoal';

export const LossRatioGoal = ({ goal }: { goal: GaugeGoal }) => {
  return (
    <div className="portfolio-goal portfolio-goal--loss-ratio">
      <span className="portfolio-goal__label">{goal.label}</span>

      <div className="portfolio-goal__gauge-wrapper">
        <div className="portfolio-goal__target-wrapper">
          <span className="portfolio-goal__target portfolio-goal__target--loss-ratio">
            TG:{goal.target}%
          </span>
          <span className="portfolio-goal__target-triangle"></span>
        </div>

        <div className="portfolio-goal__gauge portfolio-goal__gauge--loss-ratio">
          <div
            className="portfolio-goal__gauge-indicator portfolio-goal__gauge-indicator--loss-ratio"
            style={{ left: `${goal.current}%` }}
          >
            {goal.current}%
          </div>
        </div>

        {goal.delta !== undefined && (
          <div className="portfolio-goal__status-wrapper">
            <div className="portfolio-goal__status-triangle"></div>
            <div className="portfolio-goal__status portfolio-goal__status--good">
              {goal.delta}% (GOOD)
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
