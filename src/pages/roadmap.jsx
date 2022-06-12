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
                        Fully Custom BadDogs for our first 25 unique holders
                    </h3>
                    <p className="text-success">Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="TBD"
                    iconStyle={{
                        background: "#ffdf0b",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Building a strong core community
                    </h3>
                    <p className="text-warning">In Progress</p>
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
                        Diamond Club was born.
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
                        Purchase Otherside land for community
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
                        Limited Merch v1.0 giveaways to holders
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
                        Website launch
                    </h3>
                    <p className="text-success">Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="Q3 2022"
                    iconStyle={{
                        background: "#ffdf0b",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Migrate Genesis contract away from OpenSea contract.
                    </h3>
                    <p className="text-warning">In Progress</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="Q3 2022"
                    iconStyle={{
                        background: "#ffdf0b",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Partner with new NFT marketplaces or projects
                    </h3>
                    <p className="text-warning">In Progress</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="TBD"
                    iconStyle={{
                        background: "#808080",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        The BadDog story written by our holders via website
                    </h3>
                    <p className="text-pending">Pending</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="TBD"
                    iconStyle={{
                        background: "#ffdf0b",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Special auctions of 333, 444, 555, etc.
                    </h3>
                    <p className="text-warning">In Progress</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="TBD"
                    iconStyle={{
                        background: "#808080",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Free Merch v2.0 drop for all genesis holders
                    </h3>
                    <p className="text-pending">Pending</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="TBD"
                    iconStyle={{
                        background: "#808080",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Merch Shop added to website for purchase
                    </h3>
                    <p className="text-pending">Pending</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="TBD"
                    iconStyle={{
                        background: "#808080",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Launch 4K collection
                    </h3>
                    <p className="text-pending">Pending</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="TBD"
                    iconStyle={{
                        background: "#808080",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Mutation of Genesis and 4K Collection
                    </h3>
                    <p className="text-pending">Pending</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="TBD"
                    iconStyle={{
                        background: "#808080",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Launch $BONES token for holders
                    </h3>
                    <p className="text-pending">Pending</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#191925", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #191925" }}
                    date="TBD"
                    iconStyle={{
                        background: "#808080",
                        textAlign: "center",
                        color: "#fff",
                        paddingTop: "5px",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Develop CyberCity Metaverse or Heaven (Arcade)
                    </h3>
                    <p className="text-pending">Pending</p>
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
