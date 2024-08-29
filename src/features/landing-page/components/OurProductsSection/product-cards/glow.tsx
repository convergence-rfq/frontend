import styled from "@emotion/styled";

export const createGlowLdotFunVault = (
  colorA: string,
  colorB: string
) => styled.div`
  clip-path: url(#lDotFunPathRelative);

  background: linear-gradient(
    70deg,
    ${colorA} 10%,
    ${colorB} 40%,
    ${colorB} 60%,
    ${colorA} 90%
  );

  background-size: 200% auto;
  animation: scrollshine 1.5s linear infinite reverse;
  animation-timing-function: steps(60);
  @keyframes scrollshine {
    to {
      background-position: 200% center;
    }
  }
`;
