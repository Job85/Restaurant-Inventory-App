import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Items = () => {
    let [items, updateItems] = useState([])
    const getItems = async () => {
        let retrievedItems = await axios.get('http://localhost:3001/items')
        return retrievedItems
    }
    useEffect(async () => {
        let items = await getItems()
        updateItems(items.data)
    }, [])

    // let navigate = useNavigate

    return (
        <div className='items'>
            <h1>Items Page</h1>
            <h2>
                Welcome to Items Page!
            </h2>
            <div className='item-container'>
                { // I don't know what's going on with these curly braces here?!?
                    items.map((item, i) => (
                        <li className='item-card' key={i}>
                            <span className='item-card-span'>Location:{item.location}</span>
                            <span className='item-card-span'> Category:{item.category}</span>
                            <span className='item-card-span'> Item:{item.item}</span>
                            <span className='item-card-span'>Size:{item.size}</span>
                            <span className='count-span'>Count:{item.count}</span>
                            <Link to='Edit'>Edit
                                <div>

                                </div>
                            </Link>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default Items

{/* <Link to={`Items/Edit/${item.id}`}>Edit */ }