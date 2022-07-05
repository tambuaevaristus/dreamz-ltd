import React from 'react'
import Team from './components/Team'

export default function AboutScreen() {
  return (
    <div className="container ">
       <div className="my-5 text-center">
      <h1 className="text-center ">ABOUT</h1>
      <p className="text-center px-md-5 ">
        We are a travel and logistics company providing affordable, exceptional
        quality and time saving solutions across the globe in the area of air
        Ticket booking, sending/ receiving parcels and the purchase of quality
        goods at cheaper prices and have them delivered at your door step at
        your convenience.
      </p>

      <p className="text-justified px-md-5 ">
      We have carried out a survey and found out that among the people who travel from one country to another some really love to have their air tickets bookings handled and paperwork finalized and others find it difficult to order good and have them delivered on time and most at times the quality of the goods is not actually what they desired and actually having this goods delivered to them at the comfort of their homes. 
Still in this survey we found out that people generally want to order items or buy from the supermarkets and many more but due to the fact that they might not have the time to go get them by themselves due to their tight schedule they often feel frustrated and desire they could place the orders and have them delivered at the comfort of their home without having to go to the markets.  

      </p>
      <p>Dreamz now came up with the solution to these problems by making those dreams and desire of the general public a reality with their numerous quality services to help manage time and save cash.</p>

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

      

      
      {/* <a class="btn btn-outline-dark text-dark" href="about">
        Read More
      </a> */}
    </div>


<h1 className='text-center my-5'>Team</h1>
<div className="row">
  <Team name="Tambua Evaristus" role="CEO" image="/assets/eva.png"/>
  <Team name="Tambua Evaristus" role="CEO" image="/assets/eva.png"/>
  <Team name="Tambua Evaristus" role="CEO" image="/assets/eva.png"/>
  <Team name="Tambua Evaristus" role="CEO" image="/assets/eva.png"/>
  <Team name="Tambua Evaristus" role="CEO" image="/assets/eva.png"/>
  <Team name="Tambua Evaristus" role="CEO" image="/assets/eva.png"/>
  <Team name="Tambua Evaristus" role="CEO" image="/assets/eva.png"/>

  <Team name="Tambua Evaristus" role="CEO" image="/assets/eva.png"/>
</div>
    </div>
  )
}
