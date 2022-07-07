import { useEffect } from "react";
// import { ThirdwebProvider } from "@3rdweb/react";
// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { MoralisProvider } from "react-moralis";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import SSRProvider from "react-bootstrap/SSRProvider";
import ReactGA from "react-ga4";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/scss/style.scss";
import "../assets/css/custom.css";
import "../assets/css/carousel.css";
import "../assets/css/timeline.min.css";
// import "../assets/css/thirdweb.chakra.css";
import "react-toastify/dist/ReactToastify.css";

const moralisAppId = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
const moralisServerURL = process.env.NEXT_PUBLIC_MORALIS_SERVER;
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
    const router = useRouter();
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
    return (
        // <ThirdwebWeb3Provider
        //     connectors={connectors}
        //     supportedChainIds={supportedChainIds}
        // >
        <SSRProvider>
            <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
                <ThemeProvider defaultTheme="dark">
                    <Component {...pageProps} />
                </ThemeProvider>
            </MoralisProvider>
        </SSRProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
