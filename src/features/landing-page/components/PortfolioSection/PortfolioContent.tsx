import { css, Interpolation, Theme } from "@emotion/react";
import { Typography } from "common/components/Typography";
import { LDotFunGradientText } from "../LDotFunGradientText";
import { InvestmentStyle } from "./InvestmentStyle";
import { InvestmentStyleBreakdown } from "./InvestmentStyleBreakdown";
import { PortfolioTabs } from "./PortfolioTabs";
import React from "react";

interface PortfolioContentProps {
  investmentStyle: InvestmentStyle;
  setInvestmentStyle: React.Dispatch<React.SetStateAction<InvestmentStyle>>;
  css?: Interpolation<Theme>;
  className?: string;
}
export const PortfolioContent = ({
  investmentStyle,
  setInvestmentStyle,
  ...rest
}: PortfolioContentProps) => {
  return (
    <div {...rest}>
      <Typography
        variant="h3"
        css={css`
          font-weight: 600;
          margin-bottom: 40px;
        `}
      >
        Customized strategies to fit your{" "}
        <LDotFunGradientText>investment style</LDotFunGradientText>
      </Typography>
      <PortfolioTabs
        value={investmentStyle}
        onChange={(value) => {
          setInvestmentStyle(value);
        }}
      />
      <InvestmentStyleBreakdown
        css={css`
          margin-top: 25px;
        `}
        investmentStyle={investmentStyle}
      />
    </div>
  );
};
