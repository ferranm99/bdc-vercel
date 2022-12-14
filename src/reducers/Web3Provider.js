import { ethers } from "ethers";

// Typescript specific exports

// export type Web3ProviderState = {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   provider: any
//   web3Provider: ethers.providers.Web3Provider | null | undefined
//   address: string | null | undefined
//   network: ethers.providers.Network | null | undefined
//   connect: (() => Promise<void>) | null
//   disconnect: (() => Promise<void>) | null
// };

// export const web3InitialState: Web3ProviderState = {
//   provider: null,
//   web3Provider: null,
//   address: null,
//   network: null,
//   connect: null,
//   disconnect: null,
// };

// export type Web3Action =
//     | {
//         type: 'SET_WEB3_PROVIDER'
//         provider?: Web3ProviderState['provider']
//         web3Provider?: Web3ProviderState['web3Provider']
//         address?: Web3ProviderState['address']
//         network?: Web3ProviderState['network']
//     }
//     | {
//         type: 'SET_ADDRESS'
//         address?: Web3ProviderState['address']
//     }
//     | {
//         type: 'SET_NETWORK'
//         network?: Web3ProviderState['network']
//     }
//     | {
//         type: 'RESET_WEB3_PROVIDER'
//     }

export const web3InitialState = {
    provider: null,
    web3Provider: null,
    address: null,
    balance: 0,
    network: null,
    connect: null,
    disconnect: null,
};

export function web3Reducer(state = web3InitialState, action) {
    switch (action.type) {
        case 'SET_WEB3_PROVIDER':
            // Store state in localStorage
            // window.localStorage.setItem('WEB3_STATE', JSON.stringify(state));
            // console.log("SET_WEB3_PROVIDER");
            return {
                ...state,
                provider: action.provider,
                web3Provider: action.web3Provider,
                address: action.address,
                balance: action.balance,
                network: action.network,
            };
        case "SET_ADDRESS":
            // console.log("SET_ADDRESS");
            return {
                ...state,
                address: action.address,
            };
        case "SET_BALANCE":
            // console.log("SET_BALANCE");
            return {
                ...state,
                balance: action.balance,
            };
        case "SET_NETWORK":
            // console.log("SET_NETWORK");
            return {
                ...state,
                network: action.network,
            };
        case "RESET_WEB3_PROVIDER":
            // console.log("RESET_WEB3_PROVIDER");
            return web3InitialState;
        default:
            throw new Error();
    }
}
