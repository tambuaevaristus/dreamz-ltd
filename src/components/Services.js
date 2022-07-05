import React from "react";
import Service from "./Service";

export default function Services() {
  return (
    <div className="container my-5 text-center">
      <h1 className="text-center ">Our Services</h1>
      <p className="text-center px-md-5 ">
        Dreamz is not only out to make life comfortable and easy it is also out
        to make your VISA acquisition to Dubai and other countries far easier.{" "}
      </p>
      <p className="text-center px-md-5 ">
        At Dreams we offer the following services
      </p>

      <div className="row mt-5">
        {" "}
        <Service
          title="Travels"
          description="
          • VISA assistance 
          • Tours
          • Flight tickets booking 
          • Hotel booking "
          image="https://cdn.sendx.io/prod/upload/img/21/04/23/34/12095/full.jpg"
        />
        <Service
          title="Logistics"
          description=" 
          • Courier services 
          • Deliveries "
          image="https://www.ionlogistics.eu/user/pages/06.blog/logistics/istockphoto-1266958681-612x612.jpg"
        />
        <Service
          title="Businesses"
          description="
          • Trade 
          • Business development 
          • Corporate business restructuring 
          • Marketing and"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrzw3eUR_wBd396xY24_tp0V0qFis1DdjDg&usqp=CAU"
        />
      </div>
    </div>
  );
}
