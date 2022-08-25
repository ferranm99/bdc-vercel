import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import Button from "@ui/button";
import GalleryTab from "@components/nft-details/gallery-tab";
import NftTitle from "@components/nft-details/title";
import NftCategory from "@components/nft-details/category";
import NftCollection from "@components/nft-details/collection";
import NftBidTab from "@components/nft-details/bid-tab";
// import PlaceBet from "@components/product-details/place-bet";
import { ImageType } from "@utils/types";

// Demo Image

const NftDetailsArea = ({ space, className, product }) => (
    <div
        className={clsx(
            "product-details-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <Sticky>
                        <GalleryTab images={product.images} />
                    </Sticky>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                    <div className="rn-pd-content-area">
                        <NftTitle
                            title={product.title}
                            likeCount={product.likeCount}
                        />
                        <span className="bid">
                            <h6>Height bid{" "}
                                <span className="price">
                                    {product.price.amount}
                                    {product.price.currency}
                                </span>
                            </h6>
                        </span>
                        <h6 className="title-name">#22 Portal , Info bellow</h6>
                        <div className="catagory-collection">
                            <NftCategory owner={product.owner} />
                            <NftCollection
                                collection={product.collection}
                            />
                        </div>
                        <Button color="primary-alta" path="#">
                            Write your story
                        </Button>
                        <div className="rn-bid-details">
                            <NftBidTab
                                bids={product?.bids}
                                owner={product.owner}
                                properties={product?.properties}
                                tags={product?.tags}
                                history={product?.history}
                            />
                            {/* <PlaceBet
                                highest_bid={product.highest_bid}
                                auction_date={product?.auction_date}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

NftDetailsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        likeCount: PropTypes.number,
        price: PropTypes.shape({
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
        owner: PropTypes.shape({}),
        collection: PropTypes.shape({}),
        bids: PropTypes.arrayOf(PropTypes.shape({})),
        properties: PropTypes.arrayOf(PropTypes.shape({})),
        tags: PropTypes.arrayOf(PropTypes.shape({})),
        history: PropTypes.arrayOf(PropTypes.shape({})),
        highest_bid: PropTypes.shape({}),
        auction_date: PropTypes.string,
        images: PropTypes.arrayOf(ImageType),
    }),
};

NftDetailsArea.defaultProps = {
    space: 1,
};

export default NftDetailsArea;
