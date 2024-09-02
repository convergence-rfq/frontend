import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { breakpoints } from "../09/breakpoints09";
import { useState } from "react";
import { css } from "@emotion/react";
import { useToggleColorMode } from "./theme";
// import { AnnouncementBar } from "09/AnnouncementBar";
import { AppBar } from "features/app-bar";
import { LayoutFooter } from "components/LayoutFooter";

// TODO: add this to parent component to include landing page
const animationsDisabled =
  localStorage.getItem("animationsDisabled") === "true";

export const BaseContainer = styled.div`
  &.animationsDisabled * {
    animation-play-state: paused !important;
  }
`;

// TODO: delete this
export const LayoutSection = styled.div`
  margin: 0 auto;
  padding: 20px 20px 0px 20px;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;

  /** breakpoint: mobile responsive to change flex-direction to column */
  ${breakpoints.medium} {
    padding-top: 20px;
  }
`;

// constants
const footerLinks = [
  {
    title: "Features",
    items: [
      { href: "#", label: "Portfolio" },
      { href: "#", label: "Analytics" },
    ],
  },
  {
    title: "Documentation",
    items: [
      { href: "https://convergence.so", label: "Homepage" },
      {
        href: "#",
        label: "New user?",
      },
      {
        href: "#",
        label: "What are Vaults?",
      },
      {
        href: "#",
        label: "Glossary",
      },
    ],
  },
  {
    title: "Open Source",
    items: [
      {
        href: "https://github.com/convergence-rfq",
        label: "Organization",
      },
      {
        href: "https://github.com/convergence-rfq/frontend",
        label: "Leverage.fun UI",
      },
      {
        href: "https://github.com/convergence-rfq/frontend",
        label: "Leverage.fun SDK",
      },
    ],
  },
  {
    title: "Community",
    items: [
      { href: "https://t.me/convergence_rfq", label: "Forum" },
      { href: "https://medium.com/convergencerfq", label: "Blogs" },
    ],
  },
  {
    title: "Strategies",
    items: [
      { href: "#", label: "Covered Call" },
      { href: "#", label: "Stables" },
      { href: "#", label: "Crab" },
      { href: "#", label: "Basis Yield" },
      { href: "#", label: "Capital Protection" },
    ],
  },
];

export const BaseLayout = () => {
  const [checked, setChecked] = useState(!animationsDisabled);
  const { toggleColorMode } = useToggleColorMode();

  const needToSwitchThemeBack =
    localStorage.getItem("needToSwitchThemeBack") === "true";
  if (needToSwitchThemeBack) {
    toggleColorMode("light");
    localStorage.setItem("needToSwitchThemeBack", "false");
  }

  return (
    <div
      css={css`
        overflow: -webkit-paged-x;
      `}
    >
      <BaseContainer className={!checked ? "animationsDisabled" : ""}>
        {/* <AnnouncementBar /> */}
        <AppBar hideColorModeToggle={false} />
        <Outlet />
      </BaseContainer>
      <LayoutFooter
        links={footerLinks}
        isAnimationEnabled={checked}
        setIsAnimationEnabled={setChecked}
      />
    </div>
  );
};
