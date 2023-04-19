import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCardTitle } from '../slices/cardTitleSlice';
import Card from "./Card";

const ItemForm = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCardTitle('New Item Form'));
    }, [dispatch]);

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Card
                    className="homeCard"
                    cardTitle="New Item Form"
                >
                    <input
                        type='text'
                        defaultValue={props.newItem.location}
                        onChange={props.handleChange}
                        name={'location'}
                        placeholder={'location'}
                        className='locationInput'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.category}
                        onChange={props.handleChange}
                        name={'category'}
                        placeholder={'category'}
                        className='categoryInput'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.item_name}
                        onChange={props.handleChange}
                        name={'item_name'}
                        placeholder={'item'}
                        className='itemInput'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.description}
                        onChange={props.handleChange}
                        name={'description'}
                        placeholder={'description'}
                        className='descriptionInput'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.unit_measure}
                        onChange={props.handleChange}
                        name={'unit_measure'}
                        placeholder={'unit of measure'}
                        className='uomInput'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.case_size}
                        onChange={props.handleChange}
                        name={'case_size'}
                        placeholder={'case size'}
                        className='caseInput'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.vendor_name}
                        onChange={props.handleChange}
                        name={'vendor_name'}
                        placeholder={'vendor_name'}
                        className='vendorInput'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.vendor_code}
                        onChange={props.handleChange}
                        name={'vendor_code'}
                        placeholder={'vendor_code'}
                        className='vcInput'
                    />
                    <button
                        type="submit"
                        className="addButton"
                    >
                        Add Item
                    </button>
                </Card>
            </form>
        </>
    )
}

export default ItemForm