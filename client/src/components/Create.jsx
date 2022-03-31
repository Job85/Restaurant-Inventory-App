import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import { handle } from 'express/lib/application';

const Create = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit');
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
                            <input type='text' placeholder='enter location' className='label-form' />
                        </ul>
                        <ul>
                            <label id='category'> Category:</label>
                            <input type='text' placeholder='category' className='label-form' />
                        </ul>
                        <ul>
                            <label id='item'>Item:</label>
                            <input type='text' placeholder='item' className='label-form' />
                        </ul>
                        <ul>
                            <label id='size'>Size:</label>
                            <input type='text' placeholder='size' className='label-form' />
                        </ul>
                        <ul>
                            <label id='count'>Count:</label>
                            <input type='number' placeholder='count' className='label-form' />
                        </ul>
                    </ul>
                    {/* <button type='submit'>Submit</button> */}
                    <input type="submit" value='Submit' />
                </form>
            </div>
        </div >
    )
}

export default Create