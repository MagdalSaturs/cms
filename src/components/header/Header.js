import './Header.scss';

const Header = (proprs) => {
    return (
        <div className='header-container'>
            <div className='container header'>
                <h1>{proprs.title}</h1>
            </div>
        </div>
    );
};

export default Header;