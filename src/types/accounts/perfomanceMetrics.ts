export interface WinnabilitySummary {
  score: number;
  label: string;
  actionLabel: string;
  actionUrl: string;
}
export interface LossRatioMetric {
  current: number;
  target: number;
  actionLabel: string;
  actionUrl: string;
}

export interface PremiumGrowthMetric {
  percentage: number;
  label: string;
  currentValue: number;
  targetValue: number;
  actionLabel: string;
  actionUrl: string;
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