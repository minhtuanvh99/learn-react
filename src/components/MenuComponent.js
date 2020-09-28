import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishDetail from "./DishDetailComponent.js";

class Menu extends Component {
  constructor(props) {
    super(props); // required whenever define a class component

    // the state stored properties
    //related to this component that we can make use of
    this.state = {
      selectedDish: null,
    };
  }

  //handler event by changed state
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  // render() return the corresponding view for this component
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          {/* event handler */}
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail selectedDish={this.state.selectedDish} />
      </div>
    );
  }
}

// required
export default Menu;
