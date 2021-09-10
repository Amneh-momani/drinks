import React, { Component } from 'react'
import axios from "axios";
import { Button, Card, Col, Row } from 'react-bootstrap';

import DrinkModel from './DrinkModel';
export class DrinkData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: [],
            updateObj: {},
            showUpdateModal: false,
        };
    }


    showingModal = (element) => {
        this.setState({
          updateObj: element,
          showUpdateModal: true
        })
      }

      
    componentDidMount = () => {

        axios.get(`${process.env.REACT_APP_SERVER}/getDrink`).then(drink => {
            this.setState({
                drinks: drink.data
            })
        }).catch(err => console.log(err));
    }


    deleteDrink = (id) => {
        axios.delete(`${process.env.REACT_APP_SERVER}/delete/${id}`).then(result => {
          this.setState({
            drinks: result.data
          })
        })
      }
    updateDrink = ((event) => {
        event.preventDefault();
        const drinkId = this.state.updateObj._id
        const body = {
          strDrink: event.target.strDrink.value,
          strDrinkThumb: event.target.strDrinkThumb.value,
          idDrink: event.target.idDrink.value,
        }
        axios.put(`${process.env.REACT_APP_SERVER}/update/${drinkId}`, body).then(updat => {
          const drinkArr = this.state.drinks.map(drink => {
            if (drink._id === drinkId) {
              drink.strDrink = updat.data.strDrink;
              drink.strDrinkThumb = updat.data.strDrinkThumb;
              drink.idDrink = updat.data.idDrink;
              return drink
            }
            return drink;
          })
          this.setState({ drinks: drinkArr, showUpdateModal: false, updateObj: {} })
        })
      })

    render() {
        return (
            <div>
                
                <h1>MY Fav Drinks Are :</h1>
                {this.showingModal &&

                <DrinkModel
                   show={this.state.showUpdateModal}
                   showingModal={this.showingModal}
                   updateDrink={this.updateDrink}
                   updateObj={this.state.updateObj}
                />
    }
                <Row xs={2} md={4} Style={"display: 'flex';flex-direction: 'row'"}>

                {
                        this.state.drinks.length &&
                        this.state.drinks.map((drink, ind) => {
                            return (

                                <Col sm={4} style={{width: '400px'}}>

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={drink.strDrinkThumb} style={{
                                            width: '400px', height: '300px'
                                        }} />
                                        <Card.Body>
                                            <Card.Title>Title :{drink.strDrink}</Card.Title>
                                            <Card.Text>
                                                ID : {drink.idDrink}
                                            </Card.Text>
                                            <Button variant="primary" onClick={()=>this.showingModal(drink)}>Update</Button>
                                            <Button variant="primary" onClick={()=>this.deleteDrink(drink._id)}>Delete</Button>

                                        </Card.Body>
                                    </Card>
                                </Col>

                            )

                        })

                    }
                    </Row>
            </div>
        )
    }
}

export default DrinkData
