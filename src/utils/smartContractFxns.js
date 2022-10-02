// import { ethers } from "ethers";
const { runProof } = require("@utils/generateMerkleProof");
const abi = require("@utils/BDC.json");
const ethers = require("ethers");
const contractABI = abi.abi;
const { whiteList, contractAddress } = require("./contractData.json");

//used to check if user is whitelisted
export const isWhitelisted = async (account) => {
    if (account) {
        const proof = await runProof(account, whiteList);
        const isVerified = proof.proof ? true : false;
        return isVerified;
    }
    return false;
};
//Original code using browser window
// export const grabConnectedContract = (window) => {
//     const { ethereum } = window;
//     console.log(ethereum);
//     if (ethereum) {
//         const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner();
//         const connectedContract = new ethers.Contract(
//             contractAddress,
//             contractABI,
//             signer
//         );
//         return connectedContract;
//     } else {
//         console.log("Ethereum object doesn't exist!");
//     }
// };

//Obtains connected contract given a provider and imported ABI + Address
export const grabConnectedContract = (provider) => {
    if (provider) {
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );
        return connectedContract;
    } else {
        console.log("Provider given is undefined/invalid.");
    }
};

/*
        GETTER FUNCTIONS
*/
export const getContractStatus = async (window) => {
    const connectedContract = grabConnectedContract(window);
    const txn = await connectedContract.paused();
    return txn;
};

const getWLSalePrice = async (window) => {
    const connectedContract = grabConnectedContract(window);
    console.log(connectedContract);
    // TODO: Need to grab the Whitelist sales price from live contract
    // const p = await connectedContract.WL_SALE_PRICE();
    const p = await connectedContract.PUBLIC_SALE_PRICE();
    console.log(p);
    let hexStr = p._hex.toString(16);
    return ethers.utils.formatEther(hexStr);
};

const getPublicSalePrice = async (window) => {
    const connectedContract = grabConnectedContract(window);
    const p = await connectedContract.PUBLIC_SALE_PRICE();
    let hexStr = p._hex.toString(16);
    return ethers.utils.formatEther(hexStr);
};
//gets all the required contract data into useContext for rendering the mint functionality
export const getContractValues = async (window) => {
    let WHITELIST_SALE_PRICE = await getWLSalePrice(window);
    let PUBLIC_SALE_PRICE = await getPublicSalePrice(window);
    let paused = await getContractStatus(window);
    return {
        WHITELIST_SALE_PRICE: WHITELIST_SALE_PRICE,
        PUBLIC_SALE_PRICE: PUBLIC_SALE_PRICE,
        paused: paused,
    };
};

/*
    MINT FUNCTIONS
*/
//Havent used since migration from GAC
// export const claimNFT = async (window, setIsClaiming) => {
//     try {
//         const connectedContract = grabConnectedContract(window);
//         let nftTxn = await connectedContract.claim();
//         setIsClaiming(true);
//         await nftTxn.wait();
//         //if error do something
//         // console.log(
//         //     `Minted, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
//         // );
//         setIsClaiming(false);
//         var doc = document.getElementById("mintAlert");
//         doc.classList.add("alert-success");
//         doc.classList.remove("alert-danger");
//         doc.innerHTML = `Thank you for minting. <br/><a href="https://rinkeby.etherscan.io/tx/${nftTxn.hash}" target="_blank">See Transaction</a> `;
//         doc.classList.remove("hidden");
//     } catch (error) {
//         console.log(error);
//         handleFailMint(error, setIsClaiming);
//     }
// };

export const mintNFT = async (window, mintQuantity, setIsClaiming) => {
    try {
        const connectedContract = grabConnectedContract(window);
        const mintPrice = await getPublicSalePrice(window);
        const price = (mintPrice * mintQuantity).toFixed(3);
        const overrides = {
            value: ethers.utils.parseEther(price),
            gasLimit: 230000, //optional
        };
        const accounts = await ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        let nftTxn = await connectedContract.mint(
            account,
            mintQuantity,
            overrides
        );
        setIsClaiming(true);
        await nftTxn.wait();
        //if error do something
        // console.log(
        //     `Minted, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        // );
        setIsClaiming(false);
        var doc = document.getElementById("mintAlert");
        doc.classList.add("alert-success");
        doc.classList.remove("alert-danger");
        doc.innerHTML = `Thank you for minting. <br/><a href="https://rinkeby.etherscan.io/tx/${nftTxn.hash}" target="_blank">See Transaction</a> `;
        doc.classList.remove("hidden");
    } catch (error) {
        console.log(error);
        // handleFailMint(error, setIsClaiming);
    }
};

export const WLMintNFT = async (window, mintQuantity, setIsClaiming) => {
    try {
        const connectedContract = grabConnectedContract(window);
        //valid entry
        console.log("connected to contract", connectedContract);
        const { ethereum } = window;

        const mintPrice = await getWLSalePrice(window);
        const price = (mintPrice * mintQuantity).toFixed(3);
        const overrides = {
            value: ethers.utils.parseEther(price),
            gasLimit: 230000, //optional
        };
        const accounts = await ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            console.log(provider);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            );
            //**IMPORTANT** Get proof in order to provide for minting
            const proof = await runProof(account, whiteList);
            let nftTxn2 = await connectedContract.WLMint(
                account,
                mintQuantity,
                proof.proof,
                overrides
            );
            setIsClaiming(true);
            await nftTxn2.wait();
            // console.log(
            //     `Minted, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn2.hash}`
            // );
            setIsClaiming(false);
            // var doc = document.getElementById("mintAlert");
            // doc.classList.add("alert-success");
            // doc.classList.remove("alert-danger");
            // doc.innerHTML = `Thank you for minting. <br/><a href="https://rinkeby.etherscan.io/tx/${nftTxn2.hash}" target="_blank">See Transaction</a> `;
            // doc.classList.remove("hidden");
        } else {
            console.log("Ethereum object doesn't exist!");
        }
    } catch (error) {
        console.log(error);
        // handleFailMint(error, setIsClaiming);
    }
};

//disabled, this function is used to find the count of currently owned apes
// export const findApeCount = async (
//     userAddress,
//     contractAddress,
//     setApeCount
// ) => {
//     try {
//         //Url scrapes from rinkeby etherscan, change to mainnet url upon deployment to mainnet.
//         const response = await axios.get(
//             `https://rinkeby.etherscan.io/token/${contractAddress}?a=${userAddress}`
//         );

//         if (response.status === 200) {
//             const $ = cheerio.load(response.data);
//             let tokenString = $(
//                 "#ContentPlaceHolder1_divFilteredHolderBalance"
//             )[0].children[2].data.replace("\n", "");
//             let tokenSplit = tokenString.split(" ");
//             let balance = tokenSplit[0];
//             //const tokenName = tokenSplit[1];
//             setApeCount(balance);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// };
