This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## BDC Commit prefix

-   build: Changes that affect the build system or external dependencies (e.g. scopes: gulp, broccoli, npm)
-   ci: Changes to our CI configuration files and scripts (e.g. scopes: Travis, Circle, BrowserStack, SauceLab)
-   docs: Documentation only changes
-   feat: A new feature
-   fix: A bug fix
-   perf: A code chagne that improves performance
-   refactor: A code change that neither fixes a bug nor adds a feature
-   style: Changes that do not affect the meaning of the code (white-sapce, formatting, missing semi-colons, etc)
-   content: Change of static content (e.g. text title, i18n, etc)
-   test: Adding missing tests or correcting existing tests

## Troubleshooting

-   use "export NODE_TLS_REJECT_UNAUTHORIZED=0" in the command prompt to bypass self-signed cert error for node or nvm
-   use "npm set strict-ssl false" in the command prompt to bypass self-signed cert error for npm

# Merge 08/17/2022

### \_app.jsx

_TO BE Moved to Zustand_

-   contractValues state

### @containers/BDC/nft-mint

Values:

-   contractValues
    -   [paused,PUBLIC_PRICE,WHITELIST_PRICE] obtained from ContractContext
-   onWhitelist
    -   Utilizes session user to check if user address is whitelisted then sets the correct minting price
-   Counter
    -   Number of NFTs user wants to mint. (currently hard-coded max at 5)

### @utils

#### **smartContractFxns.js**

GETTER FUNCTIONS

#### WLMintNFT / mintNFT :

| Parameter     | Type    | Description                                                                        |
| :------------ | :------ | :--------------------------------------------------------------------------------- |
| window        | Object  | Browser Object to obtain provider (should be refactored to get provider from web3) |
| mintQuantity  | uint256 | Number of NFTs to be minted                                                        |
| setIsClaiming | boolean | Status of minting to change button state                                           |

#### isWhitelisted:

-   Uses **runProof** from generateMerkleProof.js to return proof of whitelist.

#### grabConnectedContract:

Requires:

-   Contract ABI
-   Contract Address
-   Provider

_@ returns ethers.Contract object._

#### **generateMerkleProof.js**

#### runProof:

Note - The proof generation uses **keccak256**. Using other encryption types will cause failure.
| Parameter |Type | Description |
| :------------------------ |:-------- | :-------------|
| leafToVerify | String | User wallet address to be verified
| whitelist | String []|Array of addresses obtained from contractValues

### Import Contract Data from Deployment

#### **BDC.json**

This is the ABI obtained from the artifacts folder when you deploy the contract via hardhat.

#### **contractData.json**

-   Contract Address
-   Array of Whitelist addresses
