import type { MarketIntelligenceItem } from "./marketIntelligence";
import type { Account } from "./myAccount";
import type { PortfolioGoal } from "./portfolioGoal";
import type { QuickAction } from "./quickAction";
import type { WorkQueue } from "./workQueue";

export interface DashboardData {
  workQueue: WorkQueue;
  portfolioGoals: PortfolioGoal[];
  quickActions: QuickAction[];
  marketIntelligence: MarketIntelligenceItem[];
  myAccounts: Account[];
}