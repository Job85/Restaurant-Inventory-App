import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="navbar">
            <h2>Nav Bar</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='Items'>Items</Link>
                <Link to='Create'>Create</Link>
                <Link to='Edit'>Create</Link>
            </div>
        </nav>
    )
}

export default Nav