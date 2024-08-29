// fill={isDarkMode ? "#fff" : "#000"}
import React from "react";
import { useTheme } from "@mui/material";

export const LDotFunTitle: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <svg
      width="148"
      height="14"
      viewBox="0 0 148 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.7039 13.3333C11.7039 13.1136 11.6306 12.9892 11.4842 12.9599C11.3524 12.9306 11.1766 12.9159 10.9569 12.9159H0.5V12.5205C0.939367 12.5205 1.15905 12.3887 1.15905 12.1251V2.15143C1.15905 1.88781 0.939367 1.756 0.5 1.756V1.36057H4.27856V1.756C3.86848 1.756 3.66344 1.88781 3.66344 2.15143V10.8948H10.9569C11.1766 10.8948 11.3524 10.8436 11.4842 10.7411C11.6306 10.6385 11.7039 10.4994 11.7039 10.3237H12.0993V13.3333H11.7039Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M22.8051 5.29291C22.8051 5.01464 22.5781 4.87551 22.1241 4.87551H16.7638V7.07234H20.1469C20.3959 7.07234 20.579 7.0577 20.6961 7.02841C20.8133 6.98447 20.8719 6.88195 20.8719 6.72085H21.2673V9.0495H20.8279C20.8719 8.8884 20.8133 8.7932 20.6522 8.76391C20.4911 8.71997 20.2641 8.698 19.9712 8.698H16.7638V11.2903H22.3877C22.5634 11.2903 22.7099 11.2537 22.8271 11.1804C22.9442 11.0926 23.0028 10.9827 23.0028 10.8509H23.3982V13.1576H23.0028C23.0028 13.0258 22.9442 12.9525 22.8271 12.9379C22.7099 12.9233 22.5634 12.9159 22.3877 12.9159H14.3253V12.5205C14.3985 12.5205 14.4718 12.4985 14.545 12.4546C14.6182 12.396 14.6548 12.3081 14.6548 12.191V3.9748C14.6548 3.85764 14.6182 3.77709 14.545 3.73315C14.4718 3.67457 14.3985 3.64528 14.3253 3.64528V3.24985H22.1241C22.5781 3.24985 22.8051 3.11804 22.8051 2.85442H23.2005V5.29291H22.8051Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M36.4181 3.64528C36.2131 3.64528 36.03 3.8137 35.8689 4.15055L32.6615 11.2463C32.5004 11.6271 32.3759 11.8834 32.2881 12.0152C32.2148 12.147 32.1782 12.2496 32.1782 12.3228C32.1782 12.4107 32.31 12.4766 32.5736 12.5205V12.9159H29.2564V12.5205C29.3296 12.4912 29.3956 12.4619 29.4541 12.4326C29.5274 12.3887 29.564 12.3301 29.564 12.2569C29.564 12.1837 29.5127 12.0665 29.4102 11.9054C29.3223 11.7443 29.2125 11.5246 29.0807 11.2463L25.7415 4.06268C25.6829 3.93087 25.6023 3.82835 25.4998 3.75512C25.412 3.68189 25.3241 3.64528 25.2362 3.64528V3.24985H28.3337V3.64528C28.158 3.64528 28.0701 3.74048 28.0701 3.93087C28.0701 4.03339 28.1067 4.17984 28.18 4.37023C28.2678 4.54598 28.363 4.7437 28.4656 4.96338L30.9919 10.4335L33.3865 5.11716C33.5476 4.76567 33.6721 4.50204 33.7599 4.3263C33.8478 4.15055 33.8844 4.01142 33.8698 3.9089C33.8551 3.73315 33.7453 3.64528 33.5402 3.64528V3.24985H36.4181V3.64528Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M47.2192 5.29291C47.2192 5.01464 46.9922 4.87551 46.5381 4.87551H41.1779V7.07234H44.561C44.81 7.07234 44.993 7.0577 45.1102 7.02841C45.2274 6.98447 45.2859 6.88195 45.2859 6.72085H45.6814V9.0495H45.242C45.2859 8.8884 45.2274 8.7932 45.0663 8.76391C44.9052 8.71997 44.6782 8.698 44.3852 8.698H41.1779V11.2903H46.8018C46.9775 11.2903 47.124 11.2537 47.2411 11.1804C47.3583 11.0926 47.4169 10.9827 47.4169 10.8509H47.8123V13.1576H47.4169C47.4169 13.0258 47.3583 12.9525 47.2411 12.9379C47.124 12.9233 46.9775 12.9159 46.8018 12.9159H38.7394V12.5205C38.8126 12.5205 38.8858 12.4985 38.9591 12.4546C39.0323 12.396 39.0689 12.3081 39.0689 12.191V3.9748C39.0689 3.85764 39.0323 3.77709 38.9591 3.73315C38.8858 3.67457 38.8126 3.64528 38.7394 3.64528V3.24985H46.5381C46.9922 3.24985 47.2192 3.11804 47.2192 2.85442H47.6146V5.29291H47.2192Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M56.8779 7.42384C58.3131 7.42384 59.0308 6.96982 59.0308 6.0618C59.0308 5.69566 58.855 5.41007 58.5035 5.20503C58.1667 4.98535 57.6248 4.87551 56.8779 4.87551H53.4069V7.42384H56.8779ZM56.9218 3.24985C58.2253 3.24985 59.2431 3.46953 59.9754 3.9089C60.7077 4.33362 61.0738 5.0659 61.0738 6.10574C61.0738 6.50117 61.0006 6.85266 60.8541 7.16022C60.7077 7.46777 60.51 7.73872 60.261 7.97305C60.0267 8.19273 59.763 8.3758 59.4701 8.52226C59.1772 8.65407 58.877 8.75659 58.5694 8.82981L60.7223 11.9713C60.8395 12.1324 60.964 12.2569 61.0958 12.3448C61.2422 12.418 61.396 12.4766 61.5571 12.5205V12.9159H58.196V12.5205C58.3864 12.5205 58.4816 12.4546 58.4816 12.3228C58.4816 12.1763 58.3717 11.9493 58.152 11.6418L56.4165 9.0495H53.3629V12.191C53.3629 12.3081 53.4069 12.396 53.4947 12.4546C53.5972 12.4985 53.6924 12.5205 53.7803 12.5205V12.9159H50.8585V12.5205C51.1221 12.5205 51.254 12.4107 51.254 12.191V3.9748C51.254 3.75512 51.1221 3.64528 50.8585 3.64528V3.24985H56.9218Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M70.2418 8.87375L68.4624 5.18306L66.9026 8.87375H70.2418ZM62.9044 12.5205C63.0801 12.4912 63.2193 12.4107 63.3218 12.2788C63.439 12.1324 63.5268 12.0006 63.5854 11.8834L66.8587 4.7437C66.9466 4.53866 67.0125 4.37756 67.0564 4.26039C67.115 4.12858 67.1443 4.0041 67.1443 3.88693C67.1443 3.79906 67.1223 3.7478 67.0784 3.73315C67.0491 3.70386 67.0125 3.67457 66.9686 3.64528V3.24985H70.2858V3.64528C70.2418 3.67457 70.1906 3.69654 70.132 3.71118C70.0881 3.72583 70.0661 3.78441 70.0661 3.88693C70.0661 3.9748 70.0954 4.08465 70.154 4.21646C70.2272 4.33362 70.3004 4.47275 70.3736 4.63386L73.9325 12.1031C74.0057 12.2349 74.0863 12.3301 74.1742 12.3887C74.262 12.4473 74.3572 12.4912 74.4598 12.5205V12.9159H71.3402V12.5864C71.4135 12.5864 71.4867 12.5644 71.5599 12.5205C71.6478 12.4766 71.6917 12.396 71.6917 12.2788C71.6917 12.191 71.6771 12.1104 71.6478 12.0372C71.6185 11.964 71.5819 11.8688 71.538 11.7516L70.9448 10.4994H66.2436L65.6285 11.6857C65.5699 11.8029 65.5186 11.9127 65.4747 12.0152C65.4454 12.1031 65.4308 12.1837 65.4308 12.2569C65.4308 12.374 65.4674 12.4473 65.5406 12.4766C65.6138 12.5059 65.7163 12.5205 65.8482 12.5205V12.9159H62.9044V12.5205Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M85.129 6.43526L84.8654 6.28148C84.8947 6.13503 84.9093 6.05448 84.9093 6.03983C84.9093 5.90802 84.8141 5.76889 84.6237 5.62243C84.4333 5.46133 84.1844 5.31487 83.8768 5.18306C83.5693 5.05125 83.2178 4.94873 82.8223 4.87551C82.4415 4.78763 82.0534 4.7437 81.658 4.7437C81.1161 4.7437 80.6035 4.8096 80.1202 4.94141C79.6369 5.05858 79.2122 5.25629 78.8461 5.53456C78.4799 5.79818 78.187 6.14235 77.9673 6.56707C77.7476 6.99179 77.6378 7.51171 77.6378 8.12683C77.6378 8.74194 77.755 9.26186 77.9893 9.68658C78.2236 10.0967 78.5238 10.4335 78.89 10.6971C79.2708 10.9461 79.6882 11.1292 80.1422 11.2463C80.5962 11.3635 81.0356 11.4221 81.4603 11.4221C82.09 11.4221 82.6832 11.3781 83.2397 11.2903C83.8109 11.2024 84.3308 11.034 84.7995 10.785V9.40099H82.5367C82.3756 9.40099 82.2365 9.4376 82.1193 9.51083C82.0022 9.56942 81.9289 9.68658 81.8997 9.86233H81.5042V7.59958H81.8997C81.9289 7.74604 82.0022 7.84124 82.1193 7.88517C82.2365 7.92911 82.3756 7.95108 82.5367 7.95108H86.8425V8.34651C86.7107 8.40509 86.6229 8.471 86.5789 8.54422C86.535 8.61745 86.513 8.72729 86.513 8.87375V10.9607C86.513 11.0926 86.5277 11.1878 86.557 11.2463C86.6009 11.2903 86.6961 11.3415 86.8425 11.4001V11.6637C86.7107 11.7516 86.4984 11.8761 86.2055 12.0372C85.9272 12.1837 85.5684 12.3301 85.129 12.4766C84.7043 12.623 84.2063 12.7475 83.6352 12.85C83.064 12.9379 82.4269 12.9818 81.7239 12.9818C80.7719 12.9818 79.9079 12.8793 79.1316 12.6743C78.3701 12.4546 77.7183 12.1324 77.1765 11.7077C76.6492 11.2829 76.2391 10.7704 75.9462 10.1699C75.668 9.55477 75.5288 8.8591 75.5288 8.08289C75.5288 7.30667 75.668 6.61833 75.9462 6.01786C76.2391 5.40275 76.6492 4.88283 77.1765 4.45811C77.7183 4.01874 78.3701 3.68922 79.1316 3.46953C79.9079 3.2352 80.7719 3.11804 81.7239 3.11804C82.2951 3.11804 82.8004 3.1693 83.2397 3.27182C83.6791 3.37434 84.0599 3.48418 84.3821 3.60134C84.7189 3.71851 84.9899 3.82835 85.1949 3.93087C85.3999 4.03339 85.5537 4.08465 85.6562 4.08465C85.7734 4.08465 85.8613 4.07732 85.9199 4.06268C85.9784 4.03339 86.0517 3.98213 86.1395 3.9089L86.4032 4.04071L85.129 6.43526Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M98.493 5.29291C98.493 5.01464 98.266 4.87551 97.812 4.87551H92.4517V7.07234H95.8348C96.0838 7.07234 96.2669 7.0577 96.384 7.02841C96.5012 6.98447 96.5598 6.88195 96.5598 6.72085H96.9552V9.0495H96.5158C96.5598 8.8884 96.5012 8.7932 96.3401 8.76391C96.179 8.71997 95.952 8.698 95.6591 8.698H92.4517V11.2903H98.0756C98.2513 11.2903 98.3978 11.2537 98.5149 11.1804C98.6321 11.0926 98.6907 10.9827 98.6907 10.8509H99.0861V13.1576H98.6907C98.6907 13.0258 98.6321 12.9525 98.5149 12.9379C98.3978 12.9233 98.2513 12.9159 98.0756 12.9159H90.0132V12.5205C90.0864 12.5205 90.1596 12.4985 90.2329 12.4546C90.3061 12.396 90.3427 12.3081 90.3427 12.191V3.9748C90.3427 3.85764 90.3061 3.77709 90.2329 3.73315C90.1596 3.67457 90.0864 3.64528 90.0132 3.64528V3.24985H97.812C98.266 3.24985 98.493 3.11804 98.493 2.85442H98.8884V5.29291H98.493Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M119.59 3.73315C119.59 3.57205 119.524 3.45489 119.393 3.38166C119.275 3.29378 119.063 3.24985 118.756 3.24985H111.638V5.97393H115.944C116.236 5.97393 116.464 5.94463 116.625 5.88605C116.786 5.82747 116.866 5.69566 116.866 5.49062H117.262V8.65407H116.866C116.866 8.31722 116.786 8.10486 116.625 8.01698C116.464 7.91446 116.236 7.86321 115.944 7.86321H111.638V12.1251C111.638 12.2569 111.696 12.3594 111.814 12.4326C111.945 12.4912 112.106 12.5205 112.297 12.5205V12.9159H108.562V12.5205C108.943 12.5205 109.133 12.3887 109.133 12.1251V2.15143C109.133 1.88781 108.943 1.756 108.562 1.756V1.36057H118.756C119.063 1.36057 119.275 1.31663 119.393 1.22876C119.524 1.12624 119.59 0.994429 119.59 0.833328H119.986V3.73315H119.59Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M125.309 3.64528C124.987 3.64528 124.826 3.75512 124.826 3.9748V9.00556C124.826 9.70855 125.082 10.2724 125.595 10.6971C126.107 11.1218 126.891 11.3342 127.946 11.3342C129 11.3342 129.784 11.1218 130.296 10.6971C130.809 10.2724 131.065 9.70855 131.065 9.00556V3.9748C131.065 3.75512 130.882 3.64528 130.516 3.64528V3.24985H133.569V3.64528C133.247 3.64528 133.086 3.75512 133.086 3.9748V9.5328C133.086 9.98681 132.984 10.4262 132.779 10.8509C132.574 11.261 132.259 11.6271 131.834 11.9493C131.424 12.2715 130.889 12.5278 130.23 12.7182C129.586 12.894 128.824 12.9818 127.946 12.9818C127.067 12.9818 126.298 12.894 125.639 12.7182C124.994 12.5278 124.46 12.2715 124.035 11.9493C123.625 11.6271 123.318 11.261 123.112 10.8509C122.907 10.4262 122.805 9.98681 122.805 9.5328V3.9748C122.805 3.85764 122.761 3.77709 122.673 3.73315C122.585 3.67457 122.417 3.64528 122.168 3.64528V3.24985H125.309V3.64528Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
      <path
        d="M136.974 12.5205C137.238 12.5205 137.37 12.4107 137.37 12.191V3.9748C137.37 3.75512 137.238 3.64528 136.974 3.64528V3.24985H140.204V3.64528C140.101 3.65992 140.05 3.69654 140.05 3.75512C140.05 3.82835 140.211 4.02606 140.533 4.34827L145.806 9.92823V3.9748C145.806 3.75512 145.659 3.64528 145.366 3.64528V3.24985H148.046V3.64528C147.783 3.64528 147.651 3.75512 147.651 3.9748V12.191C147.651 12.4107 147.783 12.5205 148.046 12.5205V12.9159H145.191V12.5205C145.293 12.5205 145.344 12.4839 145.344 12.4107C145.344 12.3521 145.271 12.2496 145.125 12.1031C144.993 11.9566 144.839 11.7882 144.663 11.5978L139.215 5.79818V12.191C139.215 12.4107 139.369 12.5205 139.676 12.5205V12.9159H136.974V12.5205Z"
        fill={isDarkMode ? "#fff" : "#000"}
      />
    </svg>
  );
};
