import { css } from "@emotion/react";
import { useTheme } from "@mui/material";
import { AppButton } from "common/components/Button";
import { useAppWalletModal } from "features/wallet";

export const ConnectButton = () => {
  const { connect } = useAppWalletModal();
  const theme = useTheme();

  return (
    <AppButton
      css={css`
        width: 140px;
        color: black;
      `}
      color={theme.palette.green[500]}
      onClick={connect}
    >
      Connect wallet
    </AppButton>
  );
};
