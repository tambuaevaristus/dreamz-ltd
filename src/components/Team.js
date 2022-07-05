import React from "react";

export default function Team(props) {
  return (
    <div className="col-md-3">
      <div class="card mb-3">
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title">{props.name}</h5>
          <p class="text-muted card-text">
            {props.role}
          </p>
       
        </div>
      </div>
    </div>
  );
}
