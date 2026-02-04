export type TrendStatus = 'neutral' | 'negative' | null;
export type LossRatioStatus = 'good' | 'warning' | 'critical' | null;

export interface RateChange {
  value: number | null;
  trend: TrendStatus;
}

export interface LossRatioDetail {
  value: number | null;
  status: LossRatioStatus;
}

export interface PolicyDetailItem {
  id: number;
  line: string;
  policyNo: string;
  effDate: string;
  expDate: string;
  status: string;
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renewalPremium: number;
  rateChange: RateChange;
  lossRatio: LossRatioDetail;
}

export interface PolicyTotals {
  label: string;
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renewalPremium: number;
  avgRateChange: RateChange;
  totalLossRatio: LossRatioDetail;
}

export interface PoliciesDetail {
  items: PolicyDetailItem[];
  totals: PolicyTotals;
}