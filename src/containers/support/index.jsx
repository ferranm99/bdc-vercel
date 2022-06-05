import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import Accordion from "@ui/accordion";

const SupportArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-support-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-6 pl_sm--20 pr_sm--20">
                <div className="col-lg-6">
                    <div className="rn-support-read">
                        <div className="read-card">
                            <h4>What is Bad Dogs Company (BDC)?</h4>
                            <div className="content">
                                <p>
                                    We are a community of strong members who
                                    support the art and vision of this project,
                                    embarking on a journey in the NFT space that
                                    goes beyond the amazing artwork. We're Bad
                                    Dogs - Good Company.
                                </p>
                                <p>
                                    The Genesis collection is a collection of
                                    888 hand-drawn 1/1 dogs. The Genesis tokens
                                    will be used as the core for the 4000
                                    Generative collection.
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>What blockchain does Bad Dogs Company utilize?</h4>
                            <div className="content">
                                <p>
                                    BDC lives in the Etherum blockchain. The
                                    Genesis token utilizes the ERC1155 contract
                                    from OpenSea and we have plans to migrate
                                    that contract to its own ERC721. The
                                    Generative collection will be it's own
                                    ERC721 contract on Etherum mainnet as well.
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>How do I buy a Dog from the Genesis Collection?</h4>
                            <div className="content">
                                <p>
                                    Due to the limited supply in the Genesis
                                    collection, there are several ways to buy
                                    a dog at the moment:
                                    <ul>
                                        <li>
                                            You can purchase a BDC from the secondary
                                            market or random drops on
                                            <a href="https://opensea.io/collection/baddogscompany"><mark className="arrow">OpenSea →</mark></a>
                                        </li>
                                        <li>
                                            You can enter our Whitelist giveaway bots
                                            or weekly Whitelist games on our
                                            <a href="https://discord.gg/pf98svgC7N"><mark className="arrow">Discord →</mark></a>
                                        </li>
                                        <li>
                                            You can participate in our Bounty Dog
                                            or Adoption program that is occasionally
                                            announced on our <a href="https://discord.gg/pf98svgC7N"><mark className="arrow">Discord →</mark></a>
                                        </li>
                                        <li>
                                            You can make private deals with BDC
                                            members in our
                                            <a href="https://discord.gg/pf98svgC7N"><mark className="arrow">Discord →</mark></a>
                                        </li>
                                        <li>
                                            You can participate in our giveaway and
                                            contests on
                                            <a href="https://twitter.com/BadDogsCompany"><mark className="arrow">Twitter →</mark></a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>How do I buy a Dog from the Generative 4k Collection?</h4>
                            <div className="content">
                                <p>
                                    The 4K collection will be launched with normal
                                    minting from a ERC721 contract on this website.
                                    Priority whitelist will be given to Genesis
                                    holders. There will also be whitelist
                                    opportunities for active discord members.
                                </p>
                            </div>
                        </div>
                        <div className="read-card">
                            <h4>What happens when BDC reaches its goal of 4k Generative Collection?</h4>
                            <div className="content">
                                <p>
                                    There will be a lot of growing once the 4k
                                    collection is fully minted. We will
                                    continue to allocate funds to execute on
                                    our roadmap. Depending on the available
                                    war-chest post mint, we will focus on
                                    finding ways to connect our project to
                                    a sustainable IRL business.
                                </p>
                                <p>
                                    We will reinvest a significant portion of
                                    the profit back into BDC. This includes
                                    continual build of our brand as well as
                                    locating opportunities for collaboration,
                                    partnership, or acquisition with other
                                    projects or businesses that aligns with
                                    our goals.
                                </p>
                            </div>
                        </div>
                        {/* <Button path="/create" className="mr--15">
                            Create
                        </Button>
                        <Button href="/contact" color="primary-alta">
                            Contact Us
                        </Button> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="support-accordion">
                        <Accordion
                            defaultActiveKey={0}
                            items={[
                                {
                                    id: 0,
                                    title: "What is Genesis mint price?",
                                    description:
                                        "<p><strong>0.1 ETH</strong></p>",
                                },
                                {
                                    id: 1,
                                    title: "What is Generative mint price?",
                                    description:
                                        "<p><strong>TBD</strong></p>",
                                },
                                {
                                    id: 2,
                                    title: "Will Genesis holders get WL?",
                                    description:
                                        "<p>Yes, Geensis holders will get a certain amount of whitelist allocated to them with a discounted mint price (TBD).</p>",
                                },
                                {
                                    id: 3,
                                    title: "Where can I see my purchased dogs?",
                                    description:
                                        "<p>You can view them on <a href='https://opensea.io/collection/baddogscompany'>OpenSea</a>. Once we migrate the collection to ERC721, you will be able to see them directly in your wallet (e.g. MetaMask).</p>",
                                },
                                {
                                    id: 4,
                                    title: "What is the Diamond Club?",
                                    description:
                                        "<p>The Dimaond Club was created to allow our biggest BDC supporter to have a direct line of communication with the Core team. The core team will listen and assess all feedback from the Diamonds and execute accordingly if and when it is appropriate. </p>",
                                },
                                {
                                    id: 5,
                                    title: "How do I get a Custom Dog?",
                                    description:
                                        "<p>Custom dogs are Genesis tokens that is drawn by @13six specifically with the input from the holder. This is one of the highest proud dog you can get from this collection and initially was reserved for OGs. However, we have options for Diamond Club or Whale members to obtain one.</p>",
                                },
                                {
                                    id: 6,
                                    title: "Do you have a long-term roadmap?",
                                    description:
                                        "<p>Yes, all roadmap information will be in <a href='/roadmap'>Roadmap</a>.</p>",
                                },
                                {
                                    id: 7,
                                    title: "How can I reach the team?",
                                    description:
                                        "<p>The team is best reached through our <a href='https://discord.gg/pf98svgC7N'>Discord</a>. If you need to contact the team privately, please open a support ticket in the server. For serious inquiries, we are also available through DM on Twitter or let us know in #support you want to connect and we will accept your friend request.</p>",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

SupportArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
};
SupportArea.defaultProps = {
    space: 1,
};

export default SupportArea;
