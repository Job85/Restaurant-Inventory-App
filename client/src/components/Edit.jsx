import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Edit = () => {
    let [items, editedItems] = useState([])
    const putItems = async () => {
        let puttingItems = await axios.put('http://localhost:3001/items')
        return puttingItems
    }
    useEffect(async () => {
        let items = await putItems()
        editedItems(items.data)
    }, [])
    return (
        <div className='edit'>
            <h1>Edit Page</h1>
            <h2>
                Let's Edit items!
            </h2>
        </div>
    )
}

export default Edit