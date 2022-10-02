import { useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import { getCsrfToken, signIn } from 'next-auth/react';
import { SiweMessage } from 'siwe';
import Web3Modal from 'web3modal';
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import WalletConnectProvider from '@walletconnect/web3-provider';
// import { Web3Auth } from "@web3auth/web3auth";
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { toast } from 'react-toastify';
// import { useSyncExternalStore } from 'react';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
        },
    },
    coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
            appName: "Bad Dogs Company", // Required
            infuraId: process.env.NEXT_PUBLIC_INFURA_ID, // Required
            rpc: "", // Optional if `infuraId` is provided; otherwise it's required
            chainId: 1, // Optional. It defaults to 1 if not provided
            darkMode: true // Optional. Use dark theme, defaults to false
        }
    },
    // web3auth: {
    //     package: Web3Auth, // required
    //     options: {
    //         infuraId: process.env.NEXT_PUBLIC_INFURA_ID // required
    //     }
    // },
};

const useStore = create(devtools(persist((_set) => ({
    web3Modal: typeof window !== 'undefined' ? new Web3Modal() : undefined,
}),
    {
        name: 'web3ModalState',
        // getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used   
    }
)));

export const useWallet = () => {
    // Retreive the current values from the store, and automatically re-render on updates
    const account = useStore(state => state.account);
    const network = useStore(state => state.network);
    const provider = useStore(state => state.provider);
    const web3Modal = useStore(state => state.web3Modal);
    const address = useStore(state => state.address);
    const balance = useStore(state => state.balance);

    // hook to automatically connect to the cached provider
    useEffect(() => {
        if (web3Modal.cacheProvider) {
            connect();
        }
    }, []);

    // useEffect(async () => {
    //     // console.log("inside setWeb3Modal");
    //     // console.log(web3Modal);
    //     // console.log(localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER"));
    //     if (!web3Modal) {
    //         // const web3ModalInstance = await new Web3Modal({
    //         web3Modal = await new Web3Modal({
    //             network: "mainnet", // optional
    //             cacheProvider: true,
    //             theme: "dark", // optional
    //             providerOptions,
    //         });
    //         // setWeb3Modal(web3ModalInstance);
    //         setWeb3Modal(web3Modal);
    //         // console.log("initial set web3Modal", web3Modal);
    //     }
    // }, []);

    const connect = useCallback(async (opts) => {
        // Launch modal with the given options
        // TODO: Implement instantiation with opts
        const web3Modal = new Web3Modal({
            network: "mainnet", // optional
            cacheProvider: true,
            theme: "dark", // optional
            providerOptions,
        });

        if (web3Modal) {
            try {
                // Set up Ethers provider and initial state with the response from the web3Modal
                const web3ModalProvider = await web3Modal.connect();
                const initialProvider = new ethers.providers.Web3Provider(web3ModalProvider);

                // const provider = await web3Modal.connect();
                // const web3Provider = new ethers.providers.Web3Provider(provider);
                const signer = await initialProvider.getSigner();
                const address = await signer.getAddress();
                const accounts = await initialProvider.listAccounts();
                const balance = ethers.utils.formatEther(await initialProvider.getBalance(address)) || 0;
                const getNetwork = () => initialProvider.getNetwork();
                const network = await getNetwork();

                // Set up the nextState
                const nextState = {
                    web3Modal,
                    provider: initialProvider,
                    network: network,
                    account: accounts[0],
                    address: address,
                    balance: balance,
                };

                const message = new SiweMessage({
                    domain: window.location.host,
                    address: address,
                    statement: `Sign in with Ethereum to ${window.location.host}`,
                    uri: window.location.origin,
                    version: '1',
                    chainId: network.chainId,
                    nonce: await getCsrfToken(),
                });

                const signedMessage = await signer.signMessage(message.prepareMessage());
                // console.log(`Message: ${message}`);
                // console.log(`JSON Message: ${JSON.stringify(message)}`);
                // console.log(`Signed Message: ${signedMessage}`);
                signIn('credentials', {
                    message: JSON.stringify(message),
                    redirect: false,
                    signature: signedMessage,
                    callbackUrl: '/',
                });

                // TODO: Backend logic to create account in MongoDB

                // Set up event listeners to handle state changes
                web3ModalProvider.on('accountChanged', async (accounts) => {
                    useStore.setState({
                        account: accounts[0],
                        address: accounts[0],
                        balance: ethers.utils.formatEther(await initialProvider.getBalance(accounts[0])) || 0,
                    })
                    toast.info('Changed Web3 Account', {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                });

                web3ModalProvider.on('chainChanged', async (_chainId) => {
                    const network = await getNetwork();
                    useStore.setState({ network });
                    toast.info('Changed Web3 Account', {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                });

                web3ModalProvider.on('disconnect', () => {
                    web3Modal.clearCachedProvider();
                });

                useStore.setState(nextState);

                toast.success('Connected to Web3', {
                    position: toast.POSITION.BOTTOM_LEFT
                });

                return nextState;
            } catch (e) {
                console.log('connect error', e);
            }
        } else {
            console.error('No Web3Modal');
        }
    }, [])

    const disconnect = useCallback(async () => {
        if (web3Modal) {
            // Try to clear the cache with optional chaining
            if (typeof web3Modal?.clearCachedProvider === "function")
                web3Modal?.clearCachedProvider();

            // if (provider?.disconnect && typeof provider.disconnect === 'function') {
            //     await provider.disconnect();
            //     // await signOut();  //Only for client side
            // }

            useStore.setState({
                provider: undefined,
                network: undefined,
                account: undefined,
                address: undefined,
                balance: 0,
            });

            toast.error('Disconnected from Web3', {
                position: toast.POSITION.BOTTOM_LEFT
            });
        } else {
            console.error('No Web3Modal');
        }
    }, [web3Modal]);

    // Auto connect to the cached provider
    // useEffect(() => {
    //     if (web3Modal && web3Modal.cachedProvider) {
    //         connect();
    //     }
    // }, [connect]);

    // EIP-1193 events
    // useEffect(() => {
    //     if (provider?.on) {
    //         const handleAccountsChanged = async (accounts) => {
    //             toast.info('Changed Web3 Account', {
    //                 position: toast.POSITION.BOTTOM_LEFT
    //             })
    //             dispatch({
    //                 type: 'SET_ADDRESS',
    //                 address: accounts[0],
    //             });
    //             dispatch({
    //                 type: 'SET_BALANCE',
    //                 balance: ethers.utils.formatEther(await web3Provider.getBalance(accounts[0])) || 0,
    //             });
    //         }

    //         // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
    //         const handleChainChanged = (_hexChainId) => {
    //             if (typeof window !== 'undefined') {
    //                 console.log('switched to chain...', _hexChainId);
    //                 toast.info('Web3 Network Changed');
    //                 window.location.reload();
    //             } else {
    //                 console.log('window is undefined');
    //             }
    //         }

    //         const handleDisconnect = (error) => {
    //             // eslint-disable-next-line no-console
    //             console.log('disconnect', error);
    //             disconnect();
    //         }

    //         provider.on('accountsChanged', handleAccountsChanged);
    //         provider.on('chainChanged', handleChainChanged);
    //         provider.on('disconnect', handleDisconnect);

    //         // Subscription Cleanup
    //         return () => {
    //             if (provider.removeListener) {
    //                 provider.removeListener('accountsChanged', handleAccountsChanged);
    //                 provider.removeListener('chainChanged', handleChainChanged);
    //                 provider.removeListener('disconnect', handleDisconnect);
    //             }
    //         }
    //     }
    // }, [provider, disconnect]);

    return {
        web3Modal,
        provider,
        account,
        address,
        balance,
        network,
        connect,
        disconnect,
    }
}