import { cx } from 'class-variance-authority'

export const Background = ({ className }: { className?: string }) => {
  return (
    <div
      className={cx(
        'fixed flex h-[calc(100dvh-64px)] w-full items-center justify-center overflow-hidden',
        className,
      )}
    >
      <svg
        fill="none"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        className="min-h-[calc(calc(100dvw/1.8)-64px) min-w-[calc(calc(100dvh-64px)*1.8)]"
      >
        <g clipPath="url(#clip0_Background)">
          <g filter="url(#filter0_Background)">
            <path
              d="M304 790.031C129.768 684.678 -406.4 1167.32 -413.584 1177.23C-718.041 1523.9 91.1496 1378.93 110.908 1378.93C-180.976 1161.92 286.936 941.307 304 790.031Z"
              className="fill-main"
            />
            <path
              d="M161.807 644.898C161.554 520.595 -136.124 671.417 -284.931 762.366C-403.337 932.004 -13.0687 1192.9 1.35155 1035.57C23.94 789.128 162.125 800.276 161.807 644.898Z"
              className="fill-main-container"
            />
            <path
              d="M121.085 684.621C125.261 544.097 -214.984 734.315 -385.628 846.989C-555.644 959.056 16.778 1314.39 -102.496 1145.13C-221.77 975.865 115.866 860.276 121.085 684.621Z"
              className="fill-accent"
            />
            <path
              d="M97.589 685.346C0.588959 626.846 -297.911 894.846 -301.911 900.346C-471.411 1092.85 -20.911 1012.35 -9.91104 1012.35C-172.411 891.846 88.089 769.346 97.589 685.346Z"
              className="fill-error"
            />
            <path
              d="M98.8172 786.222C105.645 707.089 -155.821 865.52 -287.408 954.627C-342.535 990.996 -241.058 1042.93 -137.111 1149.4C-33.164 1255.87 -1.43155 1149.01 -6.87316 1007.24C-12.3148 865.481 90.2819 885.138 98.8172 786.222Z"
              className="fill-accent"
            />
            <path
              d="M79.6747 793.766C70.5845 765.971 -181.806 928.87 -306.865 1013.79C-207.001 1086.12 -12.6963 1207.5 -34.3905 1114.39C-61.5083 998.009 -9.31017 919.777 18.4035 892.264C46.1172 864.751 91.0373 828.51 79.6747 793.766Z"
              className="fill-background"
            />
          </g>
          <g filter="url(#filter1_Background)" className="mix-blend-color-dodge">
            <path
              d="M285.396 691.649C91.9932 627.999 -322.445 1218.47 -327.229 1229.74C-546.3 1635.8 209.859 1313.26 229.116 1308.83C-103.959 1162.72 302.65 842.904 285.396 691.649Z"
              className="fill-main-container"
            />
            <path
              d="M135.808 620.898C135.554 496.595 -162.124 647.417 -310.931 738.366C-429.337 908.004 -39.0683 1168.9 -24.648 1011.57C-2.05946 765.128 136.125 776.276 135.808 620.898Z"
              className="fill-main"
            />
            <path
              d="M264.085 728.029C295.212 662.809 -38.8403 870.317 -242.627 890.397C-412.644 1002.46 159.778 1357.79 40.5042 1188.53C-78.7699 1019.27 188.395 886.626 264.085 728.029Z"
              className="fill-accent-variant"
            />
            <path
              d="M63.2555 586.832C-45.5052 555.172 -265.269 890.776 -267.724 897.118C-382.172 1126.66 32.6034 933.287 43.2353 930.466C-144.738 855.683 75.6212 670.458 63.2555 586.832Z"
              className="fill-error"
            />
            <path
              d="M154.112 907.632C199.29 842.305 -106.329 850.19 -264.786 862.298C-330.693 866.536 -268.337 961.966 -230.885 1105.97C-193.433 1249.98 -112.876 1172.93 -47.2874 1047.13C18.301 921.334 97.6386 989.29 154.112 907.632Z"
              className="fill-alert"
            />
            <path
              d="M129.742 813.25C121.087 785.316 -133.815 944.257 -260.183 1027.22C-161.46 1101.1 30.9269 1225.49 10.6881 1132.06C-14.6104 1015.27 38.8021 937.856 66.9417 910.779C95.0813 883.702 140.561 848.167 129.742 813.25Z"
              className="fill-background"
            />
          </g>
          <g filter="url(#filter2_Background)" transform="translate(0, -100)">
            <path
              d="M1140.7 659.115C1237.3 776.059 1733.06 568.547 1740.55 563.349C2039.92 394.456 1529.82 270.985 1515.93 266.125C1515.82 644.929 1189.91 556.934 1140.7 659.115Z"
              className="fill-main"
            />
            <path
              d="M1098.22 512.71C1192.56 619.584 1652.14 410.657 1659.02 405.566C1935.22 238.529 1542.85 63.0972 1529.64 58.9411C1467.33 354.141 1305.24 419.284 1098.22 512.71Z"
              className="fill-main-variant"
            />
            <path
              d="M1188.06 528.72C1386.37 555.048 1559.14 355.019 1562.99 269.094C1509.96 68.883 1450.87 -249.17 1437.38 84.2393C1422.27 457.75 890.157 489.171 1188.06 528.72Z"
              className="fill-accent"
            />
            <path
              d="M1180.14 483.812C1170.93 546.68 1458.32 445.558 1585.1 347.02C1740.62 149.026 1606.16 -64.3923 1485.77 165.155C1449.31 234.678 1448.21 346.131 1273.18 409.921C1235.35 423.707 1182.62 466.882 1180.14 483.812Z"
              className="fill-background"
            />
          </g>
          <g filter="url(#filter3_Background)" className="mix-blend-color-dodge">
            <path
              d="M1075.07 624.68C1183.34 665.319 1928.88 307.765 1991.15 478.431C2448.34 220.503 1669.33 31.9428 1648.11 24.5205C1670.96 -99.9098 1041.44 188.527 1075.07 624.68Z"
              className="fill-main"
            />
            <path
              d="M1157.15 586.417C1251.49 693.29 1711.07 484.363 1717.95 479.272C1994.15 312.236 1601.78 136.804 1588.57 132.648C1526.26 427.847 1364.17 492.99 1157.15 586.417Z"
              className="fill-main-variant"
            />
            <path
              d="M1277.57 295.664C1475.88 321.992 1648.65 121.962 1652.5 36.0375C1599.47 -164.174 1540.38 -482.226 1526.89 -148.817C1511.78 224.693 979.665 256.114 1277.57 295.664Z"
              className="#fill-accent"
            />
            <path
              d="M1224.1 465.095C1214.89 527.963 1502.28 426.841 1629.07 328.302C1784.59 130.309 1650.12 -83.1096 1529.74 146.438C1493.27 215.961 1492.17 327.414 1317.14 391.203C1279.31 404.99 1226.58 448.165 1224.1 465.095Z"
              className="fill-background"
            />
          </g>
          <g filter="url(#filter4_Background)">
            <path
              d="M664.474 107.87C641.358 124.696 170.932 248.337 252.874 -365.067C364.865 -442.45 573.937 -82.0188 664.474 107.87Z"
              className="fill-main-container"
            />
            <path
              d="M393.411 -410.629C304.927 -322.705 264.346 -131.269 559.222 44.9769C895.049 245.699 621.708 -244.567 393.411 -410.629Z"
              className="fill-main"
            />
          </g>
          <g filter="url(#filter5_Background)" className="mix-blend-color-dodge">
            <path
              d="M574.831 -4.21438C548.914 8.94132 102.388 98.0663 399.01 -400.636C523.041 -460.996 567.904 -161.505 574.831 -4.21438Z"
              className="fill-main-variant"
            />
            <path
              d="M167.001 -411.685C94.0128 -286.811 109.91 -42.5197 506.461 122.1C958.082 309.582 483.689 -247.587 167.001 -411.685Z"
              className="fill-main"
            />
          </g>
          <g filter="url(#filter6_Background)">
            <path
              d="M769.312 668.888C713.944 557.598 514.063 824.819 421.044 972.341C390.178 1176.9 855.682 1237.6 798.814 1090.2C709.734 859.309 662.489 874.183 769.312 668.888Z"
              className="fill-main"
            />
            <path
              d="M654.567 580C696.502 663.067 791.358 1013.32 715.491 1029.57C836.162 1255.9 919.082 805.839 922.947 795.54C753.034 905.341 729.873 618.408 654.567 580Z"
              className="fill-error"
            />
          </g>
          <g
            filter="url(#filter7_Background)"
            className="mix-blend-color-dodge"
            transform="translate(-100,-300)"
          >
            <path
              d="M898.312 681.889C842.943 570.598 643.063 837.82 550.044 985.341C519.178 1189.9 984.682 1250.6 927.814 1103.2C838.733 872.309 791.488 887.183 898.312 681.889Z"
              className="fill-main"
            />
            <path
              d="M659.751 623.067C701.685 706.135 796.541 1056.39 720.674 1072.64C841.345 1298.97 924.265 848.906 928.13 838.608C758.217 948.408 735.057 661.476 659.751 623.067Z"
              className="fill-error"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="1011.21"
            id="filter0_Background"
            width="986"
            x="-582"
            y="497.789"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_41"
              stdDeviation="50"
            ></feGaussianBlur>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="1060.69"
            id="filter1_Background"
            width="852.948"
            x="-467.015"
            y="473.789"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_41"
              stdDeviation="50"
            ></feGaussianBlur>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="955.751"
            id="filter2_Background"
            width="936.951"
            x="997.614"
            y="-160.955"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_41"
              stdDeviation="50"
            ></feGaussianBlur>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="1121.94"
            id="filter3_Background"
            width="1260.95"
            x="973.772"
            y="-394.011"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_41"
              stdDeviation="50"
            ></feGaussianBlur>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="739.821"
            id="filter4_Background"
            width="672.933"
            x="143.302"
            y="-510.629"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_41"
              stdDeviation="50"
            ></feGaussianBlur>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="771.866"
            id="filter5_Background"
            width="759.207"
            x="33.001"
            y="-511.685"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_41"
              stdDeviation="50"
            ></feGaussianBlur>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="791.621"
            id="filter6_Background"
            width="703.374"
            x="319.573"
            y="480"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_41"
              stdDeviation="50"
            ></feGaussianBlur>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="761.554"
            id="filter7_Background"
            width="584.064"
            x="448.572"
            y="523.067"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_41"
              stdDeviation="50"
            ></feGaussianBlur>
          </filter>
          <clipPath id="clip0_Background">
            <rect fill="white" height="800" width="1440"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
