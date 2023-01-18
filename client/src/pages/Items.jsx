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
                        <span className='item-card-span'>Location:{item.location}</span>
                        <span className='item-card-span'> Category:{item.category}</span>
                        <span className='item-card-span'> Item:{item.item_name}</span>
                        <span className='item-card-span'>Description:{item.description}</span>
                        <span className='item-card-span'>Unit of Measure:{item.unit_measure}</span>
                        <span className='item-card-span'>Case Size:{item.case_size}</span>
                        <span className='item-card-span'>Count:{item.count}</span>
                        <span className='item-card-span'>Vendor Name:{item.vendor_name}</span>
                        <span className='item-card-span'>Vendor Code:{item.vednor_code}</span>
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
