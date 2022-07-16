// import React from 'react';
import PropTypes from "prop-types";
// import Button from "@ui/button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { truncateEthAddress } from "@utils/formatters";
import { useWeb3Context } from "src/context";
import { toast } from "react-toastify";
import { ethers } from "ethers";

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
                <Dropdown.Item
                    style={{ fontSize: "1.75em" }}
                    eventKey="1"
                    href="/my-account"
                >
                    My Account
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                    style={{ fontSize: "1.75em" }}
                    eventKey="2"
                    onClick={disconnect}
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
    const { web3Provider, connect, disconnect, address, balance } = useWeb3Context();

    return web3Provider ? (
        <DisconnectButton disconnect={disconnect} address={address} balance={balance} />
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
};

export default Web3Button;
