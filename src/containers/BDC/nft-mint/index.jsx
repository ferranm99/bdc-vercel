import PropTypes from "prop-types";
import clsx from "clsx";
import { useState, useContext, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import NFTDisplaySection from "@containers/BDC/nft-display";
import { useWeb3Context } from "src/context";
import { ContractContext } from "src/pages/_app";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMinus,
    faPlus,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Particles from "@ui/particles";
// import { checkIfWalletIsConnected } from "@utils/connectWallet";
import { WLMintNFT, mintNFT } from "@utils/smartContractFxns";
import { contractAddress, whiteList } from "@utils/contractData.json";
import { isWhitelisted } from "@utils/smartContractFxns";

const NFTMintSection = ({ className, id, space }) => {
    const { web3Provider, connect, disconnect, address, balance, account } =
        useWeb3Context();
    // const { data: session, status } = useSession();

    const { contractValues } = useContext(ContractContext);
    const [onWhitelist, setOnWhitelist] = useState();
    const [isClaiming, setIsClaiming] = useState(false);
    const PUBLIC_PRICE = contractValues.PUBLIC_SALE_PRICE || 0;
    const WHITELIST_PRICE = contractValues.WHITELIST_SALE_PRICE || 0;
    const [mintPrice, setMintPrice] = useState(PUBLIC_PRICE);

    useEffect(async () => {
        console.log(contractValues);
        let session = await getSession();

        // console.log(session);
        // console.log(await isWhitelisted(session.address));
        session !== null && session !== undefined
            ? setMintPrice(
                  (await isWhitelisted(session.address))
                      ? WHITELIST_PRICE
                      : PUBLIC_PRICE
              )
            : setMintPrice(PUBLIC_PRICE);
    }, []);

    // useEffect(async () => {
    //     // window is accessible here
    //     try {
    //         // setMintPrice(
    //         //     !contractValues.paused && onWhitelist
    //         //         ? contractValues.WHITELIST_SALE_PRICE
    //         //         : contractValues.PUBLIC_SALE_PRICE
    //         // );
    //         //temporary log - to see contract values
    //         // console.log(await grabConnectedContract(window));
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     console.log(contractValues);
    // }, []);

    const max = contractValues.maxDogs;
    const [counter, setCounter] = useState(1);
    const SALETYPE = "OFF"; //unimplemented, use this to change values for mint type
    const incrementCounter = () => {
        if (counter >= 5) {
            setCounter(5);
        } else {
            setCounter(counter + 1);
        }
    };
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    let setMax = () => {
        setCounter(5);
    };

    /// const { Moralis } = useMoralis();
    // const contractProcessor = useWeb3ExecuteFunction();

    // async function changeURI(text) {
    //     let options = {
    //         contractAddress: contractAddress,
    //         functionName: "setBaseURI",
    //         abi: [
    //             {
    //                 inputs: [
    //                     {
    //                         internalType: "string",
    //                         name: "newBaseURI",
    //                         type: "string",
    //                     },
    //                 ],
    //                 name: "setBaseURI",
    //                 outputs: [],
    //                 stateMutability: "nonpayable",
    //                 type: "function",
    //             },
    //         ],
    //         params: {
    //             newBaseURI: text,
    //         },
    //     };
    //     await contractProcessor.fetch({
    //         params: options,
    //     });
    // }

    return (
        <div
            className={clsx(
                "rn-service-area",
                space === 1 && "rn-section-gapTop",
                space === 2 && "pb--70",
                className
            )}
            id={id}
        >
            <Particles />
            <div className="container text-light">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 bg-dark mintForm mb-4">
                        <div className="justify-content-center text-center">
                            <div className="mintTitle">Mint BDC</div>
                            <div className="mintSupply">4000 NFTs</div>
                        </div>
                        <hr />
                        <small className="mintPrice col-12">
                            Price: <span>{mintPrice} Ξ</span>
                        </small>
                        <div className="qty">
                            Amount:
                            <button
                                className="minus"
                                onClick={decrementCounter}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span className="counter">{counter}</span>
                            <button className="plus" onClick={incrementCounter}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                            <button
                                className="btn btn-light text-dark maxMint"
                                onClick={setMax}
                            >
                                MAX
                            </button>
                        </div>
                        <div>
                            {" "}
                            <label
                                htmlFor="mintTotal"
                                style={{ fontSize: "2.5rem" }}
                            >
                                Total:{" "}
                            </label>
                            <div className="mintTotal" name="mintTotal">
                                &nbsp;
                                {(mintPrice * counter).toFixed(3) + " Ξ"}
                            </div>
                        </div>

                        <hr />
                        {contractValues.paused == true ? (
                            <button
                                className="btn btn-primary w-100 "
                                disabled
                                type="submit"
                            >
                                Coming Soon
                            </button>
                        ) : onWhitelist == true ? (
                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                                onClick={() => {
                                    // changeURI("moralis.io");
                                    WLMintNFT(window, counter, setIsClaiming);
                                }}
                            >
                                <strong>
                                    {!isClaiming ? "MINT" : "MINTING..."}
                                </strong>
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                                onClick={() => {
                                    // changeURI("moralis.io");
                                    mintNFT(window, counter, setIsClaiming);
                                }}
                            >
                                <strong>
                                    {!isClaiming ? "MINT" : "MINTING..."}
                                </strong>
                            </button>
                        )}
                    </div>
                    <NFTDisplaySection />
                </div>
            </div>
        </div>
    );
};

NFTMintSection.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
};
NFTMintSection.defaultProps = {
    space: 1,
};

export default NFTMintSection;
