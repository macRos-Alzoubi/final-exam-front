import { Component } from "react";
import { Button, Card, Container } from "react-bootstrap";

class FavFlower extends Component{
    render(){
        return(
            <div>
                <Card style={{height: 'auto', width: '18rem', margin: '1rem'}}>
                    <Card.Body className='d-flex flex-column justify-content-between'>
                        <Card.Img src={this.props.obj.photo}/>
                        <Card.Text>{this.props.obj.instructions}</Card.Text>
                        <Card.Text>{this.props.obj.name}</Card.Text>
                        <Container className='d-flex justify-content-between'>
                            <Button style={{width: '5rem'}} onClick={() => this.props.updateFlower(this.props.obj, this.props.idx)}>Update</Button>
                            <Button style={{width: '5rem'}} onClick={() => this.props.deleteFlower(this.props.idx)}>Delete</Button>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default FavFlower;