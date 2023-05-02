import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCardTitle } from '../slices/cardTitleSlice';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../globals'
import ItemForm from './ItemForm';
import { useItem } from "./card/card-functions/ItemHook";

const ItemDetails = (props) => {

    const dispatch = useDispatch();

    const [itemData, setItemData] = useState(null);

    let navigate = useNavigate()
    let { id } = useParams()

    // useEffect(() => {
    //     if (itemData) {
    //         dispatch(setCardTitle(`Edit ${itemData}`));
    //     }
    // }, [dispatch, itemData])


    const handleDelete = async (_id) => {
        await axios.delete(`${BASE_URL}/item/delete/${id}`).then(
            () => navigate('items'))
    }

    const { item, handlePutSubmit } = useItem();

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