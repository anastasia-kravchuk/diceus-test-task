interface BasePortfolioGoal {
  id: string;
  label: string;
  unit: '%' | 'USD';
}

export type PortfolioGoalStatus =
  | 'Good'
  | 'On target';

export interface GaugeGoal extends BasePortfolioGoal {
  type: 'gauge';
  current: number;
  target?: number;
  targetRange?: [number, number];
  delta?: number;
  status: PortfolioGoalStatus;
}
export interface ProgressGoal extends BasePortfolioGoal {
  type: 'progress';
  current: number;
  target: number;
}

export type PortfolioGoal = GaugeGoal | ProgressGoal;