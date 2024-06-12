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
          <img className="mr-2 h-96" src="/slayd1.png" alt={`logo`} />
        </div>
        <div>
          <img className="mr-2 h-96" src="/slayd2.png" alt={`logo`} />
        </div>
        <div>
          <img className="mr-2 h-96" src="/slayd3.png" alt={`logo`} />
        </div>
      </Carousel>
    </div>
  );
}
