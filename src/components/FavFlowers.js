import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import FavFlower from './FavFlower';
import UpdateModal from './UpdateModal';

class FavFlowers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userflowerData: [],
      toShow: false,
      flowerObj: {},
      idx: -1
    };
  }

  componentDidMount = () => {
    const {user} = this.props.auth0;
    axios
    .get(`${process.env.REACT_APP_SERVER}/getUserFlowers`, {params: {userEmail: user.email}})
    .then(result => {
      this.setState({
        userflowerData: result.data
      });
    })
    .catch(err => console.log(err));
  };

  updateFlower = (flowerObj, idx) => {
    this.setState({
      toShow: true,
      flowerObj: flowerObj,
      idx: idx
    });
  };

  deleteFlower = idx => {

    const {user} = this.props.auth0;
    axios
    .delete(`${process.env.REACT_APP_SERVER}/deleteFlower/${idx}`, {params: {userEmail: user.email}})
    .then(result => {
      this.setState({
        userflowerData: result.data
      });
    })
    .catch(err => console.log(err));
  };

  FlowerUpdater = flowerObj => {
    const {user} = this.props.auth0;
    const params = {
      userEmail: user.email,
      flowerObj: flowerObj
    };

    axios
    .put(`${process.env.REACT_APP_SERVER}/updateFlower/${this.state.idx}`, params)
     .then(result => {
      this.setState({
        userflowerData: result.data
      });
    })
    .catch(err => console.log(err));
  };

  closeModal = () =>{
    this.setState({
      toShow: false
    });
  };

  render() {
    return(
      <>
        {this.state.userflowerData.length !== 0 &&
        <div className='d-flex flex-wrap justify-content-center'>{this.state.userflowerData.map((flowerObj, idx) => {
          return <FavFlower obj={flowerObj} idx={idx}  updateFlower={this.updateFlower} deleteFlower={this.deleteFlower}/>
        })}</div>}

        {this.state.toShow &&
        <UpdateModal obj={this.state.flowerObj} show={this.state.toShow} closeModal={this.closeModal} FlowerUpdater={this.FlowerUpdater}/>}
      </>
    )
  }
}

export default withAuth0(FavFlowers);
