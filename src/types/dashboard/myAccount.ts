export type WinnabilityLabel =
  | 'Very Strong'
  | 'Strong'
  | 'Medium';

export interface Winnability {
  score: number;
  label: WinnabilityLabel;
}

export type AccountAppetite = 'High' | 'Medium' | 'Cautious';
export type AccountStatus = 'Active' | 'Under review';

export interface Account {
  id: number;
  name: string;
  segment: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: string;
  ratedPremium: string;
  lossRatio: string;
  appetite: AccountAppetite;
  status: AccountStatus;
  triageScore: number;
  winnability: Winnability;
}