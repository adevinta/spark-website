import "../styles/globals.css";
import { Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

import { AppProps } from "next/app";
import { RouteProgress } from "@/components/RouteProgress";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={nunito.className}>
        <RouteProgress />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
