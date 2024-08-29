import { css } from "@emotion/react";
import { Typography } from "common/components/Typography";
import { Link } from "react-router-dom";
import { DescriptionText } from "../DescriptionText";
import { LDotFunGradientText } from "../LDotFunGradientText";
import { AppButton } from "common/components/Button";
import { useTheme } from "@mui/material";

export const RiskSectionText = () => {
  const theme = useTheme();
  return (
    <div>
      <Typography
        variant="h3"
        css={css`
          font-weight: 600;
          margin: auto;
          margin-bottom: 16px;
          max-width: 590px;
        `}
      >
        Capture <LDotFunGradientText>edge</LDotFunGradientText>, fully automated
      </Typography>
      <DescriptionText
        variant="bodyM"
        css={css`
          margin: auto;
          margin-bottom: 32px;
          max-width: 540px;
        `}
      >
        leverage.fun is the first DeFi platform built with risk management as
        our main focus. Don't be scared by volatile markets - monetize them.
      </DescriptionText>
      <Link to={"/analytics"}>
        <AppButton
          color={theme.palette.ldotfun.radial}
          variant="outlined"
          disabled
        >
          Explore Analytics
        </AppButton>
      </Link>
    </div>
  );
};
