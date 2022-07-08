import PropTypes from "prop-types";
import clsx from "clsx";

// import Logo from "@components/logo";
import Image from "next/image";
// import { ConnectWallet } from "@3rdweb/react";
// import { useWeb3 } from "@3rdweb/hooks";
import MainMenu from "@components/menu/main-menu";
import MobileMenu from "@components/menu/mobile-menu";
// import SearchForm from "@components/search-form/layout-01";
// import FlyoutSearchForm from "@components/search-form/layout-02";
import SocialWidget from "@widgets/header-social-widget-bdc";
import HeaderAccount from "@components/header-account-bdc";
import UserDropdown from "@components/user-dropdown";
// import ColorSwitcher from "@components/color-switcher";
import BurgerButton from "@ui/burger-button";
// import Anchor from "@ui/anchor";
import Button from "@ui/button";
//Moralis wallet connect Imports
import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { Card, Modal } from "antd";
import { getEllipsisTxt } from "@utils/formatters";
import Blockie from "@components/Blockie";
import { getExplorer } from "@utils/networks";
import { SelectOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useOffcanvas, useSticky, useFlyoutSearch } from "@hooks";
// import headerData from "../../../data/general/header-01.json";
// import menuData from "../../../data/general/menu-01.json";
import menuData from "../../../data/general/menu-bdc.json";

// Data
import contactData from "../../../data/general/contact.json";

const styles = {
    account: {
        height: "42px",
        padding: "0 15px",
        display: "inline-block",
        verticalAlign: "middle",
        justifyContent: "center",
        alignItems: "center",
        width: "inherit",
        height: "inherit",
        borderRadius: "14px",
        backgroundColor: "#24243557",
        cursor: "pointer",
    },
    text: {
        color: "white",
    },
    logout: {
        width: "0.7rem",
    },
};

const Header = ({ className }) => {
    const sticky = useSticky();
    // const { address, chainId, provider } = useWeb3();
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    const { search, searchHandler } = useFlyoutSearch();
    const [accountId, setAccountId] = useState("");
    const {
        authenticate,
        isAuthenticated,
        isAuthenticating,
        logout,
        chainId,
        account,
        enableWeb3,
    } = useMoralis();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        // if (isAuthenticated && !account) {
        //     logout();
        // }
        if (isAuthenticated && !account) {
            //persist web3 session
            enableWeb3();
        }
    }, [account, isAuthenticated]);
    return (
        <>
            <header
                className={clsx(
                    "rn-header haeder-default black-logo-version header--fixed header--sticky",
                    sticky && "sticky",
                    className
                )}
            >
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            {/* <Logo logo={headerData.logo} /> */}
                            <a href="/">
                                <Image
                                    src="/images/bdc/logo/bdc-yellow-logo-50px.png"
                                    alt="Bad Dogs Company Circle Logo"
                                    width={50}
                                    height={50}
                                />
                            </a>
                            <div className="mainmenu-wrapper">
                                <nav
                                    id="sideNav"
                                    className="mainmenu-nav d-none d-xl-block"
                                >
                                    <MainMenu menu={menuData} />
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            {/* <div className="setting-option d-none d-lg-block">
                                <SearchForm />
                            </div>
                            <div className="setting-option rn-icon-list d-block d-lg-none">
                                <div className="icon-box search-mobile-icon">
                                    <button
                                        type="button"
                                        aria-label="Click here to open search form"
                                        onClick={searchHandler}
                                    >
                                        <i className="feather-search" />
                                    </button>
                                </div>
                                <FlyoutSearchForm isOpen={search} />
                            </div> */}

                            {/*
                            <div className="setting-option rn-icon-list notification-badge">
                                <div className="icon-box">
                                    <Anchor path={headerData.activity_link}>
                                        <i className="feather-bell" />
                                        <span className="badge">6</span>
                                    </Anchor>
                                </div>
                            </div>
                            */}

                            <SocialWidget socials={contactData.socials} />

                            <div className="setting-option header-btn">
                                <div className="icon-box">
                                    {/* <ConnectWallet /> */}

                                    {/*<HeaderAccount/>*/}
                                    <HeaderAccount />
                                </div>
                            </div>

                            <div className="setting-option mobile-menu-bar d-block d-xl-none">
                                <div className="hamberger">
                                    <BurgerButton onClick={offcanvasHandler} />
                                </div>
                            </div>
                            {/* <div
                                id="my_switcher"
                                className="setting-option my_switcher"
                            >
                                <ColorSwitcher />
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menu={menuData}
            />
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
