import PropTypes from "prop-types";

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
