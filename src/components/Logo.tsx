import { SVGProps } from "react";

export type LogoProps = Omit<SVGProps<SVGSVGElement>, "children">;

export const LogoIcon = (props: LogoProps) => {
  return (
    <svg
      viewBox="0 0 196 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100%" height="100%" rx="24" fill="#fff" />
      <path
        d="M63.5275 97.4104V49.8788c0-12.1566 12.5065-20.4744 24.0153-15.9721l68.4262 26.7687-21.164 8.4102-50.8273-18.7929c-2.8653-1.0594-5.9261 1.0183-5.9261 4.0226v37.3234l-14.5241 5.7717Z"
        fill="#F51592"
      />
      <path
        d="M163.334 73.7331c0 3.5032-2.167 6.656-5.476 7.9699L132.47 91.7813v.0385L58.58 123.011l-3.8955 1.474 57.3345 21.199c2.866 1.06 5.927-1.018 5.927-4.022v-37.219l14.524-5.7713v47.4503c0 12.15-12.494 20.468-24.001 15.978l-70.2775-27.422c-3.3353-1.301-5.5244-4.467-5.5244-7.989v-4.445c0-3.503 2.1663-6.656 5.476-7.97L162.121 65.0195c.778 1.2947 1.213 2.7938 1.213 4.3635v4.3501Z"
        fill="url(#a)"
      />
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-158.85925 -160.77274 138.83612 -137.18372 211.22 239.248)"
        >
          <stop offset=".581" stopColor="#7E49DD" />
          <stop offset="1" stopColor="#4183D7" />
        </radialGradient>
      </defs>
    </svg>
  );
};
