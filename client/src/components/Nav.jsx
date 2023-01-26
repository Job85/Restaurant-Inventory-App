import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="navbar">
            <div>
                <Link to='/'>Home</Link>
                <Link to='items'>Items</Link>
                <Link to='/new'>Add Item</Link>
            </div>
        </nav>
    )
}

export default Nav