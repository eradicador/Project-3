import React from "react";

function Card(props) {
    return (
        <div class="card text-center">
  <div class="card-header">
    {props.name}
  </div>
  <div class="card-body">
    <img src={props.imageURL} alt="" width="50%"/>
    <p class="card-text">{props.description}</p>
    <a href="#" class="btn btn-primary">{props.price}</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
    )
}

export default Card;