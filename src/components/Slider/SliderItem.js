import * as React from "react";

const CardItem = ({ name, desc, style, src }) => (
  <div
    style={{
      overflow: "hidden",
      width: 500,
      height: 350,
      background: "white",
      color: "#ffff",
      borderRadius: 15,
      textAlign: "center",
      border:  "1px solid grey",
      boxShadow: "0 0 30px #1111",
      ...style
    }}
  >
    <iframe width="500" height="350"src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
);

export default CardItem;

