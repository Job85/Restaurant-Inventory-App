import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCardTitle } from '../slices/cardTitleSlice';
import Card from "./card/Card";
import Button from './Button';
import { setButtonName } from "../slices/buttonNameSlice";
import { useItem } from "./card/card-functions/ItemHook";
// Fix rendering of "Add & Delete buttons" try to put padding to seperate Add button is hiding Delete button
// Add Button is sending blank fields to API call

const ItemForm = () => {

    // Dispatch action to Redux store
    const dispatch = useDispatch();

    // change cardTitle=""
    useEffect(() => {
        dispatch(setCardTitle('New Item Form'));
    }, [dispatch]);

    const { item, handleChange, handlePostSubmit, handlePutSubmit, handleDelete } = useItem();

    return (
        <>
            <form className="create-form">
                <Card
                    className="input home-card"
                    cardTitle=""
                    editMode={false}
                >
                    <input
                        type='text'
                        defaultValue={item.location}
                        onChange={handleChange}
                        name={'location'}
                        placeholder={'location'}
                        className='input location-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.category}
                        onChange={handleChange}
                        name={'category'}
                        placeholder={'category'}
                        className='input category-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.item_name}
                        onChange={handleChange}
                        name={'item_name'}
                        placeholder={'item'}
                        className='input item-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.description}
                        onChange={handleChange}
                        name={'description'}
                        placeholder={'description'}
                        className='input description-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.unit_measure}
                        onChange={handleChange}
                        name={'unit_measure'}
                        placeholder={'unit of measure'}
                        className='input uom-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.case_size}
                        onChange={handleChange}
                        name={'case_size'}
                        placeholder={'case size'}
                        className='input case-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.vendor_name}
                        onChange={handleChange}
                        name={'vendor_name'}
                        placeholder={'vendor_name'}
                        className='input vendor-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.vendor_code}
                        onChange={handleChange}
                        name={'vendor_code'}
                        placeholder={'vendor_code'}
                        className='input vc-input'
                    />

                </Card>
            </form>
        </>
    )
}

export default ItemForm