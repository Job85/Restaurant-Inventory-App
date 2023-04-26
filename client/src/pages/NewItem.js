import React from "react";
import ItemForm from "../components/ItemForm";

const NewItem = () => {

    return (
        <>
            <h1 className="page-title">Create A New Inventory Item</h1>
            <p className="page-description">Fill out the form below to create a new item for your inventory</p>
            <ItemForm />
        </>
    )
}

export default NewItem