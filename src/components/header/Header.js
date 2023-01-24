import './Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const isWebsite = (props.title).toUpperCase() === 'ADMIN'
    const isMain = (props.title).toUpperCase() === 'MAIN'

    return (
        <div className='header-container'>
            <div className='container header'>
                <h1>{props.title}</h1>
                {isWebsite
                ? <Link className='btn'
                        to='/biologia'>Powrót</Link>
                : <Link className='btn btn--admin'
                        to='/admin'>Admin panel | B</Link>}
                {isMain
                ? <Link className='btn'
                        to='/biologia/list'>Biologia</Link>
                : <Link className='btn btn--main'
                        to='/main'>Main</Link>}
                {isMain && <Link className='btn btn--history' to='/history/list'>Historia</Link>}
            </div>
        </div>
    )
}

export default Header;