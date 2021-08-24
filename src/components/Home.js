import React from 'react';
import axios from 'axios';
import Flower from './Flower';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      flowerData: []
    };
  }
  componentDidMount = () => {
    axios
    .get(`${process.env.REACT_APP_SERVER}/getFlowers`)
    .then(result => {
      this.setState({
        flowerData: result.data
      });
    })
    .catch(err => console.log(err));
  };


  addToFav = flowerObj => {
    const {user} = this.props.auth0;
    const params = {
      userEmail: user.email,
      flowerObj: flowerObj
    };

    axios
    .post(`${process.env.REACT_APP_SERVER}/addFlower`, params)
    .then(result => {
      this.setState({
        flowerData: result.data
      });
    })
    .catch(err => console.log(err));
    
  };


  render() {
    return (
      <>
        {this.state.flowerData.length !== 0 &&
        <div className='d-flex justify-content-center flex-wrap'>{this.state.flowerData.map(flowerObj => {
          return <Flower obj={flowerObj} addToFav={this.addToFav}/>
        })}</div>}
      </>
    )
  }
}

export default withAuth0(Home);
