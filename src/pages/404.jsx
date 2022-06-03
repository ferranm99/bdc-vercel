import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Button from "@ui/button";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const ErrorPage = () => (
    <Wrapper>
        <SEO pageTitle="404" />
        <Header />
        <div className="rn-not-found-area rn-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rn-not-found-wrapper">
                            <Image
                                src="/images/bdc/logo/bdc-logo-400px.png"
                                alt="BDC Logo"
                                className="ml--40"
                                width={500}
                                height={281}
                            />
                            <h2 className="large-title">404</h2>
                            <h3 className="title">Page not found!</h3>
                            <p>The page you are looking for not available.</p>
                            <Button path="/">Go Back To Home</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </Wrapper>
);

export default ErrorPage;
