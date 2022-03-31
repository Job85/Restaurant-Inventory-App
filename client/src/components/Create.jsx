// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { response } from 'express';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    let navigate = useNavigate

    const handleSubmit = (e) => {
        props.addItem(e)
        navigate('/items')
    }

    // let [items, postedItems] = useState([])
    // const postItems = async () => {
    //     let postingItems = await axios
    //         .post('http://localhost:3001/items', {
    //             location: '',
    //             category: '',
    //             item: '',
    //             size: '',
    //             count: ''
    //         })
    //         .then((response) => {
    //             postedItems(reponse.item);
    //         });

    //     return response
    // }
    // useEffect(async () => {
    //     let items = await postItems()
    //     postedItems(items.data)
    // }, [])

    return (
        <div className='create'>
            <h1>Create Page</h1>
            <h2>
                Lets create an item!
            </h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <ul className='create-card'>
                        <ul>
                            <label id='location'>Location:</label>
                            <input type='text' value={props.newItem.location} onChange={props.handleChange} placeholder={'location'} className='label-form' />
                        </ul>
                        <ul>
                            <label id='category'> Category:</label>
                            <input type='text' value={props.newItem.category} onChange={props.handleChange} placeholder={'category'} className='label-form' />
                        </ul>
                        <ul>
                            <label id='item'>Item:</label>
                            <input type='text' value={props.newItem.item} onChange={props.handleChange} placeholder={'item'} className='label-form' />
                        </ul>
                        <ul>
                            <label id='size'>Size:</label>
                            <input type='text' value={props.newItem.size} onChange={props.handleChange} placeholder={'size'} className='label-form' />
                        </ul>
                        <ul>
                            <label id='count'>Count:</label>
                            <input type='number' value={props.newItem.Category} onChange={props.handleChange} placeholder={'count'} className='label-form' />
                        </ul>
                    </ul>
                    <button>Create Item</button>
                    {/* <button onClick={postItems}>Create Item</button> */}
                    {/* <input type="submit" value='Submit' /> */}
                </form>
            </div>
        </div >
    )
}

export default Create