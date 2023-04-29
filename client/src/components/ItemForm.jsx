import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCardTitle } from '../slices/cardTitleSlice';
import Card from "./card/Card";
import Button from './Button';
import { setButtonName } from "../slices/buttonNameSlice";
import { useItem } from "./card/card-functions/ItemHook";

const ItemForm = ({ editMode }) => {

    // Dispatch action to Redux store
    const dispatch = useDispatch();

    // change cardTitle=""
    useEffect(() => {
        dispatch(setCardTitle('New Item Form'));
    }, [dispatch]);

    const { item, handleChange, handlePostSubmit } = useItem();

    return (
        <>
            <form onSubmit={handlePostSubmit}>
                <Card
                    className="home-card"
                    cardTitle=""
                >
                    <input
                        type='text'
                        defaultValue={item.location}
                        onChange={handleChange}
                        name={'location'}
                        placeholder={'location'}
                        className='location-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.category}
                        onChange={handleChange}
                        name={'category'}
                        placeholder={'category'}
                        className='category-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.item_name}
                        onChange={handleChange}
                        name={'item_name'}
                        placeholder={'item'}
                        className='item-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.description}
                        onChange={handleChange}
                        name={'description'}
                        placeholder={'description'}
                        className='description-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.unit_measure}
                        onChange={handleChange}
                        name={'unit_measure'}
                        placeholder={'unit of measure'}
                        className='uom-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.case_size}
                        onChange={handleChange}
                        name={'case_size'}
                        placeholder={'case size'}
                        className='case-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.vendor_name}
                        onChange={handleChange}
                        name={'vendor_name'}
                        placeholder={'vendor_name'}
                        className='vendor-input'
                    />
                    <input
                        type='text'
                        defaultValue={item.vendor_code}
                        onChange={handleChange}
                        name={'vendor_code'}
                        placeholder={'vendor_code'}
                        className='vc-input'
                    />
                    <>
                        {editMode ? (
                            <>
                                <Button
                                    type='submit'
                                    id='save-button'
                                    className='card-button'
                                    buttonName="Save"
                                />
                                <Button
                                    type='submit'
                                    id='delete-button'
                                    className='card-button'
                                    buttonName="Delete"
                                />
                            </>
                        ) : (
                            <Button
                                type='submit'
                                id='add-button'
                                className='card-button'
                                buttonName="Add"
                            />
                        )}
                    </>
                </Card>
            </form>
        </>
    )
}

export default ItemForm