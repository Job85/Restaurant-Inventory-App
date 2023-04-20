import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../globals'
import Card from '../components/Card';

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

                        <span className='locationInput'>{item.location}</span>
                        <span className='categoryInput'>{item.category}</span>
                        <span className='itemInput'>{item.item_name}</span>
                        <span className='descriptionInput'>{item.description}</span>
                        <span className='uomInput'> {item.unit_measure}</span>
                        <span className='caseInput'>{item.case_size}</span>
                        <span className='vendorInput'>{item.vendor_name}</span>
                        <span className='vcInput'>{item.vendor_code}</span>
                        <Link className='addButton' to={`/items/${item._id}`}>
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
