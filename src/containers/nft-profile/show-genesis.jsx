/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";
// import Image from "next/image";
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

const fetcher = (url) => fetch(url).then((res) => res.json());

// border: 1px solid #ffdf0b;

const ShowGenesis = () => {
    // const { data, error } = useSWR('api/genesis', fetcher);
    const { data, error } = useSWRImmutable('api/genesis', fetcher);
    const router = useRouter();

    if (!data) return <h1>Loading</h1>;  // TODO: Implement <Spinner />
    if (error) return <h1>Error</h1>;
    // console.log(data);

    const handleClick = (tokenId) => {
        router.push(`/nft/genesis/${tokenId}`);
        // console.log(`handleClick: ${tokenId}`);
    }

    // const [genesis, setGenesis] = useState([]);
    // const [selectedImage, setSelectedImage] = useState({
    //     profile: "",
    //     cover: "",
    // });

    // const imageChange = (e) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         setSelectedImage((prev) => ({
    //             ...prev,
    //             [e.target.name]: e.target.files[0],
    //         }));
    //     }
    // };

    // const handleChange = (e) => {
    //     // console.log(e.currentTarget.className);
    //     console.log(e.currentTarget.parentNode);
    //     console.log(e.currentTarget);
    //     console.log(`e.currentTarget.name: ${e.currentTarget.name}`);
    //     console.log(`e.currentTarget.classList: ${e.currentTarget.classList}`);
    //     console.log(`before genesis: ${genesis}`);

    //     // Change to highlighted border on select
    //     if (e.currentTarget.classList.contains("card-active")) {
    //         // e.currentTarget.className = e.currentTarget.classList.contains("card-active") ?
    //         // "card bg-dark" : "card bg-dark card-active";
    //         e.currentTarget.className = "card bg-dark";

    //         // Remove value from state array
    //         let index = genesis.indexOf(e.currentTarget.name);
    //         console.log(`in setGenesis.splice indexOf: ${index}`);
    //         if (index > -1) { // only splice array when item is found
    //             let newGenesis = [...genesis];  // Need to create a new copy so it don't splice by reference
    //             // console.log(newGenesis.splice(index, 1));
    //             newGenesis.splice(index, 1);
    //             // setGenesis(genesis.splice(index, 1)); // 2nd parameter means to remove one item only
    //             setGenesis(newGenesis); // 2nd parameter means to remove one item only
    //         }
    //     } else {
    //         e.currentTarget.className = "card bg-dark card-active";

    //         // setGenesis([...genesis,
    //         // {
    //         //     id: genesis.length,
    //         //     value: e.currentTarget.value
    //         // }]);
    //         console.log("in setGenesis");
    //         setGenesis([...genesis, e.currentTarget.name]);
    //         // setGenesis((prev) => {
    //         //     return [
    //         //         ...prev,
    //         //         e.currentTarget.name
    //         //     ]
    //         // });
    //     }

    //     console.log(`className: ${e.currentTarget.className}`);

    //     console.log(`after genesis: ${genesis}`);
    // }

    return (
        <div className="nuron-information">
            {/* <button onClick={() => (console.log(genesis))}>Click</button> */}
            <Row xs={1} md={2} className="g-4">
                {
                    (data.length == 0) ? <h1><Col>NFT: 0</Col></h1> : ""
                }
                {
                    data.map((item, idx) => (
                        <Col key={idx}>
                            <Card
                                id={idx}
                                name={item.name}
                                bg="dark"
                                as="button"
                                value={idx}
                                style={{ borderWidth: "0px" }}
                                onClick={() => { handleClick(item.tokenId) }}
                            // checked={true}
                            // onClick={handleChange}
                            >

                                {/* <Card.Img variant="top" src="/images/bdc/nft/bdc188-235px.png" /> */}
                                <Card.Img variant="top" src={item.imageUrl} />

                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    {/* <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text> */}
                                </Card.Body>
                                {/* <Card.Footer>
                                Last updated 3 mins ago
                            </Card.Footer> */}
                            </Card>
                        </Col>
                    ))}

            </Row>
        </div>
    );
};

export default ShowGenesis;
