import React from "react"
import Card from "../components/Card"

const ItemForm = (props) => {

    return (
        <div className='create'>
            <h2>
                Lets create an item!
            </h2>
            <>
                <form onSubmit={props.handleSubmit}>
                    <Card
                        className="homeCard"
                        title="Item Form"
                    >
                        <input type='text'
                            defaultValue={props.newItem.location}
                            onChange={props.handleChange}
                            name={'location'}
                            placeholder={'location'}
                            className='locationInput'
                        />
                        <input type='text'
                            defaultValue={props.newItem.category}
                            onChange={props.handleChange}
                            name={'category'}
                            placeholder={'category'}
                            className='categoryInput'
                        />
                        <input type='text'
                            defaultValue={props.newItem.item_name}
                            onChange={props.handleChange}
                            name={'item_name'}
                            placeholder={'item'}
                            className='itemInput'
                        />
                        <input type='text'
                            defaultValue={props.newItem.description}
                            onChange={props.handleChange}
                            name={'description'}
                            placeholder={'description'}
                            className='descriptionInput'
                        />
                        <input type='text'
                            defaultValue={props.newItem.unit_measure}
                            onChange={props.handleChange}
                            name={'unit_measure'}
                            placeholder={'unit of measure'}
                            className='uomInput'
                        />
                        <input type='text'
                            defaultValue={props.newItem.case_size}
                            onChange={props.handleChange}
                            name={'case_size'}
                            placeholder={'case size'}
                            className='caseInput'
                        />
                        {/* <input type='number'
                            defaultValue={props.newItem.count}
                            onChange={props.handleChange}
                            name={'count'}
                            placeholder={'count'}
                            className='label-form' /> */}
                        <input type='text'
                            defaultValue={props.newItem.vendor_name}
                            onChange={props.handleChange}
                            name={'vendor_name'}
                            placeholder={'vendor_name'}
                            className='vendorInput'
                        />
                        <input type='text'
                            defaultValue={props.newItem.vendor_code}
                            onChange={props.handleChange}
                            name={'vendor_code'}
                            placeholder={'vendor_code'}
                            className='vcInput'
                        />
                        <button type="submit">Add Item</button>
                    </Card>
                </form>
            </>
        </div >
    )
}

export default ItemForm