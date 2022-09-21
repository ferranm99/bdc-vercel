import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { truncateEthAddress } from "@utils/formatters";

const TopWallet = ({
    address,
    // total_sale,
    // image,
    // slug,
    className,
    isVarified,
    followBtn,
}) => (
    <div className={clsx("top-seller-inner-one", className)}>
        <div className="top-seller-wrapper">
            <div className={clsx("thumbnail", isVarified && "varified")}>
                <Anchor path="#">
                    <Image
                        src="/images/icons/wallet.svg"
                        alt={address}
                        width={44}
                        height={44}
                        layout="fixed"
                    />
                </Anchor>
                {/* {image?.src && ( */}
                {/* <Anchor path="#"> */}
                {/* <Image
                            src={image.src}
                            alt={image?.alt || name}
                            width={image?.width || 54}
                            height={image?.height || 54}
                            layout="fixed"
                        /> */}
                {/* </Anchor> */}
                {/* )} */}
            </div>
            <div className="top-seller-content">
                <CopyToClipboard
                    text={address}
                    onCopy={() =>
                        toast.success("Wallet address copied to clipboard.", {
                            position: toast.POSITION.BOTTOM_LEFT,
                        })
                    }
                >
                    <Button type="button" color="secondary" size="small">
                        {truncateEthAddress(address)}
                    </Button>
                </CopyToClipboard>

                {/* {total_sale && (
                    <span className="count-number">
                        {new Intl.NumberFormat("en-US", {
                            currency: "USD",
                        }).format(total_sale)}
                    </span>
                )} */}
            </div>
        </div>
        {followBtn && (
            // <Button path={slug} color="primary-alta" size="small">
            <Button path="" color="primary-alta" size="small">
                Follow
            </Button>
        )}
    </div>
);

TopWallet.propTypes = {
    address: PropTypes.string.isRequired,
    // total_sale: PropTypes.number,
    // slug: PropTypes.string.isRequired,
    // image: PropTypes.shape({
    //     src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
    //         .isRequired,
    //     alt: PropTypes.string,
    //     width: PropTypes.number,
    //     height: PropTypes.number,
    // }).isRequired,
    className: PropTypes.string,
    isVarified: PropTypes.bool,
    followBtn: PropTypes.bool,
};

export default TopWallet;
