import PropTypes from "prop-types";
// import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import { toast } from "react-toastify";

const StoryModal = ({ show, tokenId, name, handleModal }) => {
    // async function addNftReport(nftReport) {
    //     let response = await axios.post('/report/genesis', nftReport);
    //     return response.data;
    // }
    const handleReportSubmit = async (event) => {
        // async function handleReport(e) {
        // let response = await axios.post('/report/genesis', nftReport);
        // return response.data;

        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // Get data from the form.
        const data = {
            tokenId,
            owner: name,
            message: event.target.message.value,
            //   last: event.target.last.value,
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        // API endpoint where we send form data.
        const endpoint = "/api/report/genesis";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        try {
            // Send the form data to our forms API on Vercel and get a response.
            const response = await fetch(endpoint, options);
            // const { data, errors } = await fetch(endpoint, options);

            // Get the response data from server as JSON.
            // If server returns the name submitted, that means the form works.
            const result = await response.json();
            // alert(`Is this your full name: ${result.data}`)

            if (result) {
                toast.success("Story submitted successfully.", {
                    position: toast.POSITION.BOTTOM_LEFT,
                });
                handleModal();
            }

            // console.log('NftReport submitted: ', result.data);
            // console.log('owner submitted: ', owner);
            // console.log('tokenId submitted: ', tokenId);
            // return { props: { data } };
        } catch (e) {
            toast.error(e.message, {
                position: toast.POSITION.BOTTOM_LEFT,
            });
            // return { notFound: true };
        }
    };

    return (
        <Modal
            className="rn-popup-modal report-modal-wrapper"
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
            {/* <Modal.Header className="report-modal-header">
                <h5 className="modal-title">{name} STORY</h5>
            </Modal.Header> */}
            <Modal.Body>
                <div className="report-form-box">
                    <h6 className="title">{name} Story</h6>
                    <p>Write a story for your dog. (max 512 characters)</p>
                    <form onSubmit={handleReportSubmit}>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Start your story ..."
                            maxLength="512"
                            required
                        />
                        <div className="report-button">
                            <Button
                                size="medium"
                                className="mr--10 w-auto"
                                type="submit"
                            >
                                Submit
                            </Button>
                            <Button
                                color="primary-alta"
                                size="medium"
                                className="w-auto"
                                onClick={handleModal}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

StoryModal.propTypes = {
    show: PropTypes.bool.isRequired,
    tokenId: PropTypes.string,
    name: PropTypes.string,
    handleModal: PropTypes.func.isRequired,
};
export default StoryModal;
