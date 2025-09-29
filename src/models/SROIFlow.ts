export interface SroiFlow {
  general: General;
  intervention: Intervention;
  targetGroup: TargetGroup;
  stakeholder: Stakeholder;
  fundingSource: FundingSource;
  outcomes: Outcomes;
  method: Method;
  confirmation: Confirmation;
}
export interface General {
  isForcast: boolean;
  reportName: string;
  executiveSummary: string;
  reportLanguage: string;
  currency: string;
  logo: string;
}

export interface Intervention {
  interventionName: string;
  interventionDescription: string;
  purpose: string;
  activities: string[];
  participants: number;
  businessCaseLength: number;
}

export interface TargetGroup {
  category: string;
  customCategory: string;
  ageGroupMin: number;
  ageGroupMax: number;
  targetGroupDescription: string;
  riskFactors: string;
}

export interface Stakeholder {
  stakeholders: Stakeholders[];
}
export interface Stakeholders {
  stakeholderName: string;
  stakeholderAmount: number;
  changes: string[];
}

export interface FundingSource {
  totalCosts: number;
  fundings: Funding[];
}

export interface Funding {
  fundingName: string;
  proportion: number;
}

export interface Outcomes {
  outcomes: Outcome[];
}

export interface Outcome {
  outcomeName: string;
  outcomeDescription: string;
  measurementMethod: string;
  outcomeStart: string;
  outcomeDuration: number;
  outcomePopulation: number;
  effectType: string;
  effectSize: number;
  answerRate: number;
  startYears: number;
  yearsCollected: number;
  significance: string;
  source: string;
  comments: string;
  skipAlternative: boolean;
  alternative: Alternative;
  skipSensitivityAnalysis: boolean;
  sensitivityAnalysis: SensitivityAnalysis;
  beneficiaries: Beneficiaries[];
}

export interface Alternative {
  amount: number;
  source: string;
  comment: string;
}

export interface SensitivityAnalysis {
  deadweight: number;
  displacement: number;
  attribution: number;
  dropoff: number;
}

export interface Beneficiaries {
  name: string;
  valueType: string;
  value: number;
  source: string;
  comments: string;
}

export interface Method {
  description: string;
}

export interface Confirmation {
  isSavedTemplate: boolean;
  templateName: string | null;
}
