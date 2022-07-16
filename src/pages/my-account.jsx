import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Breadcrumb from "@components/breadcrumb";
import EditProfileArea from "@containers/edit-profile";
import { useWeb3Context } from "src/context";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const MyAccount = () => {
    const { web3Provider } = useWeb3Context();

    return (
        <Wrapper>
            <SEO pageTitle="My Account" />
            <Header />
            <main id="main-content">
                <Breadcrumb pageTitle="My Account" currentPage="My Account" />
                {web3Provider ? (
                    <EditProfileArea />
                ) : (
                    <div style={{ textAlign: "center", paddingTop: "50px" }}>
                        <h1>Please connect your wallet</h1>
                    </div>
                )}
            </main>
            <Footer />
        </Wrapper>
    );
};

export default MyAccount;
