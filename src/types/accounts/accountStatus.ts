export type AccountStepStatus = 'completed' | 'current';

export interface AccountStep {
  id: number;
  label: string;
  status: AccountStepStatus;
}

export interface ComplianceItem {
  id: number;
  label: string;
  isValid: boolean;
}

export interface AccountStatus {
  steps: AccountStep[];
  compliance: ComplianceItem[];
}