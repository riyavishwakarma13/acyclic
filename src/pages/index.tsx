
import WalletCard from "@/components/WalletCard";
import Web3 from "web3";

export default function Home() {

  // const detectCurrentProvider = () => {
  //   let provider;

  //   if (window.drip) {
  //     provider = window.drip;
  //   }
  //   else if (window.Web3) {
  //     provider = window.ethereum;

  //   }

  // }

  return (
    <div>
      <p>Hello World!</p>
      <WalletCard />
    </div>
  )
}
