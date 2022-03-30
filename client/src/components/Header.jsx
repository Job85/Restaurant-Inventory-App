import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <header>
            <nav>
                <Link to="/" className='link'>Home</Link>
                {/* <Link to="edit" className='link'>Edit</Link> */}
                {/* <Link to="form" className='link'>Form</Link> */}
            </nav>
        </header>
    )
}

export default Header