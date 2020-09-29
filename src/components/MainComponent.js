import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Redirect, Route, Switch } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div className="App">
        <Header />
        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => {
            return this.onDishSelect(dishId); // no problem
          }}
        />
        <DishDetail
          dish={
            this.state.dishes.filter((dish) => {
              return dish.id === this.state.selectedDish;
            })[0]
          }
        /> */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
