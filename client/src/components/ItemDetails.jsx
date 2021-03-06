import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../globals'

const ItemDetails = (props) => {
    let navigate = useNavigate()

    let [retrievedItem, updateItem] = useState([])
    let { id } = useParams()
    let getItem = async () => {
        let pendingItem = await axios.get(`${BASE_URL}/items/${id}`)
        return pendingItem
    }
    useEffect(async () => {
        let item = await getItem()
        console.log(item)
        updateItem(item.data[0])
    }, [])

    const handleChange = (e) => {
        updateItem({ ...retrievedItem, [e.target.name]: e.target.value })
    }

    const handleDelete = async (id) => {
        await axios.delete(`${BASE_URL}/deleteitem/${id}`).then(
            () => navigate('/items')
        )

    }

    const handleSave = async () => {
        await axios.put(`${BASE_URL}/putitem/`, retrievedItem).then(
            () => navigate('/items')
        )
    }

    return (
        <div className='items'>
            <h1>Item Details</h1>
            <div className='editContainer'>
                <div className='edit-card'>
                    <li className='item-card'>
                        <span>
                            <label>Location:</label>
                            <input type='text'
                                onChange={handleChange}
                                name={'location'}
                                placeholder={`${retrievedItem.location}`}
                                className='edit-form' />
                        </span>
                    </li>
                    <li className='item-card'>
                        <span>
                            <label>Category:</label>
                            <input type='text'
                                onChange={props.handleChange}
                                name={'category'}
                                placeholder={`${retrievedItem.category}`}
                                className='edit-form' />
                        </span>
                    </li>
                    <li className='item-card'>
                        <span>
                            <label>Item:</label>
                            <input type='text'
                                onChange={props.handleChange}
                                name={'item'}
                                placeholder={`${retrievedItem.item}`}
                                className='edit-form' />
                        </span>
                    </li>
                    <li className='item-card'>
                        <span>
                            <label>Size:</label>
                            <input type='text'
                                onChange={props.handleChange}
                                name={'size'}
                                placeholder={`${retrievedItem.size}`}
                                className='edit-form' />
                        </span>
                    </li>
                    <li className='item-card'>
                        <span>
                            <label>Count:</label>
                            <input type='text'
                                onChange={props.handleChange}
                                name={'count'}
                                placeholder={`${retrievedItem.count}`}
                                className='edit-form' />
                        </span>
                    </li>
                    <div onClick={() => handleDelete(retrievedItem._id)}>
                        <button id='deleteButton' type='submit'>Delete</button>
                    </div>
                    <div onClick={() => handleSave(retrievedItem)}>
                        <button id='saveButton' type='submit'>Save</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemDetails