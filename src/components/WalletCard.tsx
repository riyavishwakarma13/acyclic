import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Web3 from 'web3';

const WalletCard = () => {

    const [isConnected, setIsConnected] = useState(false)
    const [ethBalance, setEthBalance] = useState("")
    const router = useRouter()

    const detectCurrentProvider = () => {
        let provider;
        console.log(window.drip)
        if (window.drip) {
            provider = window.drip
        } else if (window.ethereum) {
            provider = window.ethereum
        } else if (window.web3) {
            provider = window.web3
        } else {
            console.log("Non-Ethereum browser detected. You should consider trying MetaMask!")
        }
        return provider;
    }

    const onConnect = async () => {
        try {

            const currentProvider = detectCurrentProvider()
            console.log(currentProvider)
            if (currentProvider) {
                await currentProvider.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(currentProvider);
                const userAccount = await web3.eth.getAccounts();
                const account = userAccount[0];
                let ethBalance = await web3.eth.getBalance(account);
                setEthBalance(ethBalance);
                setIsConnected(true);
            }
        } catch (error) {
            console.log(error)
        }
        router.push('/idk')

    }

    const onDisconnect = () => {
        setIsConnected(false);
    }

    return (
        <div className='app'>
            <div className='app-header'>
                <h1>React dApp authentication</h1>
            </div>
            <div className='app-wrapper'>
                {
                    !isConnected ? (
                        <button className='app-button' onClick={onConnect}>
                            Connect Wallet
                        </button>
                    ) : (
                        <button className='app-button' onClick={onDisconnect}>
                            Disconnect Wallet
                        </button>
                    )
                }
            </div>
            <div>
                {
                    isConnected ? (
                        <div>
                            <h1>Wallet Connected</h1>
                            <h2>You are connected to metamask</h2>
                            <h3>Your ETH balance is {ethBalance}</h3>
                            <button onClick={onDisconnect}>Disconnect</button>
                            <p>
                                address: { }
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h1>Wallet Not Connected</h1>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default WalletCard