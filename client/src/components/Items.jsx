import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ItemDetails from './ItemDetails';
import { useParams, Link } from 'react-router-dom';
const Items = () => {
    let [items, setItems] = useState([])
    const getItems = async () => {
        let retrievedItems = await axios.get('http://localhost:3001/items')
        return retrievedItems
    }
    useEffect(async () => {
        let items = await getItems()
        setItems(items.data)
    }, [])

    let { id } = useParams()

    const handleUpdate = (e) => {
        e.preventDefault();
        let editItem = axios.get(`http://localhost:3001/items${id}`)
        return editItem
    }

    return (
        <div className='items'>
            <h1>Items List</h1>
            <div className='item-container'>
                {items.map((item, i) => (
                    <li className='item-card' key={i}>
                        <span className='item-card-span'>Location:{item.location}</span>
                        <span className='item-card-span'> Category:{item.category}</span>
                        <span className='item-card-span'> Item:{item.item}</span>
                        <span className='item-card-span'>Size:{item.size}</span>
                        <span className='count-span'>Count:{item.count}</span>
                        <button onClick={handleUpdate}>
                            Update
                        </button>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Items