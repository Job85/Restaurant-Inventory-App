import React from "react";
import { useSelector } from "react-redux";

const Button = () => {
    const buttonName = useSelector((state => state.buttonName))

    return (
        <button>
            {buttonName}
        </button>
    )
}

export default Button