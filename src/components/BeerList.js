import { useEffect, useState } from "react";
import BeerItem from './BeerItem'
import FooterBar from "./FooterBar";

const BeerList = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(json => {
                setBeers(json) //ist bereits ein array
            })
    }, [])
    // console.log(beers);

    return (
        <section>
            {beers.map((elt, i) => {
                return (
                    <div><BeerItem
                        key={i}
                        image={elt.image_url}
                        name={elt.name}
                        tagline={elt.tagline}
                        producer={elt.contributed_by}
                        id={elt._id}
                        allbeers={elt}
                    />
                        <hr />
                    </div>
                )

            })}

            <FooterBar />

        </section>
    );
}

export default BeerList;