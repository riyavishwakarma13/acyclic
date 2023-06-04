import { useAuthStore } from "@/store/auth";
import { detectCurrentProvider } from "@/util";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Web3 from "web3";

const WalletCard = () => {
    // https://youtu.be/uWeK30vg35c?t=433
    const router = useRouter();

    const account = useAuthStore(state=>state.account);
    const setAccount = useAuthStore(state=>state.setAccount);

    const onConnect = async () => {
        try {
            const currentProvider = detectCurrentProvider();
            if (currentProvider) {
                await currentProvider.request({ method: "eth_requestAccounts" });
                const web3 = new Web3(currentProvider);
                const userAccount = await web3.eth.getAccounts();
                const account = userAccount[0];
                setAccount(account);
                router.push("/home");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onDisconnect = () => {
        setAccount("");
    };

    return (
        <div className="h-screen py-10">
            <div className="flex flex-col items-center">
                <div className="py-10">
                    <h1 className="text-xl text-center font-bold md:text-4xl lg:text-8xl">
                        Next.js <span className="text-secondary">DApp</span> authentication
                    </h1>
                </div>
                <div className="app-wrapper">
                    {!!!account ? (
                        <button className="shadow_btn" onClick={onConnect}>
                            Connect Wallet
                        </button>
                    ) : (
                        <button className="shadow_btn" onClick={onDisconnect}>
                            Disconnect Wallet
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WalletCard;
