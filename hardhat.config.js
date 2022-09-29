/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { NEXT_PUBLIC_ALCHEMY_API_URL } = process.env;

module.exports = {
    solidity: "0.7.3",
    defaultNetwork: "mainnet",
    networks: {
        mainnet: {
            url: NEXT_PUBLIC_ALCHEMY_API_URL
        }
    },
}