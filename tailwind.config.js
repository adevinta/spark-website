const { sparkConfig } = require("@spark-ui/tailwind-plugins");
const { defaultTheme, defaultThemeDark } = require("@spark-ui/theme-utils");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/examples/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/docs/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@spark-ui/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: "var(--font-nunito-sans)",
        monospace:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
    },
  },
  plugins: [
    ...sparkConfig({
      htmlFontSize: 16,
      themes: {
        default: defaultTheme,
        dark: defaultThemeDark,
      },
    }),
  ],
};
