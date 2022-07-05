import React from "react";

export default function About() {
  return (
    <div className="container my-5 text-center">
      <h1 className="text-center ">ABOUT</h1>
      <p className="text-center px-md-5 ">
        We are a travel and logistics company providing affordable, exceptional
        quality and time saving solutions across the globe in the area of air
        Ticket booking, sending/ receiving parcels and the purchase of quality
        goods at cheaper prices and have them delivered at your door step at
        your convenience.
      </p>
    
      <div class="d-md-flex justify-content-between my-5 py-3">
        <div class="card" style={{ width: 250 }}>
          <div class="card-body">
            <h5 class="card-title text-primary ">DREAMZ LTD</h5>
            <p class="card-text">
              Travels <br/>
              Business <br/>
              Logistics <br/>
            </p>
          </div>
        </div>
        <div class="card" style={{ width: 250 }}>
          <div class="card-body">
            <h5 class="card-title text-primary ">VISION</h5>
            <p class="card-text">
              Meeting customer business and travel needs, facilitating resource
              acquisition and transportation 
            </p>
          </div>
        </div>

        <div class="card text-center" style={{ width: 250 }}>
          <div class="card-body">
            <h5 class="card-title text-primary">MISSION</h5>
            <p class="card-text">
              Providing best quality service in travels, logistics and business{" "}
            </p>
          </div>
        </div>

       
      </div>

      <a class="btn btn-outline-dark text-dark" href="about">
        Read More
      </a>
    </div>
  );
}
