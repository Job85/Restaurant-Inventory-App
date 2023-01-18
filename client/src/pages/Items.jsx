import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../globals'

const Items = (props) => {
    let [items, setItems] = useState([])
    const getItems = async () => {
        let retrievedItems = await axios.get(`${BASE_URL}/item`)
        return retrievedItems
    }
    useEffect(async () => {
        let items = await getItems()
        console.log(items)
        setItems(items.data)
    }, [])

    return (
        <div className='items'>
            <h1>Items List</h1>
            <div className='item-container'>
                {items.map((item, i) => (
                    <li className='item-card card' key={i}>
                        <span className='item-card-span'>Location:<span className='item-field'>{item.location}</span></span>
                        <span className='item-card-span'> Category:<span className='item-field'>{item.category}</span></span>
                        <span className='item-card-span'> Item:<span className='item-field'>{item.item_name}</span></span>
                        <span className='item-card-span'>Description:<span className='item-field'>{item.description}</span></span>
                        <span className='item-card-span'>Unit of Measure:<span className='item-field'>{item.unit_measure}</span></span>
                        <span className='item-card-span'>Case Size:<span className='item-field'>{item.case_size}</span></span>
                        <span className='item-card-span'>Count:<span className='item-field'>{item.count}</span></span>
                        <span className='item-card-span'>Vendor Name:<span className='item-field'>{item.vendor_name}</span></span>
                        <span className='item-card-span'>Vendor Code:<span className='item-field'>{item.vednor_code}</span></span>
                        <Link to={`/items/${item._id}`}>
                            <button className='up-button'>
                                Update
                            </button>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Items
