import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Service from "@components/service";
import { SectionTitleType, ItemType } from "@utils/types";
import NFTDisplaySection from "@containers/BDC/nft-display";
import { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Particles from "@ui/particles";

const NFTMintSection = ({ className, id, space, data }) => {
    const max = 5;
    const mintPrice = 0.10;
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
                            Price: <span>{mintPrice} ETH</span>
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
                        {SALETYPE === "OFF" ? (
                            <button
                                className="btn btn-primary w-100 "
                                disabled
                                type="submit"
                            >
                                Coming Soon
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                            >
                                Mint
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
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
NFTMintSection.defaultProps = {
    space: 1,
};

export default NFTMintSection;
