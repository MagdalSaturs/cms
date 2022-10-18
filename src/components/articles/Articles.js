import './Articles.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Articles = () => {
    const context = useContext(Context);
    const {articlesState, articlesMainImage} = context;

    console.log(articlesMainImage)


    return (
        <>
            {articlesState && <div className='articles-container'>
                <p>Articles</p>
                <h3>Main article</h3>
                <img src={articlesMainImage ? articlesMainImage : 'https://tueuropa.pl/uploads/articles_files/2021/11/05/6e7f9516-1948-d9e8-ca22-00007380aca5.jpg'} height='50%' alt='wrong link'></img>
            </div>}
        </>
    )
};

export default Articles;