import { Link } from 'react-router-dom';
import allBeers from '../images/christin-hume-08tX2fsuSLg-unsplash.png'
import randomBeers from '../images/proriat-hospitality-flENqflm6xU-unsplash.png'

const BeerOverview = () => {
    return (
        <section>
            <article className='overview-article'>
                <Link to='/beerlist'>
                    <img src={allBeers} alt="allBeers" />
                    <h1>All Beers</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </article>
            <article className='overview-article'>
                <Link to='/beerdetailrandom'><img src={randomBeers} alt="randomBeers" />
                    <h1>Random Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </article>
        </section>
    );
}

export default BeerOverview;