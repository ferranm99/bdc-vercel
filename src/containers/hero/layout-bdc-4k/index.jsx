import PropTypes from "prop-types";
import Button from "@ui/button";
import Image from "next/image";
import { ButtonType, IDType, ImageType } from "@utils/types";

const SliderOptions = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    cssEase: "linear",
    adaptiveHeight: true,
};

const HeroAreaBdc4k = ({ data }) => (
    <div className="banner-style-4 rn-section-gapTop rn-section-gapBottom">
        <div className="container element" id="bdc-4k">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1 mt_md--40 mt_sm--40 pl_md--25 pl_sm--25">
                    <div className="sldier-content">
                        {/*data?.badge && (
                            <span
                                className="title-badge"
                                data-sal="slide-up"
                                data-sal-delay="150"
                                data-sal-duration="800"
                            >
                                {data.badge}
                            </span>
                        )*/}

                        <h1
                            className="title"
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="800"
                        // dangerouslySetInnerHTML={{ __html: "Bad Dogs go to Heaven" }}
                        >
                            <span className="customTitleFont">Bad Dogs</span> 4k Collection
                        </h1>
                        <p>
                            Generated from traits of the Genesis collection.
                            Not your basic dog, only the best in breed for
                            this showcase.
                        </p>
                        <h3>INFO</h3>
                        <ul className="dogs-info">
                            <li className="dogs-info-link">
                                Bad Dogs <a href="#arc"><mark className="arrow">ARC ??? (TBD)</mark></a>
                            </li>
                            <li className="dogs-info-link">
                                Bad Dogs <a href="#opensea"><mark className="arrow">OpenSea ??? (TBD)</mark></a>
                            </li>
                            {/* <li className="dogs-info-link">
                                Bad Dogs <a href="#looksrare"><mark className="arrow">LooksRare ???</mark></a>
                            </li>
                            <li className="dogs-info-link">
                                Bad Dogs <a href="#rarity"><mark className="arrow">Rarity ???</mark></a>
                            </li> */}
                        </ul>
                        <h3>OVERVIEW</h3>
                        <ul
                            className="m-0 p-0"
                            style={{
                                overflow: "hidden",
                                display: "flex",
                                listStyle: "none",
                                alignContent: "stretch",
                            }}
                        >
                            <li className="float-l flex-item icon-sm">
                                <i className="feather-check-circle icon-sm icon-green" />
                                BDC Membership
                            </li>
                            <li className="float-l ml-5 flex-item px-2 icon-sm">
                                <i className="feather-check-circle icon-sm icon-green" />
                                Premium Utility
                            </li>
                            <li className="float-l icon-sm">
                                <i className="feather-check-circle icon-sm icon-green" />
                                4,000 Supply
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 order-1 order-lg-2">
                    <Image
                        src="/images/bdc/nft/bdc091-667px.png"
                        className="card-img-center"
                        width={667}
                        height={667}
                        alt="..."
                    />
                </div>
            </div>
            {/* <div className="row text-center pt-5">
                <div className="button-group">
                    <Button
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="800"
                        className="btn-mr-3"
                        path="/"
                    >
                        BUY NOW
                    </Button>
                    <Button
                        key="btn1"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="800"
                        path="/mint"
                        color="primary-alta"
                    >
                        CLAIM
                    </Button>
                </div>
                <div className="col-4" />
            </div> */}
        </div>
    </div>
);

HeroAreaBdc4k.propTypes = {
    data: PropTypes.shape({
        badge: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        buttons: PropTypes.arrayOf(ButtonType),
        banners: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                title: PropTypes.string.isRequired,
                client: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired,
                image: ImageType,
            })
        ),
    }),
};

export default HeroAreaBdc4k;
