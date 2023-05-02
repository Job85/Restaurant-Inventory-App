import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCardTitle } from '../slices/cardTitleSlice';
import ItemForm from './ItemForm';
import { useItem } from "./card/card-functions/ItemHook";

const ItemDetails = (props) => {

    const dispatch = useDispatch();

    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        if (itemData) {
            dispatch(setCardTitle(`Edit ${itemData}`));
        }
    }, [dispatch, itemData])

    const { item } = useItem();

    return (
        <div className='items'>
            <ItemForm
                title="Edit Item"
                item={item}
                editMode={true}
            />
        </div >
    )
}

export default ItemDetails