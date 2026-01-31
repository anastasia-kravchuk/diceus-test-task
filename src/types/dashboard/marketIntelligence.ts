export type MarketSeverity = 'High' | 'Medium' | 'Low';

export interface MarketIntelligenceItem {
  id: number;
  severity: MarketSeverity;
  text: string;
}