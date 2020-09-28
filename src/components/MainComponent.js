import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent.js";
import DishDetail from "./DishDetailComponent.js";
import { DISHES } from "../shared/dishes.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  //handler event by changed state
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">hi reactstrap</NavbarBrand>
          </div>
        </Navbar>

        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => {
            return this.onDishSelect(dishId); // no prop
          }}
        />
        <DishDetail
          dish={
            this.state.dishes.filter((dish) => {
              //   console.log(this.state.selectedDish, dish.id); //no problem
              return dish.id === this.state.selectedDish;
            })[0]
          }
        />
      </div>
    );
  }
}

export default Main;
