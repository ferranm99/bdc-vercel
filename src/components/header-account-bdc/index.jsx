import PropTypes from "prop-types";
import clsx from "clsx";

import Account from "@components/header-account-bdc";
import UserDropdown from "@components/user-dropdown";

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
// import menuData from "../../../data/general/menu-bdc.json";

// // Data
// import contactData from "../../../data/general/contact.json";

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

const HeaderAccount = () => {
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
            {!isAuthenticated && (
                <div className="setting-option header-btn customFont ">
                    <div className="icon-box">
                        <Button
                            type="button"
                            color="primary"
                            size="small"
                            onClick={() => authenticate()}
                        >
                            Wallet Connect
                        </Button>
                    </div>
                </div>
            )}
            {isAuthenticated && (
                <>
                    <div
                        style={styles.account}
                        onClick={() => setIsModalVisible(true)}
                    >
                        <div
                            style={{
                                marginRight: "5px",
                                ...styles.text,
                            }}
                        >
                            {/* <Blockie
                        currentWallet
                        scale={2}
                    />{" "} */}
                            {chainId}
                            {getEllipsisTxt(account, 6)}{" "}
                            <button
                                className="btn"
                                style={{
                                    ...styles.logout,
                                }}
                                onClick={() => logout()}
                                disabled={isAuthenticating}
                                width={25}
                                height={25}
                            >
                                <FontAwesomeIcon
                                    icon={faRightFromBracket}
                                    size="small"
                                    width={25}
                                    height={25}
                                />
                            </button>
                        </div>
                    </div>
                    <Modal
                        visible={isModalVisible}
                        footer={null}
                        onCancel={() => setIsModalVisible(false)}
                        bodyStyle={{
                            padding: "15px",
                            fontSize: "17px",
                            fontWeight: "500",
                        }}
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                        }}
                        width="400px"
                    >
                        Account
                        <Card
                            style={{
                                marginTop: "10px",
                                borderRadius: "1rem",
                            }}
                            bodyStyle={{
                                padding: "15px",
                            }}
                        >
                            <p>Some Address</p>
                            {/* <Address
                        avatar="left"
                        size={6}
                        copyable
                        style={{
                            fontSize: "20px",
                        }}
                    /> */}
                            <div
                                style={{
                                    marginTop: "10px",
                                    padding: "0 10px",
                                }}
                            >
                                <a
                                    href={`${getExplorer(
                                        chainId
                                    )}/address/${account}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <SelectOutlined
                                        style={{
                                            marginRight: "5px",
                                        }}
                                    />
                                    View on Explorer
                                </a>
                            </div>
                        </Card>
                        <Button
                            size="large"
                            type="button"
                            style={{
                                width: "100%",
                                marginTop: "10px",
                                borderRadius: "0.5rem",
                                fontSize: "16px",
                                fontWeight: "500",
                            }}
                            onClick={() => {
                                logout();
                                setIsModalVisible(false);
                            }}
                        >
                            Disconnect Wallet
                        </Button>
                    </Modal>
                </>
            )}
        </>
    );
};

export default HeaderAccount;
