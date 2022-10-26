import './Articles.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Articles = () => {
    const context = useContext(Context);
    const {articlesState, articlesTopic, articlesText,articlesMainImage, articlesMainImage_2, articlesMainImage_3} = context;

    return (
        <>
            
            {articlesState && <div className='articles-container'>
                <h3>{articlesTopic ? articlesTopic : 'Cats'}</h3>
                <h3>{articlesText ? articlesText: 'Sweet cats'}</h3>
                <img src={articlesMainImage ? articlesMainImage : 'https://zooart.com.pl/blog/wp-content/uploads/2020/11/sfinks-kot-4-min.jpg'} height='100px' width='150px' alt='wrong link'></img>
                <img src={articlesMainImage_2 ? articlesMainImage_2 : 'https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/3f/f2/2320312_200391726_sfinks-kanadyjski-bialo-czarny-kot-denaked-cats-pl-warszawa_d_gallery2.jpg'} height='100px' width='150px' alt='wrong link'></img>
                <img src={articlesMainImage_3 ? articlesMainImage_3 : 'https://www.koty.pl/_next/image?url=https%3A%2F%2Fcms.koty.pl%2Fuploads%2Fshutterstock_627891950_e1515445754553_4983c21f80.jpg&w=1920&q=75'} height='100px' width='150px' alt='wrong link'></img>
            </div>}
        </>
    )
};

export default Articles;