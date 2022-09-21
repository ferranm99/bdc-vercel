// import { useEffect, useState, createContext } from "react";
import { useEffect } from "react";
// import { ThirdwebProvider } from "@3rdweb/react";
// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
// import { MoralisProvider } from "react-moralis";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import SSRProvider from "react-bootstrap/SSRProvider";
import ReactGA from "react-ga4";
// import { Web3ContextProvider } from "../context";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/scss/style.scss";
import "../assets/css/custom.css";
import "../assets/css/carousel.css";
import "../assets/css/timeline.min.css";
// import "../assets/css/thirdweb.chakra.css";
import "react-toastify/dist/ReactToastify.css";
// import { getContractValues } from "@utils/smartContractFxns";
// import { useWeb3Context } from "src/context";
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";

// const moralisAppId = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
// const moralisServerURL = process.env.NEXT_PUBLIC_MORALIS_SERVER;
// *Depreciated - 3rdweb specific variables
// const supportedChainIds = [1, 4, 137];
// const supportedChainIds = [1, 4];
// const connectors = {
//     injected: {},
//     walletlink: {
//         appName: "Bad Dogs Company",
//         url: "https://baddogscompany.com",
//         darkMode: false,
//     },
//     walletconnect: {},
// };
// Initialized Google Analytics GA4
ReactGA.initialize("G-9P2JCG9QY5");

const MyApp = ({ Component, pageProps }) => {
    // const { web3Provider, connect, disconnect, address, balance, account } =
    //     useWeb3Context();
    const router = useRouter();
    // const [isWhiteListed, setWhitelistStatus] = useState(false);
    // const [contractValues, setContractValues] = useState({});

    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);

    useEffect(() => {
        // console.log(process.env.NEXT_PUBLIC_MORALIS_APP_ID);
        document.body.className = `${pageProps.className}`;
    });

    // useEffect(async () => {
    //     const providerOptions = {
    //         /* See Provider Options Section */
    //     };

    //     const web3Modal = new Web3Modal({
    //         network: "mainnet", // optional
    //         cacheProvider: true, // optional
    //         providerOptions, // required
    //     });

    //     const instance = await web3Modal.connect();
    //     const provider = new ethers.providers.Web3Provider(instance);

    //     try {
    //         setContractValues(await getContractValues(provider));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, []);

    return (
        // <ThirdwebWeb3Provider
        //     connectors={connectors}
        //     supportedChainIds={supportedChainIds}
        // >
        <SessionProvider session={pageProps.session} refetchInterval={0}>
            <SSRProvider>
                {/* <ContractContext.Provider
                    value={{ isWhiteListed, contractValues }}
                > */}
                {/* <Web3ContextProvider> */}
                {/* <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}> */}
                <ThemeProvider defaultTheme="dark">
                    <Component {...pageProps} />
                </ThemeProvider>
                {/* </MoralisProvider> */}
                {/* </Web3ContextProvider> */}
                {/* </ContractContext.Provider> */}
            </SSRProvider>
        </SessionProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        session: PropTypes.object,
        className: PropTypes.string,
    }),
};
// export const ContractContext = createContext();
export default MyApp;
