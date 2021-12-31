//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
var time = today.getHours();
var timing;
var colors;
if (time > 0 && time <= 12) {
  timing = "Morning";
  colors = "red";
}
if (time > 12 && time < 18) {
  timing = "Afternoon";
  colors = "green";
}
if (time > 18 && time < 24) {
  timing = "Night";
  colors = "blue";
}

ReactDOM.render(
  <h1 style={{ color: colors }}>Good {timing}</h1>,
  document.getElementById("root")
);
