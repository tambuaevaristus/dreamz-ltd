import React from "react";

export default function Banner() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/assets/banner.jpg"
              height="700px"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-non d-md-block">
              <h1 class="display-2 fw-bolder text-white">Dreamz Ltd</h1>
              <p class="fw-bold">TRAVELS, BUSINESS AND LOGISTICS</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/assets/aboutBanner.jpg "
              height="700px"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-non d-md-block">
              <h1 class="display-2 fw-bolder text-white">Dreamz Ltd</h1>
              <p class="fw-bold">Providing best quality service in travels,</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfa6IiEC_fFQepijMzzNq7M6Q0Zo8WQnkTKoLTGUygg52Fbg176CZ1FZ40vyqgPBJnyZQ&usqp=CAU"
              height="700px"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-non d-md-block">
              <h1 class="display-2 fw-bolder text-white">Dreamz Ltd</h1>
              <p class="fw-bold">meeting customer business and travel needs,</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
