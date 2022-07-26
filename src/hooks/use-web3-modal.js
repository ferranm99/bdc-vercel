import { useEffect, useState, useReducer, useCallback } from 'react';
import { ethers } from 'ethers';
// import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
// import WalletConnectProvider from '@walletconnect/web3-provider';
import { getCsrfToken, signIn } from 'next-auth/react';
import { SiweMessage } from 'siwe';
import Web3Modal from 'web3modal';
// import { Web3Auth } from "@web3auth/web3auth";

import {
    // Web3ProviderState,
    // Web3Action,
    web3InitialState,
    web3Reducer,
} from '../reducers';

import { toast } from 'react-toastify';

const providerOptions = {
    // walletconnect: {
    //     package: WalletConnectProvider, // required
    //     options: {
    //         infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    //     },
    // },
    // coinbasewallet: {
    //     package: CoinbaseWalletSDK, // Required
    //     options: {
    //         appName: "Bad Dogs Company", // Required
    //         infuraId: process.env.NEXT_PUBLIC_INFURA_ID, // Required
    //         rpc: "", // Optional if `infuraId` is provided; otherwise it's required
    //         chainId: 1, // Optional. It defaults to 1 if not provided
    //         darkMode: true // Optional. Use dark theme, defaults to false
    //     }
    // },
    // web3auth: {
    //     package: Web3Auth, // required
    //     options: {
    //         infuraId: process.env.NEXT_PUBLIC_INFURA_ID // required
    //     }
    // },
};

let web3Modal = Web3Modal | null;
if (typeof window !== 'undefined') {
    // console.log("inside window if statement");
    // Only create new Web3Modal instance if web3Modal object is null
    if (!web3Modal) {
        // console.log(`creating new web3Modal instance: ${web3Modal}`);
        web3Modal = new Web3Modal({
            network: "mainnet", // optional
            cacheProvider: true,
            theme: "dark", // optional
            providerOptions, // required
        })
    }
};

export const useWeb3Modal = () => {
    // const [web3Modal, setWeb3Modal] = useState();
    const [state, dispatch] = useReducer(web3Reducer, web3InitialState);
    const { provider, web3Provider, address, balance, network } = state;

    // useEffect(async () => {
    //     console.log("inside setWeb3Modal");
    //     const web3ModalInstance = await new Web3Modal({
    //         network: "mainnet", // optional
    //         cacheProvider: true,
    //         theme: "dark", // optional
    //         providerOptions,
    //     });
    //     setWeb3Modal(web3ModalInstance);
    //     console.log("initial set web3Modal", web3Modal);
    // }, []);

    const connect = useCallback(async () => {
        if (web3Modal) {
            try {
                const provider = await web3Modal.connect();
                const web3Provider = new ethers.providers.Web3Provider(provider);
                const signer = await web3Provider.getSigner();
                const address = await signer.getAddress();
                const balance = ethers.utils.formatEther(await web3Provider.getBalance(address)) || 0;
                const network = await web3Provider.getNetwork();

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

                dispatch({
                    type: 'SET_WEB3_PROVIDER',
                    provider,
                    web3Provider,
                    address,
                    balance,
                    network,
                });

                toast.success('Connected to Web3', {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } catch (e) {
                console.log('connect error', e);
            }
        } else {
            console.error('No Web3Modal');
        }
    }, [])

    const disconnect = useCallback(async () => {
        if (web3Modal) {
            web3Modal.clearCachedProvider();
            if (provider?.disconnect && typeof provider.disconnect === 'function') {
                await provider.disconnect();
                // await signOut();  //Only for client side
            }
            toast.error('Disconnected from Web3', {
                position: toast.POSITION.BOTTOM_LEFT
            });
            dispatch({
                type: 'RESET_WEB3_PROVIDER',
            });
        } else {
            console.error('No Web3Modal');
        }
    }, [provider]);

    // Auto connect to the cached provider
    // useEffect(() => {
    //     if (web3Modal && web3Modal.cachedProvider) {
    //         connect();
    //     }
    // }, [connect]);

    // EIP-1193 events
    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = async (accounts) => {
                toast.info('Changed Web3 Account', {
                    position: toast.POSITION.BOTTOM_LEFT
                })
                dispatch({
                    type: 'SET_ADDRESS',
                    address: accounts[0],
                });
                dispatch({
                    type: 'SET_BALANCE',
                    balance: ethers.utils.formatEther(await web3Provider.getBalance(accounts[0])) || 0,
                });
            }

            // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
            const handleChainChanged = (_hexChainId) => {
                if (typeof window !== 'undefined') {
                    console.log('switched to chain...', _hexChainId);
                    toast.info('Web3 Network Changed');
                    window.location.reload();
                } else {
                    console.log('window is undefined');
                }
            }

            const handleDisconnect = (error) => {
                // eslint-disable-next-line no-console
                console.log('disconnect', error);
                disconnect();
            }

            provider.on('accountsChanged', handleAccountsChanged);
            provider.on('chainChanged', handleChainChanged);
            provider.on('disconnect', handleDisconnect);

            // Subscription Cleanup
            return () => {
                if (provider.removeListener) {
                    provider.removeListener('accountsChanged', handleAccountsChanged);
                    provider.removeListener('chainChanged', handleChainChanged);
                    provider.removeListener('disconnect', handleDisconnect);
                }
            }
        }
    }, [provider, disconnect]);

    return {
        provider,
        web3Provider,
        address,
        balance,
        network,
        connect,
        disconnect,
    }
}