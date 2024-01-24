import React from "react";
import CardHeader from "./CardHeader";
import { useItem } from "./card-functions/ItemHook";
// Fix rendering of "Add & Delete buttons" try to put padding to seperate Add button is hiding Delete button
// Add Button is sending blank fields to API call

const item = [
    <b className="label location">Location:</b>,
    <b className="label category">Category:</b>,
    <b className="label item">Item:</b>,
    <b className="label description">Description:</b>,
    <b className="label uom">Unit of Measure:</b>,
    <b className="label case">Case Size:</b>,
    <b className="label vendor">Vendor Name:</b>,
    <b className="label vc">Vender Code:</b>
];

const inventoryItem = item.map((content, index) => <li key={index}>{content}</li>);

const Card = ({ children, editMode }) => {
    const { handlePostSubmit, handlePutSubmit, handleDelete } = useItem();

    return (
        <div className="card">
            <CardHeader />
            <div>
                <ul className="card-ul">{inventoryItem}{children}</ul>
            </div>
            <>
                {editMode ? (
                    <>
                        <div>
                            <button
                                type='submit'
                                id='save-button'
                                className='card-button'
                                // buttonName="Save"
                                onClick={handlePutSubmit}
                            >
                                Save
                            </button>
                        </div>
                        <div>
                            <button
                                type='submit'
                                id='delete-button'
                                className='card-button'
                                // buttonName="Delete"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </>
                ) : (
                    <button
                        type='submit'
                        id='add-button'
                        className='card-button'
                        // buttonName="Add"
                        onClick={handlePostSubmit}
                    >
                        Add
                    </button>
                )}
            </>
        </div>
    )
}

export default Card