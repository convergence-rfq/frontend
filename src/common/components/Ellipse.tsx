import styled from "@emotion/styled";

export const Ellipse = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => `linear-gradient(
  90.31deg,
  rgba(46, 73, 0, ${theme.palette.mode === "dark" ? "0.2" : "0.13"}) -2.65%,
  rgba(163, 255, 0, ${theme.palette.mode === "dark" ? "0.2" : "0.13"}) 98.9%,
  rgba(0, 255, 154, ${theme.palette.mode === "dark" ? "0.2" : "0.13"}) 100%
)`};
`;
