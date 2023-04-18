import React from "react";
import ItemForm from "../components/ItemForm";

const CreateItem = (props) => {

    return (
        <>
            <h1>Create a New Item</h1>
            <h3>Fill out form below to create a new inventory item</h3>
            <ItemForm
                newItem={props.newItem}
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
            />
        </>
    )
}

export default CreateItem