import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop={true}
        autoFocus={false}
        centerMode={false}
        dynamicHeight={false}
        className="main-slide"
      >
        <div>
          <img className="mr-2 h-96" src="/1.png" alt={`logo`} />
        </div>
        <div>
          <img className="mr-2 h-96" src="/2.png" alt={`logo`} />
        </div>
        <div>
          <img className="mr-2 h-96" src="/3.png" alt={`logo`} />
        </div>
        <div>
          <img className="mr-2 h-96" src="/4.png" alt={`logo`} />
        </div>
        <div>
          <img className="mr-2 h-96" src="/5.png" alt={`logo`} />
        </div>
      </Carousel>
    </div>
  );
}
