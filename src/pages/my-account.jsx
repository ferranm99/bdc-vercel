// import { useState, useEffect } from "react";
import { useSession } from "next-auth/react"
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
    // const { web3Provider } = useWeb3Context();
    const { data: session, status } = useSession();
    // const [content, setContent] = useState();

    // Fetch content from protected route
    // useEffect(() => {
    // const fetchData = async () => {
    //     const res = await fetch("/api/examples/protected")
    //     const json = await res.json()
    //     if (json.content) {
    //     setContent(json.content)
    //     }
    // }
    // fetchData()
    // }, [session])

    return (
        <Wrapper>
            <SEO pageTitle="My Account" />
            <Header />
            <main id="main-content">
                <Breadcrumb pageTitle="My Account" currentPage="My Account" />
                {session ? (
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
