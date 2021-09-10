import React, { Component } from 'react'
import { Button, Modal,Form } from 'react-bootstrap';

export class DrinkModel extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Form style={{ padding: '20px' }} onSubmit={(e) => this.props.updateDrink(e)}>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>strDrink</Form.Label>
    <Form.Control type="text" defaultValue={this.props.updateObj.strDrink} placeholder="Drink Name" name='strDrink' />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>strDrinkThumb</Form.Label>
    <Form.Control type="text" defaultValue={this.props.updateObj.strDrinkThumb} placeholder="Drink img" name='strDrinkThumb' />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>idDrink</Form.Label>
    <Form.Control type="number" defaultValue={this.props.updateObj.idDrink} placeholder="Drink Name" name='idDrink' />
  </Form.Group>

  <Button variant="primary" type="submit">
  Save Changes
  </Button>
</Form>
    
      </Modal>
            </div>
        )
    }
}

export default DrinkModel
