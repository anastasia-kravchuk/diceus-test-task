export interface WinnabilitySummary {
  score: number;
  label: string;
}

export interface LossRatioMetric {
  current: number;
  target: number;
}

export interface PremiumGrowthMetric {
  percentage: number;
  label: string;
  currentValue: number;
  targetValue: number;
}

export interface ExposureItem {
  label: string;
  value: number;
}

export interface PerformanceMetrics {
  winnability: WinnabilitySummary;
  lossRatio: LossRatioMetric;
  premiumGrowth: PremiumGrowthMetric;
  exposureDistribution: ExposureItem[];
}