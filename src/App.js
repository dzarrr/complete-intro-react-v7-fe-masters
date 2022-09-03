import React from "react";
import { render } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Pompom",
      animal: "cat",
      breed: "kampung",
    }),
    React.createElement(Pet, {
      name: "Bili",
      animal: "cat",
      breed: "kampung",
    }),
    React.createElement(Pet, {
      name: "Aam",
      animal: "cat",
      breed: "kampung",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
