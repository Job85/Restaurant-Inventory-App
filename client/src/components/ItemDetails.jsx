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

    let [item, reviseItem] = useState([])
    const putItem = async () => {
        let finishedItem = await axios.put('http://localhost:3001/items')
        return finishedItem
    }
    useEffect(async () => {
        let item = await putItem()
        reviseItem(items.data)
    }, [])

    return (
        <div className='items'>
            <h1>Edit Items</h1>
            <div className='itemContainer'>
                {
                    items.map((item, i) => (
                        <li className='item-card' key={i}>
                            <span className='item-card-span'>Location:{item.location}</span>
                            <span className='item-card-span'> Category:{item.category}</span>
                            <span className='item-card-span'> Item:{item.item}</span>
                            <span className='item-card-span'>Size:{item.size}</span>
                            <span className='count-span'>Count:{item.count}</span>
                            <div id='buttonContainer'>
                                <form onSubmit={props.handleEdit}>
                                    <button id='editButton'>Edit</button>
                                </form>
                                <form onSubmit={props.handleDelete}>
                                    <button id='deleteButton' type='submit'>Delete</button>
                                </form>
                                <form onSubmit={props.handleSave}>
                                    <button id='saveButton'>Save</button>
                                </form>
                            </div>
                        </li>
                    ))}
            </div>
        </div>
    )
}

// onEdit={props.editItem.handleEdit}

export default ItemDetails