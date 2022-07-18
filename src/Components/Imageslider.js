import React, { useState } from "react";
import imageData from "./Imagedata";
import "./imageslider.css";

function Imageslider() {
  const [current, setCurrnt] = useState(0);
  const length = imageData.length;

  const prev = () => {
    setCurrnt(current == 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrnt(current == length - 1 ? 0 : current + 1);
  };

  console.log(current);

  return (
    <div>
      Imageslider
      <span className="next" onClick={next}>
      
        &#8594;
      </span>
      <span className="prev" onClick={prev}>
      
        &#8592;
      </span>
      <div className="image-slider">
        {imageData.map((slide, index) => {
          return (
            <div
              className={index == current ? "slide active" : "slide"}
              key={index}>
            
              {index == current && <img src={slide.image}></img>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Imageslider;
