import React, { useState, useEffect } from 'react';
import axios from 'axios'


const ItemDetails = (props) => {
    let [items, updateItems] = useState([])
    const getItems = async () => {
        let retrievedItems = await axios.get('http://localhost:3001/items')
        return retrievedItems
    }
    useEffect(async () => {
        let items = await getItems()
        updateItems(items.data)
    }, [])


    return (
        <div className='items'>
            <h1>Edit Items</h1>
            <div className='item-container'>
                {
                    items.map((item, i) => (
                        <li className='item-card' key={i}>
                            <span className='item-card-span'>Location:{item.location}</span>
                            <span className='item-card-span'> Category:{item.category}</span>
                            <span className='item-card-span'> Item:{item.item}</span>
                            <span className='item-card-span'>Size:{item.size}</span>
                            <span className='count-span'>Count:{item.count}</span>
                            <button id='editButton' onEdit={props.editItem.handleEdit}>Edit</button>
                            <button>Delete</button>
                            <button type='submit'>Save</button>
                        </li>
                    ))}
            </div>
        </div>
    )
}

export default ItemDetails