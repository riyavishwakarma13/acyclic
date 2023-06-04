import { useAuthStore } from '@/store/auth';
import '@/styles/globals.css'
import { detectCurrentProvider } from '@/util';
import { get } from 'http';
import type { AppProps } from 'next/app'

import { Montserrat } from 'next/font/google'
import { useEffect } from 'react';
import Web3 from 'web3';


const montserrat = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});


export default function App({ Component, pageProps }: AppProps) {

  // const setAccount = useAuthStore(state=>state.setAccount)

  // // Get current connected account and store it in AuthStore
  // useEffect(() => {
  //   const currentProvider = detectCurrentProvider();
  //   const web3 = new Web3(currentProvider);
  //   web3.eth.getAccounts().then(accounts => {
  //     if (accounts.length === 0) {
  //       setAccount(null);
  //     } else {
  //       setAccount(accounts[0]);
  //     }
  //   });
  // }, [setAccount]);

  return (
    <main className={`bg-primary ${montserrat.className} text-white`}>
      <Component {...pageProps} />
    </main>
  )
}
 // zustand