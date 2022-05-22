import PropTypes from "prop-types";

const NewsletterWidget = ({ data }) => (
    <div className="text-center mt--40 pt--40">
        <h6>{data.title}</h6>
        <div className="centerblock">
            <div className="input-group input-group-lg">
                <input
                    type="text"
                    className="form-control bg-color--2"
                    placeholder="Email"
                    aria-label="Recipient's username"
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary-alta btn-outline-secondary"
                        type="button"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
        {data?.note && (
            <div className="newsletter-dsc">
                <p>{data.note}</p>
            </div>
        )}
    </div>
);

NewsletterWidget.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        note: PropTypes.string,
    }),
};
export default NewsletterWidget;
