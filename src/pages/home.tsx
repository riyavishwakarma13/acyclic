import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Web3 from "web3";
import { useAuthStore } from "@/store/auth";
import { detectCurrentProvider } from "../util";

const Home = () => {
    const router = useRouter();
    const account = useAuthStore((state) => state.account);
    const setAccount = useAuthStore(state => state.setAccount);

    const [ethBalance, setEthBalance] = useState("0");
    const [chain, setChain] = useState(0);

    useEffect(() => {
        if (!account) {
            router.push("/");
            return;
        }
        const web3 = new Web3(detectCurrentProvider());
        if (!web3) {
            console.log("not connected");
            return;
        }
        web3.eth.getBalance(account).then(setEthBalance);
        web3.eth.getChainId().then(setChain);
    }, [account, router]);

    const onDisconnect = () => {
        setAccount("");
    };

    return (
        <div className="h-screen py-20">
            <div className="grid banner place-items-center gap-10">
                <div className="py-10">
                    <h1 className=" neon">Wallet Connected.</h1>
                </div>
                {account ? (
                    <div className="glass p-10 space-y-10">
                        <div className="space-y-4">
                            <h3>Your balance is {ethBalance}</h3>
                            <h3 className="break-all">Your address is {account}</h3>
                            <h3>Your chain is {chain}</h3>
                        </div>
                        <div className="flex justify-center">
                            <button className="shadow_btn" onClick={onDisconnect}>
                                Disconnect
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>Wallet Not Connected</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
