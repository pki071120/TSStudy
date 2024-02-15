import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import { Restaurant } from "./model/restaurant";

let data: Restaurant = {
  name: "백운초밥",
  category: "sushi",
  address: {
    city: "guangju",
    detail: "somewhere",
  },
  menu: [
    { name: "tomato pasta", price: 2000, category: "pasta" },
    { name: "oli pasta", price: 2500, category: "pasta" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  return <div className="App">{/* <Store data={myRestaurant} /> */}</div>;
};

export default App;
