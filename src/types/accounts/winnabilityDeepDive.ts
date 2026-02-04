export interface WinnabilityPositioning {
  yourScore: number;
  marketAvg: number;
  topCompetitor: number;
}

export interface WinnabilityPositioning {
  yourScore: number;
  marketAvg: number;
  topCompetitor: number;
}

export interface WinnabilityFactor {
  label: string;
  value: number;
  rank: number;
}

export interface WinnabilityFactors {
  increasing: WinnabilityFactor[];
  decreasing: WinnabilityFactor[];
}

export interface AIRecommendation {
  id: number;
  title: string;
  description: string;
}

export interface WinnabilityDeepDive {
  overallScore: number;
  historicalTrend: number[];
  positioning: WinnabilityPositioning;
  factors: WinnabilityFactors;
  aiRecommendations: AIRecommendation[];
}