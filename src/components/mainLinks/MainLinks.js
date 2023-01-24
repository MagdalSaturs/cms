import './MainLinks.scss';

const MainLinks = () => {

    return (
        <>
            <div className='mainLinks-container'>
                <h1>MainLinks</h1>
                <a className='logOut' href='/'>Wyloguj</a>
                <a className='biology-btn' href='/biologia/list'>Biologia</a>
                <br/>
                <a className='history-btn' href='/history/list'>Historia</a>
            </div>
        </>
    )
};

export default MainLinks;