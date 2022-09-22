import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Product from "@components/product/layout-bdc";
import Button from "@ui/button";
import { SectionTitleType, ProductType } from "@utils/types";
// import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
// import useSWRImmutable from "swr/immutable";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 10;

const ExploreProductArea = ({ className, space, prodData }) => {
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
        (index) =>
            `/api/genesis/all/?page=${index + 1}&limit=${PAGE_SIZE}`,
        fetcher
    );

    // const { data, error } = useSWR('/api/genesis/all/?page=1&limit=10', fetcher);

    const tokens = data ? [].concat(...data) : [];
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
        isLoadingInitialData ||
        (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.length === 0;
    const isReachingEnd =
        isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
    const isRefreshing = isValidating && data && data.length === size;

    if (isLoadingInitialData) return <h1>Loading</h1>;  // TODO: Implement <Spinner />
    if (data) console.log(tokens);
    if (error) return <h1>Error</h1>;

    // useEffect(() => {
    //     const currentProducts = prodData.products.slice(0, 10);
    //     setProducts(currentProducts);
    //     setHasMore(currentProducts.length < prodData.products.length);
    // }, [prodData.products]);

    const loadMoreHandler = () => {
        const currentProducts = prodData.products.slice(0, products.length + 4);
        setProducts(currentProducts);
        setHasMore(currentProducts.length < prodData.products.length);
    };

    return (
        <div
            className={clsx(
                "rn-product-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                {prodData?.section_title && (
                    <div className="row mb--50 align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <SectionTitle
                                className="mb--0"
                                {...prodData.section_title}
                            />
                        </div>
                    </div>
                )}

                {products.length > 0 && (
                    <div className="row g-5">
                        {products.map((prod) => (
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                                <Product
                                    overlay
                                    placeBid={!!prodData.placeBid}
                                    title={prod.title}
                                    slug={prod.slug}
                                    latestBid={prod.latestBid}
                                    price={prod.price}
                                    likeCount={prod.likeCount}
                                    auction_date={prod.auction_date}
                                    image={prod.images?.[0]}
                                    authors={prod.authors}
                                    bitCount={prod.bitCount}
                                />
                            </div>
                        ))}
                    </div>
                )}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="view-more-btn mt--50">
                            <Button
                                color="primary-alta"
                                disabled={isLoadingMore || isReachingEnd}
                                fullwidth
                                onClick={() => setSize(size + 1)}
                            >
                                {isLoadingMore
                                    ? (<>loading...</>)
                                    : isReachingEnd
                                        ? (<>no more records</>)
                                        : (<>load more</>)}
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    prodData: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType),
        placeBid: PropTypes.bool,
    }),
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;


{/* <Button
color="primary-alta"
className={!hasMore ? "disabled" : ""}
fullwidth
onClick={loadMoreHandler}
>
{hasMore ? (
    <>View More Items</>
) : (
    <>No More Items</>
)}
</Button> */}

{/* <button
disabled={isLoadingMore || isReachingEnd}
onClick={() => setSize(size + 1)}
>
{isLoadingMore
  ? "loading..."
  : isReachingEnd
  ? "no more issues"
  : "load more"}
</button> */}