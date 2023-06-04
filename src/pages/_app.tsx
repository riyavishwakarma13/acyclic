import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-primary ${montserrat.className} text-white`}>
      <Component {...pageProps} />
    </main>
  )
}
