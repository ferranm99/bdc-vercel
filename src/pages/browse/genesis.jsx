import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-bdc";

// Demo data
import productData from "../../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => (
    <Wrapper>
        <SEO pageTitle="Explore (Genesis)" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Explore Genesis"
                currentPage="Genesis Collection"
            />
            <ExploreProductArea
                prodData={{
                    products: productData,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
