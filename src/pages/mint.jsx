import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Breadcrumb from "@components/breadcrumb";
// import ServiceArea from "@containers/services/layout-01";
// import SupportArea from "@containers/support";
import NFTMintSection from "@containers/BDC/nft-mint";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const MintArea = () => (
    <Wrapper>
        <SEO pageTitle="Mint" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Mint " currentPage="Mint" />
            <NFTMintSection />
        </main>
        <Footer />
    </Wrapper>
);

export default MintArea;
