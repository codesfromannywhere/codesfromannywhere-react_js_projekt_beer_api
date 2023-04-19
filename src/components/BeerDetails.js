import { Link, useLocation } from "react-router-dom";
import FooterBar from "./FooterBar";

import BackArrow from '../images/Back.svg'


const BeerDetails = () => {
    const location = useLocation()
    console.log(location);
    return (
        <section className="beer-detail">
            <img src={location.state.image_url} alt="product" className="beerdetail-img" />
            <h1>{location.state.name}</h1>
            <h3>{location.state.tagline}</h3>
            <p>First brewed: {location.state.first_brewed}</p>
            <p>Attenuation Level: {location.state.attenuation_level}</p>
            <p>{location.state.description}</p>
            <Link to='/beerlist'> <img src={BackArrow} alt="backarrow" className="back-arrow" /></Link>
            <FooterBar />

        </section>
    );
}

export default BeerDetails;


/* //das Bild
der Name
der Slogan (tagline)
wann es das erste Mal gebraut wurde (first_brewed)
das attenuation_level
die Beschreibung
der Produzent (contributed_by) */