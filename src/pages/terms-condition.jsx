import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Breadcrumb from "@components/breadcrumb";
import TermsAndConditionsArea from "@containers/terms-condition";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const TermsAndConditions = () => (
    <Wrapper>
        <SEO pageTitle="Terms & Conditions" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Terms & Conditions"
                currentPage="Terms & Conditions"
            />
            <TermsAndConditionsArea />
        </main>
        <Footer />
    </Wrapper>
);

export default TermsAndConditions;
