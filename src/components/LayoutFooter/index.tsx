import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Switch, useTheme } from "@mui/material";
import { FunctionComponent /*SVGProps*/ } from "react";
import { LDotFun } from "features/icons";

import { Medium, Twitter, Discord } from "components/Icons";

// type ThunderProps = SVGProps<SVGSVGElement> & { thunderColor?: string };

// function Thunder(props: ThunderProps) {
//   const { thunderColor, ...svgProps } = props;

//   return (
//     <svg
//       width={30}
//       height={30}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...svgProps}
//     >
//       <path
//         d="M23.333 16.334 8.366 30l4.067-10.533 10.9-3.133Z"
//         fill={thunderColor ?? "url(#a4)"}
//       />
//       <path
//         d="M3 21 26 0l-6.267 16.2L3 21Z"
//         fill={thunderColor ?? "url(#b4)"}
//       />
//       <defs>
//         <linearGradient
//           id="a4"
//           x1={8.041}
//           y1={16.334}
//           x2={17.086}
//           y2={33.175}
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop offset={0.023} stopColor="#806FE8" />
//           <stop offset={1} stopColor="#856FE8" />
//         </linearGradient>
//         <linearGradient
//           id="b4"
//           x1={2.5}
//           y1={0}
//           x2={16.398}
//           y2={25.88}
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop offset={0.023} stopColor="#806FE8" />
//           <stop offset={1} stopColor="#856FE8" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// }

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  padding: 88px 24px 70px 24px;
  font-family: "Avenir", sans-serif;
  color: ${({ theme }) => theme.palette.grey[300]};
  background-color: ${({ theme }) => theme.palette.grey[900]};
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 980px;
`;

const FooterTopPart = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  > * + * {
    margin-top: 0;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;

    > * + * {
      margin-top: 32px;
    }
  }
`;

const FooterSocialLinks = styled.div`
  > * + * {
    margin-top: 16px;
  }

  > p {
    font-size: 16px;
  }
`;

const FooterSocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  > * + * {
    margin-left: 16px;
  }
`;

const FooterSocialLink = styled.a`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-style: solid;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 300ms ease-in-out;
  border-color: ${({ theme }) => theme.palette.green[500]};

  :hover {
    color: ${({ theme }) => theme.palette.grey[0]};
    background-color: ${({ theme }) => theme.palette.green[800]};

    > svg {
      fill: ${({ theme }) => theme.palette.grey[0]};
    }
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.palette.lavender[600]};
  }
`;

const FooterExternalLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 140px);
  grid-gap: 60px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 24px;
    display: flex;
    flex-direction: column;
  }
`;

const FooterExternalLinksContainer = styled.div`
  margin-top: 12px;

  &:nth-child(4) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  &:last-child {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    &:nth-child(4) {
      grid-column-start: auto;
      grid-column-end: auto;
      grid-row-start: auto;
      grid-row-end: auto;
    }

    &:last-child {
      grid-column-start: auto;
      grid-column-end: auto;
      grid-row-start: auto;
      grid-row-end: auto;
    }
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.grey[300]};
  }

  div {
    display: flex;
    flex-direction: column;

    :hover {
      a {
        filter: blur(1px);
      }
    }

    a {
      font-size: 16px;
      color: ${({ theme }) => theme.palette.grey[300]};

      :hover {
        filter: blur(0);
      }
    }

    > * + * {
      margin-top: 4px;
    }
  }

  > * + * {
    margin-top: 12px;
  }
`;

const FooterBottomPart = styled.div`
  margin-top: 56px;

  :hover {
    > .footer-bottom-divider {
      opacity: 0.6;
    }

    > .footer-bottom-links {
      opacity: 0.8;
    }
  }
`;

