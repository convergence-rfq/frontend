import { useQuery } from "react-query";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { LayoutContainer } from "common/components/LayoutContainer";
import React from "react";
import hsol from "./assets/hSol.webp";
import jitoSol from "./assets/jitoSol.webp";
import msol from "./assets/mSol.webp";
import sol from "./assets/sol.webp";
import { Typography } from "common/components/Typography";

export const InfiniteTickerSlider: React.FC = () => {
  const { data, error, isLoading } = useTickerPrices();
  const TICKERS = ["SOL/USD", "MSOL/USD", "JSOL/USD", "HSOL/USD"];
  const TICKER_IMAGES = [sol, msol, jitoSol, hsol];
  return (
    <div
      css={(theme) => css`
        border: 1px solid rgba(255, 255, 255, 0.025);
        background: ${theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.025)"
          : "rgba(0, 0, 0, 0.025)"};
      `}
    >
      <LayoutContainer fixed>
        <InfiniteTickerSliderLayout
          css={css`
            --height: 40px;
          `}
        >
          <TickerList
            css={css`
              --width: 200px;
              --quantity: 4;
            `}
          >
            {TICKERS.map((ticker, index) => (
              <TickerItem
                className="ticker-item"
                key={ticker}
                css={css`
                  --position: ${index + 1};
                `}
              >
                <TickerTypography variant="bodyS">
                  <Img src={TICKER_IMAGES[index]} />
                  {ticker} {isLoading || error ? "..." : `$${data![index]}`}
                </TickerTypography>
              </TickerItem>
            ))}
          </TickerList>
        </InfiniteTickerSliderLayout>
      </LayoutContainer>
    </div>
  );
};

const autoRun = keyframes`
  from {
    left: 100%;
  }
  to {
    left: calc(var(--width) * -1);
  }
`;

const InfiniteTickerSliderLayout = styled.div`
  display: flex;
  padding: 0px 22px;
  height: var(--height);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: var(--height);
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);

  &:hover .ticker-item {
    animation-play-state: paused !important;
    filter: grayscale(0);
  }
`;

const TickerList = styled.div`
  display: flex;
  width: 100%;
  min-width: calc(var(--width) * var(--quantity));
  position: relative;
`;

const TickerItem = styled.div`
  width: var(--width);
  height: var(--height);
  position: absolute;
  left: 100%;
  animation: ${autoRun} 20s linear infinite;
  transition: filter 0.5s;
  animation-delay: calc(
    (20s / var(--quantity)) * (var(--position) - 1) - 20s
  ) !important;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

const TickerTypography = styled(Typography)`
  color: hsl(240, 1%, 66%);
  text-align: center;
`;

async function getTickerData() {
  const ids = ["jito-staked-sol", "helius-staked-sol", "msol", "solana"];
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(
      ","
    )}&vs_currencies=usd`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch token prices");
  }

  const data = await response.json();

  return [
    data.solana.usd,
    data.msol.usd,
    data["jito-staked-sol"].usd,
    data["helius-staked-sol"].usd,
  ];
}

export const useTickerPrices = () => {
  return useQuery("tokenPrices", getTickerData, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

export default InfiniteTickerSlider;
