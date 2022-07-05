import React from "react";

export default function Service(props) {
  return (
    <div className=" col-md-4 p-1 ">
      <div class="card mb-3 ">
        <img src={props.image} height="170" class="card-img-top" alt="..." />
        <div class="card-body" style={{ minHeight: 150, maxHeight: 150 }}>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text ">{props.description}</p>
         
        </div>
      </div>
    </div>
  );
}
