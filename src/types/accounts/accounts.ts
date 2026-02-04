import type { AccountStatus } from "../dashboard/myAccount";
import type { AccountDetails } from "./accountDetails";
import type { CommunicationItem } from "./communication";
import type { NeedsAttention } from "./needsAttention";
import type { PerformanceMetrics } from "./perfomanceMetrics";
import type { Policy } from "./policies";
import type { PoliciesDetail } from "./policiesDetail";
import type { WinnabilityDeepDive } from "./winnabilityDeepDive";

export interface AccountsData {
  accountDetails: AccountDetails;
  needsAttention: NeedsAttention[];
  performanceMetrics: PerformanceMetrics;
  policies: Policy[];
  accountStatus: AccountStatus;
  winnabilityDeepDive: WinnabilityDeepDive;
  communication: CommunicationItem[];
  policiesDetail: PoliciesDetail; 
}