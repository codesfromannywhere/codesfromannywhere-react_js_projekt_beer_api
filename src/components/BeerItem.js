import { Link } from 'react-router-dom';

const BeerItem = (props) => {
    return (
        <article className='beer-item'>
            <img src={props.image} alt="" />
            <div>
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>
                <p>Created by: {props.producer}</p>
                <Link to={`/beerlist/${props.id}`} state={props.allbeers}>Details</Link>
            </div>

        </article>
    );
}

export default BeerItem;