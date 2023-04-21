import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../globals'
import Card from '../components/card/Card';

const Items = (props) => {
    let [items, setItems] = useState([])

    const getItems = async () => {
        let retrievedItems = await axios.get(`${BASE_URL}/item`)
        return retrievedItems
    }
    useEffect(async () => {
        let items = await getItems()
        setItems(items.data)
    }, [])

    return (
        <div className='items'>
            <h1>Items List</h1>
            <div className='item-container'>
                {items.map((item, i) => (
                    <Card key={i}>

                        <span className='location-input'>{item.location}</span>
                        <span className='category-input'>{item.category}</span>
                        <span className='item-input'>{item.item_name}</span>
                        <span className='description-input'>{item.description}</span>
                        <span className='uom-input'> {item.unit_measure}</span>
                        <span className='case-input'>{item.case_size}</span>
                        <span className='vendor-input'>{item.vendor_name}</span>
                        <span className='vc-input'>{item.vendor_code}</span>
                        <Link className='add-button' to={`/items/${item._id}`}>
                            <button className='up-button'>
                                Update
                            </button>
                        </Link>

                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Items
