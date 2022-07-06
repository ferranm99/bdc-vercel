import PropTypes from "prop-types";
import Slider, { SliderItem } from "@ui/slider";
import { IDType, ImageType } from "@utils/types";
// import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import Anchor from "@ui/anchor";
// import SingleSlide from "./slide";
// import placeholderImg from "../../../../public/images/banner/banner-sm-01.jpg";
import data from "./dogs.json";

const HeroAreaBDC2 = () => {
    const showMoreInfo = (e) => {
        const ele = document.getElementById(
            `banner-desc-${e.currentTarget.id}`
        );
        if (ele) {
            // ele.classList.remove("hidden");
            // ele.style.transition = '3s ease-in';
            ele.style.display = 'block';
        }
    };
    const showLessInfo = (e) => {
        const ele = document.getElementById(
            `banner-desc-${e.currentTarget.id}`
        );
        if (ele) {
            // ele.classList.add("hidden");
            ele.style.display = 'none';
        }
    };

    return (
        <div className="container-fluid pb-5" id={isMobile ? "bannerImg2" : "bannerImg"}>
            <div className="row d-flex align-items-center mx-5 px-5">
                <div className="offset-lg-2 col-lg-8 col-sm-12 text-center">
                    <h1
                        data-title={data.title}
                        className="title theme-gradient my-5 pt-5 customTitleFont justify-content-center col-12 "
                    >
                        {data.title}
                    </h1>
                </div>
            </div>

            <div className="row d-flex align-items-center px-5 mx-5">
                {data?.collections.map((dog) => (
                    <div className="col-lg-6 col-md-12 col-sm-12 text-left" key={dog.id} data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="800">
                        <div className="bg-dark-opacity-75 card mb-3">
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-4 col-sm-12 text-center img-valign-bottom">
                                    <Image
                                        width={235}
                                        height={235}
                                        src={dog.image.src}
                                        className="card-img-center"
                                        alt="..."
                                    />
                                </div>
                                <div
                                    className="col-lg-8 col-md-8 col-sm-12"
                                    id={dog.id}
                                    onMouseEnter={(e) => {
                                        // showMoreInfo(e);
                                    }}
                                    onMouseLeave={(e) => {
                                        // showLessInfo(e);
                                    }}
                                >
                                    <div className="card-body">
                                        {/* <h5 className="card-title customTitleFont customTitleStyle"> */}
                                        <h3 className="card-title">
                                            {dog.title}
                                        </h3>
                                        <p
                                            id={`banner-desc-${dog.id}`}
                                            className="card-text pt--20"
                                        >
                                            {dog.description}
                                        </p>
                                        {/* <Anchor
                                            path="#"
                                            className="border-bottom-4"
                                            style={{
                                                fontSize: "2rem",
                                                borderBottom:
                                                    "2px solid yellow",
                                            }}
                                        >
                                            MORE INFO
                                        </Anchor> */}
                                        <Link
                                            to={dog.element}
                                            href={"#" + dog.element}
                                            className="border-bottom-4"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            style={{
                                                fontSize: "2rem",
                                            }}
                                        >
                                            MORE INFO →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default HeroAreaBDC2;

{/* <mark className="arrow">MORE INFO →</mark> */ }