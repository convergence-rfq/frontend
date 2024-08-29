import { BlueA, BlueB /*getVoltBolt*/ } from "09/glow09";
import { css, Interpolation, Theme } from "@emotion/react";
import { useAppWalletModal } from "features/wallet";
import { Typography } from "common/components/Typography";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardTitle } from "./CardTitle";
import { DesktopCardInner } from "./DesktopCardInner";
import { createGlowLdotFunVault } from "./glow";

export const ConnectWalletCard = (props: { css?: Interpolation<Theme> }) => {
  const LDotFunVault = createGlowLdotFunVault(BlueA, BlueB);
  const { setVisible } = useAppWalletModal();

  return (
    <DesktopCardInner
      css={(theme) => css`
        background: ${theme.palette.ldotfun.radial};
        border: none !important;
      `}
      {...props}
    >
      <CardHeader
        css={css`
          margin-bottom: 24px;
        `}
      >
        <LDotFunVault
          css={css`
            width: 24px;
            height: 24px;
          `}
        />
        <Typography
          variant="bodyM"
          css={css`
            color: #000;
          `}
        >
          Your Portfolio
        </Typography>
      </CardHeader>
      <CardTitle
        css={css`
          margin-bottom: 16px;
          color: #000;
        `}
      >
        It's your turn
      </CardTitle>
      <Typography
        variant="bodyXl"
        css={css`
          flex: 1 1 auto;
          color: #000;
        `}
      >
        Connect your wallet now to start building your portfolio with{" "}
        <span
          css={css`
            font-weight: 700;
          `}
        >
          leverage.fun
        </span>
      </Typography>
      <CardFooter
        onClick={() => {
          setVisible(true);
        }}
        css={css`
          color: #000;
        `}
      >
        Connect Wallet
        <div
          css={(theme) => css`
            clip-path: url(#chevronRightPathRelative);
            width: 6px;
            height: 12px;
            background-color: ${theme.palette.blue[500]};
          `}
        />
      </CardFooter>
    </DesktopCardInner>
  );
};
