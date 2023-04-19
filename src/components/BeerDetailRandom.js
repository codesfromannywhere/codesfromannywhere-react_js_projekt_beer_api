import { useEffect, useState } from "react";
import BackArrow from '../images/Back.svg'
import { Link } from "react-router-dom";
import FooterBar from './FooterBar'


const BeerRandom = () => {
    const [beers, setBeers] = useState("");

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => res.json())
            .then(json => {
                setBeers(json) //ist bereits ein array
            })
    }, [])
    console.log(beers);

    return (
        <section className="beer-detail">
            <img src={beers.image_url} alt="product" className="beerdetail-img" />
            <h1>{beers.name}</h1>
            <h3>{beers.tagline}</h3>
            <p>First brewed: {beers.first_brewed}</p>
            <p>Attenuation Level: {beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <Link to='/'> <img src={BackArrow} alt="backarrow" className="back-arrow" /></Link>
            <FooterBar />
        </section>
    );
}

export default BeerRandom;