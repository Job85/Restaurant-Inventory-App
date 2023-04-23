import React from "react";
import { useSelector } from "react-redux";

const CardHeader = () => {

    const cardTitle = useSelector((state) => state.cardTitle);
    return (
        <h2 id="cardHeader">{cardTitle}</h2>
    )
}

export default CardHeader