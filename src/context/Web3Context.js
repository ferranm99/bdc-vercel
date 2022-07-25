import React, { createContext, useContext } from 'react';
// import { useWeb3 } from '../hooks/Web3Client';
import { useWeb3Modal } from '../hooks/use-web3-modal';
// import { Web3ProviderState, web3InitialState } from '../reducers';
import { web3InitialState } from '../reducers';

const Web3Context = createContext(web3InitialState);

export const Web3ContextProvider = (props) => {
    const web3ProviderState = useWeb3Modal();

    return (
        <Web3Context.Provider value={web3ProviderState}>
            {props.children}
        </Web3Context.Provider>
    )
}

export function useWeb3Context() {
    // console.log(useContext(Web3Context));
    return useContext(Web3Context);
}