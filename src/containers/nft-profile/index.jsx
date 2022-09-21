import Anchor from "@ui/anchor";
import Sticky from "@ui/sticky";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
// import EditProfileImage from "./edit-profile-image";
// import ShowV1Nft from "./show-v1-nft";
import ShowGenesis from "./show-genesis";
import PersonalInformation from "./personal-information";
import ChangePassword from "./change-password";
import NotificationSetting from "./notification-setting";
// import Button from "@ui/button";
import useSWR from "swr";
import ShowGenerative from "./show-generative";

const fetcher = (url) => fetch(url).then((res) => res.json());

const NftProfile = () => {

    const { data, error } = useSWR('api/genesis', fetcher);
    // if (error)
    //     return (<div>{error}</div>);
    // else
    //     console.log(data);


    return (
        <div className="edit-profile-area rn-section-gapTop">
            <div className="container">
                <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                    <div className="col-12 d-flex justify-content-between mb--30 align-items-center">
                        <h4 className="title-left">My Bad Dogs</h4>
                        {/* <Anchor path="/waitlist" className="btn btn-primary ml--10">
                            <i className="feather-eye mr--5" /> Waitlist
                        </Anchor> */}
                    </div>
                </div>
                <TabContainer defaultActiveKey="nav-home">
                    <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <Sticky>
                                <nav className="left-nav rbt-sticky-top-adjust-five">
                                    <Nav className="nav nav-tabs">
                                        <Nav.Link eventKey="nav-home" as="button">
                                            <i className="feather-sun" />
                                            Genesis
                                        </Nav.Link>
                                        <Nav.Link eventKey="nav-homes" as="button">
                                            <i className="feather-layers" />
                                            Generative
                                        </Nav.Link>
                                        {/* <Nav.Link
                                            eventKey="nav-profile"
                                            as="button"
                                        >
                                            <i className="feather-book-open" />
                                            Story
                                        </Nav.Link> */}
                                        <Nav.Link
                                            eventKey="nav-contact"
                                            as="button"
                                        >
                                            <i className="feather-file-text" />
                                            Licensing
                                        </Nav.Link>
                                    </Nav>
                                </nav>
                            </Sticky>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                            <TabContent className="tab-content-edit-wrapepr">
                                <TabPane eventKey="nav-home">
                                    <ShowGenesis />
                                </TabPane>
                                <TabPane eventKey="nav-homes">
                                    <ShowGenerative />
                                </TabPane>
                                <TabPane eventKey="nav-profile">
                                    <ChangePassword />
                                </TabPane>
                                <TabPane eventKey="nav-contact">
                                    <NotificationSetting />
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </TabContainer>
            </div>
        </div>
    );
};

export default NftProfile;
