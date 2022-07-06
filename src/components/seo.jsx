import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ pageTitle }) => (
    <Head>
        <title> {pageTitle} | BDC - Bad Dogs Company</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
            name="description"
            content="The Bad Dogs Company is a collection of 4,888 unique Bad Dogs NFTs that lives on the ETH blockchain. Ownership includes creative &amp; broad commercial rights of your Bad Dogs as well as opportunities to enter CyberDog 3077."
        />
        <meta name="robots" content="noindex, follow" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://baddogscompany.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
            property="og:title"
            content="Bad Dogs Company | 4,888 Unique Bad Dogs NFTs Living on the ETH Blockchain"
        />
        <meta
            property="og:description"
            content="The Bad Dogs Company is a collection of 4,888 unique Bad Dogs NFTs that lives on the ETH blockchain. Ownership includes creative &amp; broad commercial rights of your Bad Dogs as well as opportunities to enter CyberDog 3077."
        />
        <meta property="og:url" content="https://baddogscompany.com/" />
        <meta property="og:site_name" content="Bad Dogs Company" />
        <meta property="og:updated_time" content="2022-07-06T22:29:46+00:00" />
    </Head>
);

SEO.propTypes = {
    pageTitle: PropTypes.string.isRequired,
};

export default SEO;
