import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCardTitle } from '../slices/cardTitleSlice';
import Card from "./card/Card";
import Button from './Button';
import { setButtonName } from "../slices/buttonNameSlice";

const ItemForm = (props) => {

    // Dispatch action to Redux store
    const dispatch = useDispatch();

    // change cardTitle=""
    useEffect(() => {
        dispatch(setCardTitle('New Item Form'));
    }, [dispatch]);

    // change buttonName=""
    useEffect(() => {
        dispatch(setButtonName('Add'));
    }, [dispatch]);


    return (
        <>
            <h1 className="page-title">Create A New Inventory Item</h1>
            <p className="page-description">Fill out the form below to create a new item for your inventory</p>
            <form onSubmit={props.handleSubmit}>
                <Card
                    className="home-card"
                    cardTitle=""
                >
                    <input
                        type='text'
                        defaultValue={props.newItem.location}
                        onChange={props.handleChange}
                        name={'location'}
                        placeholder={'location'}
                        className='location-input'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.category}
                        onChange={props.handleChange}
                        name={'category'}
                        placeholder={'category'}
                        className='category-input'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.item_name}
                        onChange={props.handleChange}
                        name={'item_name'}
                        placeholder={'item'}
                        className='item-input'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.description}
                        onChange={props.handleChange}
                        name={'description'}
                        placeholder={'description'}
                        className='description-input'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.unit_measure}
                        onChange={props.handleChange}
                        name={'unit_measure'}
                        placeholder={'unit of measure'}
                        className='uom-input'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.case_size}
                        onChange={props.handleChange}
                        name={'case_size'}
                        placeholder={'case size'}
                        className='case-input'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.vendor_name}
                        onChange={props.handleChange}
                        name={'vendor_name'}
                        placeholder={'vendor_name'}
                        className='vendor-input'
                    />
                    <input
                        type='text'
                        defaultValue={props.newItem.vendor_code}
                        onChange={props.handleChange}
                        name={'vendor_code'}
                        placeholder={'vendor_code'}
                        className='vc-input'
                    />
                    <Button
                        type='submit'
                        className='add-button'
                        buttonName=""
                    />
                </Card>
            </form>
        </>
    )
}

export default ItemForm