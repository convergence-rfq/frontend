import React from "react";

export const LDotFun = ({
  color,
  ...rest
}: React.SVGProps<SVGSVGElement> & { color?: string }) => {
  return (
    <svg
      width="170"
      height="25"
      viewBox="0 0 170 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2081_19560)">
        <path
          d="M33.7039 18.3333C33.7039 18.1136 33.6306 17.9892 33.4842 17.9599C33.3524 17.9306 33.1766 17.9159 32.9569 17.9159H22.5V17.5205C22.9394 17.5205 23.1591 17.3887 23.1591 17.1251V7.15143C23.1591 6.88781 22.9394 6.756 22.5 6.756V6.36057H26.2786V6.756C25.8685 6.756 25.6634 6.88781 25.6634 7.15143V15.8948H32.9569C33.1766 15.8948 33.3524 15.8436 33.4842 15.7411C33.6306 15.6385 33.7039 15.4994 33.7039 15.3237H34.0993V18.3333H33.7039Z"
          fill="white"
        />
        <path
          d="M44.8051 10.2929C44.8051 10.0146 44.5781 9.87551 44.1241 9.87551H38.7638V12.0723H42.1469C42.3959 12.0723 42.579 12.0577 42.6961 12.0284C42.8133 11.9845 42.8719 11.882 42.8719 11.7209H43.2673V14.0495H42.8279C42.8719 13.8884 42.8133 13.7932 42.6522 13.7639C42.4911 13.72 42.2641 13.698 41.9712 13.698H38.7638V16.2903H44.3877C44.5634 16.2903 44.7099 16.2537 44.8271 16.1804C44.9442 16.0926 45.0028 15.9827 45.0028 15.8509H45.3982V18.1576H45.0028C45.0028 18.0258 44.9442 17.9525 44.8271 17.9379C44.7099 17.9233 44.5634 17.9159 44.3877 17.9159H36.3253V17.5205C36.3985 17.5205 36.4718 17.4985 36.545 17.4546C36.6182 17.396 36.6548 17.3081 36.6548 17.191V8.9748C36.6548 8.85764 36.6182 8.77709 36.545 8.73315C36.4718 8.67457 36.3985 8.64528 36.3253 8.64528V8.24985H44.1241C44.5781 8.24985 44.8051 8.11804 44.8051 7.85442H45.2005V10.2929H44.8051Z"
          fill="white"
        />
        <path
          d="M58.4181 8.64528C58.2131 8.64528 58.03 8.8137 57.8689 9.15055L54.6615 16.2463C54.5004 16.6271 54.3759 16.8834 54.2881 17.0152C54.2148 17.147 54.1782 17.2496 54.1782 17.3228C54.1782 17.4107 54.31 17.4766 54.5736 17.5205V17.9159H51.2564V17.5205C51.3296 17.4912 51.3956 17.4619 51.4541 17.4326C51.5274 17.3887 51.564 17.3301 51.564 17.2569C51.564 17.1837 51.5127 17.0665 51.4102 16.9054C51.3223 16.7443 51.2125 16.5246 51.0807 16.2463L47.7415 9.06268C47.6829 8.93087 47.6023 8.82835 47.4998 8.75512C47.412 8.68189 47.3241 8.64528 47.2362 8.64528V8.24985H50.3337V8.64528C50.158 8.64528 50.0701 8.74048 50.0701 8.93087C50.0701 9.03339 50.1067 9.17984 50.18 9.37023C50.2678 9.54598 50.363 9.7437 50.4656 9.96338L52.9919 15.4335L55.3865 10.1172C55.5476 9.76567 55.6721 9.50204 55.7599 9.3263C55.8478 9.15055 55.8844 9.01142 55.8698 8.9089C55.8551 8.73315 55.7453 8.64528 55.5402 8.64528V8.24985H58.4181V8.64528Z"
          fill="white"
        />
        <path
          d="M69.2192 10.2929C69.2192 10.0146 68.9922 9.87551 68.5381 9.87551H63.1779V12.0723H66.561C66.81 12.0723 66.993 12.0577 67.1102 12.0284C67.2274 11.9845 67.2859 11.882 67.2859 11.7209H67.6814V14.0495H67.242C67.2859 13.8884 67.2274 13.7932 67.0663 13.7639C66.9052 13.72 66.6782 13.698 66.3852 13.698H63.1779V16.2903H68.8018C68.9775 16.2903 69.124 16.2537 69.2411 16.1804C69.3583 16.0926 69.4169 15.9827 69.4169 15.8509H69.8123V18.1576H69.4169C69.4169 18.0258 69.3583 17.9525 69.2411 17.9379C69.124 17.9233 68.9775 17.9159 68.8018 17.9159H60.7394V17.5205C60.8126 17.5205 60.8858 17.4985 60.9591 17.4546C61.0323 17.396 61.0689 17.3081 61.0689 17.191V8.9748C61.0689 8.85764 61.0323 8.77709 60.9591 8.73315C60.8858 8.67457 60.8126 8.64528 60.7394 8.64528V8.24985H68.5381C68.9922 8.24985 69.2192 8.11804 69.2192 7.85442H69.6146V10.2929H69.2192Z"
          fill="white"
        />
        <path
          d="M78.8779 12.4238C80.3131 12.4238 81.0308 11.9698 81.0308 11.0618C81.0308 10.6957 80.855 10.4101 80.5035 10.205C80.1667 9.98535 79.6248 9.87551 78.8779 9.87551H75.4069V12.4238H78.8779ZM78.9218 8.24985C80.2253 8.24985 81.2431 8.46953 81.9754 8.9089C82.7077 9.33362 83.0738 10.0659 83.0738 11.1057C83.0738 11.5012 83.0006 11.8527 82.8541 12.1602C82.7077 12.4678 82.51 12.7387 82.261 12.973C82.0267 13.1927 81.763 13.3758 81.4701 13.5223C81.1772 13.6541 80.877 13.7566 80.5694 13.8298L82.7223 16.9713C82.8395 17.1324 82.964 17.2569 83.0958 17.3448C83.2422 17.418 83.396 17.4766 83.5571 17.5205V17.9159H80.196V17.5205C80.3864 17.5205 80.4816 17.4546 80.4816 17.3228C80.4816 17.1763 80.3717 16.9493 80.152 16.6418L78.4165 14.0495H75.3629V17.191C75.3629 17.3081 75.4069 17.396 75.4947 17.4546C75.5972 17.4985 75.6924 17.5205 75.7803 17.5205V17.9159H72.8585V17.5205C73.1221 17.5205 73.254 17.4107 73.254 17.191V8.9748C73.254 8.75512 73.1221 8.64528 72.8585 8.64528V8.24985H78.9218Z"
          fill="white"
        />
        <path
          d="M92.2418 13.8737L90.4624 10.1831L88.9026 13.8737H92.2418ZM84.9044 17.5205C85.0801 17.4912 85.2193 17.4107 85.3218 17.2788C85.439 17.1324 85.5268 17.0006 85.5854 16.8834L88.8587 9.7437C88.9466 9.53866 89.0125 9.37756 89.0564 9.26039C89.115 9.12858 89.1443 9.0041 89.1443 8.88693C89.1443 8.79906 89.1223 8.7478 89.0784 8.73315C89.0491 8.70386 89.0125 8.67457 88.9686 8.64528V8.24985H92.2858V8.64528C92.2418 8.67457 92.1906 8.69654 92.132 8.71118C92.0881 8.72583 92.0661 8.78441 92.0661 8.88693C92.0661 8.9748 92.0954 9.08465 92.154 9.21646C92.2272 9.33362 92.3004 9.47275 92.3736 9.63386L95.9325 17.1031C96.0057 17.2349 96.0863 17.3301 96.1742 17.3887C96.262 17.4473 96.3572 17.4912 96.4598 17.5205V17.9159H93.3402V17.5864C93.4135 17.5864 93.4867 17.5644 93.5599 17.5205C93.6478 17.4766 93.6917 17.396 93.6917 17.2788C93.6917 17.191 93.6771 17.1104 93.6478 17.0372C93.6185 16.964 93.5819 16.8688 93.538 16.7516L92.9448 15.4994H88.2436L87.6285 16.6857C87.5699 16.8029 87.5186 16.9127 87.4747 17.0152C87.4454 17.1031 87.4308 17.1837 87.4308 17.2569C87.4308 17.374 87.4674 17.4473 87.5406 17.4766C87.6138 17.5059 87.7163 17.5205 87.8482 17.5205V17.9159H84.9044V17.5205Z"
          fill="white"
        />
        <path
          d="M107.129 11.4353L106.865 11.2815C106.895 11.135 106.909 11.0545 106.909 11.0398C106.909 10.908 106.814 10.7689 106.624 10.6224C106.433 10.4613 106.184 10.3149 105.877 10.1831C105.569 10.0513 105.218 9.94873 104.822 9.87551C104.442 9.78763 104.053 9.7437 103.658 9.7437C103.116 9.7437 102.604 9.8096 102.12 9.94141C101.637 10.0586 101.212 10.2563 100.846 10.5346C100.48 10.7982 100.187 11.1423 99.9673 11.5671C99.7476 11.9918 99.6378 12.5117 99.6378 13.1268C99.6378 13.7419 99.755 14.2619 99.9893 14.6866C100.224 15.0967 100.524 15.4335 100.89 15.6971C101.271 15.9461 101.688 16.1292 102.142 16.2463C102.596 16.3635 103.036 16.4221 103.46 16.4221C104.09 16.4221 104.683 16.3781 105.24 16.2903C105.811 16.2024 106.331 16.034 106.799 15.785V14.401H104.537C104.376 14.401 104.237 14.4376 104.119 14.5108C104.002 14.5694 103.929 14.6866 103.9 14.8623H103.504V12.5996H103.9C103.929 12.746 104.002 12.8412 104.119 12.8852C104.237 12.9291 104.376 12.9511 104.537 12.9511H108.843V13.3465C108.711 13.4051 108.623 13.471 108.579 13.5442C108.535 13.6175 108.513 13.7273 108.513 13.8737V15.9607C108.513 16.0926 108.528 16.1878 108.557 16.2463C108.601 16.2903 108.696 16.3415 108.843 16.4001V16.6637C108.711 16.7516 108.498 16.8761 108.205 17.0372C107.927 17.1837 107.568 17.3301 107.129 17.4766C106.704 17.623 106.206 17.7475 105.635 17.85C105.064 17.9379 104.427 17.9818 103.724 17.9818C102.772 17.9818 101.908 17.8793 101.132 17.6743C100.37 17.4546 99.7183 17.1324 99.1765 16.7077C98.6492 16.2829 98.2391 15.7704 97.9462 15.1699C97.668 14.5548 97.5288 13.8591 97.5288 13.0829C97.5288 12.3067 97.668 11.6183 97.9462 11.0179C98.2391 10.4027 98.6492 9.88283 99.1765 9.45811C99.7183 9.01874 100.37 8.68922 101.132 8.46953C101.908 8.2352 102.772 8.11804 103.724 8.11804C104.295 8.11804 104.8 8.1693 105.24 8.27182C105.679 8.37434 106.06 8.48418 106.382 8.60134C106.719 8.71851 106.99 8.82835 107.195 8.93087C107.4 9.03339 107.554 9.08465 107.656 9.08465C107.773 9.08465 107.861 9.07732 107.92 9.06268C107.978 9.03339 108.052 8.98213 108.14 8.9089L108.403 9.04071L107.129 11.4353Z"
          fill="white"
        />
        <path
          d="M120.493 10.2929C120.493 10.0146 120.266 9.87551 119.812 9.87551H114.452V12.0723H117.835C118.084 12.0723 118.267 12.0577 118.384 12.0284C118.501 11.9845 118.56 11.882 118.56 11.7209H118.955V14.0495H118.516C118.56 13.8884 118.501 13.7932 118.34 13.7639C118.179 13.72 117.952 13.698 117.659 13.698H114.452V16.2903H120.076C120.251 16.2903 120.398 16.2537 120.515 16.1804C120.632 16.0926 120.691 15.9827 120.691 15.8509H121.086V18.1576H120.691C120.691 18.0258 120.632 17.9525 120.515 17.9379C120.398 17.9233 120.251 17.9159 120.076 17.9159H112.013V17.5205C112.086 17.5205 112.16 17.4985 112.233 17.4546C112.306 17.396 112.343 17.3081 112.343 17.191V8.9748C112.343 8.85764 112.306 8.77709 112.233 8.73315C112.16 8.67457 112.086 8.64528 112.013 8.64528V8.24985H119.812C120.266 8.24985 120.493 8.11804 120.493 7.85442H120.888V10.2929H120.493Z"
          fill="white"
        />
        <path
          d="M141.59 8.73315C141.59 8.57205 141.524 8.45489 141.393 8.38166C141.275 8.29378 141.063 8.24985 140.756 8.24985H133.638V10.9739H137.944C138.236 10.9739 138.464 10.9446 138.625 10.8861C138.786 10.8275 138.866 10.6957 138.866 10.4906H139.262V13.6541H138.866C138.866 13.3172 138.786 13.1049 138.625 13.017C138.464 12.9145 138.236 12.8632 137.944 12.8632H133.638V17.1251C133.638 17.2569 133.696 17.3594 133.814 17.4326C133.945 17.4912 134.106 17.5205 134.297 17.5205V17.9159H130.562V17.5205C130.943 17.5205 131.133 17.3887 131.133 17.1251V7.15143C131.133 6.88781 130.943 6.756 130.562 6.756V6.36057H140.756C141.063 6.36057 141.275 6.31663 141.393 6.22876C141.524 6.12624 141.59 5.99443 141.59 5.83333H141.986V8.73315H141.59Z"
          fill="white"
        />
        <path
          d="M147.309 8.64528C146.987 8.64528 146.826 8.75512 146.826 8.9748V14.0056C146.826 14.7085 147.082 15.2724 147.595 15.6971C148.107 16.1218 148.891 16.3342 149.946 16.3342C151 16.3342 151.784 16.1218 152.296 15.6971C152.809 15.2724 153.065 14.7085 153.065 14.0056V8.9748C153.065 8.75512 152.882 8.64528 152.516 8.64528V8.24985H155.569V8.64528C155.247 8.64528 155.086 8.75512 155.086 8.9748V14.5328C155.086 14.9868 154.984 15.4262 154.779 15.8509C154.574 16.261 154.259 16.6271 153.834 16.9493C153.424 17.2715 152.889 17.5278 152.23 17.7182C151.586 17.894 150.824 17.9818 149.946 17.9818C149.067 17.9818 148.298 17.894 147.639 17.7182C146.994 17.5278 146.46 17.2715 146.035 16.9493C145.625 16.6271 145.318 16.261 145.112 15.8509C144.907 15.4262 144.805 14.9868 144.805 14.5328V8.9748C144.805 8.85764 144.761 8.77709 144.673 8.73315C144.585 8.67457 144.417 8.64528 144.168 8.64528V8.24985H147.309V8.64528Z"
          fill="white"
        />
        <path
          d="M158.974 17.5205C159.238 17.5205 159.37 17.4107 159.37 17.191V8.9748C159.37 8.75512 159.238 8.64528 158.974 8.64528V8.24985H162.204V8.64528C162.101 8.65992 162.05 8.69654 162.05 8.75512C162.05 8.82835 162.211 9.02606 162.533 9.34827L167.806 14.9282V8.9748C167.806 8.75512 167.659 8.64528 167.366 8.64528V8.24985H170.046V8.64528C169.783 8.64528 169.651 8.75512 169.651 8.9748V17.191C169.651 17.4107 169.783 17.5205 170.046 17.5205V17.9159H167.191V17.5205C167.293 17.5205 167.344 17.4839 167.344 17.4107C167.344 17.3521 167.271 17.2496 167.125 17.1031C166.993 16.9566 166.839 16.7882 166.663 16.5978L161.215 10.7982V17.191C161.215 17.4107 161.369 17.5205 161.676 17.5205V17.9159H158.974V17.5205Z"
          fill="white"
        />
        <path
          d="M16.6667 5.66364V0H8.99019V1.78821H15.0183V3.87543H8.99019V9.60314H13.4844V11.6806H8.99019V18.2044H6.1444V0H0V25H3.7747H15.1346V18.4762H13.4844V23.2118H3.7747H1.64841V1.78821H4.4942V18.2044V19.9926H10.6386V18.2044V13.4689H13.4844H15.1346V7.81298H10.6386V5.66364H16.6667Z"
          fill="#A3FF00"
        />
      </g>
      <defs>
        <clipPath id="clip0_2081_19560">
          <rect width="170" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