const FooterBottomDivider = styled.div`
  height: 1px;
  opacity: 0.25;
  background-color: ${({ theme }) => theme.palette.grey[0]};
  transition: all 300ms ease-in-out;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  padding: 12px 0;
  opacity: 0.6;
  transition: all 300ms ease-in-out;

  > * + * {
    margin-top: 0;
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 16px;

    > a {
      font-size: 16px;
      color: ${({ theme }) => theme.palette.grey[200]};

      :hover {
        color: ${({ theme }) => theme.palette.grey[50]};
      }
    }
  }

  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.palette.grey[200]};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;

    > * + * {
      margin-top: 16px;
    }
  }
`;

type AnimationSwitchProps = {
  isAnimationEnabled: boolean;
  setIsAnimationEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

function AnimationSwitch({
  isAnimationEnabled,
  setIsAnimationEnabled,
}: AnimationSwitchProps) {
  return (
    <div
      css={css`
        text-align: center;
        margin-top: -6px;
        font-size: 16px;
        @media print {
          display: none;
        }
      `}
    >
      <div
        css={(theme) => css`
          background: linear-gradient(
            hsl(230, 15%, 13%),
            hsl(230, 15%, 11%) 80%
          );
          color: ${theme.palette.grey[200]};
          display: inline-block;
          border-radius: 5px;
        `}
      >
        <span
          css={css`
            display: inline-block;
            text-align: right;
          `}
        >
          Animations
        </span>
        <Switch
          checked={isAnimationEnabled}
          onChange={() => {
            setIsAnimationEnabled(
              (previousIsAnimationEnabled) => !previousIsAnimationEnabled
            );
            localStorage.setItem(
              "animationsDisabled",
              isAnimationEnabled === true ? "true" : "false"
            );
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <span
          css={css`
            width: 50px;
            display: inline-block;
            text-align: left;
          `}
        >
          {isAnimationEnabled ? "on" : "off"}
        </span>
      </div>
    </div>
  );
}

type LinkItem = {
  href: string;
  label: string;
};

type Link = {
  title: string;
  items: LinkItem[];
};

type Props = {
  links: Link[];
  isAnimationEnabled: boolean;
  setIsAnimationEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LayoutFooter: FunctionComponent<Props> = ({
  links,
  isAnimationEnabled,
  setIsAnimationEnabled,
}) => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Footer>
      <FooterContainer>
        <FooterTopPart>
          <FooterSocialLinks>
            <LDotFun width="28" height="28" color={theme.palette.green[500]} />
            <p>Smarter returns on your crypto.</p>
            <FooterSocialLinksContainer>
              <FooterSocialLink
                href="https://medium.com/convergencerfq"
                target="_blank"
                rel="noreferrer"
                aria-label="Medium"
              >
                <Medium />
              </FooterSocialLink>
              <FooterSocialLink
                href="https://discord.gg/XPCHK98p33"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
              >
                <Discord />
              </FooterSocialLink>
              <FooterSocialLink
                href="https://twitter.com/convergencerfq"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter />
              </FooterSocialLink>
            </FooterSocialLinksContainer>
          </FooterSocialLinks>
          <FooterExternalLinks>
            {links.map((link) => (
              <FooterExternalLinksContainer key={link.title}>
                <h4 className="font-bold">{link.title}</h4>
                <div>
                  {link.items.map((item) => (
                    <a href={item.href} key={item.label}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </FooterExternalLinksContainer>
            ))}
          </FooterExternalLinks>
        </FooterTopPart>

        <FooterBottomPart>
          <FooterBottomDivider className="footer-bottom-divider" />
          <FooterBottomLinks className="footer-bottom-links">
            <div>
              <a
                href="https://docs.convergence.so/"
                target="_blank"
                rel="noreferrer"
              >
                About
              </a>
              <a href="https://docs.convergence.so/protocol/faq">FAQ</a>
              <a href="mailto:team@convergence.so">Contact</a>
              <AnimationSwitch
                isAnimationEnabled={isAnimationEnabled}
                setIsAnimationEnabled={setIsAnimationEnabled}
              />
            </div>
            <p>&copy; {currentYear} Convergence RFQ. All rights reserved.</p>
          </FooterBottomLinks>
        </FooterBottomPart>
      </FooterContainer>
    </Footer>
  );
};
