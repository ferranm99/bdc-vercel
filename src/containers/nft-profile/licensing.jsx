/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
// import Image from "next/image";
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import useSWR from "swr";
// import useSWRImmutable from "swr/immutable";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// border: 1px solid #ffdf0b;

const ShowLicensing = () => {
    // const { data, error } = useSWR('api/genesis', fetcher);
    // const { data, error } = useSWRImmutable('api/generative', fetcher);

    // if (!data) return <h1>Loading</h1>;  // TODO: Implement <Spinner />
    // if (error) return <h1>Error</h1>;
    // console.log(data);

    return (
        <div className="nuron-information">
            <h5 className="title">Commercial Licensing for BDCO Holder</h5>
            <p className="notice-disc">
                This option is currently under development.
            </p>
        </div>
    );
};

export default ShowLicensing;
