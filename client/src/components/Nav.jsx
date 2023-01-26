import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faTableList, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
        <nav className="navbar">
            <div>
                <Link to='/'><FontAwesomeIcon icon={faHouse} /></Link>
                <Link to='items'><FontAwesomeIcon icon={faTableList} /></Link>
                <Link to='/new'><FontAwesomeIcon icon={faCirclePlus} /></Link>
            </div>
        </nav>
    )
}

export default Header