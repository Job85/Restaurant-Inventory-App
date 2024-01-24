import React from "react";
import { useSelector } from "react-redux";
// added className
const CardHeader = () => {

    const cardTitle = useSelector((state) => state.cardTitle);
    return (
        <h2 id="cardHeader" className="card-header">{cardTitle}</h2>
    )
}

export default CardHeader