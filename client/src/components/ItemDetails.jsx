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

                <div className='edit-card'>
                    <ul>
                        <label id='location'>Location:</label>
                        <input type='text'
                            defaultValue={props.setNewItem.location}
                            onChange={props.handleChange}
                            name='location'
                            placeholder={'location'}
                            className='label-form' />
                    </ul>
                    <ul>
                        <label id='category'>Category:</label>
                        <input type='text'
                            defaultValue={props.setNewItem.category}
                            onChange={props.handleChange}
                            name='category'
                            placeholder={'category'}
                            className='label-form' />
                    </ul>
                    <ul>
                        <label id='item'>Item:</label>
                        <input type='text'
                            defaultValue={props.setNewItem.item}
                            onChange={props.handleChange}
                            name='item'
                            placeholder={'item'}
                            className='label-form' />
                    </ul>
                    <ul>
                        <label id='size'>Size:</label>
                        <input type='text'
                            defaultValue={props.setNewItem.size}
                            onChange={props.handleChange}
                            name='size'
                            placeholder={'size'}
                            className='label-form' />
                    </ul>
                    <ul>
                        <label id='count'>Count:</label>
                        <input type='text'
                            defaultValue={props.setNewItem.count}
                            onChange={props.handleChange}
                            name='count'
                            placeholder={'count'}
                            className='label-form' />
                    </ul>
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
            </div>
        </div>
    )
}

export default ItemDetails