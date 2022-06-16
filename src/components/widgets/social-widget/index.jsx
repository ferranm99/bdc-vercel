import PropTypes from "prop-types";
import Image from "next/image";

const SocialWidget = ({ socials }) => (
    <ul className="social-copyright">
        {socials?.map((social) => (
            <li key={social.id}>
                <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.title}
                >
                    <i className={social.icon} />
                </a>
            </li>
        ))}
        {/* Custom Icons */}
        <li key="discord">
            <a
                href="https://discord.gg/pf98svgC7N"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
            >
                <Image
                    className="customIconFooter"
                    alt="Discord"
                    src="/images/icons/discord.svg"
                    width={22}
                    height={22}
                />
            </a>
        </li>
        <li key="opensea">
            <a
                href="https://opensea.io/collection/baddogscompany"
                target="_blank"
                rel="noreferrer"
                aria-label="Opensea"
            >
                <Image
                    className="customIconFooter"
                    alt="OpenSea"
                    src="/images/icons/opensea.svg"
                    width={22}
                    height={22}
                />
            </a>
        </li>
    </ul>
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
