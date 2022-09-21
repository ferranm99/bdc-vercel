import PropTypes from "prop-types";
import clsx from "clsx";
import ShareDropdown from "../share-dropdown";

// const NftTitle = ({ className, title, tokenId, owner, likeCount }) => (
const NftTitle = ({ className, title, tokenId, owner }) => (
    <div className={clsx("pd-title-area", className)}>
        <h4 className="title">{title}</h4>
        <div className="pd-react-area">
            {/* <div className="heart-count">
                <i className="feather-heart" />
                <span>{likeCount}</span>
            </div> */}
            <div className="count">
                <ShareDropdown tokenId={tokenId} owner={owner} />
            </div>
        </div>
    </div>
);

NftTitle.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    tokenId: PropTypes.string,
    owner: PropTypes.string,
    // likeCount: PropTypes.number,
};

// NftTitle.defaultProps = {
//     likeCount: 0,
// };

export default NftTitle;
