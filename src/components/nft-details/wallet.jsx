import PropTypes from "prop-types";
import clsx from "clsx";
import TopWallet from "@components/top-wallet/layout-01";
// import { ImageType } from "@utils/types";

const NftWallet = ({ className, owner }) => (
    <div className={clsx("catagory", className)}>
        <span>
            Owner
            {/* Catagory <span className="color-body">10% royalties</span> */}
        </span>
        <TopWallet address={owner} />
    </div>
);

NftWallet.propTypes = {
    className: PropTypes.string,
    owner: PropTypes.string,
};

export default NftWallet;

/* <TopWallet
    address={owner}
    address={owner.name}
    slug={owner.slug}
    image={{ src: owner.image.src, width: 44, height: 44 }}
/> */
