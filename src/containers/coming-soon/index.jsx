import Image from "next/image";
import Logo from "@components/logo";
import Slider, { SliderItem } from "@ui/slider";

const CommingSoonArea = () => (
    <div className="maintanence-area">
        <div className="wrapper">
            <div className="row row--0 h-100">
                <div className="col-lg-4 col-md-4">
                    <div className="inner">
                        {/* <Logo logo={[{ src: "/images/logo/logo-white.png" }]} /> */}
                        <Logo logo={[{ src: "/images/bdc/logo/bdc-logo-400px.png" }]} />
                        <div className="content">
                            <span className="sub-title">Stay Tuned</span>
                            <h3 className="title">
                                <span>Coming Soon</span>
                            </h3>
                            <p>
                                We are available please connect with us via
                                <br />
                                Twitter:{" "}
                                <a href="https://twitter.com/BadDogsCompany">@BadDogsCompany</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <Slider
                        options={{ slidesToShow: 1, slidesToScroll: 1 }}
                        className="banner-one-slick comeing-soon-slick  slider-style-4 slick-activation-09 slick-arrow-style-one rn-slick-dot-style"
                    >
                        <SliderItem className="single-rn-slider position-relative">
                            <Image
                                src="/images/bg/bg-image-14.jpg"
                                alt="Slider BG"
                                layout="fill"
                                priority
                                objectFit="cover"
                            />
                        </SliderItem>
                        <SliderItem className="single-rn-slider position-relative">
                            <Image
                                src="/images/bg/bg-image-15.jpg"
                                alt="Slider BG"
                                layout="fill"
                                priority
                                objectFit="cover"
                            />
                        </SliderItem>
                        <SliderItem className="single-rn-slider position-relative">
                            <Image
                                src="/images/bg/bg-image-16.jpg"
                                alt="Slider BG"
                                layout="fill"
                                priority
                                objectFit="cover"
                            />
                        </SliderItem>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
);

export default CommingSoonArea;
