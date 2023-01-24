import './List.scss';

const List = () => {

    return (
        <>
            <div className='list-container'>
                <h1>Spis</h1>
                <a href='/history' className='slider-container__link'>Historia dział I</a>
                <a href='/history2' className='slider-container__link'>Historia dział II</a>
            </div>
        </>
    )
};

export default List;