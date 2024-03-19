import React, { useState } from "react";

export default function About(props) {
  let myStyle = {
    backgroundColor: props.mode === "light" ? "white" : "#042743",
    color: props.mode === "dark" ? "white" : "#042743",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Lorem, ipsum dolor.</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi harum dolore quae
              voluptatem maiores illum? Quasi quaerat maxime porro expedita.
              Quis voluptatum excepturi ipsam harum, in rem ea nostrum
              consequatur iste deleniti similique unde?
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Lorem, ipsum dolor.</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi harum dolore quae
              voluptatem maiores illum? Quasi quaerat maxime porro expedita.
              Quis voluptatum excepturi ipsam harum, in rem ea nostrum
              consequatur iste deleniti similique unde?
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Lorem, ipsum dolor.</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi harum dolore quae
              voluptatem maiores illum? Quasi quaerat maxime porro expedita.
              Quis voluptatum excepturi ipsam harum, in rem ea nostrum
              consequatur iste deleniti similique unde?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
