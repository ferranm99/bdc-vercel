import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import Button from "@ui/button";
import GalleryTab from "@components/nft-details/gallery-tab";
import NftTitle from "@components/nft-details/title";
import NftWallet from "@components/nft-details/wallet";
import NftCollection from "@components/nft-details/collection";
import NftBidTab from "@components/nft-details/bid-tab";
// import PlaceBet from "@components/product-details/place-bet";
import { ImageType } from "@utils/types";
import StoryModal from "@components/modals/story-modal";
import { useSession } from "next-auth/react";
import useSWRImmutable from "swr/immutable";

const fetcher = (url) => fetch(url).then((res) => res.json());

const NftDetailsArea = ({ space, className, product, collection }) => {
    const [showStoryModal, setShowStoryModal] = useState(false);
    const { data: session } = useSession();
    const { data, error } = useSWRImmutable("/api/genesis/1", fetcher);

    const handleStoryModal = () => {
        setShowStoryModal((prev) => !prev);
    };

    // console.log(data);
    if (!data && !error) return <h1>Loading ...</h1>
    if (error) return <h1>Unable to load {error}</h1>

    return (
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
                            <GalleryTab images={product.images} imageUrl={data.imageUrl} />
                        </Sticky>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                        <div className="rn-pd-content-area">
                            <NftTitle
                                title={data.name}
                                tokenId={data.tokenId}
                                owner={data.owner}
                                likeCount={product.likeCount}
                            />
                            <span className="bid">
                                <h6>Highest bid{" "}
                                    <span className="price">
                                        {product.price.amount}
                                        {product.price.currency}
                                    </span>
                                </h6>
                            </span>

                            <div className="catagory-collection">
                                <NftWallet owner={product.owner} />
                                <NftCollection
                                    collection={collection}
                                />
                                {/* <NftCollection
                                    collection={product.collection}
                                /> */}
                            </div>
                            <h6 className="title-name">Story</h6>
                            <div className="catagory-collection">
                                <span className="color-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non laoreet orci. Duis vel orci non quam euismod lobortis a in mauris. Aliquam erat volutpat. Integer gravida vulputate maximus. Morbi ut elementum quam, ut imperdiet elit. Sed rutrum elit in fermentum placerat. Aenean sed turpis in lectus porttitor cursus quis vitae libero.
                                    <br /><br />
                                    Vivamus viverra mi eget tellus bibendum viverra. Sed sagittis lacinia laoreet. Vivamus sagittis libero sed sem feugiat eleifend. Vivamus venenatis, ex eget faucibus placerat.
                                </span>
                            </div>
                            {/* {(session && data.owner == session.address) ? ( */}
                            {(session) ? (
                                <Button
                                    color="primary-alta"
                                    type="button"
                                    onClick={handleStoryModal}
                                >
                                    Write your story
                                </Button>
                            ) : ""}
                            <div className="rn-bid-details">
                                <NftBidTab
                                    bids={product?.bids}
                                    owner={product.owner}
                                    // properties={product?.properties}
                                    properties={data.traits}
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
                <StoryModal
                    show={showStoryModal}
                    tokenId={data.tokenId}
                    name={data.name}
                    handleModal={handleStoryModal}
                />
            </div>
        </div>
    );
};

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
    collection: PropTypes.shape({}),
};

NftDetailsArea.defaultProps = {
    space: 1,
};

export default NftDetailsArea;
