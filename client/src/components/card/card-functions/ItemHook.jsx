import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../../globals";
import axios from "axios";

export const useItem = () => {
    let navigate = useNavigate();

    let { id } = useParams();

    const [item, setItem] = useState({
        location: '',
        category: '',
        item_name: '',
        description: '',
        unit_measure: '',
        case_size: '',
        vendor_name: '',
        vendor_code: ''
    })
    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
        // console.log(item)
    }

    const handlePostSubmit = async (e) => {
        console.log(item)
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/item/create`, item);
            navigate("/items");
        } catch (error) {
            console.log(error);
        }
    };

    // const getItem = async () => {
    //     let item = await axios.get(`${BASE_URL}/item/${id}`)
    //     setItem(item.data[0])
    //     console.log(item.data)
    // }

    // useEffect(() => {
    //     getItem();
    // }, [])

    const updateItem = async () => {
        let url = `${BASE_URL}/item/update/${id}`
        await axios.put({
            url,
            method: 'put',
            data: item
        })
    }
    const handlePutSubmit = (e) => {
        e.preventDefault();
        updateItem();
        setItem({
            location: '',
            category: '',
            item_name: '',
            description: '',
            unit_measure: '',
            case_size: '',
            vendor_name: '',
            vendor_code: ''
        })
        axios.put(`${BASE_URL}/item/update/${id}`, item)
        navigate('/items');
        console.log(setItem)
    }

    return {
        item,
        handleChange,
        handlePostSubmit,
        handlePutSubmit
    };
};

export default useItem;

// import { useItemCard } into ItemForm
// remove props from onSubmit, defaultValue, handleChange
// change newItem => item
// call hook above return const { item, handleChange, handleSubmit } = useItemCard()