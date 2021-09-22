import {Component} from 'react';
import {Link} from 'react-router-dom'
import Nav from './Nav'
class allbeer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allbeer:[],
            ready:false
         }
    }
    componentDidMount(){
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => response.json())
        .then(json => this.setState({allbeer:json}, () =>{
            this.setState({ready:true})
            console.log(this.state.allbeer)
        }))
    }
    render() { 
        return ( 
            <div className="beer-list-container">
            <div className="beerlist">
               
                    {this.state.ready && this.state.allbeer.map(elt =>
                         <div className="beersection" >
                        <img src={elt.image_url} alt="" />
                        <div className="beerkind">
                            <div>
                            <h2>{elt.name}</h2>
                            <h3>{elt.tagline}</h3>
                            </div>
                            <h4>{elt.contributed_by.slice(0,10)}</h4>
                            <Link to={`/beeritem/${elt._id}`}>Details</Link>
                        </div>
                        
                        </div>
                        
                    )}
               
            </div>
            <Nav/>
            </div>
         );
    }
}
 
export default allbeer;