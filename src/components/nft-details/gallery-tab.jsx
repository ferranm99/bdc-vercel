import PropTypes from "prop-types";
import Image from "next/image";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
// import Nav from "react-bootstrap/Nav";
import { ImageType } from "@utils/types";

// const GalleryTab = ({ images, imageUrl }) => (
const GalleryTab = ({ imageUrl }) => (
    <div className="product-tab-wrapper">
        <TabContainer defaultActiveKey="nav-0">
            {/* <div className="pd-tab-inner"> */}
            {/* <Nav className="rn-pd-nav rn-pd-rt-content nav-pills">
                    {images?.map((image, index) => (
                        <Nav.Link
                            key={image.src}
                            as="button"
                            eventKey={`nav-${index}`}
                        >
                            <span className="rn-pd-sm-thumbnail">
                                <Image
                                    src={image.src}
                                    alt={image?.alt || "Product"}
                                    width={167}
                                    height={167}
                                />
                            </span>
                        </Nav.Link>
                    ))}
                </Nav> */}

            <Image src={imageUrl} alt="Bad Dogs NFT" width={560} height={560} />

            {/* </div> */}
        </TabContainer>
    </div>
);

GalleryTab.propTypes = {
    // images: PropTypes.arrayOf(ImageType),
    imageUrl: PropTypes.string,
};
export default GalleryTab;
