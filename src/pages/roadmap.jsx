import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-bdc";
import Footer from "@layout/footer/footer-bdc";
import Particles from "@ui/particles";
import Breadcrumb from "@components/breadcrumb";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import 'react-vertical-timeline-component/style.min.css';

// import ContactTopArea from "@containers/contact-top";

// export async function getStaticProps() {
//     return { props: { className: "template-color-1" } };
// }
export async function getStaticProps() {
    return { props: { className: "template-color-1 with-particles" } };
}

const Roadmap = () => (
    <Wrapper>
        <SEO pageTitle="Roadmap" />
        <Header />
        <main id="main-content">
            <Particles />
            <Breadcrumb pageTitle="Bad Dogs Roadmap" currentPage="Roadmap" />
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="Q1 2022"
                    iconStyle={{
                        background: "#fff",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Bad Dogs Genesis Collection successfully launched on
                        OpenSea
                    </h3>
                    <p className="text-success">Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="Q1 2022"
                    iconStyle={{
                        background: "#fff",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Special BDC#111 Auction for Ukraine
                    </h3>
                    <p className="text-success">Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="Q2 2022"
                    iconStyle={{
                        background: "#fff",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Established BDC Diamond Club for passionate BDC holders.
                    </h3>
                    <p className="text-success">Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="Q2 2022"
                    iconStyle={{
                        background: "#ffdf0b",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Produced v1 of BDC Merchandise - hats
                    </h3>
                    <p className="text-success">Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="Q2 2022"
                    iconStyle={{
                        background: "#ffdf0b",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Deployed ERC721 contract to migrate away from OpenSea
                        ERC1155 contract.
                    </h3>
                    <p className="text-success">Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="Q2 2022"
                    iconStyle={{
                        background: "#ffdf0b",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Launched v1 of BDC Website with Migration function.
                    </h3>
                    <p className="text-success">Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="Q2 2022"
                    iconStyle={{
                        background: "#ffdf0b",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Establish partnership with ARC marketplace.
                    </h3>
                    <p className="text-warning">Pending</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{
                        background: "#fff",
                        textAlign: "center",
                        color: "#fff",
                        marginTop: "50px",
                    }} // icon={<i className="feather-home icon-md" />}
                />
            </VerticalTimeline>
        </main>
        <Footer />
    </Wrapper>
);

export default Roadmap;
