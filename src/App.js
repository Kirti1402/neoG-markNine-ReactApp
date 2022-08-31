import { useState } from "react";
import "./styles.css";

const cityList = {
  Goa: [
    { title: "Cabo de Rama Fort", rating: "⭐⭐⭐⭐⭐" },
    { title: "Colva Beach", rating: "⭐⭐⭐" },
    { title: "Butterfly Beach", rating: "⭐⭐⭐⭐" },
    { title: "Palolem Beach", rating: "⭐⭐⭐" },
    { title: "Big Foot Mueseum", rating: "⭐⭐" }
  ],
  Mysore: [
    { title: "Chamundi Hill Top", rating: "⭐⭐⭐⭐⭐" },
    { title: "Mysore Palace", rating: "⭐⭐⭐⭐" },
    { title: "Sand Meusem", rating: "⭐⭐⭐" },
    { title: "Sea shell Meusem", rating: "⭐⭐⭐" },
    { title: "Lokaranjan Aqua world", rating: "⭐⭐⭐" }
  ],
  Bangalore: [
    { title: "Bangalore Palace", rating: "⭐⭐⭐⭐⭐" },
    { title: "cubbon Park", rating: "⭐⭐⭐⭐⭐" },
    { title: "Tipu Sultan Summer Palace", rating: "⭐⭐⭐⭐" },
    { title: "Iron Hill Brewery", rating: "⭐⭐⭐" },
    { title: "Nandi Hills", rating: "⭐⭐⭐⭐⭐" }
  ]
};

export default function App() {
  const [list, setList] = useState(null);
  const [buttonClicked, setButtonCliked] = useState(false);

  const handleOnClick = (cityName) => {
    setList(cityList[cityName]);
    setButtonCliked(true);
  };
  return (
    <div className="App">
      <div class="header">
        <h2>Best Places to visit</h2>
        <p>
          Checkout on my list of places to visit. Click on City to get list.
        </p>
      </div>
      <hr />
      {Object.keys(cityList).map((city, index) => {
        return (
          <button
            className="btn"
            key={index}
            onClick={() => handleOnClick(city)}
          >
            {city}
          </button>
        );
      })}
      {list &&
        buttonClicked &&
        list.map((element, idx) => {
          return (
            <div key={idx} className="container">
              <ul>
                <li>{element.title}</li>
                <li className="small">Rating:{element.rating}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
