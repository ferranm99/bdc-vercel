// import React from "react";
// import { useMoralisWeb3Api } from "react-moralis";
require('dotenv').config({ path: "../../.env" });
const React = require('react');
const Moralis = require("moralis/node");

const serverUrl = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
const appId = process.env.NEXT_PUBLIC_MORALIS_SERVER;
const moralisSecret = process.env.NEXT_PUBLIC_MORALIS_SK;

console.log(serverUrl);
console.log(appId);

const web3API = async () => {
    await Moralis.start({ serverUrl, appId });

    // await Moralis.initialize(appId);
    // Moralis.serverURL = serverUrl;
    // await Moralis.start({ serverUrl, appId, moralisSecret });    
    // await Moralis.start({ serverUrl, appId });

    const tokenIdMetadata = await Moralis.Web3API.token.getTokenIdMetadata({
        address: "0x495f947276749Ce646f68AC8c248420045cb7b5e",
        token_id: "40721341926649942604524054295385484712682943270694199897760180060402506268673",
        chain: "eth",
    });
    console.log(tokenIdMetadata);
};

web3API();