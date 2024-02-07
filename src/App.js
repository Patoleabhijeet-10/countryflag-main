import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const getCountriesData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();
      setData(countries);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className="App">
      {data.map((item, index) => (
        <div className="cardStyle" key={index}>
          <div className="containerStyle">
            <img
              src={item.flags.png}
              alt="country-flag"
              width="100px"
              height="100px"
            />
            <p>{item.name.common}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
