import {Link} from 'react-router-dom'

const HomePage = () => {
    return ( 
        <div className="home">
            <div className="beer">
                <Link to="/allbeer">
                <img src="/img/all.png" alt="" />
                <h2>All Beers</h2>
                </Link>
                <p>he limitless world of beer
                 means a dizzying number of drink 
                 options are available at any given bar.
                  From classic lagers to bold IPAs to funky
                   sour ales, each type of beer spawns more
                    sub-categories than drinkers know what to do with.</p>
            </div>
            <div className="beer">
                <Link to="/randombeer">
            <img src="/img/ran.png" alt="" />
                <h2>Random Beer</h2>
                </Link>
                <p>Variety is just one of the great things about beer.
                 With so many different kinds to enjoy and lots of
                  breweries creating interesting takes on each style,
                   there’s always something new to discover. </p>
            </div>
        </div>
     );
}
 
export default HomePage;