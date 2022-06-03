import PropTypes from "prop-types";
import Image from "next/image";

const SocialWidget = ({ socials }) => (
    <div className="d-none d-lg-block d-xl-block">
        <div className="row setting-option rn-icon-list">
            {socials?.map((social) => (
                <div className="col icon-box" key={social.id}>
                    <a
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.title}
                    >
                        <i className={social.icon} />
                    </a>
                </div>
            ))}
            {/* Custom Icons */}
            <div className="col icon-box" key="discord">
                <a
                    href="https://discord.gg/pf98svgC7N"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Discord"
                >
                    <Image
                        className="customIcon"
                        alt="Discord"
                        src="/images/icons/discord.svg"
                        width={22}
                        height={22}
                    />
                </a>
            </div>
            <div className="col icon-box" key="opensea">
                <a
                    href="https://opensea.io/collection/baddogscompany"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Opensea"
                >
                    <Image
                        className="customIcon"
                        alt="OpenSea"
                        src="/images/icons/opensea.svg"
                        width={22}
                        height={22}
                    />
                </a>
            </div>
            <div className="col icon-box" key="wallet">
                <a
                    href="#nothing"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Wallet"
                >
                    <Image
                        className="customIcon"
                        alt="Wallet"
                        src="/images/icons/wallet.svg"
                        width={22}
                        height={22}
                    />
                </a>
            </div>
        </div>
    </div>
);

SocialWidget.propTypes = {
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            icon: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};

export default SocialWidget;
