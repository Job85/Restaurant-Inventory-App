import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../globals'
import ItemForm from '../components/ItemForm';

const ItemDetails = (props) => {
    let navigate = useNavigate()
    let { id } = useParams()

    const getItem = async () => {
        let item = await axios.get(`${BASE_URL}/item/${id}`)
        props.setNewItem(item.data[0])
        // console.log(item.data)
    }

    useEffect(() => {
        getItem();
    }, [])

    const handleChange = (e) => {
        props.setNewItem({ ...props.newItem, [e.target.name]: e.target.value })
    }

    const handleDelete = async (_id) => {
        await axios.delete(`${BASE_URL}/item/delete/${id}`).then(
            () => navigate('items'))
    }

    const updateItem = async () => {
        let url = `${BASE_URL}/item/update/${id}`
        await axios.put({
            url,
            method: 'put',
            data: props.newItem
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateItem();
        props.setNewItem({
            location: '',
            category: '',
            item_name: '',
            description: '',
            unit_measure: '',
            case_size: '',
            count: '',
            vendor_name: '',
            vendor_code: ''
        })
        axios.put(`${BASE_URL}/item/update/${id}`, props.newItem)
        navigate('/items');
    }

    return (
        <div className='items'>
            <h1>Edit</h1>
            <ItemForm
                title="Edit Item"
                newItem={props.newItem}
            />
            <button
                onClick={() => handleSubmit}
            >
                Save
            </button>
            <div onClick={() => handleDelete(props.newItem._id)}>
                <button id='deleteButton' type='submit'>Delete</button>
            </div>
        </div >
    )
}

export default ItemDetails