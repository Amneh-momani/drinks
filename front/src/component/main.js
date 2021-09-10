import React, { Component } from 'react'
import axios from "axios";
import { Button, Card, Col } from 'react-bootstrap';

export class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        };
    }

    componentDidMount = () => {

        axios.get(`${process.env.REACT_APP_SERVER}/allDrinks`).then(drink => {
            this.setState({
                drinks: drink.data.drinks
            })
        }).catch(err => console.log(err));
    }


    addDrink = (id) => {

        const body = {
            strDrink: this.state.drinks[id].strDrink,
            strDrinkThumb: this.state.drinks[id].strDrinkThumb,
            idDrink: this.state.drinks[id].idDrink,

        };

        axios.post(`${process.env.REACT_APP_SERVER}/addDrink`, body).then(drink => {
        }).catch(error => alert(error));
    }


    render() {
        return (
            <div>


                    {
                        this.state.drinks.length &&
                        this.state.drinks.map((drink, ind) => {
                            return (

                                <Col sm={4}>

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={drink.strDrinkThumb} style={{
                                            width: '300%', height: '300px'
                                        }} />
                                        <Card.Body>
                                            <Card.Title>Title :{drink.strDrink}</Card.Title>
                                            <Card.Text>
                                                ID : {drink.idDrink}
                                            </Card.Text>
                                            <Button variant="primary" onClick={()=>this.addDrink(ind)}>Add to Fav</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )

                        })

                    }

            </div>
        )
    }
}

export default main
