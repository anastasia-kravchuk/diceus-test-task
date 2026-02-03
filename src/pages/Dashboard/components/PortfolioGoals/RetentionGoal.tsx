import type { GaugeGoal } from '../../../../types/dashboard/portfolioGoal';

export const RetentionGoal = ({ goal }: { goal: GaugeGoal }) => {
  const [min, max] = goal.targetRange ?? [];

  return (
    <div className="portfolio-goal portfolio-goal--retention">
      <div className="portfolio-goal__header">
        <span className="portfolio-goal__label">{goal.label}</span>
        <div className="portfolio-goal__gauge-wrapper">
          <div className="portfolio-goal__target-wrapper portfolio-goal__target-wrapper--retation">
            <span className="portfolio-goal__target">
              TG:{min}-{max}%
            </span>
          </div>
        </div>

        <div className="portfolio-goal__gauge portfolio-goal__gauge--retention">
          <div
            className="portfolio-goal__gauge-indicator portfolio-goal__gauge-indicator--retation"
            style={{ left: `${goal.current}%` }}
          >
            {goal.current}%
          </div>
        </div>

        <div className="portfolio-goal__status-wrapper portfolio-goal__status-wrapper--retation">
          <div className="portfolio-goal__status-triangle"></div>
          <div className="portfolio-goal__status portfolio-goal__status--on-target">
            On target
          </div>
        </div>
      </div>
    </div>
  );
};
