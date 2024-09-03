export type InvestmentStyle = "conservative" | "moderate" | "aggressive";

type InvestmentStyleType = {
  id: number;
  label: string;
  returns: number;
};

export const INVESTMENT_STYLES: Record<InvestmentStyle, InvestmentStyleType> = {
  conservative: {
    id: 1,
    label: "Conservative",
    returns: 15,
  },
  moderate: {
    id: 2,
    label: "Moderate",
    returns: 20,
  },
  aggressive: {
    id: 3,
    label: "Aggressive",
    returns: 60,
  },
};
