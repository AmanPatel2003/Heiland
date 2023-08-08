import React from "react";
import "./PageTwo.css";
export default function PageTwo() {
  return (
    <div className="p2maindiv">
      <div className="container3">
        <div
          class="card"
          style={{
            width: "55%",
            height: "465px",
            float: "right",
            left: "230px",
          }}
        ></div>
        <h1 style={{ color: "#144749", fontWeight: "bold" }}>OUR MISSION</h1>
        <p>
          Solgar is the result of 75 years of commitment to quality,health,and
          well-being.Our mission through out the decades has remained the{" "}
        </p>
        <p></p>
        <p>
          same:to a create the fitness nutritional supplements in small
          batch,made possible
        </p>
        <p>Made possible through tireless research, using </p>
        <p> only the finest raw materials.</p>
        <br />
      </div>
      <div>
        <div class="container4">
          <div
            class="card"
            style={{
              width: "45%",
              height: "600px",
              float: "left",
              right: "204px",
              top: "-22px",
            }}
          ></div>
          <h2 style={{ color: "#144749", fontWeight: "bold" }}>
            WE CONTINUOUSLY PUSH OVERSELVES TO THE GOLD STANDARD
          </h2>
          <div class="feature-container">
            <div class="column">
              <p>Science-backed formulas</p>
              <p>Responsibly Sourced Ingredients</p>
              <p>Small Batch, In House Manufacturing</p>
              <p>Recyclable Amber Glass Bottles</p>
              <p>Science-backed formulas</p>
            </div>
            <div class="column">
              <p>Responsibly Sourced Ingredients</p>
              <p>Small Batch, In House Manufacturing</p>
              <p>Recyclable Amber Glass Bottles</p>
              <p>Small Batch, In House Manufacturing</p>
              <p>Recyclable Amber Glass Bottles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
