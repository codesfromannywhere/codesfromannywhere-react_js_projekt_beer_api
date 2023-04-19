import BeerLogo from '../images/Logo.svg'
import { Link } from 'react-router-dom';


const FooterBar = () => {
    return (
        <section className='footer-bar'>
            <Link to='/'><img src={BeerLogo} alt="" /></Link>
        </section>
    );
}

export default FooterBar;