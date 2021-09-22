import  {Component} from 'react';
import {Link} from 'react-router-dom'
import Nav from './Nav'
class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ready:false
         }
    }
    componentDidMount(){
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => response.json())
        .then(json => this.setState({beerDetails:json}, () =>{
            this.setState({ready:true})
            console.log(this.state.beerDetails.name)
           
        }))
    }
    render() { 
        return ( 
            <div className="details">
                <div className="item-container">
                <img src={this.state.ready && this.state.beerDetails.image_url} alt="" />
                <div>
                <h1>{this.state.ready && this.state.beerDetails.name}</h1>
                <h3>{this.state.ready && this.state.beerDetails.tagline}</h3>
                </div>
                <div className="grid">
                <h5>First brewed:</h5>    
                <h5>{this.state.ready && this.state.beerDetails.first_brewed}</h5>
                <h5>Attenuation Level:</h5> 
                <h5>{this.state.ready && this.state.beerDetails.attenuation_level}</h5>
                
                </div>
                <p>{this.state.ready && this.state.beerDetails.description}</p>
                <h6>{this.state.ready && this.state.beerDetails.contributed_by.slice(0,10)}</h6>

                <Link to="/"></Link>
                 </div>
                 
                 <Nav/>   
            </div>
         );
    }
}
 
export default RandomBeer;