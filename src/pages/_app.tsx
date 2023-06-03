import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
