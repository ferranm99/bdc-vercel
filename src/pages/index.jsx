import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Particles from "@ui/particles";
import HeroArea from "@containers/hero/layout-bdc1";
import HeroAreaBDC2 from "@containers/hero/layout-bdc2";
import HeroAreaBDC3 from "@containers/hero/layout-bdc3";
import Image from "next/image";
// import Anchor from "@ui/anchor";

import { normalizedData } from "@utils/methods";
// import CTAArea from "@containers/cta";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// Demo data
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import homepageData from "../data/homepages/home-09.json";
import homepageDataBdc from "../data/homepages/home-bdc.json";
import productData from "../data/products-02.json";
import aboutData from "../data/innerpages/about.json";
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
                <HeroAreaBDC3 data={content4["hero-section"]} />

                <div
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
                </div>

                {/* <CTAArea data={content2["cta-section"]} /> */}
                {/* <div className="section-container customFont">
                    <div className="col-6">
                        <h4>WELCOME TO</h4>
                        <h3 className="customTitleFont">THE DOGHOUSE</h3>
                        <p>
                            Welcome to the Gutter, the underground web3 social
                            club where your NFT doubles as your membership token
                            to the Gutter Cat Gang.
                        </p>
                        <p>
                            Welcome to the Gutter, the underground web3 social
                            club where your NFT doubles as your membership token
                            to the Gutter Cat Gang.
                        </p>

                        <Button className="btn btn-primary-alta">
                            JOIN DISCORD
                        </Button>
                    </div>

                    <div className="col-6 text-center">
                        <Image
                            src="/images/client/testimonial-2.jpg"
                            className="card-img-center h-50"
                            width={400}
                            height={400}
                            alt="..."
                        />
                    </div>
                </div> */}
                <div className="parallax col-12" />

                <div className="profile-container customFont dog-container p-5">
                    <div className="row" style={{ flexWrap: "wrap-reverse" }}>
                        <div className="col-lg-6 col-sm-12 flex-end">
                            <h3>ABOUT</h3>
                            <p>
                                Welcome to the Gutter, the underground web3
                                social club where your NFT doubles as your
                                membership token to the Gutter Cat Gang.
                            </p>
                            <h3>INFO</h3>
                            <ul className="dogs-info">
                                <li className="dogs-info-link">
                                    Bad Dogs <a href="#opensea">Opensea</a>
                                </li>
                                <li className="dogs-info-link">
                                    Bad Dogs <a href="#looksrare">LooksRare</a>
                                </li>
                                <li className="dogs-info-link">
                                    Bad Dogs <a href="#rarity">Rarity</a>
                                </li>
                                <li className="dogs-info-link">
                                    Bad Dogs <a href="#analytics">Analytics</a>
                                </li>
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
                                <li className="float-l flex-item">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            color="green"
                                        />
                                    </span>{" "}
                                    OG Membership
                                </li>
                                <li className="float-l ml-5 flex-item px-2">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            color="green"
                                        />
                                    </span>{" "}
                                    Premium Utility
                                </li>
                                <li className="float-l">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            color="green"
                                        />
                                    </span>{" "}
                                    3,000 Supply
                                </li>
                            </ul>
                        </div>

                        {/* <Button className="btn btn-primary-alta">
                            JOIN DISCORD
                        </Button> */}

                        <div className="col-lg-6 col-sm-12 dog-container text-center">
                            <Image
                                src="/images/client/testimonial-2.jpg"
                                className="card-img-center"
                                width={400}
                                height={400}
                                alt="..."
                            />
                        </div>
                        <h3
                            className="col-12 text-center customTitleFont py-5"
                            style={{ fontSize: "5.5rem" }}
                        >
                            BAD DOGS
                        </h3>
                    </div>
                    <div className="row">
                        <button type="button" className="offset-4 col-2 btn-a">
                            BUY NOW
                        </button>
                        <hr className="horizontal" />
                        <button type="button" className="col-2 btn-b">
                            CLAIM
                        </button>
                        <div className="col-4" />
                    </div>
                </div>
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
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home09;
