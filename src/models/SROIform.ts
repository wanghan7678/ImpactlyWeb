export interface SroiFormValues {
  id: string;
  parentId: string;
  reportName: string;
  currency: string;
  executiveSummary: string;
  logo: string;
  intervention: Intervention;
  outcomes: Outcome[];
}

export interface Intervention {
  interventionName: string;
  cost: number;
  participants: number;
  businessCaseLength: number;
  description: string;
  purpose: string;
  activities: string[];
  targetGroup: TargetGroup;
  stakeholders: Stakeholder[];
  fundingSources: FundingSource[];
}

export interface TargetGroup {
  category: string;
  ageGroupMin: number;
  ageGroupMax: number;
  targetGroupDescription: string;
  riskFactors: string;
}

export interface Stakeholder {
  stakeholderName: string;
  stakeholderAmount: number;
  changes: string[];
}

export interface FundingSource {
  fundingSourceName: string;
  proportion: number;
}

export interface Outcome {
  outcomeName: string;
  measurementMethod: string;
  outcomeStart: string;
  outcomeDuration: number;
  outcomePopulation: number;
  effectSize: number;
  effectType: string;
  source: string;
  description: string;
  benchmark: Benchmark;
  sensitivityAnalysis: SensitivityAnalysis;
  beneficiaries: Beneficiary[];
  answerRate: number | null;
  comments: string;
}

export interface Benchmark {
  amount: number | null;
  benchmarkValue: number | null;
  method: string;
  source: string | null;
  comments: string | null;
}

export interface SensitivityAnalysis {
  deadweight: number | null;
  displacement: number | null;
  attribution: number | null;
  dropOff: number | null;
  comments: string;
}

export interface Beneficiary {
  name: string;
  type: string;
  valueUnit: number;
  source: string;
  comments: string;
}
