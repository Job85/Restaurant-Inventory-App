import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <header>
            <nav>
                <Link to='/' className='link'>Home</Link>
                <Link to='Items' className='link'>Items</Link>
            </nav>
        </header>
    )
}

export default Header