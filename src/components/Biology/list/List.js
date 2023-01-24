import './List.scss';

const BiologyList = () => {

    return (
        <>
            <div className='list-container'>
                <h1>Spis</h1>
                <a href='/biologia' className='slider-container__link'>Biologia dział 1</a>
                <a href='/biologia/biology2' className='slider-container__link'>Biologia dział 2</a>
            </div>
        </>
    )
};

export default BiologyList;