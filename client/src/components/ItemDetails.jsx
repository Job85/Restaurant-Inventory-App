import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const ItemDetails = (props) => {
    let [items, updateItems] = useState([])
    const getItems = async () => {
        let retrievedItems = await axios.get(`http://localhost:3001/items`)
        return retrievedItems
    }
    useEffect(async () => {
        let items = await getItems()
        updateItems(items.data)
        console.log(items.data)
    }, [])

    let [editItem, setEdit] = useState({
        location: '',
        category: '',
        item: '',
        size: '',
        count: ''
    })
    let { id } = useParams()

    useEffect(() => {
        let changedItem = items.find(
            (item) => item.id === parseInt(id)
        )
        setEdit(changedItem)
    }, [items, id])
    const handleEdit = (e) => {
        e.preventDefault();
        setEdit({ ...editItem, [e.target.name]: e.target.value })
        return
    }

    return (
        <div className='items'>
            <h1>Edit Items</h1>
            <div className='editContainer'>

                <div className='edit-card'>

                    {items.map((item, i) => (
                        <li className='item-card' key={i}>
                            <span className='item-card-span'>Location:{item.location}
                                <form onSubmit={handleEdit}>
                                    <button id='editButton'>Edit</button>
                                </form>
                            </span>
                            <span className='item-card-span'> Category:{item.category}
                                <form onSubmit={handleEdit}>
                                    <button id='editButton'>Edit</button>
                                </form>
                            </span>
                            <span className='item-card-span'> Item:{item.item}
                                <form onSubmit={handleEdit}>
                                    <button id='editButton'>Edit</button>
                                </form>
                            </span>
                            <span className='item-card-span'>Size:{item.size}
                                <form onSubmit={handleEdit}>
                                    <button id='editButton'>Edit</button>
                                </form>
                            </span>
                            <span className='count-span'>Count:{item.count}
                                <form onSubmit={handleEdit}>
                                    <button id='editButton'>Edit</button>
                                </form>
                            </span>
                            {/* <form onSubmit={props.handleEdit}>
                                <button id='editButton'>Edit</button>
                            </form> */}
                            <form onSubmit={props.handleDelete}>
                                <button id='deleteButton' type='submit'>Delete</button>
                            </form>
                            {/* <form onSubmit={props.handleSave}>
                                <button id='saveButton'>Save</button>
                            </form> */}
                        </li>
                    ))}
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