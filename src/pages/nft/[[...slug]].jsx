import PropTypes from "prop-types";
import { useRouter } from 'next/router';
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Breadcrumb from "@components/breadcrumb";
import NftDetailsArea from "@containers/nft-details";
// import ProductArea from "@containers/product/layout-03";
// import { shuffleArray } from "@utils/methods";

// demo data, change to MongoDB later
// import collectionData from "../../data/collections.json";
// import productData from "../../data/products.json";

// const NftDetails = ({ product, collection }) => {
const NftDetails = () => {
    const router = useRouter();
    // const { slug } = router.query;
    const slug = router.query.slug || [];

    console.log(`What is slug: ${slug}`);
    console.log(slug);

    return (
        <Wrapper>
            <SEO pageTitle="NFT Details" />
            <Header />
            <main id="main-content">
                <Breadcrumb pageTitle="NFT Details" currentPage="NFT Details" />
                {/* <NftDetailsArea product={product} collection={collection} slug={slug} /> */}
                <NftDetailsArea slug={slug} />
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
};

export const getServerSideProps = async (context) => {
    const { slug } = context.query;
    // If slug is "undefined", since "undefined" cannot be serialized, server will throw error
    // But null can be serializable
    if (!slug) {
        slug = null;
    }
    // now we are passing the slug to the component
    return {
        props: {
            className: "template-color-1",
            slug: slug
        }
    };
};

// Disable getStaticPaths and getStaticProps

// export async function getStaticPaths() {
//     return {
//         paths: productData.map(({ slug }) => ({
//             params: {
//                 slug,
//             },
//         })),
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }) {
//     const product = productData.find(({ slug }) => slug === params.slug);
//     // const collection = collectionData.find(({ slug }) => slug === "/genesis");
//     // const collection = collectionData.find(e => e.id == 1);
//     const collection = collectionData.find(e => e.slug === "/genesis");
//     // const { cateogries } = product;
//     // const recentViewProducts = shuffleArray(productData).slice(0, 5);
//     // const relatedProducts = productData
//     //     .filter((prod) => prod.cateogries?.some((r) => cateogries?.includes(r)))
//     //     .slice(0, 5);
//     return {
//         props: {
//             className: "template-color-1",
//             product,
//             collection
//             // recentViewProducts,
//             // relatedProducts,
//         }, // will be passed to the page component as props
//     };
// }

// NftDetails.propTypes = {
//     product: PropTypes.shape({}),
//     // contract: PropTypes.shape({}),
//     // recentViewProducts: PropTypes.arrayOf(PropTypes.shape({})),
//     // relatedProducts: PropTypes.arrayOf(PropTypes.shape({})),
// };

export default NftDetails;
