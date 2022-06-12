import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Particles from "@ui/particles";
import { isSafari } from "react-device-detect";
import HeroArea from "@containers/hero/layout-bdc1";
import HeroAreaBDC2 from "@containers/hero/layout-bdc2";
// import HeroAreaBDC3 from "@containers/hero/layout-bdc3";
import HeroAreaBdcHeaven from "@containers/hero/layout-heaven";
import HeroAreaBdcGenesis from "@containers/hero/layout-bdc-genesis";
import HeroAreaBdc4k from "@containers/hero/layout-bdc-4k";
import HeroAreaBdcCustom from "@containers/hero/layout-bdc-custom";
import HeroAreaBdcCyber from "@containers/hero/layout-bdc-cyber";
import HeroAreaBdcSerum from "@containers/hero/layout-bdc-serum";
import Image from "next/image";
import { Tweet } from "react-twitter-widgets";
// import Anchor from "@ui/anchor";

import { normalizedData } from "@utils/methods";
// import CTAArea from "@containers/cta";
// import Button from "react-bootstrap/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// Demo data
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import homepageData from "../data/homepages/home-09.json";
import homepageDataBdc from "../data/homepages/home-bdc.json";
// import productData from "../data/products-02.json";
// import aboutData from "../data/innerpages/about.json";
// import placeholderImg from "../../public/images/client/testimonial-2.jpg";

// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// export async function getStaticProps() {
//     return { props: { className: "template-color-1" } };
// }
export async function getStaticProps() {
    return { props: { className: "template-color-1 with-particles" } };
}

const Home09 = () => {
    const content = normalizedData(homepageData?.content || []);
    const content4 = normalizedData(homepageDataBdc?.content || []);
    // const content2 = normalizedData(aboutData?.content || []);
    // const liveAuctionData = productData.filter(
    //     (prod) =>
    //         prod?.auction_date && new Date() <= new Date(prod?.auction_date)
    // );

    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <Particles />
                <HeroArea data={content4["hero-section"]} />
                <HeroAreaBDC2 data={content["hero-section"]} />
                {/* <HeroAreaBDC3 data={content4["hero-section"]} /> */}

                {/* <div
                    className="container"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <Image
                        src="/images/bg/bg-image-21.jpg"
                        alt="Slider BG"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                        className="fullscreen_image-banner"
                    />
                </div> */}

                {isSafari ? (
                    <div className="row py-5">
                        <div className="parallax-3 col-12" />
                    </div>
                ) : (
                    <div className="parallax-3 parallax-fix col-12" />
                )}
                <HeroAreaBdcGenesis data={content4["hero-section"]} />

                {isSafari ? (
                    <div className="parallax-2 col-12" />
                ) : (
                    <div className="parallax-2 parallax-fix col-12" />
                )}
                <HeroAreaBdcCustom data={content4["hero-section"]} />

                {isSafari ? (
                    <div className="parallax-2 col-12" />
                ) : (
                    <div className="parallax-2 parallax-fix col-12" />
                )}
                <HeroAreaBdc4k data={content4["hero-section"]} />

                {isSafari ? (
                    <div className="parallax-2 col-12" />
                ) : (
                    <div className="parallax-2 parallax-fix col-12" />
                )}
                <HeroAreaBdcSerum data={content4["hero-section"]} />

                {isSafari ? (
                    <div className="parallax-2 col-12" />
                ) : (
                    <div className="parallax-2 parallax-fix col-12" />
                )}
                <HeroAreaBdcCyber data={content4["hero-section"]} />

                {isSafari ? (
                    <div className="parallax col-12" />
                ) : (
                    <div className="parallax parallax-fix col-12" />
                )}
                <HeroAreaBdcHeaven data={content4["hero-section"]} />

                <div className="row py-5">
                    <div className="parallax-2 col-12" />
                </div>

                {/* <AboutArea data={content["about-section"]} /> */}
                <div className="container mt--60">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-wrapper text-center">
                                <h2 className="customTitleFont">
                                    MERCHANDISE 1.0
                                </h2>
                                <div className="w-100">
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView="auto"
                                        spaceBetween={50}
                                        loop
                                        freeMode
                                        speed={5000}
                                        autoplay={{ delay: 0 }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        className="mySwiper mb-5"
                                    >
                                        <SwiperSlide className="merchandise-img">
                                            <Image
                                                width={250}
                                                height={250}
                                                src="/images/bdc/merch/hat/bdc-monster-hat-235px.jpg"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide className="merchandise-img">
                                            <Image
                                                width={250}
                                                height={250}
                                                src="/images/bdc/merch/hat/bdc-red-circle-hat-235px.jpg"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide className="merchandise-img">
                                            <Image
                                                width={250}
                                                height={250}
                                                src="/images/bdc/merch/hat/bdc-blue-hat-235px.jpg"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide className="merchandise-img">
                                            <Image
                                                width={250}
                                                height={250}
                                                src="/images/bdc/merch/hat/bdc-red-hat-235px.jpg"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <p>
                                    The BDC Merch Collection 1.0 is the first
                                    merch capsule collection by the Bad Dogs
                                    Company. Phase 1 consists of two redeemable
                                    NFTs – the ETH /& BTC Hat. Phase 1 is a
                                    limited-time collection consisting of a dad
                                    hat, beanie, hoodie, long sleeve crewnecks,
                                    and sweatpants.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt--60">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <Tweet
                                tweetId="1531135537989427201"
                                options={{ theme: "dark" }}
                            />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <Tweet
                                tweetId="1530423784641019904"
                                options={{ theme: "dark" }}
                            />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <Tweet
                                tweetId="1531268412974026753"
                                options={{ theme: "dark" }}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home09;
