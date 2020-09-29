import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// class DishDetail extends React.Component {
//   renderDish(dish) {
//     if (dish != null) {
//       return (
//         <Card>
//           <CardImg width="100%" src={dish.image} alt={dish.name} />
//           <CardBody>
//             <CardTitle>{dish.name}</CardTitle>
//             <CardText>{dish.description}</CardText>
//           </CardBody>
//         </Card>
//       );
//     } else {
//       return <div></div>;
//     }
//   }

//   renderComments(dish) {
//     if (dish != null && dish.comments != null) {
//       const cmt = dish.comments.map((comment) => {
//         return (
//           <li key={comment.id}>
//             <p>{comment.comment}</p>
//             <p>
//               -- {comment.author}, &nbsp;
//               {new Intl.DateTimeFormat("en-US", {
//                 year: "numeric",
//                 month: "short",
//                 day: "2-digit",
//               }).format(new Date(Date.parse(comment.date)))}
//             </p>
//           </li>
//         );
//       });
//       return cmt;
//     } else {
//       return <div></div>;
//     }
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-md-5 m-1">
//             {this.renderDish(this.props.dish)}
//           </div>
//           <div className="col-12 col-md-5 m-1">
//             {this.renderComments(this.props.dish)}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ dish }) {
  if (dish != null && dish.comments != null) {
    const cmt = dish.comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </li>
      );
    });
    return cmt;
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  //   if (props.dish != null)
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props.dish} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
