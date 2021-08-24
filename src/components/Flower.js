import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Flower extends Component{
    render(){
        return(<div>
            <Card style={{height: 'auto', width: '18rem', margin: '5px'}}>
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Img src={this.props.obj.photo}/>
                    <Card.Text>{this.props.obj.instructions}</Card.Text>
                    <Card.Text>{this.props.obj.name}</Card.Text>
                    <Button className='w-100' onClick={() => this.props.addToFav(this.props.obj)}>Add To Fav</Button>
                </Card.Body>
            </Card>
        </div>);
    }
}

export default Flower;