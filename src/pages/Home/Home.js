import titulo from './images/title.png';
import casa from './images/Ellipse1.png';
import './Home.css';

function Home() {
    return (
        <div className='homediv'>
        <   img className='imagen-titulo' src={titulo} alt='titulo'/>
        <   img className='imagen-casa' src={casa} alt='casa'/>
        </div>
    );
}

export default Home;