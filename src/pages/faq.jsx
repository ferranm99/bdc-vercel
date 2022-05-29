import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Breadcrumb from "@components/breadcrumb";
import ServiceArea from "@containers/services/layout-01";
import SupportArea from "@containers/support";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Faq = () => (
    <Wrapper>
        <SEO pageTitle="FAQ" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="FAQ" currentPage="FAQ" />
            <ServiceArea />
            <SupportArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Faq;
