import React from "react";
import { useTheme } from "@mui/material";

export const LDotFun = ({
  color,
  ...rest
}: React.SVGProps<SVGSVGElement> & { color?: string }) => {
  const theme = useTheme();

  return (
    <svg
      width="17"
      height="25"
      viewBox="0 0 17 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16.6667 5.66364V0H8.99019V1.78821H15.0183V3.87543H8.99019V9.60314H13.4844V11.6806H8.99019V18.2044H6.1444V0H0V25H3.7747H15.1346V18.4762H13.4844V23.2118H3.7747H1.64841V1.78821H4.4942V18.2044V19.9926H10.6386V18.2044V13.4689H13.4844H15.1346V7.81298H10.6386V5.66364H16.6667Z"
        fill={color ?? theme.palette.grey[400]}
      />
    </svg>
  );
};
