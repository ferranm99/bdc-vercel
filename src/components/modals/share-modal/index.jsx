import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

const ShareModal = ({ show, handleModal }) => {
    const twitterLink = "https://twitter.com/intent/tweet?text=I%20love%20%23BDCO%20%23BadDogs%20on%20%40BadDogsCompany%20www.baddogscompany.com";
    // const twitterLink = "https://twitter.com/intent/tweet?text=I%20love%20%23BDCO%20%23BadDogs%20on%20%40BadDogsCompany%20www.baddogscompany.com%20ipfs.baddogscompany.com/tokens/genesis/img/1.png";
    // const twitterLink = "https://twitter.com/intent/tweet?text=I%20love%20%23BDCO%20%23BadDogs%20on%20%40BadDogsCompany%20http://ipfs.baddogscompany.com/tokens/genesis/img/1.png";
    const fbLink = "http://www.facebook.com/sharer/sharer.php?u=www.baddogscompany.com&t=Bad%20Dogs%20Company"
    const linkedInLink = "https://www.linkedin.com/sharing/share-offsite/?url=www.baddogscompany.com"
    // Instagram and Youtube doesn't currently have url sharing feature
    // const instagramLink = "https://www.instagram.com/sharing/share-offsite/?url=www.baddogscompany.com"
    // const youtubeLink = "https://www.youtube.com/sharing/share-offsite/?url=www.baddogscompany.com"

    return (
        <Modal
            className="rn-popup-modal share-modal-wrapper"
            show={show}
            onHide={handleModal}
            centered
        >
            {show && (
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleModal}
                >
                    <i className="feather-x" />
                </button>
            )}

            <Modal.Header className="share-area">
                <h5 className="modal-title">Share this NFT</h5>
            </Modal.Header>
            <Modal.Body>
                <ul className="social-share-default">
                    <li>
                        <a href={fbLink}>
                            <span className="icon">
                                <i className="feather-facebook" />
                            </span>
                            <span className="text">facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href={twitterLink}>
                            <span className="icon">
                                <i className="feather-twitter" />
                            </span>
                            <span className="text">twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href={linkedInLink}>
                            <span className="icon">
                                <i className="feather-linkedin" />
                            </span>
                            <span className="text">linkedin</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#!">
                            <span className="icon">
                                <i className="feather-instagram" />
                            </span>
                            <span className="text">instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <span className="icon">
                                <i className="feather-youtube" />
                            </span>
                            <span className="text">youtube</span>
                        </a>
                    </li> */}
                </ul>
            </Modal.Body>
        </Modal>
    );
};

ShareModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};
export default ShareModal;
