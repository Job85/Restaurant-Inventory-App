import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../../globals";
import axios from "axios";

export const useItem = () => {
    let navigate = useNavigate();

    let { id } = useParams();

    let [item, setItem] = useState({
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
    }

    const handlePostSubmit = async (e) => {
        console.log(item)
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/item/create`, item);
            navigate("/items");
        } catch (error) {
            console.log(error);
        }
    };

    const getItem = async () => {
        let item = await axios.get(`${BASE_URL}/item/${id}`)
        setItem(item.data[0])
    }

    useEffect(() => {
        if (id) {
            getItem(id);
        }
    }, [id])

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
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`${BASE_URL}/item/delete/${id}`);
            navigate("/items")
        } catch (error) {
            console.log(error);
        }
    }

    return {
        item,
        setItem,
        handleChange,
        handlePostSubmit,
        handlePutSubmit,
        handleDelete
    };
};