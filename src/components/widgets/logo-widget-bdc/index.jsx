import PropTypes from "prop-types";
import Image from "next/image";
// import Logo from "@components/logo";

const LogoWidget = ({ data }) => (
    <div className="footer-left">
        <Image
            src="/images/bdc/logo/bdc-logo-400px.png"
            alt="Nft_Profile"
            width={333}
            height={187}
        />
        {data?.text && <p className="rn-footer-describe">{data.text}</p>}
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
