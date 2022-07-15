// import React from 'react';
import PropTypes from "prop-types";
import Button from "@ui/button";
import { truncateEthAddress } from "@utils/formatters";
import { useWeb3Context } from "src/context";

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

const DisconnectButton = ({ disconnect, address }) => {
    return disconnect ? (
        <Button type="button" color="primary" size="small" onClick={disconnect}>
            {/* Disconnect */}
            {truncateEthAddress(address)}
        </Button>
    ) : (
        <Button>Loading...</Button>
    );
};

const Web3Button = () => {
    const { web3Provider, connect, disconnect, address } = useWeb3Context();

    return web3Provider ? (
        <DisconnectButton disconnect={disconnect} address={address} />
    ) : (
        <ConnectButton connect={connect} />
    );
};

// ConnectButton.propTypes = {
//     connect: PropTypes.func.isRequired,
// };

// DisconnectButton.propTypes = {
//     disconnect: PropTypes.func.isRequired,
//     address: PropTypes.string,
// };

export default Web3Button;
