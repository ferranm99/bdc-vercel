import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Breadcrumb from "@components/breadcrumb";
import NftDetailsArea from "@containers/nft-details";
// import ProductArea from "@containers/product/layout-03";
// import { shuffleArray } from "@utils/methods";

// demo data
import productData from "../../data/products.json";

const NftDetails = ({ product }) => (
    <Wrapper>
        <SEO pageTitle="NFT Details" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="NFT Details" currentPage="NFT Details" />
            <NftDetailsArea product={product} />
            {/* <ProductArea
                data={{
                    section_title: { title: "Recent View" },
                    products: recentViewProducts,
                }}
            />
            <ProductArea
                data={{
                    section_title: { title: "Related Item" },
                    products: relatedProducts,
                }}
            /> */}
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticPaths() {
    return {
        paths: productData.map(({ slug }) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const product = productData.find(({ slug }) => slug === params.slug);
    // const { cateogries } = product;
    // const recentViewProducts = shuffleArray(productData).slice(0, 5);
    // const relatedProducts = productData
    //     .filter((prod) => prod.cateogries?.some((r) => cateogries?.includes(r)))
    //     .slice(0, 5);
    return {
        props: {
            className: "template-color-1",
            product,
            // recentViewProducts,
            // relatedProducts,
        }, // will be passed to the page component as props
    };
}

NftDetails.propTypes = {
    product: PropTypes.shape({}),
    // contract: PropTypes.shape({}),
    // recentViewProducts: PropTypes.arrayOf(PropTypes.shape({})),
    // relatedProducts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default NftDetails;
