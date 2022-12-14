import './Header.scss';
import { Link } from 'react-router-dom';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Header = (props) => {
    const isAdmin = (props.title).toUpperCase() === 'ADMIN';
    const context = useContext(Context);
    const {sliderState} = context;

    return (
        <div className='header-container'>
            <div className='container header'>
                <h1>{props.title}</h1>
                {isAdmin
                ? <Link className='btn'
                       to='/'>Powrót</Link>
                : <Link className='btn btn--admin'
                      to='/admin'>Admin panel</Link>}
            </div>
        </div>
    )
}

export default Header;