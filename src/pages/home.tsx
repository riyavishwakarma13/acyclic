import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Web3 from "web3";
import { detectCurrentProvider } from "@/util";
import { useAuthStore } from "@/store/auth";

const Home = () => {
  
  const router = useRouter();
  const account = useAuthStore(state=>state.account);

  useEffect(() => {
    if (!account) {
      router.push("/");
    }

  }, [account, router])

  return (
    <div>
      {account ? (
        <div>
          <h2>You are connected to metamask</h2>
          {/* <h3>Your ETH balance is {ethBalance}</h3> */}

          <p>address: {}</p>
        </div>
      ) : (
        <div>
          <h1>Wallet Not Connected</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
