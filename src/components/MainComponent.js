import React, { Component } from "react";
import Menu from "./MenuComponent.js";
import DishDetail from "./DishDetailComponent.js";
import { DISHES } from "../shared/dishes.js";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

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
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => {
            return this.onDishSelect(dishId); // no problem
          }}
        />
        <DishDetail
          dish={
            // this.state.dishes[0]
            this.state.dishes.filter((dish) => {
              // console.log(this.state.selectedDish, dish.id); //no problem
              return dish.id === this.state.selectedDish;
            })[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
