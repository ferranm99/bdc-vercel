/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
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

const ShowGenerative = () => {
    // const { data, error } = useSWR('api/genesis', fetcher);
    const { data, error } = useSWRImmutable('api/generative', fetcher);

    if (!data) return <h1>Loading</h1>;  // TODO: Implement <Spinner />
    if (error) return <h1>Error</h1>;
    // console.log(data);

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
                            // checked={true}
                            // onClick={handleChange}
                            >

                                {/* <Card.Img variant="top" src="/images/bdc/nft/bdc188-235px.png" /> */}
                                <Card.Img variant="top" src={item.imageUrl} />

                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
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

export default ShowGenerative;
