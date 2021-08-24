import { Component } from "react";
import {Modal, Button, Form, } from 'react-bootstrap';

class UpdateModal extends Component{

    submitHandler = event => {
        event.preventDefault();

        const instructions = event.target.instructions.value;
        const photo = event.target.photo.value;
        const name = event.target.name.value;

        const flowerObj = {
            instructions: instructions,
            photo: photo,
            name: name
        };
        this.props.FlowerUpdater(flowerObj);
        this.props.closeModal();
    };

    render(){
        return(<div>
            <Modal show={this.props.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Flower instructions</Form.Label>
                            <Form.Control name='instructions' type="text" defaultValue={this.props.obj.instructions} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Flower Img URL</Form.Label>
                            <Form.Control name='photo' type="text" defaultValue={this.props.obj.photo} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Flower Name</Form.Label>
                            <Form.Control name='name' type="text" defaultValue={this.props.obj.name} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.closeModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>);
    }
}

export default UpdateModal;