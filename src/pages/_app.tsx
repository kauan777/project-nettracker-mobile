import "./../styles/globals.scss";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

const font = Poppins({ weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
