import React from "react";
import Service from "./components/Service";

export default function ServiceScreen() {
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
          description="Dreamz is not only out to make life comfortable and easy it is also out to make your VISA acquisition to Dubai and other countries far easier."
          image="https://cdn.sendx.io/prod/upload/img/21/04/23/34/12095/full.jpg"
        />
        <Service
          title="Logistics"
          description="Dreamz is not only out to make life comfortable and easy it is also out to make your VISA acquisition to Dubai and other countries far easier."
          image="https://www.ionlogistics.eu/user/pages/06.blog/logistics/istockphoto-1266958681-612x612.jpg"
        />
        <Service
          title="Businesses"
          description="Dreamz is not only out to make life comfortable and easy it is also out to make your VISA acquisition to Dubai and other countries far easier."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrzw3eUR_wBd396xY24_tp0V0qFis1DdjDg&usqp=CAU"
        />
      </div>

      <p className="text-center text-muted my-5 px-md-5">
        So if you have been facing one or all of these challenges know that
        Dreamz is at your service and you can contact them as your number one
        delivery agent and have your dreams comes to pass. Our main cities of
        operation are Buea and Douala with deliveries done in all the other
        regions of Cameroon. Dreamz is not only out to make life comfortable and
        easy it is also out to make your VISA acquisition to Dubai and other
        countries far easier. Just hit us up and we will be at your service any
        time. We know you have been using other Air and logistics services but
        believe me try Dreamz and join the many who are testifying of our
        quality and reliable Services. At Dreamz customer’s satisfaction and
        comfort ability is our Top priority.
      </p>
    </div>
  );
}
