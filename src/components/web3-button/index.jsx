// import React from 'react';
// import { useReducer } from "react";
import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
// import Button from "@ui/button";
import { signOut, useSession } from "next-auth/react";
// import { signOut } from "next-auth/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { truncateEthAddress } from "@utils/formatters";
// import { useWeb3Context } from "src/context";
import { useWallet } from "src/hooks/use-wallet";
import { toast } from "react-toastify";
// import { useEffect } from "react";
// import { ethers } from "ethers";

// interface ConnectProps {
//     connect: (() => Promise<void>) | null
//   }
const ConnectButton = ({ connect }) => {
    return connect ? (
        <Button type="button" color="primary" size="small" onClick={connect}>
            Wallet
        </Button>
    ) : (
        <Button>Loading...</Button>
    );
};

//   interface DisconnectProps {
//     disconnect: (() => Promise<void>) | null
//   }

const DisconnectButton = ({ disconnect, address, balance }) => {
    // const balanceInEth = web3Provider.getBalance(address).then((balance) => {
    //     // convert a currency unit from wei to ether
    //     // const balanceInEth = ethers.utils.formatEther(balance)
    //     return ethers.utils.formatEther(balance);
    //     //console.log(`balance: ${balanceInEth} ETH`)
    // })
    const logoff = () => {
        signOut();
        disconnect();
    };

    return disconnect ? (
        <ButtonGroup>
            <CopyToClipboard
                text={address}
                onCopy={() =>
                    toast.success("Wallet address copied to clipboard.", {
                        position: toast.POSITION.BOTTOM_LEFT,
                    })
                }
            >
                <Button type="button" color="primary" size="small">
                    {/* Disconnect */}
                    {truncateEthAddress(address)}
                </Button>
            </CopyToClipboard>
            <DropdownButton as={ButtonGroup} title="" id="bg-nested-dropdown">
                <Dropdown.Item
                    style={{ fontSize: "1.75em" }}
                    eventKey="1"
                    href="#"
                >
                    Balance: {Number(balance).toFixed(4)} Ξ
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{ fontSize: "1.75em" }} eventKey="1">
                    <Anchor style={{ color: "#000000" }} path="/my-account">
                        My Account
                    </Anchor>
                </Dropdown.Item>
                <Dropdown.Item style={{ fontSize: "1.75em" }} eventKey="1">
                    <Anchor style={{ color: "#000000" }} path="/mint">
                        Mint
                    </Anchor>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                    style={{ fontSize: "1.75em" }}
                    eventKey="2"
                    onClick={logoff}
                >
                    Logout
                </Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    ) : (
        <Button>Loading...</Button>
    );
};

const Web3Button = () => {
    // const { web3Provider, connect, disconnect, address, balance } =
    // const { connect, disconnect, balance } = useWeb3Context();
    const { connect, disconnect, balance } = useWallet();

    // const { data: session, status } = useSession();
    const { data: session } = useSession();

    // useEffect(async () => {
    //     // signOut();
    //     // disconnect();
    //     console.log("address changed: ", address);
    // }, [address]);

    // console.log('state in web3-button');
    // console.log(web3Provider);

    // console.log(`state: ${JSON.stringify(state)}`);
    // const session = useSession();
    // console.log(`session: ${JSON.stringify(session)}`);

    // return web3Provider ? (
    return session ? (
        // return !session || session?.status !== 'authenticated' ? (
        <DisconnectButton
            disconnect={disconnect}
            address={session.address || ""}
            balance={Number(balance)}
        />
    ) : (
        <ConnectButton connect={connect} />
    );
};

ConnectButton.propTypes = {
    connect: PropTypes.func.isRequired,
};

DisconnectButton.propTypes = {
    disconnect: PropTypes.func.isRequired,
    address: PropTypes.string,
    balance: PropTypes.number,
};

export default Web3Button;
