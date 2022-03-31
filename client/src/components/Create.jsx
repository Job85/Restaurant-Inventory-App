const Create = (props) => {


    return (
        <div className='create'>
            <h1>Create Page</h1>
            <h2>
                Lets create an item!
            </h2>
            <div>
                <form>
                    <ul className='create-card'>
                        <ul>
                            <label id='location'>Location:</label>
                            <input type='text'
                                defaultValue={props.newItem.location}
                                onChange={props.handleChange}
                                placeholder={'location'}
                                className='label-form' />
                        </ul>
                        {/* <ul>
                            <label id='category'> Category:</label>
                            <input type='text'
                                value={props.newItem.category}
                                placeholder={'category'}
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='item'>Item:</label>
                            <input type='text'
                                value={props.newItem.item}
                                placeholder={'item'}
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='size'>Size:</label>
                            <input type='text'
                                value={props.newItem.size}
                                placeholder={'size'}
                                className='label-form' />
                        </ul>
                        <ul>
                            <label id='count'>Count:</label>
                            <input type='number'
                                value={props.newItem.Category}
                                placeholder={'count'}
                                className='label-form' />
                        </ul> */}
                    </ul>
                    <button>Create Item</button>
                </form>
            </div>
        </div >
    )
}

export default Create