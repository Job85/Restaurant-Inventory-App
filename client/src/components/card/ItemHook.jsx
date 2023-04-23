import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../globals";
import axios from "axios";

export const useItemHook = () => {
    let navigate = useNavigate();

    const [item, setItem] = useState({
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

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/item/create`, item);
            navigate("/items");
        } catch (error) {
            console.log(error);
        }
    };

    return {
        item,
        handleChange,
        handleSubmit
    };
};

export default useItemCard;

// import { useItemCard } into ItemForm
// remove props from onSubmit, defaultValue, handleChange
// change newItem => item
// call hook above return const { item, handleChange, handleSubmit } = useItemCard()