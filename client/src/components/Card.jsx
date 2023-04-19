import React from "react";
import { useSelector } from 'react-redux';

const item = [
    <b className="location">Location:</b>,
    <b className="category">Category:</b>,
    <b className="item">Item:</b>,
    <b className="description">Description:</b>,
    <b className="uom">Unit of Measure:</b>,
    <b className="case">Case Size:</b>,
    <b className="vendor">Vendor Name:</b>,
    <b className="vc">Vender Code:</b>
];

const inventoryItem = item.map((content, index) => <li key={index}>{content}</li>);

const Card = ({ children }) => {
    const cardTitle = useSelector((state) => state.cardTitle);

    return (
        <div className="card">
            <h2>{cardTitle}</h2>
            <div>
                <ul className="cardUl">{inventoryItem}{children}</ul>
            </div>
        </div>
    )
}

export default Card