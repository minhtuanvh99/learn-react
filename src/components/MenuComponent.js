import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

// class Menu extends React.Component {
//   constructor(props) {
//     super(props); // required whenever define a class component
//     // the state stored properties
//     //related to this component that we can make use of
//   }

//   // render() return the corresponding view for this component
//   render() {
//     const menu = this.props.dishes.map((dish) => {
//       return (
//         <div key={dish.id} className="col-12 col-md-5 m-1">
//           <Card
//             onClick={() => {
//               // console.log(dish.id);
//               return this.props.onClick(dish.id);
//             }}
//           >
//             <CardImg width="100%" src={dish.image} alt={dish.name} />
//             <CardImgOverlay>
//               <CardTitle>{dish.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </div>
//       );
//     });

//     return (
//       <div className="container">
//         <div className="row">{menu}</div>
//       </div>
//     );
//   }
// }

//function get parameter as properties
// rewrite class Menu by function
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => /*this.props.*/ onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Menu = (props) => {
  const menu = /*this*/ props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

// required
export default Menu;
