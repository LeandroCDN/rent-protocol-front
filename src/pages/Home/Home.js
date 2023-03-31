import titulo from './images/title.png';
import casa from './images/Ellipse1.png';
import './Home.css';

function Home() {
    return (
        <div className='back'>
        <img src={titulo} alt='titulo'/>
        <img src={casa} alt='casa'/>
        </div>
    );
}

export default Home;