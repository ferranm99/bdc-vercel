import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Breadcrumb from "@components/breadcrumb";
import LiveExploreArea from "@containers/live-explore/layout-02";

// Demo data
import productData from "../data/products-02.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => {
    const liveAuctionData = productData
        .filter(
            (prod) =>
                prod?.auction_date && new Date() <= new Date(prod?.auction_date)
        )
        .slice(0, 5);
    return (
        <Wrapper>
            <SEO pageTitle="Live Explore" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Live Explore"
                    currentPage="Live Explore"
                />
                <LiveExploreArea
                    data={{
                        products: liveAuctionData,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home02;
