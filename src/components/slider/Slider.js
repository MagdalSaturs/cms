import './Slider.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Slider = () => {
    const context = useContext(Context);
    const {sliderState} = context;

    return (
        <>
            {sliderState && <div className='slider-container'>
                <h1>Budowa i funkcje skóry</h1>
                <h2>Budowa i funkcje skóry</h2>
                <h3>Funkcje:</h3>
                <li>ściśle przylegające do siebie komórki,
                    dzięki czemu funkcja ochronna może być pełniona</li>
                <li>uszkodzenia mechaniczne</li>
                <li>drobnoustrojami chorobotwórczymi</li>
                <li>przed utratą wody</li>
                <p>Termoregulacyjna:</p>
                <li>zmiana temperatury ciała</li>
                <li>gruczoły potowe</li>
                <li>gruczoły łojowe</li>
                <p>Wydzielnicza:</p>
                <li>- substancje wydzielane przez skórę</li>
                <li>pot</li>
                <li>łój</li>
                <li>mleko</li>
                <p>Receptorowa:</p>
                <li>odbieranie sygnałów dotykowych</li>
                <p>Syntetyczna;</p>
                <h3>Budowa:</h3>
                <p>Naskórek</p>
                <p>Skóra właściwa</p>
                <p>Tkanka podskórna</p>
                <p>Warstwa zrogowaciała</p>
                <img src='https://holicos.files.wordpress.com/2017/01/nowe.jpg' width='50%' alt='Budowa skóry' />
                <img src='https://kafelkowy.files.wordpress.com/2016/08/budowa-skc3b3ry-tkanka-tc582uszczowa.jpg' width='50%' alt='Budowa skóry' />
                <h3>Naskórek:</h3>
                <p>znajdują się barwniki skóry (melanina)</p>
                <h3>Wytwory naskórka:</h3>
                <p>włosy:</p>
                <li>termoizolacja (funkcja)</li>
                <p>paznokcie</p>
                <p>gruczoły:</p>
                <li>łojowe</li>
                <li>potowe</li>
                <li>mlekowe (sutkowe)</li>
                <h3>Najbardziej wrażliwe:</h3>
                <p>opuszki</p>
                <p>usta (warki)</p>
                <p>stopy</p>
                <h1>Choroby i higiena skóry</h1>
                <p>Łój → tłusta substancja (ma za zadanie natłuścić
                    włosy, naskórek, nadawanie elastyczności)</p>
                <p>Mleko kobiece:</p>
                <img src='https://ocdn.eu/pulscms-transforms/1/EXXk9kpTURBXy9mZGI5OTYwYzkwYmI3NjY5Nzg4ZGY4MjQzYWJjOGJjZC5wbmeRlQLNAfQAwsPeAAGhMAE' width='50%' alt='Mleko kobiece' />
                <p>Termoregulacja przez skórę:</p>
                <li>Kiedy w środowisku panuje zbyt niska temperatura gruczoły
                    potowe nie są aktywne, nie wydzielają potu. Naczynia krwionośne
                    zwężają się, organizm oddaje do otoczenia mniej ciepła. </li>
                <li>Kiedy w środowisku panuje wysoka temperatura gruczoły
                    potowe są aktywne, wydzielają pot. Naczynia krwionośne
                    się rozszerzają i jest nadmiar ciepła jest oddawany do otoczenia.</li>
                <p>4 mln receptorów w skórze</p>
                <p>Prezentacja:</p>
                <li>Skóra jest narażona na drobnoustroje i porażenie słoneczne</li>
                <p>Rodzaje chorób skóry:</p>
                <li>grzybica</li>
                <li>świerzb</li>
                <li>łuszczyca</li>
                <li>trądzik</li>
            </div>}
        </>
    )
};

export default Slider;