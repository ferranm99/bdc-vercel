import PropTypes from "prop-types";
import Image from "next/image";
// import Logo from "@components/logo";

const LogoWidget = ({ data }) => (
    <div className="text-center">
        <Image
            src="/images/bdc/logo/bdc-yellow-circle-180px.png"
            alt="Nft_Profile"
            width={180}
            height={180}
        />
        {data?.text && <h2 className="footer-title">{data.text}</h2>}
    </div>
);

LogoWidget.propTypes = {
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                alt: PropTypes.string,
            })
        ),
        text: PropTypes.string,
    }),
};

export default LogoWidget;
