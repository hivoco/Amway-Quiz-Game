import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} min-h-svh max-w-md mx-auto bg-white`}>
      <Component {...pageProps} />
    </main>
  );
}
